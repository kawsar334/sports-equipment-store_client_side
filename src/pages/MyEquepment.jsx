

import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../context/AuthProviders";
import Swal from 'sweetalert2';
import App from '../components/Sidebar';
import { ThemeContext } from '../ThemeProvider';

const MyEquipmentList = () => {
    const { user } = useContext(AuthContext);
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    const [equipmentList, setEquipmentList] = useState([]);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
     setLoading(true)

        setTimeout(() => {
            const fetchData = async () => {
                try {
                    const response = await fetch(`https://server-with-auth.vercel.app/products/${user?.uid}`);
                    const data = await response.json();
                    setEquipmentList(data);
                    setLoading(false)
                } catch (error) {
                    console.error("Error fetching equipment:", error);
                }
            };

            if (user?.uid) {
                fetchData();
            } 
        }, 2000);
    }, [user?.uid]);

    // Handle update button click
    const handleUpdate = (item) => {
        setLoading(true)
        setTimeout(() => {
            
            setLoading(false)
            navigate(`/update/${item._id}`,{
                state: { equipment: item },
            });
        }, 2000);
    };

   
    const handleDelete = (item) => {
        if(!user?.displayName=== item?.username){
            Swal.fire({
                title: 'Error!',
                text: 'You cannot delete this  equipment. ',
                icon: 'error',
            });
            return;
        }else{

            Swal.fire({
                title: 'Are you sure?',
                text: 'You will not be able to revert this!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, cancel!',
            }).then(async (result) => {
                if (result.isConfirmed) {
                    try {
                        const response = await fetch(`https://server-with-auth.vercel.app/product/${item?._id}`, {
                            method: 'DELETE',
                        });
    
                        if (response.ok) {
                            setEquipmentList((prev) => prev.filter((item) => item._id !== item?._id));
                            Swal.fire('Deleted!', 'Your equipment has been deleted.', 'success');
                            navigate("/")
                        } else {
                            Swal.fire('Error!', 'There was a problem deleting the equipment.', 'error');
                        }
                    } catch (error) {
                        console.error("Error deleting equipment:", error);
                    }
                }
            });
        }
    };

    const handlShort = () => {
        const sortedEquipmentList = [...equipmentList].sort((a, b) => Number(b.price) - Number(a.price));
        setEquipmentList(sortedEquipmentList);
    };

    if(loading){
        return <div className="flex justify-center items-center h-[60vh] ">
            <App/>
        </div>
    }

    return (
        <div className="container mx-auto p-4">
            <div>

            {equipmentList?.length >1 &&<button onClick={handlShort} className="bg-blue text-white px-4 py-2 rounded-md mb-4">
                Sort by Price (High to Low)
            </button>}
            <h1 className="text-2xl font-bold text-center mb-4">My Equipment List</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-[90%] md:w-[80%] m-auto">
                {equipmentList.length > 0 ? (
                    equipmentList.map((item) => (
                        <div key={item._id} className={`${isDarkMode ? "bg-white shadow-lg border rounded-lg p-4 text-bgcolor  " : "bg-white shadow-lg border rounded-lg p-4  "}`}>
                            <img
                                src={item.image}
                                alt={item.itemName}
                                className="w-full h-48 object-cover rounded-md mb-4"
                            />
                            <h2 className="text-xl font-semibold">{item.itemName}</h2>
                            <p className="text-gray-600">{item.categoryName}</p>
                            <p className="mt-2  w-[100%] text-gray-500 ">{item.description.slice(0, 50)}</p>
                            <p className="font-semibold text-lg mt-2">Price: ${item.price}</p>
                            <div className="flex justify-between mt-4">
                                <button
                                    onClick={() => handleUpdate(item)}
                                    className="bg-blue text-white px-4 py-2 rounded-md"
                                >
                                    Update
                                </button>
                                <button
                                    onClick={() => handleDelete(item)}
                                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No equipment found. Add some equipment!</p>
                )}
            </div>
        </div>
    );
};

export default MyEquipmentList;
