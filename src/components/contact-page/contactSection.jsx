import React from "react"
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import ContactForm from "../contactForm";

export default function ContactSection(){
    return(
        <div className="w-full ">
        <div className="w-full  flex flex-col items-center text-center py-10 text-white">
            <div>
                <h3 className="font-allison text-primaryOrange text-4xl">Get in touch with us</h3>
                <div className="flex items-center justify-between gap-6  mt-10 self-center">
                    <div className="flex flex-col items-center text-center px-4 ">
                        <FaPhoneAlt className="text-3xl text-primaryOrange"/>
                        <p className="text-2xl font-mono text-primaryOrange uppercase">Phone</p>
                        <p className="font-sans text-base pt-2">+365 465 315</p>
                    </div>
                    <div className="flex flex-col items-center text-center border-r-[1px] border-l-[1px] px-4 border-white">
                    <FaEnvelope className="text-3xl text-primaryOrange"/>
                        <p className="text-2xl font-mono font-extralight text-primaryOrange uppercase">Email</p>
                        <p className="font-sans text-base pt-2">barbershop@mail.com</p>
                    </div>
                    <div className="flex flex-col items-center text-center px-4 ">
                    <FaUser className="text-3xl text-primaryOrange"/>
                        <p className="text-2xl font-mono text-primaryOrange uppercase">Location</p>
                        <p className="font-sans text-base pt-2">25. Jump Street, NYC</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center mt-16">
                <p className="w-2/5 m-auto text-base">Stay sharp and get in touch! Whether you're scheduling your next haircut or have questions about our services, we're here to make your grooming experience exceptional.</p>
                <div className="w-1/2 m-auto px-3 mt-10">
                <ContactForm />
                </div>
            </div>
        </div>
    </div>
    )
   
}