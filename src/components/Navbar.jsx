import React from "react";
import logo from "../assets/svg-logos.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate()
  return (
    <div className="absolute top-0 left-0 w-full z-10 bg-white/10 backdrop-blur-md">
      <div className="flex justify-between items-center h-[15vh] px-4">
        <div>
          <img src={logo} alt="logo" />
        </div>

        <div className="flex items-center gap-6 text-black">
          <a href="" className="hover:text-amber-600">HOME</a>
          <a href="" className="hover:text-amber-600">ABOUT</a>
          <a href="" className="hover:text-amber-600">SERVICES</a>
          <a href="" className="hover:text-amber-600">CONTACT</a>
        </div>

        <div>
          <button onClick={() => navigate("/login")} className="px-4 py-2 bg-blue-500 text-white rounded">
            Login
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default Navbar;
