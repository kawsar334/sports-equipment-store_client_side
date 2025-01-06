import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import App from "../components/Sidebar";
import { toast } from "react-toastify";

const ViewDetailsPage = () => {
  const { id } = useParams();
  const [equipment, setEquipment] = useState(null);
  const [loading,setLoading] = useState(true)
    const [cart, setCart ] = useState([])
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
      const fetchEquipmentDetails = async () => {
        try {
          const response = await fetch(`https://server-with-auth.vercel.app/product/${id}`);
          const data = await response.json();
          setEquipment(data);
        } catch (error) {
          console.error("Error fetching equipment details:", error);
        }
      };
      fetchEquipmentDetails();
    }, 2000);
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
    return <p className="text-center h-[500px] flex justify-center items-center  w-full ">
      <App/>
    </p>;
  }

  return (
    <div className="container mx-auto py-10 px-6 ">
      <h2 className="text-3xl font-bold text-center mb-6">
        Stock Status
      </h2>
      <div className="p-6 flex justify-between items-start">
        <img src={equipment?.image} className="w-[45%] h-[300px] rounded object-cover mb-6" />
        <div className="w-[50%]">
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

export default ViewDetailsPage;
