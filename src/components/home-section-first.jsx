import React from "react";
import random from '../assets/firstsection.png';

export default function HomeSectionFirst(){
    return(
        <section id="first-section" className="px-20 pt-20 bg-white text-white" >
            <div className="flex flex-col w-full">
                <div className="w-1/2">
                    <p className="font-allison text-primaryOrange text-5xl">somethin</p>
                    <p className="font-antonio text-primaryGrey text-3xl font-light">Experience unparalleled grooming at our barbershop, where skilled stylists blend traditional craftsmanship with modern trends. Elevate your look with precision cuts, personalized grooming, and a touch of timeless sophistication. </p>
                </div>
                <div className="w-2/3  h-96 self-end mt-10">
                    <img src={random} alt="somephoto" className="object-cover w-full h-full" />
                </div>
            </div>
            <div  className="flex justify-center flex-col items-center mt-20 pb-5">
                <p className="font-allison text-primaryOrange text-5xl">services</p>
                <p className="font-antonio text-white text-5xl">Popular services</p>
            </div>

        </section>
    )
}