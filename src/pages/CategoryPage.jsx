import React, { useContext, useEffect, useState } from 'react'
import { Fade } from 'react-awesome-reveal';
import { NavLink, useLocation } from 'react-router-dom';
import { ThemeContext } from '../ThemeProvider';
import { Tooltip as ReactTooltip } from "react-tooltip";
import Loader from '../components/Sidebar';

export const CategoryPage = () => {
      const { isDarkMode } = useContext(ThemeContext);
    
    const cat = useLocation().pathname.split("/")[2].split("%20").join(" ");
       const [loading, setLoading] = useState(false)

      const [equipmentList, setEquipmentList] = useState([]);

    
      useEffect(() => {
    
        const fetchEquipment = async () => {
          try {
            setLoading(true);
            const response = await fetch("https://server-with-auth.vercel.app/products");
            const data = await response.json();
              const filteredEquipment = data.filter(item => item?.categoryName === cat);
              setTimeout(() => {
                  setEquipmentList(filteredEquipment);
                  setLoading(false);
                
              }, 2000);

          } catch (error) {
            console.error("Error fetching equipment data:", error);
          }
        };
    
        fetchEquipment();
      }, []);

      if(loading){
        return <div className="flex justify-center items-center h-screen w-full">
           <Loader/>
        </div>
      }
  return (
    <div>

          {equipmentList?.length >0 && <div>
                <h2 className="text-2xl font-semibold text-center capitalize my-10 text-blue">
                  product from  <span className={`${isDarkMode ? 'text-white' : 'text-bgcolor'}`}>{cat}  ({equipmentList?.length})</span>
                </h2>
  
            </div>}
          <div className="flex  justify-center items-center gap-[2px] flex-wrap w-full md:w-[95%] lg:w-[95%]">
              {equipmentList?.slice(0, 10).map(product => (
                  <div
                      key={product._id}
                      className={` parrent rounded relative border overflow-hidden  h-[300px] ${isDarkMode
                          ? "mb-1 bg-white hover:shadow-lg w-[97%] md:w-[45%] lg:w-[23%] text-bgcolor  cursor-pointer  "
                          : "mb-1 bg-white hover:shadow-lg w-[97%] md:w-[45%] lg:w-[23%]  cursor-pointer "
                          }`}
                      data-tooltip-id={"product" + product?._id}
                      data-tooltip-content={product?.description}
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
                          {/* <h3 className="text-xl font-semibold">
                  <Fade>{product.itemName}</Fade>
                </h3> */}
                          <Fade>
                              <p className="text-gray-700">{product?.description.slice(0, 20)}...</p>
                          </Fade>
                          <Fade>
                              <p className="text-blue">${product.price}</p>
                          </Fade>

                          <Fade>
                              <div className="transform translate-y-[70px] child">
                                  {/* left-0 w-full h-full bg-bgcolor absolute top-0 opacity-50 */}
                                  <NavLink
                                      to={`/details/${product._id}`}
                                      className="py-1 px-3 bg-blue transition-all duration-200 text-bgcolor hover:bg-transparent  hover:border-blue border rounded-full"
                                  >
                                      View Details
                                  </NavLink>
                              </div>
                          </Fade>
                      </div>
                  </div>
              ))}
              {equipmentList.length === 0 && (
                  <p className="text-center text-3xl text-gray-500 my-[100px]">
                      <Fade>No products found in this category.</Fade>
                  </p>
              )}
          </div>
    </div>
  )
}
