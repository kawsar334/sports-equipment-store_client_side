// import React, { useState, useEffect, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthProviders";
// import { Fade } from "react-awesome-reveal";
// import App from "../components/Sidebar";
// import { Tooltip as ReactTooltip } from 'react-tooltip'
// import { ThemeContext } from "../ThemeProvider";
// import Title from "../components/Title";

// const AllSportsEquipmentPage = () => {
//     const { isDarkMode, toggleTheme } = useContext(ThemeContext);
//     const [equipmentList, setEquipmentList] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [searchProducts, setSearchProducts] =useState([]);
//     const navigate = useNavigate();
//     const { user } = useContext(AuthContext)
//     useEffect(() => {
//         setLoading(true)
//         setTimeout(() => {
//             const fetchEquipment = async () => {
//                 try {
//                     const response = await fetch(`https://server-with-auth.vercel.app/allproducts/`);
//                     const data = await response.json()
//                     setEquipmentList(data);
//                     setLoading(false)
//                 } catch (error) {
//                     console.error("Error fetching equipment data:", error);
//                 }
//             };

//             fetchEquipment();
//         }, 2000);
//     }, []);

//     const handleViewDetails = (id) => {
//         navigate(`/equipment/${id}`);
//     };



//     const handlShort = () => {
//         const sortedEquipmentList = [...equipmentList].sort((a, b) => Number(b.price) - Number(a.price));
//         setEquipmentList(sortedEquipmentList);
//     };



//     return (
//         <div className={`${isDarkMode ? "container mx-auto py-10 px-6 bg-bgcolor  text-white" : "container mx-auto py-10 px-6  bg-white text-bgcolor"}`}>
//             <div className="flex justify-between items-center w-[80%] m-auto flex-col md:flex-row">
               
//                 <Title title="All Sports Equipment"/>
//                 <div className=" text-center mb-6">
//                     <Fade>
//                         <select className="border rounded px-4 py-1 bg-bgcolor  text-white  transition-all  capitalize" >
//                             <option  selected disabled> sort by Price </option>
//                             <option value="" onClick={handlShort}>(High to Low)</option>
//                              </select>
//                     </Fade>
//                 </div>

//             </div>
//             {loading ? <div className="w-full h-[70vh]  flex justify-center  items-center">
//                 <App />
//             </div> : <div className="overflow-x-auto">
//                 <table className="table table-zebra w-full">

//                     <thead>
//                         <tr className="">
//                             <Fade>
//                                 <th><Fade>#</Fade></th>
//                             </Fade>
//                             <th>image</th>
//                             <Fade>

//                                 <th>Name</th>
//                             </Fade>
//                             <th>Category</th>
//                             <th>Price</th>
//                             <th>Actions</th>

//                         </tr>
//                     </thead>
//                     <tbody >
//                         <ReactTooltip id="my-tooltip" />
//                         {equipmentList?.map((equipment, index) => (
//                             <tr key={equipment._id} className={` ${isDarkMode ? "bg-bgcolor text-white" : "bg-white text-bgcolor"}`} data-tooltip-id="my-tooltip" data-tooltip-content={equipment?.itemName}>
//                                 <td ><Fade>{index + 1}</Fade></td>
//                                 <th><img src={equipment?.image} alt="" className="w-[25px] h-[25px] rounded-full" /></th>
//                                 <td>{equipment?.itemName} </td>
//                                 <td><Fade>{equipment.categoryName}</Fade></td>
//                                 <td>${equipment?.price}</td>
//                                 <td title="View Details">
//                                     <Fade>
//                                         <button
//                                             onClick={() => handleViewDetails(equipment._id)}
//                                             className="btn bg-blue btn-sm text-white"
//                                         >
//                                             <i className="fas fa-info-circle"></i>
//                                             <span className="hidden md:flex">View Details</span>

//                                         </button>
//                                     </Fade>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>}
//         </div>
//     );
// };

// export default AllSportsEquipmentPage;

import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProviders";
import { Fade } from "react-awesome-reveal";
import App from "../components/Sidebar";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { ThemeContext } from "../ThemeProvider";
import Title from "../components/Title";

const AllSportsEquipmentPage = () => {
    const { isDarkMode } = useContext(ThemeContext);
    const [equipmentList, setEquipmentList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState(""); 
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            const fetchEquipment = async () => {
                try {
                    const response = await fetch(
                        `https://server-with-auth.vercel.app/allproducts/`
                    );
                    const data = await response.json();
                    setEquipmentList(data);
                    setLoading(false);
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
        const sortedEquipmentList = [...equipmentList].sort(
            (a, b) => Number(b.price) - Number(a.price)
        );
        setEquipmentList(sortedEquipmentList);
    };

    
    const filteredEquipmentList = equipmentList.filter((equipment) =>
        equipment.itemName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div
            className={`${isDarkMode
                    ? "container mx-auto py-10 px-6 bg-bgcolor text-white"
                    : "container mx-auto py-10 px-6 bg-white text-bgcolor"
                }`}
        >
            <div className="flex justify-between items-center w-[80%] m-auto flex-col md:flex-row">
                <Title title="All Sports Equipment" />
                <div className="flex flex-col md:flex-row gap-4 items-center">                  
                    <div className="text-center">
                        <Fade>
                            <select
                                className="border rounded px-4 py-1 bg-bgcolor text-white transition-all capitalize"
                            >
                                <option selected disabled>
                                    Sort by Price
                                </option>
                                <option value="" onClick={handlShort}>
                                    (High to Low)
                                </option>
                            </select>
                        </Fade>
                    </div>
                </div>
            </div>
            <div className="w-full  text-center my-5"> 
                 <input
                type="text"
                placeholder="Search equipment..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} // Update search query
                    className="border rounded px-4 py-2 w-[400px]   bg-white text-black"
            /> </div>
            {loading ? (
                <div className="w-full h-[70vh] flex justify-center items-center">
                    <App />
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr className="">
                                <Fade>
                                    <th>#</th>
                                </Fade>
                                <th>Image</th>
                                <Fade>
                                    <th>Name</th>
                                </Fade>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <ReactTooltip id="my-tooltip" />
                            {filteredEquipmentList.map((equipment, index) => (
                                <tr
                                    data-aos="zoom-in-up"
                                    key={equipment._id}
                                    className={`${isDarkMode
                                            ? "bg-bgcolor text-white"
                                            : "bg-white text-bgcolor"
                                        }`}
                                    data-tooltip-id="my-tooltip"
                                    data-tooltip-content={equipment?.itemName}
                                >
                                    <td>
                                        <Fade>{index + 1}</Fade>
                                    </td>
                                    <th>
                                        <img
                                            src={equipment?.image}
                                            alt=""
                                            className="w-[25px] h-[25px] rounded-full"
                                        />
                                    </th>
                                    <td>{equipment?.itemName} </td>
                                    <td>
                                        <Fade>{equipment.categoryName}</Fade>
                                    </td>
                                    <td>${equipment?.price}</td>
                                    <td title="View Details">
                                        <Fade>
                                            <button
                                                onClick={() => handleViewDetails(equipment._id)}
                                                className="btn bg-blue btn-sm text-white"
                                            >
                                                <i className="fas fa-info-circle"></i>
                                                <span className="hidden md:flex">View Details</span>
                                            </button>
                                        </Fade>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default AllSportsEquipmentPage;

