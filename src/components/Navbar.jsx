import React from "react";
import logo from "../assets/svg-logos.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const {user,logout} = useAuth()
  const navigate = useNavigate();
  return (
    <div className="absolute top-0 left-0 w-full z-10 bg-white/10 backdrop-blur-md">
      <div className="flex justify-between items-center h-[15vh] px-4">
        <div>
          <img src={logo} alt="logo" />
        </div>

        <div className="flex items-center gap-6 text-black">
          <Link to='/'
            className=" hover:[text-shadow:0_0_8px_rgba(217,119,6,1),0_0_8px_rgba(217,119,6,1)]"
          >
            HOME
          </Link>
          <Link to='/products'
            className="hover:[text-shadow:0_0_8px_rgba(217,119,6,1),0_0_8px_rgba(217,119,6,1)]"
          >
            PRODUCTS
          </Link>
          <Link to='/cart'
            className="hover:[text-shadow:0_0_8px_rgba(217,119,6,1),0_0_8px_rgba(217,119,6,1)]"
          >
            CART
          </Link>
          <Link to='/account'
            className="hover:[text-shadow:0_0_8px_rgba(217,119,6,1),0_0_8px_rgba(217,119,6,1)]"
          >
            ACCOUNT
          </Link>
        </div>

        <div>
          {user === null ?
          <button
            onClick={() => navigate("/login")}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Login
          </button>: 
          <button
            onClick={logout}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Logout
          </button>
          }
        </div>
      </div>
    </div>
  );
}

export default Navbar;
