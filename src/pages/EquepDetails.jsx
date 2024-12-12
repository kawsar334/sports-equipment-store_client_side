import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import App from "../components/Sidebar";
const EquDetails = () => {
    const { id } = useParams();
    const [equipment, setEquipment] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
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

    if (!equipment || loading) {
        return( 
            <div className="text-center h-[500px] flex justify-center items-center ">
            <App/>
        </div>
        );
    }

    return (
        <div className="container mx-auto py-10 px-6">
            <h2 className="text-3xl font-bold text-center mb-6">
                Stock Status
            </h2>
            {<div className="card card-bordered shadow-lg p-6">
                <img src={equipment?.image} className="w-full h-64 object-cover mb-6" />
                <p><strong>Name:</strong> {equipment?.itemName}</p>
                <p><strong>Category:</strong> {equipment?.categoryName}</p>

                <p><strong>Price:</strong> ${equipment?.price}</p>
                <p><strong>Rating:</strong> {equipment?.rating} / 5</p>
                <p><strong>Description:</strong> {equipment?.description}</p>
                <p><strong>Customization:</strong> {equipment?.customization}</p>
                <p><strong>Processing Time:</strong> {equipment?.processingTime}</p>
                <p><strong>Stock Status:</strong> {equipment?.stockStatus}</p>
                <p><strong>createdBy:</strong> {equipment?.username || "Not found"}</p>
                <p><strong>Email:</strong> {equipment?.email || "Not found"}</p>

                <NavLink
                    to="/"
                    className=" bg-blue text-white py-2 rounded-[20px] hover:bg-[white] hover:text-blue  transition duration-200 w-max px-5 my-5"
                >
                    Go To Home
                </NavLink>
            </div>}
        </div>
    );
};

export default EquDetails;
