import React from "react";

export default function HomeSectionFirst(){
    return(
        <section id="first-section" className=" text-white  " >
            <div className="flex  w-full flex-col md:flex-row  px-2 md:px-10 pt-12 md:pt-24 pb-10">
                <div className="w-full md:w-1/2 h-full">
                    <p className="text-2xl md:text-3xl lg:text-5xl  uppercase font-semibold">Crafting Confidence, One Cut at a Time.</p>
                </div>
                <div className="w-full md:w-1/2 h-full flex  items-center justify-center">
                    <div className="grid grid-cols-2 grid-rows-2 gap-4 md:gap-10 mt-7 md:mt-16 ">
                        <div className="px-1 py-1 flex flex-col text-left md:w-3/4 h-fit order-4">
                            <h3 className="text-xl md:text-2xl pb-3">Expert Barbers</h3>
                            <p className="text-xs md:text-base">Trust in the expertise of our skilled barbers who bring years of experience and passion to every haircut, ensuring precision and perfection with each snip.</p>
                        </div>
                        <div className="px-1 py-1 flex flex-col text-left h-fit md:w-3/4">
                            <h3 className="text-xl md:text-2xl pb-3">Personalized Service</h3>
                            <p className="text-xs md:text-base">Experience personalized service tailored to your unique style and preferences, where every visit is an opportunity to indulge in luxury grooming experiences.</p>
                        </div>
                        <div className="px-1 py-1 flex flex-col text-left  h-fit md:w-3/4">
                            <h3 className="text-xl md:text-2xl pb-3">Attention to Detail</h3>
                            <p className="text-xs md:text-base">With meticulous attention to detail, we ensure that every haircut reflects our commitment to excellence, leaving you looking and feeling your best after each visit.</p>
                        </div>
                        <div className="px-1 py-1 flex flex-col text-left  h-fit md:w-3/4">
                            <h3 className="text-xl md:text-2xl pb-3">Welcoming Atmosphere</h3>
                            <p className="text-xs md:text-base">Step into our welcoming atmosphere and discover a sense of comfort and relaxation as you receive top-notch grooming services from our friendly and professional team.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
