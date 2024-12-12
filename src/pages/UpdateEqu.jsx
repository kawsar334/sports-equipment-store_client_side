import React, { useState, useEffect, useContext } from "react";
import {  useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthProviders";

const UpdateEquipment = () => {
    const { id } = useParams(); 
    const history = useNavigate();
    const {state} = useLocation()
    console.log(state)
    const {  user } = useContext(AuthContext)
    const [equipment, setEquipment] = useState({
        image: state?.equipment?.image,
        itemName: state?.equipment?.itemName,
        categoryName: state?.equipment?.categoryName,
        description: state?.equipment?.description,
        price: state?.equipment?.price,
        rating: state?.equipment?.rating,
        customization: state?.equipment?.customization,
        processingTime: state?.equipment?.processingTime,
        stockStatus: state?.equipment?.stockStatus,
        email: user?.email,
        userId:user?.uid
    });

    useEffect(() => {
        const fetchEquipmentDetails = async () => {
            try {
                const response = await axios.get(`/api/product/${id}`);
                setEquipment(response.data);
            } catch (error) {
                console.error("Error fetching equipment details", error);
            }
        };
        fetchEquipmentDetails();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEquipment({ ...equipment, [name]: value });
    };
    


    const handleSubmit = async (e) => {
        e.preventDefault();

        const result = await Swal.fire({
            title: "Are you sure?",
            text: "Do you want to update this equipment?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, update it!",
            cancelButtonText: "No, cancel!",
        });

        if (result.isConfirmed) {
            try {
                const response = await axios.put(`https://server-with-auth.vercel.app/product/${id}`, equipment);
                Swal.fire({
                    title: "Success!",
                    text: "Equipment updated successfully.",
                    icon: "success",
                });
                history("/myequipment");
            } catch (error) {
                console.error("Error updating equipment", error);
                Swal.fire({
                    title: "Error!",
                    text: "Something went wrong. Please try again later.",
                    icon: "error",
                });
            }
        } else {
            Swal.fire({
                title: "Cancelled",
                text: "No changes were made.",
                icon: "info",
            });
        }
    };

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold text-center mb-6">Update Equipment</h2>
            <div className="text-gray-600 text-sm flex justify-between w-[80%] flex-wrap gap-3  mx-auto">
                <p className="border py-1 px-3 rounded-full cursor-pointer"> <span className="font-bold">Username</span>:{state?.equipment?.username || "Not Found"}</p>
                <p className="border py-1 px-3 rounded-full cursor-pointer"><span className="font-bold">Email</span>:{state?.equipment?.email || "Not Found"}</p>
            </div>
            {state?.photoURL}

            <form onSubmit={handleSubmit} className="bg- my-10 p-6 rounded shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">Image</label>
                        <input
                            type="text"
                            name="image"
                            value={equipment.image}
                            onChange={handleChange}
                            className="bg-transparent p-3 border-b border-blue focus:border focus:rounded-lg focus:outline-none "
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">Item Name</label>
                        <input
                            type="text"
                            name="itemName"
                            value={equipment.itemName}
                            
                            onChange={handleChange}
                            className="bg-transparent p-3 border-b border-blue focus:border focus:rounded-lg focus:outline-none"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">Category Name</label>
                        <input
                            type="text"
                            name="categoryName"
                            value={equipment.categoryName}
                            onChange={handleChange}
                            className="bg-transparent p-3 border-b border-blue focus:border focus:rounded-lg focus:outline-none"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">Description</label>
                        <textarea
                            name="description"
                            value={equipment.description}
                            onChange={handleChange}
                            className="textarea textarea-bordered bg-transparent p-3 border-b border-blue focus:border focus:rounded-lg focus:outline-none"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">Price</label>
                        <input
                            type="number"
                            name="price"
                            value={equipment.price}
                            onChange={handleChange}
                            className="bg-transparent p-3 border-b border-blue focus:border focus:rounded-lg focus:outline-none"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">Rating</label>
                        <input
                            type="number"
                            name="rating"
                            value={equipment.rating}
                            onChange={handleChange}
                            className="bg-transparent p-3 border-b border-blue focus:border focus:rounded-lg focus:outline-none"
                            required
                            min="1"
                            max="5"
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">Customization</label>
                        <input
                            type="text"
                            name="customization"
                            value={equipment.customization}
                            onChange={handleChange}
                            className="bg-transparent p-3 border-b border-blue focus:border focus:rounded-lg focus:outline-none"
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">Processing Time (Delivery Time)</label>
                        <input
                            type="text"
                            name="processingTime"
                            value={equipment.processingTime}
                            onChange={handleChange}
                            className="bg-transparent p-3 border-b border-blue focus:border focus:rounded-lg focus:outline-none"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">Stock Status</label>
                        <input
                            type="number"
                            name="stockStatus"
                            value={equipment.stockStatus}
                            onChange={handleChange}
                            className="bg-transparent p-3 border-b border-blue focus:border focus:rounded-lg focus:outline-none"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">User Email <span className="text-gray-400">Read Only</span></label>
                        <input
                            type="text"
                            name="userEmail"
                            value={ state?.equipment?.username}
                            readOnly
                            className="bg-transparent p-3 border-b border-blue focus:border focus:rounded-lg focus:outline-none"
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">User Name <span className="text-gray-400">Read Only</span></label>
                        <input
                            type="text"
                            name="userName"
                            value={ state?.equipment?.username}
                            readOnly
                            className="bg-transparent p-3 border-b border-blue focus:border focus:rounded-lg focus:outline-none"
                        />
                    </div>
                </div>

                <div className="flex justify-center mt-6">
                    <button type="submit" className="btn btn-primary">
                        Update Equipment
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateEquipment;
