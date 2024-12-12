import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateEquep = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [equipment, setEquipment] = useState({
        itemName: '',
        image: '',
        categoryName: '',
        description: '',
        price: '',
        rating: '',
        stockStatus: '',
        // userId:
    });

    useEffect(() => {
        const fetchEquipment = async () => {
            try {
                const response = await fetch(`https://server-with-auth.vercel.app/equipment/${id}`);
                const data = await response.json();
                setEquipment(data);
            } catch (error) {
                console.error('Error fetching equipment:', error);
            }
        };

        fetchEquipment();
    }, [id]);

    const handleChange = (e) => {
        setEquipment({ ...equipment, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`https://server-with-auth.vercel.app/equipment/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(equipment),
            });

            if (response.ok) {
                Swal.fire('Updated!', 'Your equipment has been updated.', 'success');
                navigate('/my-equipment-list');
            } else {
                Swal.fire('Error!', 'There was a problem updating the equipment.', 'error');
            }
        } catch (error) {
            console.error('Error updating equipment:', error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-center mb-4">Update Equipment</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-semibold">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={equipment.itemName}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold">Image URL</label>
                    <input
                        type="text"
                        name="image"
                        value={equipment.image}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold">categoryName</label>
                    <input
                        type="text"
                        name="categoryName"
                        value={equipment.categoryName}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold">Description</label>
                    <textarea
                        name="description"
                        value={equipment.description}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold">Price</label>
                    <input
                        type="number"
                        name="price"
                        value={equipment.price}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold">stockStatus</label>
                    <input
                        type="number"
                        name="stockStatus"
                        value={equipment.stockStatus}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div className="flex justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md"
                    >
                        Update
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate('/myequipment')}
                        className="bg-gray-500 text-white px-4 py-2 rounded-md"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateEquep;
