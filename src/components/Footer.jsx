import React from "react";
import { Fade } from "react-awesome-reveal"; // Import the Fade component
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content mt-10">
      <div className="container mx-auto py-8 px-4">
        {/* Footer Content */}
        <Fade duration={1000}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Website Name */}
            <div className="mb-4 " data-aos="zoom-in-down">
              <h1 className="text-2xl font-bold "><span className="text-blue text-2xl">Sports</span> Equipment</h1>
              <p className="w-[250px] text-[gray]">Your one-stop shop for all sports equipment and accessories.</p>
              <div className="flex space-x-4">
                <ul className="flex justify-center flex-col items-start flex-wrap gap-2 ">
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Products</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">About </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Login</NavLink>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mb-4" data-aos="zoom-in-up">
              <h2 className="text-lg font-semibold mb-2">Contact Info</h2>
              <p>Email:kawsarfiroz11@gmail.com</p>
              <p>Phone: +966509325731</p>
              <p>Address: 123 Sports Lane, Tif City, KSA</p>
              
            </div>

            <div className="mb-4" data-aos="zoom-in-up">
              <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
              <div className="flex space-x-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-blue-600 hover:text-blue-800"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-blue-400 hover:text-blue-600"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-pink-500 hover:text-pink-700"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-blue-700 hover:text-blue-900"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            {/*  */}
            </div>
          </div>
        </Fade>
        <Fade duration={1000}>
          <div className="mt-8 text-center border-t py-5" data-aos="zoom-in-down">
            <p>
              &copy; {new Date().getFullYear()} EquiSports. All rights reserved.
            </p>
          </div>
        </Fade>
      </div>
    </footer>
  );
};
