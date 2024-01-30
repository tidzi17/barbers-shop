    import React, { useState, useEffect, useRef } from "react";
    import { useFormik } from "formik";
    import { formSchema } from "./formSchema";
    import { IoIosCheckmarkCircle } from "react-icons/io";
    import { RxCross2 } from "react-icons/rx";


    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        actions.resetForm()
    };

    const  BookForm = () => {
        const [isSubmitted, setIsSubmitted] = useState(false);
        const [submittedValues, setSubmittedValues] = useState(null);
        const messageBoxRef = useRef(null);

        const {values, errors, touched, isSubmitting,  handleChange, handleSubmit} = useFormik({
            initialValues: {
            date: "",
            time: "",
            name: "",
            contact: "", 
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
            <div className="w-full h-full">
                <form onSubmit={handleFormSubmit}  autoComplete="off" className="flex flex-col items-center w-full gap-6">
                <div className="flex gap-3 w-full h-12">

                    <div className={`w-1/2  pl-3  h-full  border-[1px]  ${errors.date && touched.date ? "border-red-500" : "border-zinc-300"} relative`}>
                    <input 
                    value={values.date}
                    onChange={handleChange}
                    type="date" placeholder="Date" id="date"
                    className="w-full h-full bg-transparent  placeholder:text-neutral-700 placeholder:pl-3 outline-none"></input>
                    {errors.date && touched.date && <p className="absolute bottom-[-25px] text-red-500 font-sans font-light text-sm">{errors.date}</p>}
                    </div>

                    <div className={`w-1/2  h-full  pl-3  border-[1px]  ${errors.time && touched.time ? "border-red-500" : "border-zinc-300"} relative`}>
                    <input value={values.time}
                    onChange={handleChange}
                    type="time" min="08:00" max="20:00" 
                    placeholder="Time" id="time" 
                    className="w-full h-full bg-transparent  placeholder:text-neutral-700 placeholder:pl-3 outline-none"></input>
                    {errors.time && touched.time && <p className="absolute bottom-[-25px] text-red-500 font-sans font-light text-sm">{errors.time}</p>}
                    </div>
                </div>

                <div className={`w-full h-12 border-[1px]  pl-3  ${errors.name && touched.name ? "border-red-500" : "border-zinc-300"} relative`}>
                    <input
                        value={values.name}
                        onChange={handleChange}
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Your first & last name"
                        className={`w-full h-full bg-transparent  placeholder-pl-3 placeholder:text-neutral-700 outline-none `}
                    />
                    {errors.name && touched.name && <p className="absolute bottom-[-25px] text-red-500 font-sans font-light text-sm">{errors.name}</p>}
                    </div>

                <div className={`w-full h-12 border-[1px]  pl-3  ${errors.contact && touched.contact ? "border-red-500" : "border-zinc-300"} relative`}>
                <input
                value={values.contact} 
                onChange={handleChange} 
                type="tel" name="contact" id="contact"
                placeholder="Your Phone Number" 
                className="w-full h-full bg-transparent  placeholder:text-neutral-700 outline-none"/>
                {errors.contact && touched.contact && <p className="absolute bottom-[-25px] text-red-500 font-sans font-light text-sm">{errors.contact}</p>}
                </div>

                <div className="w-full h-32 pl-3 border-[1px] border-zinc-300">
                <textarea
                value={values.message} 
                onChange={handleChange} 
                name="message" id="message" placeholder="Your message" 
                className="w-full h-full bg-transparent placeholder:text-neutral-700 outline-none"></textarea>
                </div>
                
                <button  disabled={isSubmitting}  type="submit" className="font-mono text-base bg-zinc-800 text-zinc-400 px-4 py-2">Book Apointment</button>
                </form>
                {isSubmitted && (
               <div ref={messageBoxRef} className="fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm z-30 flex justify-center items-center">
               <div className="w-96 h-[500px] p-8 bg-zinc-900 shadow-zinc-800 shadow-sm rounded-lg ">
              
                <div className="flex flex-col items-center text-center relative">
                <button className="absolute top-1 right-1 text-white" onClick={() => setIsSubmitted(false)}><RxCross2 className="text-2xl text-white" /></button>
                <IoIosCheckmarkCircle className="text-6xl text-green-900" />
                <h2 className="text-green-600">Booking Succesful!</h2>
                <p className="text-white">Thank you for booking apointment at Barber Shop Masters! We can't wait to see you!</p>
                </div>
                {submittedValues && (
                <div className="text-black relative">
                    <h2 className="text-white mt-10 mb-2">Booking info:</h2>
               <ul className="text-zinc-300 flex flex-col gap-2">
                <li><span className="font-bold">Date:</span> {submittedValues.date}</li>
                <li><span className="font-bold">Time:</span> {submittedValues.time}</li>
                <li><span className="font-bold">Name:</span> {submittedValues.name}</li>
                <li><span className="font-bold">Contact:</span> {submittedValues.contact}</li>
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

    export default BookForm;


