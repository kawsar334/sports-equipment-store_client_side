import React from "react";
import { Fade } from "react-awesome-reveal"; // Import the Fade component

export const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content mt-10">
      <div className="container mx-auto py-8 px-4">
        {/* Footer Content */}
        <Fade duration={1000}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Website Name */}
            <div className="mb-4">
              <h1 className="text-2xl font-bold">EquiSports</h1>
              <p className="w-[300px]">Your one-stop shop for all sports equipment and accessories.</p>
            </div>

            {/* Contact Info */}
            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-2">Contact Info</h2>
              <p>Email:kawsarfiroz11@gmail.com</p>
              <p>Phone: +966509325731</p>
              <p>Address: 123 Sports Lane, Fitness City, USA</p>
            </div>

            {/* Social Media Links */}
            <div className="mb-4">
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
            </div>
          </div>
        </Fade>

        {/* Copyright Section */}
        <Fade duration={1000}>
          <div className="mt-8 text-center border-t py-5">
            <p>
              &copy; {new Date().getFullYear()} EquiSports. All rights reserved.
            </p>
          </div>
        </Fade>
      </div>
    </footer>
  );
};
