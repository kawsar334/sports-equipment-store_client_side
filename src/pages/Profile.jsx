import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProviders";
import Loader from "../components/Sidebar";

const ProfilePage = () => {
    const { createUser, user, signOutUser } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);


    useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
        }, 2000);
    },[])

    if(loading){
        return (
            <Loader/>
        )
    }
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
                <div className="flex flex-col items-center">
                    <img
                        src={user?.photoURL}
                        alt="Profile"
                        className="w-32 h-32 rounded-full shadow-md object-cover mb-4"
                    />
                    <h2 className="text-2xl font-bold text-gray-800">{user?.displayName}</h2>
                   
                </div>

                {/* User Details */}
                <div className="mt-6">
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold text-gray-700">Contact Info:</h3>
                        <p className="text-gray-600">
                            <strong>Email:</strong> {user?.email}
                        </p>
                        <p className="text-gray-600">
                            <strong>Phone:</strong> {user?.phoneNumber || "Not found"}
                        </p>
                        <p className="text-gray-600">
                            <strong>Logged In Time:</strong> {user?.metadata?.lastSignInTime}
                        </p>
                    </div>
                </div>

                <div className="mt-6 text-center">
                    <button className="bg-blue text-white px-6 py-2 rounded shadow hover:bg-blue-600">
                        Edit Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
