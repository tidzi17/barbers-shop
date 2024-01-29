import React, { useState, useEffect } from "react";
import { FiMenu } from 'react-icons/fi'
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import emptyCart from '../assets/emptycart.png';
import clsx from "clsx";

export default function Navbar(){
    const [isSideMenuOpen, setMenu] = useState(false);
    const [isCartOpen, setCart] = useState(false);
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
      <div id="navbar" className="relative">
        <nav style={{ backgroundColor: bgColor}} className="w-full fixed  z-20 flex justify-between px-6 items-center py-6 lg:py-6 lg:px-24 ">
       <div className="flex items-center gap-8">
       <div className="flex items-center gap-4">
            <FiMenu onClick={() => setMenu(true)} className="text-3xl cursor-pointer text-zinc-200 lg:text-4xl"/>
            <Link to="/" className="text-4xl text-zinc-200 font-serif font-thin">Masters
                
            </Link>
        </div>
       </div>
        {/* sidebar mobile */}
        <div  onClick={() => setMenu(false)} className={clsx("fixed h-full -translate-x-full transition-all w-screen  bg-black/50 backdrop-blur-sm top-0 right-0 z-40", isSideMenuOpen && 'translate-x-0')}>
             <div className="text-black bg-white flex flex-col absolute w-56 lg:w-64 left-0 top-0 h-screen p-10 gap-8 z-50 ">
                <IoCloseOutline
                onClick={() => setMenu(false)}
                 className="mt-0 mb-8 text-3xl lg:text-4xl cursor-pointer" />
                {navlinks.map((d, i) => 
                 <Link key={i} to={d.link} className="font-bold font-alumni uppercase text-2xl tracking-wider">{d.label}</Link>
                 )}
             </div>
        </div>
        {/*  */}
        <div className="flex items-center gap-4">
            <AiOutlineShoppingCart onClick={() => setCart(true)}  className="text-3xl  text-zinc-200 cursor-pointer" />
          <div className="nav-button-container"><button onClick={handleScroll} className="nav-button  min620:hidden">Book apointment</button></div> 
        </div>
       {/*  Cart */}
        <div  onClick={() => setCart(false)} className={
          clsx("fixed h-full transition-all w-screen -translate-x-full  bg-black/50 backdrop-blur-sm top-0 right-0 z-40",
          isCartOpen ? 'translate-x-0' : 'translate-x-full')}>
             <div
            className="text-black bg-white ml-auto transition-all  flex flex-col absolute  w-56 lg:w-64  right-0 top-0 h-screen p-10 gap-8 z-50 ">
             <IoCloseOutline
                onClick={() => setCart(false)}
                 className="mt-0 text-3xl lg:text-4xl cursor-pointer" />
                 <div className="w-full h-full px-2 flex flex-col justify-between">
                 <p className="text-xl font-alumni uppercase">Cart:</p>
                  <div>
                    <p className="text-xl font-alumni">Your cart is empty</p>
                    <img src={emptyCart} alt="" className="w-44 h-44" />
                  </div>
                  <button className="bg-black px-3 py-1 text-base text-white transform duration-200 hover:bg-white hover:border-2 hover:border-black hover:text-black" disabled>View Cart</button>
                 </div>
                
             </div>
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

