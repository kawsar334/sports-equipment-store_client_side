// LoginPage.js
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProviders';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Swal from "sweetalert2";
import { auth } from '../firebase';
import imageOne from "../assets/first.svg"
import Title from '../components/Title';

function LoginPage() {
    const navigate = useNavigate()
    const { signInUser, signInWithGoogle } = useContext(AuthContext);
   
    const provider = new GoogleAuthProvider();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

   

    const handleSubmit = e => {
        e.preventDefault();

        const { email, password } = formData;

    
        signInUser(email, password)
            .then(result => {
             
                const lastSignInTime = result?.user?.metadata?.lastSignInTime;
                const loginInfo = { email, lastSignInTime };

                fetch(`https://server-with-auth.vercel.app/users`, {
                // fetch(`http://localhost:5000/users`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loginInfo)
                })
                .then(res => res.json())
                .then(data => {
                    toast.success("Login successfully")
                    navigate("/")
                })

            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    // handling gogle login

    const handleGoogleLogin = () => {
        
        signInWithGoogle(navigate)
        
    }

    return (
        <div 
            style={{ 
                // backgroundImage: `url("https://tse1.mm.bing.net/th?id=OIP.HG6Dcd6Hg01wH3CyRrdLRgHaEo&pid=Api&P=0&h=220")`,
                // backgroundPosition: 'center',
                // backgroundSize: 'cover',
                // backgroundRepeat: 'no-repeat',
                // height: '100vh',
                // display: 'flex',
                // justifyContent: 'center',
                // alignItems: 'center',
                // color: 'white'
             }}
        >

        <div className="w-full  max-w-md mx-auto   mt-16 p-8    shadow-md rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
            <form className="space-y-4 " onSubmit={handleSubmit}>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                        className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-[20px] focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        required
                        className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-[20px] focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                        />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue text-white py-2 rounded-[20px] hover:bg-[white] hover:text-blue hover:border transition duration-200"
                    >
                    Login
                </button>
            </form>
            <button
                onClick={handleGoogleLogin}
                className="flex items-center justify-center text-[#3B82F6] my-2 border  w-full  font-bold py-2 px-4 rounded-lg  transition duration-300 ease-in-out"
                >
                <i className="fab fa-google text-lg mr-2  "></i>
                Login with Google
            </button>
            <p>Don't have any account ? <NavLink to="/register" className="text-blue">Register</NavLink></p>
        </div>
                </div>
    );
}

export default LoginPage;
