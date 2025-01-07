// import React, { useState, useEffect } from "react";
// import { NavLink, useParams } from "react-router-dom";
// import App from "../components/Sidebar";
// const EquDetails = () => {
//     const { id } = useParams();
//     const [equipment, setEquipment] = useState(null);
//     const [loading, setLoading] = useState(true)

//     useEffect(() => {
//         setLoading(true)
//         setTimeout(() => {
//             const fetchEquipmentDetails = async () => {
//                 try {
//                     const response = await fetch(`https://server-with-auth.vercel.app/product/${id}`);
//                     const data = await response.json();
//                     setEquipment(data);
//                     setLoading(false);
//                 } catch (error) {
//                     console.error("Error fetching equipment details:", error);
//                 }
//             };

//             fetchEquipmentDetails();
//         }, 3000);
//     }, [id]);

//     if (!equipment || loading) {
//         return (
//             <div className="text-center h-[500px] flex justify-center items-center ">
//                 <App />
//             </div>
//         );
//     }

//     return (
//         <div className="container mx-auto py-10 px-6 ">
//             <h2 className="text-3xl font-bold text-center mb-6">
//                 {equipment?.itemName}
//             </h2>
//             {<div className="  p-6 flex  justify-between items-start">
//                 <img src={equipment?.image} className="w-[45%] h-[300px] rounded object-cover mb-6" />
//                 <div className="w-[50%]">

//                     <p>{equipment?.categoryName}</p>
//                     <p className="bg-blue text-white  w-max rounded-full px-4 py-1  "> $<b>{equipment?.price}</b></p>
//                     <p>
//                          {equipment?.rating} / 5 
                        
//                         <i class="fas fa-star text-[#FFD700] hover:text-[#FF4500]"></i>
//                         <i class="far fa-star text-[#FFD700] hover:text-[#FF4500]"></i>
                        
//                          </p>

//                     <p><strong>Customization:</strong> {equipment?.customization}</p>
//                     <p>{equipment?.processingTime}</p>


//                     <p><strong>Stock:</strong> {equipment?.stockStatus}</p>
//                     {/* <p><strong>createdBy:</strong> {equipment?.username || "Not found"}</p> */}
//                     <p className="mb-3">{equipment?.description}</p>
//                         <div className="my-2">
//                         <button className="border px-5 py-1 rounded  bg-blue text-white">
//                             Add to Cart
//                         </button>

//                         </div>

                  
//                 </div>
//             </div>}
//         </div>
//     );
// };

// export default EquDetails;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import App from "../components/Sidebar";
import { toast } from "react-toastify";
import Title from "../components/Title";

const EquDetails = () => {
    const { id } = useParams();
    const [equipment, setEquipment] = useState(null);
    const [loading, setLoading] = useState(true);
    const [cart, setCart ] = useState([])

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            const fetchEquipmentDetails = async () => {
                try {
                    const response = await fetch(`https://server-with-auth.vercel.app/product/${id}`);
                    const data = await response.json();
                    setEquipment(data);
                    setLoading(false);
                } catch (error) {
                    console.error("Error fetching equipment details:", error);
                }
            };

            fetchEquipmentDetails();
        }, 3000);
    }, [id]);

   
    const addToCart = () => {
        const item={
            id: equipment._id,
            itemName: equipment.itemName,
            price: equipment.price,
            image: equipment.image,
            customization: equipment.customization,
            processingTime: equipment.processingTime,
            stockStatus: equipment.stockStatus,
            quantity: 1
        }
        
        setCart((prevCart) => {
            const newCart = [...prevCart, item];  
            localStorage.setItem("cart", JSON.stringify(newCart)); 
            toast.success(`${equipment.itemName} added to cart!`);
            return newCart;  
        });
        window.location.reload();
    };

 


    if (!equipment || loading) {
        return (
            <div className="text-center h-[500px] flex justify-center items-center ">
                <App />
            </div>
        );
    }

    return (
        <div className="container mx-auto py-10 px-3 md:px-4 lg:px-6  " data-aos="zoom-in-up">
            <Title title={equipment?.itemName} />
            <div className="p-6 flex justify-between items-start flex-col md:flex-row">
                <img src={equipment?.image} className="w-full md:w-[45%] h-[300px] rounded object-cover mb-6" data-aos="zoom-in-down" />
                <div className="w-full md:w-[50%]" data-aos="zoom-in-up">
                    <p>{equipment?.categoryName}</p>
                    <p className="bg-blue text-white w-max rounded-full px-4 py-1"> ${equipment?.price} </p>
                    <p>
                        {equipment?.rating} / 5
                        <i className="fas fa-star text-[#FFD700] hover:text-[#FF4500]"></i>
                        <i className="far fa-star text-[#FFD700] hover:text-[#FF4500]"></i>
                    </p>
                    <p><strong>Customization:</strong> {equipment?.customization}</p>
                    <p>{equipment?.processingTime}</p>
                    <p><strong>Stock:</strong> {equipment?.stockStatus}</p>
                    <p className="mb-3">{equipment?.description}</p>
                    <div className="my-2">
                        <button
                            className="border px-5 py-1 rounded bg-blue text-white"
                            onClick={addToCart}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EquDetails;

