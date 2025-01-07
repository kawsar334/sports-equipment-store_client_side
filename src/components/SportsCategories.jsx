



import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";
import "./producs/component.css"
import Title from "./Title";
const SportsCategories = () => {
    const [equipmentList, setEquipmentList] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchEquipment = async () => {
            try {
                const response = await fetch("https://server-with-auth.vercel.app/products");
                const data = await response.json();
                setEquipmentList(data);
                const uniqueCategories = Array.from(
                    new Map(data.map((item) => [item.categoryName, item.image,])).entries()
                ).map(([categoryName, image,]) => ({ categoryName, image, }));
                console.log(categories)

                setCategories(uniqueCategories);
            } catch (error) {
                console.error("Error fetching equipment data:", error);
            }
        };

        fetchEquipment();
    }, []);

    return (
        <section className="my-10 bg-base-200 p-10 w-full md:w-[95%] m-auto ">
            <Fade>
                <Title title="Sports Categories"/>
            </Fade>
            <div className="flex flex-wrap justify-center gap-0  w-full  ">
                {categories.slice(0,9).map((category, index) => (
                    <NavLink to={`/sport/${category.categoryName}`} className="categoryContainer text-center  cursor-pointer border h-[200px] w-full md:w-[33%] relative   "
                        data-aos="zoom-in-down"
                    >
                            <img
                                src={category.image || "https://via.placeholder.com/150"}
                                alt={category.categoryName}
                                className="w-full h-full object-cover  mx-auto mb-3 categoryImage"
                            />                   
                            <div className=" transition-all duration-700  absolute top-0 left-0 h-full hover:opacity-50  w-full py-3 cursor-pointer hover:bg-black  text-blue flex justify-center items-center font-semibold flex-col ">
                            <span>{category.categoryName}</span>
                            <button className="border px-3 py-1 my-2 rounded opacity-0 categorybutton">See Now</button>
                            </div>
                    </NavLink>
                ))}

            </div>
        </section>
    );
};

export default SportsCategories;

