import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from '../../components/Footer';
import { Hero } from '../../components/Hero';
import Products from '../../components/producs/Products';
import CartContext from '../../context/CartStorage';
import { ThemeContext } from '../../ThemeProvider';
import Annouce from '../../components/Annouce';

const Layout = () => {
    const {cartData,} = CartContext()
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    return (
        <div  className={`${isDarkMode?"bg-bgcolor text-[white]":'bg-gray-100 text-bgcolor'}`}>
            
            <Annouce/>
            <Navbar cartData={cartData}/>
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
