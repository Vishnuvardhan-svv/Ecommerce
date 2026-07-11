import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {setShowSearch,getcartCount,navigate,token,setToken,setCartItems}=useContext(ShopContext)

  const logout=()=>{
    navigate('/login')
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})
    
  }

  return (
    <>
      <nav className="flex justify-between items-center py-5 font-medium">
        {/* Logo */}
        <Link to="/">
          <img
            src={assets.logo}
            alt="logo"
            className="w-28 sm:w-36 cursor-pointer"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden sm:flex gap-6 text-sm text-gray-700">
          <NavLink
            to="/"
            className="hover:text-black transition duration-300"
          >
            HOME
          </NavLink>

          <NavLink
            to="/collection"
            className="hover:text-black transition duration-300"
          >
            COLLECTION
          </NavLink>

          <NavLink
            to="/about"
            className="hover:text-black transition duration-300"
          >
            ABOUT
          </NavLink>

          <NavLink
            to="/contact"
            className="hover:text-black transition duration-300"
          >
            CONTACT
          </NavLink>
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Search */}
          <img
            src={assets.search_icon}
            alt="search"
            className="w-5 cursor-pointer"
            onClick={()=>setShowSearch(true)}
          />

          {/* Profile Dropdown (Desktop Only) */}
          <div className="relative group hidden sm:block">
           <img onClick={()=> token ? null : navigate('/login')}
              src={assets.profile_icon}
              alt="profile"
              className="w-5 cursor-pointer"
            />

            { token && <div className="absolute right-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md w-40 py-2 z-50">
              <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                My Profile
              </p>
              <p onClick={()=> navigate('/orders')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Orders
              </p>
              <p onClick={logout} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Logout
              </p>
            </div>}
          </div>

          {/* Cart */}
          <Link to="/cart" className="relative">
            <img
              src={assets.cart_icon}
              alt="cart"
              className="w-5 min-w-5 cursor-pointer"
            />

            <span className="absolute -right-2 -bottom-2 w-4 h-4 flex items-center justify-center bg-black text-white rounded-full text-[10px]">
              {getcartCount()}
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <img
            src={assets.menu_icon}
            alt="menu"
            className="w-5 cursor-pointer sm:hidden"
            onClick={() => setVisible(true)}
          />
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out sm:hidden ${
          visible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div
          className="flex items-center gap-3 px-5 py-5 border-b cursor-pointer"
          onClick={() => setVisible(false)}
        >
          <img
            src={assets.dropdown_icon}
            alt="back"
            className="h-4 rotate-180"
          />
          <p className="text-lg font-medium">Back</p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col text-gray-700">
          <NavLink
            to="/"
            onClick={() => setVisible(false)}
            className="px-6 py-4 border-b hover:bg-gray-100"
          >
            HOME
          </NavLink>

          <NavLink
            to="/collection"
            onClick={() => setVisible(false)}
            className="px-6 py-4 border-b hover:bg-gray-100"
          >
            COLLECTION
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setVisible(false)}
            className="px-6 py-4 border-b hover:bg-gray-100"
          >
            ABOUT
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setVisible(false)}
            className="px-6 py-4 border-b hover:bg-gray-100"
          >
            CONTACT
          </NavLink>
        </div>

   
        <div className="absolute bottom-0 left-0 w-full border-t bg-white">
          <p className="px-6 py-4 hover:bg-gray-100 cursor-pointer">
            My Profile
          </p>

          <p className="px-6 py-4 hover:bg-gray-100 cursor-pointer">
            Orders
          </p>

          <p className="px-6 py-4 hover:bg-gray-100 cursor-pointer">
            Logout
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;