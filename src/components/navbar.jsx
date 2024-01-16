import React from "react";

import { useNavigate } from "react-router-dom";

export default function Navbar(){
    const navigate = useNavigate();
    /* const [Mobile, setMobile] = useState(false); */
    return(
        <div className="z-20 flex fixed w-full h-20 bg-neutral-950  ">
            <div className="logo"><p>LOGO</p></div>
            <nav className="">
                <ul className="flex gap-16 text-white from-stone-100">
                <li onClick={() => navigate("/")}>Home</li>
                <li onClick={() => navigate("/about")}>About</li>
                <li onClick={() => navigate("/services")}>Services</li>
                <li onClick={() => navigate("/team")}>Team</li>
                <li onClick={() => navigate("/gallery")}>Gallery</li>
                <li onClick={() => navigate("/contact")}>Contact</li>
                <li onClick={() => navigate("/shop")}>Shop</li>
                </ul>
                </nav>
                <div className="flex">
                    <p>cart</p>
                    <button>button</button>
                </div>
        </div>
    )
}