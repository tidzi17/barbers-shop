import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";



export default function Footer(){
    return(
        <div>
            <h1 className="text-white  w-full py-5">
                <div className="grid md:grid-cols-4 gap-20  justify-between w-11/12 m-auto py-20 lg:mb-10">
                    <div className="w-full h-full">
                        <h3  className="text-4xl lg:text-6xl  text-white font-serif font-thin mb-5">Masters</h3>
                        <p className="text-lg font-sans font-light mb-5">Transforming your look and confidence through masterful grooming experiences. </p>
                      <div className="social-buttons flex flex-wrap gap-5 ">
                      <div className="social-button social-button--facebook" aria-label="Facebook">
                    <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
                    </div>
                    <div className="social-button social-button--instagram" aria-label="Instagram">
                    <FontAwesomeIcon icon={faInstagram} className="social-icon" />
                    </div>
                    <div className="social-button social-button--twitter" aria-label="Twitter">
                    <FontAwesomeIcon icon={faTwitter} className="social-icon" />
                    </div>
                    <div className="social-button social-button--youtube" aria-label="Youtube">
                    <FontAwesomeIcon icon={faYoutube} className="social-icon" />
                    </div>
                      </div>
                    </div>
                    <div className=" w-full h-full ">
                        <h3 className="text-3xl lg:text-5xl font-alumni mb-5">Quick Links</h3>
                        <ul className="md:grid md:grid-cols-2">
                        {navlinks.map((d, i) => 
                 <Link key={i} to={d.link} className="text-base lg:text-lg font-light tracking-wider font-sans ">
                    <li>{d.label}</li>
                 </Link>
                 )}
                        </ul>
                    </div>
                    <div className=" w-full h-full ">
                        <h3 className="text-3xl lg:text-5xl font-alumni mb-5">Working Hours</h3>
                        <p className="font-sans font-light text-base lg:text-lg">Monday-Thursday: <span>07h-21h</span></p>
                        <p className="font-sans font-light text-base lg:text-lg">Friday-Saturday: <span>07h-18h</span></p>
                        <p className="font-sans font-light text-base lg:text-lg">Sunday: <span>10h-15h</span></p>
                    </div>
                    
                    <div className=" w-full h-full ">
                        <h3 className="text-3xl lg:text-5xl font-alumni mb-5">Contact Us</h3>
                        <p className="font-sans font-light text-base lg:text-lg"><span className="font-bold">Phone:</span> +364 555 555</p>
                        <p className="font-sans font-light text-base lg:text-lg"><span className="font-bold">Adress:</span> 21. Jump Street <br></br>NYC 2546, USA</p>
                        <p className="font-sans font-light text-base lg:text-lg"><span className="font-bold">Email:</span> masters@mail.com</p>
                    </div>

                </div>
                <div className="w-11/12 border-t-[1px] border-zinc-300 m-auto flex items-center pt-5">
                    <p className="m-auto text-sm lg:text-base font-sans text-zinc-500">&copy;Copyright 2024 All rights reserved</p>
                </div>
            </h1>
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