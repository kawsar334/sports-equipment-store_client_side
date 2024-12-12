
import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
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
                    new Map(data.map((item) => [item.categoryName, item.image])).entries()
                ).map(([categoryName, image]) => ({ categoryName, image }));

                setCategories(uniqueCategories);
            } catch (error) {
                console.error("Error fetching equipment data:", error);
            }
        };

        fetchEquipment();
    }, []);

    return (
        <section className="my-10 bg-base-200 p-10">
            <Fade>
                <h2 className="text-3xl font-bold text-center mb-6">Sports Categories</h2>
            </Fade>
            <div className="flex flex-wrap justify-center gap-6">
                {categories.map((category, index) => (
                    <Fade key={index}>
                        <div className="text-center">
                            <img
                                src={category.image || "https://via.placeholder.com/150"}
                                alt={category.categoryName}
                                className="w-32 h-32 object-cover rounded-full mx-auto mb-3"
                            />
                            <span className="badge badge-lg badge-primary px-6 py-3 cursor-pointer bg-blue border-none text-[#161b1d]">
                                {category.categoryName}
                            </span>
                        </div>
                    </Fade>
                ))}
                
            </div>
        </section>
    );
};

export default SportsCategories;
