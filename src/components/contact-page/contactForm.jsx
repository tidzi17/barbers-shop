import React, { useState, useRef } from "react";
import { useFormik } from "formik";
import { formSchema } from "./formSchema";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import axios from 'axios';

   /*  const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        actions.resetForm()
    }; */

 const ContactForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submittedValues, setSubmittedValues] = useState(null);
    const messageBoxRef = useRef(null);

    const onSubmit = async (values, actions) => {
        try {
            await axios.post("https://formspree.io/f/xyyrewny", values);
            actions.setSubmitting(false);
            actions.resetForm();
            setIsSubmitted(true);
        } catch (error) {
            console.error('Error submitting form:', error);
            actions.setSubmitting(false);
        }
    };

    const {values, errors, touched, isSubmitting, handleBlur,  handleChange, handleSubmit} = useFormik({
        initialValues: {
        name: "",
        contact: "", 
        email: "",
        message: "",
    },
        validationSchema: formSchema,
        onSubmit: (formValues, actions) => {
            setSubmittedValues(formValues);
            onSubmit(formValues, actions);
            setIsSubmitted(true);
        },
    });

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        await handleSubmit();
        
    };

    return(
        <div>
            <form onSubmit={handleFormSubmit}  autoComplete="off" className="flex flex-col items-center w-full gap-7">
                <div className={`w-full h-12 bg-neutral-800 pl-3 border-[1px] ${errors.name && touched.name ? "border-red-500" : "border-zinc-600"} relative`}>
                <input
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                name="name"
                id="nameContact"
                placeholder="Your First & Last Name"
                className="w-full h-full bg-transparent outline-none  placeholder:text-neutral-700 " />
                {errors.name && touched.name && <p className="absolute bottom-[-25px] text-red-500 font-sans font-light text-sm">{errors.name}</p>}
                </div>
                
                <div  className={`w-full h-12 bg-neutral-800 pl-3 border-[1px] ${errors.contact && touched.contact ? "border-red-500" : "border-zinc-600"} relative`}>
                <input
                value={values.contact} 
                onChange={handleChange} 
                onBlur={handleBlur}
                type="tel"
                name="contact" 
                id="contactContact" 
                placeholder="Your Phone Number"
                className="w-full h-full bg-transparent outline-none  placeholder:text-neutral-700 " />
                {errors.contact && touched.contact && <p className="absolute bottom-[-25px] text-red-500 font-sans font-light text-sm">{errors.contact}</p>}
                </div>

                <div  className={`w-full h-12 bg-neutral-800 pl-3 border-[1px] ${errors.email && touched.email ? "border-red-500" : "border-zinc-600"} relative`}>
                <input
                value={values.email} 
                onChange={handleChange} 
                onBlur={handleBlur}
                type="email"
                name="email" 
                id="emailContact" 
                placeholder="Your Email"
                className="w-full h-full bg-transparent outline-none  placeholder:text-neutral-700 " />
                {errors.email && touched.email && <p className="absolute bottom-[-25px] text-red-500 font-sans font-light text-sm">{errors.email}</p>}
                </div>


                <div className={`w-full h-32 bg-neutral-800 pl-3 pt-2 border-[1px] ${errors.message && touched.message ? "border-red-500" : "border-zinc-600"} relative`}>
                <textarea
                value={values.message} 
                onChange={handleChange} 
                onBlur={handleBlur}
                type="message"
                name="message" 
                id="messageContact" 
                placeholder="Your Message"
                className="w-full h-full resize-none bg-transparent outline-none  placeholder:text-neutral-700 " />
                {errors.message && touched.message && <p className="absolute bottom-[-25px] text-red-500 font-sans font-light text-sm">{errors.message}</p>}
                </div>
                <button  disabled={isSubmitting}  type="submit" className="px-5 rounded-lg py-2 font-mono text-base bg-zinc-300 text-black ">Send message</button>
            </form>

            {isSubmitted && (
               <div  onClick={() => setIsSubmitted(false)} ref={messageBoxRef} className="fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm z-30 flex justify-center items-center">
               <div className="w-96 h-[500px] p-8 bg-zinc-900 shadow-zinc-800 shadow-sm rounded-lg ">
              
                <div className="flex flex-col items-center text-center relative">
                <button className="absolute top-1 right-1 text-white" onClick={() => setIsSubmitted(false)}><RxCross2 className="text-2xl text-white" /></button>
                <IoIosCheckmarkCircle className="text-6xl text-green-900" />
                <h2 className="text-green-600">Message Sent!</h2>
                <p className="text-white">Thank you for reaching out to Us! We will respond as soon as possible.</p>
                </div>
                {submittedValues && (
                <div className="text-black relative">
                    <h2 className="text-white mt-10 mb-2">Message info:</h2>
               <ul className="text-zinc-300 flex flex-col text-left gap-2">
                <li><span className="font-bold">Name:</span> {submittedValues.name}</li>
                <li><span className="font-bold">Contact:</span> {submittedValues.contact}</li>
                <li><span className="font-bold">Email:</span> {submittedValues.email}</li>
                <li><span className="font-bold">Message:</span> {submittedValues.message}</li>
               </ul>
                </div>
                 )}
                 </div>
                </div>
                  )}
        </div>
    )
}

export default ContactForm;