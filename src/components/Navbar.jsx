import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Tooltip as ReactTooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import { AuthContext } from "../context/AuthProviders";
import { Fade } from "react-awesome-reveal";
import { ThemeContext } from "../ThemeProvider";

const Navbar = () => {
  const { createUser, user, signOutUser } = useContext(AuthContext)
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const item = JSON.parse(localStorage.getItem("cart"));

  return (
    <div className={`${isDarkMode ? "navbar bg-[#161b1d] text-[white] shadow-lg sticky top-0 left-0 z-20" : "navbar bg-[white] text-[#161b1d] shadow-lg sticky top-0 left-0 z-20"}`}>
      <div className="navbar-start ">
        <Link to="/" className="btn btn-ghost hover:bg-transparent normal-case text-xl ">
        <Fade>
            <span className="text-blue text-2xl">Sports</span> <span>Equipment</span>
            {/* <img src="https://landing.engotheme.com/shopify/spotie/assets/images/logo_white.png" className="w-[160px] h-[50px] bg-blue" alt="" /> */}
        </Fade>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-3 px-1">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "bg-blue text-[#161b1d]" : undefined}>
            <Fade>
              Home
            </Fade>
            </NavLink>
          </li>
          <li>
            <NavLink to="/equipment" className={({ isActive }) => isActive ? "bg-blue text-[#161b1d]" : undefined}>
            <Fade>
              Equepments
            </Fade>
            </NavLink>
          </li>
          {!user&&<li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "bg-blue text-[#161b1d]" : undefined}>
              <Fade>
                About us
              </Fade>
            </NavLink>
          </li>}
          {user && (
            <>
              <li>
                <Fade>

                <NavLink to="/create" className={({ isActive }) => isActive ? "bg-blue text-[#161b1d]" : undefined}>
                  Add Equipment
                </NavLink>
                </Fade>
              </li>
              <li>
                <Fade>

                  <NavLink to="/myequipment" className={({ isActive }) => isActive ? "bg-blue   text-white" : undefined}>
                  My Equipments
                </NavLink>
                </Fade>
              </li>
              <li>
                <button className="bg-blue text-white hover:bg-bgcolor hover:border-blue border font-bold" onClick={() => signOutUser()}>
                  Log Out
                </button>
              </li>
            </>
          )}
        </ul>
      </div>

      <div className="navbar-end">
        
        <button
          onClick={toggleTheme}
          className={`text-2xl border rounded-full ${isDarkMode?"text-white":"text-bgcolor"}  mr-6 px-2 capitalize flex justify-center items-center gap-0 md:gap-2`}
          aria-label="Toggle Theme"
        >       
            <span className="">
            {!isDarkMode ? <i className="fas fa-moon"></i> : <i className="fas fa-sun"></i>}
          </span>
        </button>

        {user ? (
          <div className="dropdown dropdown-end">
            <Fade>

            <div>
              <NavLink to="/profile" data-tooltip-id="my-tooltip" className="cursor-pointer" data-tooltip-content={user?.displayName}>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL || "https://via.placeholder.com/150"} alt="User" />
                  </div>
                </label>
                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                  <li>
                    <span>{user?.displayName}</span>
                  </li>
                  <li>
                      <button className="bg-blue text-[#161b1d] font-bold" onClick={() => signOutUser()}>
                      Log Out
                    </button>
                  </li>
                </ul>
              </NavLink>
              <ReactTooltip id="my-tooltip" />
            </div>
            </Fade>
          </div>          
        ) : (
          <div className="flex gap-2">
            <Link to="/login" className="py-1 PX-1 md:px-2 border-none md:border rounded-full cursor-pointer ">
              Login
            </Link>
            <Link to="/register" className="py-1 PX-1 md:px-2 border-none md:border rounded-full cursor-pointer hidden md:flex ">
              Register
            </Link>
          </div>
        )}
      </div>

      <div className="dropdown dropdown-end lg:hidden">
        <label tabIndex={0} className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </label>
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          
          <li>
            <NavLink to="/equipment">Sports Equipments</NavLink>
          </li>
          {user && (
            <>
              <li>
                <NavLink to="/create">Add Equipment</NavLink>
              </li>
              <li>
                <NavLink to="/myequipment">My Equipments </NavLink>
              </li>
               
              <li>
                <button className="bg-blue  hover:bg-blue text-red-300 font-bold" onClick={() => signOutUser()}>
                  Log Out
                </button>
              </li>

              
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
