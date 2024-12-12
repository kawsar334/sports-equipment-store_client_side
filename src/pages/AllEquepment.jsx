import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProviders";
import { Fade } from "react-awesome-reveal";
import App from "../components/Sidebar";
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { ThemeContext } from "../ThemeProvider";
const AllSportsEquipmentPage = () => {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    const [equipmentList, setEquipmentList] = useState([]);
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();
    const { user } = useContext(AuthContext)
    useEffect(() => {
        setLoading(true)
       setTimeout(() => {
           const fetchEquipment = async () => {
               try {
                   const response = await fetch(`https://server-with-auth.vercel.app/allproducts/`);
                   const data = await response.json()
                   setEquipmentList(data);
                   setLoading(false)
               } catch (error) {
                   console.error("Error fetching equipment data:", error);
               }
           };

           fetchEquipment();
       }, 2000);
    }, []);

    const handleViewDetails = (id) => {
        navigate(`/equipment/${id}`);
    };



    const handlShort = () => {
        const sortedEquipmentList = [...equipmentList].sort((a, b) => Number(b.price) - Number(a.price));
        setEquipmentList(sortedEquipmentList);
    };



    return (
        <div className={`${isDarkMode ? "container mx-auto py-10 px-6 bg-bgcolor  text-white" : "container mx-auto py-10 px-6  bg-white text-bgcolor"}`}>
            <div className="flex justify-between items-center w-[80%] m-auto flex-col md:flex-row">
                <h2 className="text-3xl font-bold text-center mb-6">
                    <Fade>All Sports Equipment</Fade>
                    </h2>
                <div className=" text-center mb-6">
                    <Fade>
                    <button className="border rounded-full px-4 py-1 hover:text-blue hover:bg-transparent bg-blue transition-all text-white capitalize" onClick={handlShort}>sort by Price (High to Low) </button>
                    </Fade>
                </div>

            </div>
            {loading?<div className="w-full h-[70vh]  flex justify-center  items-center">
                    <App/>
            </div>:<div className="overflow-x-auto">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>
                            <Fade>
                                <th><Fade>#</Fade></th>
                            </Fade>
                            <th>image</th>
                            <Fade>

                                <th>Name</th>
                            </Fade>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Actions</th>

                        </tr>
                    </thead>
                    <tbody >
                        <ReactTooltip id="my-tooltip" />
                        {equipmentList?.map((equipment, index) => (
                            <tr key={equipment._id} className={`${isDarkMode?"bg-bgcolor text-white":"bg-white text-bgcolor"}`} data-tooltip-id="my-tooltip" data-tooltip-content={equipment?.itemName}>
                                <td ><Fade>{index + 1}</Fade></td>
                                <th><img src={equipment?.image} alt="" className="w-[25px] h-[25px] rounded-full" /></th>
                                <td>{equipment?.itemName} </td>                              
                                <td><Fade>{equipment.categoryName}</Fade></td>
                                <td>${equipment?.price}</td>
                                {/*  */}
                                <td>
                                    <Fade>
                                    <button
                                        onClick={() => handleViewDetails(equipment._id)}
                                        className="btn btn-primary btn-sm"
                                        >
                                        View Details
                                    </button>
                                </Fade>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>}
        </div>
    );
};

export default AllSportsEquipmentPage;
