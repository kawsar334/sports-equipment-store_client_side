


import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { Tooltip as ReactTooltip } from "react-tooltip";
import App from "../Sidebar";
import { ThemeContext } from "../../ThemeProvider";
import "./component.css"
import Title from "../Title";

const ProductSection = ({ loading , setLoading}) => {
  const { isDarkMode } = useContext(ThemeContext);
  const [equipmentList, setEquipmentList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isAscending, setIsAscending] = useState(true);

  useEffect(() => {
    const fetchEquipment = async () => {
      try {
        const response = await fetch("https://server-with-auth.vercel.app/products");
        const data = await response.json();
        console.log(data)

        setEquipmentList(data);
        const uniqueCategories = Array.from(new Set(data.map(item => item.categoryName)));
        setCategories(["All", ...uniqueCategories]); 
        setLoading(false);
      } catch (error) {
        console.error("Error fetching equipment data:", error);
      }
    };

    fetchEquipment();
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredEquipmentList =
    selectedCategory === "All"
      ? equipmentList
      : equipmentList.filter(item => item.categoryName === selectedCategory);

  const handleSort = () => {
    const sortedList = [...equipmentList].sort((a, b) => {
      const priceA = a.price;
      const priceB = b.price;

      return isAscending ? priceA - priceB : priceB - priceA;
    });

    setEquipmentList(sortedList);
    setIsAscending(!isAscending);
  };

  if (loading) {
    return (
      <div className="w-full h-[60vh] flex justify-center items-center">
        <App />
      </div>
    );
  }

  return (
    <section
      className={`  ${isDarkMode ? "w-full p-2 md:p-5 bg-bgcolor text-white" : "w-full p-2 md:p-5 bg-gray-100 text-bgcolor"}`}
      id="product"
    >
      <Fade>
       
        <div className="flex justify-between items-center w-full flex-col md:flex-row lg:w-[50%] m-auto mb-6 py-4 px-3 rounded-full gap-3">
          <Title title="Featured Products" />
          <select name="" id="" className="rounded-lg p-3">
            <option value="true" onClick={handleSort}>
              Sort by Price</option>
            <option value="true" onClick={handleSort}>{isAscending ? " (High to Low)" : " (Low to High)"}</option>
          </select>
        </div>
      </Fade>
      

      <div className="flex justify-start items-start w-[98%] mx-auto py-10 gap-3 flex-col lg:flex-row">
        <ul className="w-full lg:w-[20%] flex justify-start items-start gap-3 flex-row lg:flex-col flex-wrap lg:flex-nowrap p-3   h-max lg:h-[600px] lg:overflow-y-auto">
          {categories.map((category, index) => (
            <li
              key={index}
              className={`border py-1 px-3 rounded-full cursor-pointer ${selectedCategory === category ? "bg-blue text-bgcolor" : "bg-white text-bgcolor"
                }`}
              onClick={() => handleCategoryChange(category)}
            >
              <Fade>{category}</Fade>
            </li>
          ))}
        </ul>
        {/*  */}
        <div className="flex  justify-center items-center gap-[2px] flex-wrap w-full md:w-[95%] lg:w-[95%]">
          {filteredEquipmentList?.slice(0, 12).map(product => (
            <div
              key={product._id}
              className={` parrent rounded relative border overflow-hidden  h-[300px] ${isDarkMode
                ? "mb-1 bg-white hover:shadow-lg w-[97%] md:w-[45%] lg:w-[23%] text-bgcolor  cursor-pointer  "
                : "mb-1 bg-white hover:shadow-lg w-[97%] md:w-[45%] lg:w-[23%]  cursor-pointer "
                }`}
              data-tooltip-id={"product" + product?._id}
              data-tooltip-content={product?.description}
              data-aos="zoom-in-up"
            >
              <ReactTooltip id={"product" + product?._id} className="z-20" />
              <Fade>
                <div className="w-full h-[170px] p-3 flex justify-center items-center overflow-hidden ">

                <img
                  src={product.image}
                  alt={product.itemName}
                    className="w-[60%] h-full  object-cover transform transition-all  duration-1000 hover:w-full hover:scale-150"
                  />
                  </div>
              </Fade>
              <div className="p-4">
               
                <Fade>
                  <p className="text-gray-700">{product?.description.slice(0, 20)}...</p>
                </Fade>
                <Fade>
                  <p className="text-blue">${product.price}</p>
                </Fade>
                <h3 className="text-[14px] text-end">
                  {product?.rating}/5
                  <i className="fas fa-star text-[#FFD700] hover:text-[#FF4500]"></i>
                  <i className="far fa-star text-[#FFD700] hover:text-[#FF4500]"></i>
                </h3>
                <Fade>
                  <div className="transform translate-y-[70px] child">
                    {/* left-0 w-full h-full bg-bgcolor absolute top-0 opacity-50 */}
                    <NavLink
                      to={`/details/${product._id}`}
                      className="py-1 px-3 bg-blue transition-all duration-200 text-white hover:bg-transparent hover:text-bgcolor  hover:border-blue border rounded-full"
                    >
                      View Details
                    </NavLink>
                  </div>
                </Fade>
              </div>
            </div>
          ))}
          {filteredEquipmentList.length === 0 && (
            <p className="text-center text-gray-500">
              <Fade>No products found in this category.</Fade>
            </p>
          )}
        </div>
        {/*  */}
      </div>
    </section>
  );
};

export default ProductSection;
