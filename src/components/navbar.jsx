import React, { useState, useEffect } from "react";
import { FiMenu } from 'react-icons/fi'
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import clsx from "clsx";
import logo from '../assets/logo1.png';

export default function Navbar(){
    const [isSideMenuOpen, setMenu] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const section = document.getElementById('booking-section');
        section.scrollIntoView({ behavior: 'smooth' });
      };

      useEffect(() => {
        const handleScroll = () => {
          const position = window.pageYOffset;
          setScrollPosition(position);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  
      const bgColor = scrollPosition > 100 ? 'black' : 'transparent';

    return(
      <div id="navbar" className="">
        <nav style={{ backgroundColor: bgColor}} className="w-full fixed  z-20 flex justify-between px-6 items-center py-6 lg:py-6 lg:px-24 ">
       <div className="flex items-center gap-8">
       <div className="flex items-center gap-4">
            <FiMenu onClick={() => setMenu(true)} className="text-3xl cursor-pointer text-gray-400 lg:hidden"/>
            <Link to="/" className="text-4xl text-white font-serif font-thin">Masters
                {/* <img src={logo} alt="logo" className="w-36 h-30 md1200:w-24 md1200:h-20" /> */}
            </Link>
        </div>
        <div className="flex gap-8 ml-11 mt-2 md1200:ml-2 md1200:gap-4">
        {navlinks.map((d, i) => 
                 <Link key={i} to={d.link} className="hidden  uppercase text-gray-400 text-base hover:text-primaryOrange lg:block md1200:text-sm">{d.label}</Link>
                 )}
        </div>
       </div>
        {/* sidebar mobile */}
        <div  onClick={() => setMenu(false)} className={clsx("fixed h-full -translate-x-full transition-all w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 z-40", isSideMenuOpen && 'translate-x-0')}>
             <div className="text-black bg-white flex flex-col absolute w-56 left-0 top-0 h-screen p-8 gap-8 z-50">
                <IoCloseOutline
                onClick={() => setMenu(false)}
                 className="mt-0 mb-8 text-3xl cursor-pointer" />
                {navlinks.map((d, i) => 
                 <Link key={i} to={d.link} className="font-bold">{d.label}</Link>
                 )}
             </div>
        </div>
        {/*  */}
        <div className="flex items-center gap-4">
            <AiOutlineShoppingCart className="text-3xl  text-gray-400 cursor-pointer" />
            <button onClick={handleScroll} className="md1200:text-sm min800:hidden text-base font-mono text-white bg-zinc-900 hover:bg-zinc-800  ease-in-out px-2 py-2 shadow-lg">Book apointment</button>
        </div>
      </nav>
      
      </div>
    )
}

const navlinks = [
    {
        label: "Home",
        link: "/"
    },
    {
        label: "About",
        link: "/about"
    },
    {
        label: "Services",
        link: "/services"
    },
    {
        label: "Team",
        link: "/team"
    },
    {
        label: "Gallery",
        link: "/gallery"
    },
    {
        label: "Shop",
        link: "/shop"
    },
    {
        label: "Contact",
        link: "/contact"
    },
]