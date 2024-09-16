import React from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to="/">e-SHOP</Link>
        </div>
        <div className="relative flex-1 mx-4">
          <form action="">
            <input type="text" name="" id="" placeholder="Serach Product" className="w-full border py-3 ps-3 pe-7"/>
            <FaSearch className="absolute top-4 right-2 text-red-500"/>
          </form>
        </div>
        <div className="flex items-center space-x-4">
          <Link to='/cart'>
          <FaShoppingCart className="text-xl"/>       
          </Link>
          <button className="hidden md:block">
            Login | Register
          </button>

          <button className="text-xl block md:hidden">
            <FaUser/>
          </button>
        
        </div>
      </div>

<div className="flex justify-center items-center space-x-10 font-bold text-sm py-4">
  <Link to="/" className="hover:underline">Home</Link>
  <Link to="/" className="hover:underline">Shop</Link>
  <Link to="/" className="hover:underline">Contact</Link>
  <Link to="/" className="hover:underline">About</Link>
</div>

    </nav>
  );
}

export default Navbar;
