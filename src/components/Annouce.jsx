import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../context/AuthProviders';

const Annouce = () => {
    const item = JSON.parse(localStorage.getItem("cart"));
     const { createUser, user, signOutUser } = useContext(AuthContext)
   
  return (
    <div className='w-full bg-blue flex justify-between px-10 py-2'>
          <div className="flex  space-x-6 text-sm text-gray-700">
                          <div className=" items-center space-x-2 ">
              
                  Supper Deal Free Shipping on Orders Over $50 !
                  
              </div>
          </div>
          <div className="flex space-x-4">
              <NavLink
                  to="/cart"
                  className=" text-white"
              >
                  <div class="relative">
                      <i class="fas fa-shopping-cart text-blue-500 text-2xl"></i>
                      <span class="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
                        {item?.length}
                      </span>
                  </div>
              </NavLink>
          </div>
  
    </div>
  )
}

export default Annouce