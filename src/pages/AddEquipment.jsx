import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProviders";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddEquipmentPage = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        image: null,
        itemName: null,
        categoryName: null,
        description: null,
        price: null,
        rating: 0,
        customization: null,
        processingTime: null,
        stockStatus: null,
        userId: user?.uid,
        username: user?.displayName,
        email: user?.email,
        createdAt: new Date(),

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://server-with-auth.vercel.app/equipments", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const result = await response.json();

            if (response.ok) {
                Swal.fire({
                    title: "Success!",
                    text: `${user?.displayName}, you added ${formData?.itemName} successfully!`,
                    icon: "success",
                });
                setFormData({
                    image: "",
                    itemName: "",
                    categoryName: "",
                    description: "",
                    price: "",
                    rating: "",
                    customization: "",
                    processingTime: "",
                    stockStatus: "",
                });
                navigate("/myequipment")
            } else {
                toast.error(`Failed to add equipment: ${result.message}`);
            }
        } catch (error) {
            toast.error("An error occurred while adding the equipment.");
        }
    };

    return (
        <div className=" mx-auto py-10  w-full   ">
            <div className="w-[70%] m-auto flex justify-center items-center flex-col">
                <h2 className="text-3xl font-bold text-center mb-6">Add New Equipment</h2>
                {/* <div className="flex justify-between w-full md:w-[80%]  my-6 flex-col md:flex-row capitalize py-2 px-5  border-b">
                    <p><span className="font-bold">UserName:</span>{user?.displayName}</p>
                    <p><span className="font-bold">Email:</span>{user?.email}</p>
                </div> */}
            </div>
            {formData?.image && (
                <div className="w-full md:w-[80%] mx-auto  flex justify-center items-center">
                    <img
                        src={formData?.image}
                        alt="Equipment"
                        className="w-[300px] h-[200px] rounded-md object-cover"
                    />
                </div>
            )}
            <form onSubmit={handleSubmit} className="flex justify-center  mx-auto items-center  p-4 w-[95%] md:w-[80%] space-y-6 flex-col ">
             <div className="flex gap-2  m-auto  justify-center items-center   w-full  flex-col md:flex-row ">
                    <div className=" w-full md:w-[40%]">
                        <label className="block text-lg font-medium mb-2 ">Image URL</label>
                        <input
                            type="text"
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                            placeholder="Enter image URL"

                            className="bg-transparent p-3 border-b border-blue focus:border focus:rounded-lg focus:outline-none w-full"
                            required
                        />
                    </div>
                    <div className=" w-full md:w-[40%]">
                        <label className="block text-lg font-medium mb-2">Item Name</label>
                        <input
                            type="text"
                            name="itemName"
                            value={formData.itemName}
                            onChange={handleChange}
                            placeholder="Enter item name"
                            className="bg-transparent p-3 border-b border-blue focus:border focus:rounded-lg focus:outline-none w-full"
                            required
                        />
                    </div>
             </div>
                <div className="flex gap-2  m-auto  justify-center items-center   w-full  flex-col md:flex-row   ">
                    <div className="w-full md:w-[40%]">
                        <label className="block text-lg font-medium mb-2">Category Name</label>
                        <input
                            type="text"
                            name="categoryName"
                            value={formData.categoryName}
                            onChange={handleChange}
                            placeholder="Enter category name"

                            className="bg-transparent p-3 border-b border-blue focus:border focus:rounded-lg focus:outline-none w-full"
                            required
                        />
                    </div>
                    <div className="w-full md:w-[40%]">
                        <label className="block text-lg font-medium mb-2">Stock Status</label>
                        <input
                            type="number"
                            name="stockStatus"
                            value={formData.stockStatus}
                            onChange={handleChange}
                            placeholder="Enter available quantity"
                            className="bg-transparent p-3 border-b border-blue focus:border focus:rounded-lg focus:outline-none w-full"
                            required
                        />

                    </div>
                </div>

                <div className="flex gap-2  m-auto  justify-center items-center   w-full  flex-col md:flex-row     ">
                    <div className="w-full md:w-[40%]">
                        <label className="block text-lg font-medium mb-2">Price (USD)</label>
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            placeholder="Enter price"
                            className="bg-transparent p-3 border-b border-blue focus:border focus:rounded-lg focus:outline-none w-full"
                            required
                        />
                    </div>
                    <div className="w-full md:w-[40%]">
                        <label className="block text-lg font-medium mb-2">Rating</label>
                        <input
                            type="string"
                            name="rating"
                            value={formData.rating}
                            onChange={handleChange}
                            placeholder="Enter rating (out of 5)"
                            className="w-full bg-transparent p-3 border-b border-blue focus:border focus:rounded-lg focus:outline-none "
                            max="5"
                            min="1"
                            required
                        />
                    </div>

                </div>

              
                <div className="flex gap-2  m-auto  justify-center items-center   w-full  flex-col md:flex-row  ">

                <div className="w-full md:w-[40%]">
                    <label className="block text-lg font-medium mb-2">Customization</label>
                    <input
                        type="text"
                        name="customization"
                        value={formData.customization}
                        onChange={handleChange}
                        placeholder="Enter customization options"
                        className="w-full bg-transparent p-3 border-b border-blue focus:border focus:rounded-lg focus:outline-none "

                    />
                </div>
                <div className="w-full md:w-[40%]">
                    <label className="block text-lg font-medium mb-2">Processing Time</label>
                    <input
                        type="text"
                        name="processingTime"
                        value={formData.processingTime}
                        onChange={handleChange}
                        placeholder="Enter processing time (e.g., 3-5 days)"
                        className="w-full bg-transparent p-3 border-b border-blue focus:border focus:rounded-lg focus:outline-none "

                        required
                    />
                </div>
              </div>


                <div className=" w-full md:w-[60%] mx-auto">
                    <label className="block text-lg font-medium mb-2 mx-auto text-center">Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Enter description"
                        className="textarea textarea-bordered w-full bg-transparent p-3 border-b border-blue focus:border focus:rounded-lg focus:outline-none"
                        required
                    />
                </div>

                <div className="text-center">
                    <button type="submit" className="btn btn-primary bg-blue px-10">
                        Add Equipment
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddEquipmentPage;

