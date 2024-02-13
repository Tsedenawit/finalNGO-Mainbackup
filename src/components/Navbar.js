import React, { useState } from "react";
import Button from "./Button";
import LOGO from "../images/Bright Thought Logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  let Links = [
    
    { name: "Home", link: "/home" },
    { name: "Service", link: "/services" }, // Fix the link paths
    { name: "About Us", link: "/aboutus" },
    { name: "Donate", link: "/donate" },
    { name: "Contact", link: "/contact" },
    
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-10 ">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer
                 flex items-center font-[Poppins] text-gray-800">
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <span>
              <img className="w-10 md:w-16 duration-500 hover:scale-105" src={LOGO} alt="Logo" />
            </span>
          </span>
        </div>
        <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12
                absolute md:static bg-white md:z-auto z-[-1]
                left-0 w-full md:w-auto md:pl-0 pl-9 transition-all
                duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px] md:opacity-100 opacity-0'}`}>
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <Link to={link.link} className="text-gray-800 hover:text-gray-400 duration-500">
                {link.name}
              </Link>
            </li>
          ))}
          <Button>Get started</Button>
        </ul>
      </div>
    </div>
  );
}
