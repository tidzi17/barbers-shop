import React from "react";

export default function HomeSectionFirst(){
    return(
        <section id="first-section" className=" text-white  " >
            <div className="flex  w-full  px-10 pt-24 pb-10">
                <div className="w-1/2 h-full">
                    <p className=" text-5xl  uppercase font-semibold">Crafting Confidence, One Cut at a Time.</p>
                </div>
                <div className="w-1/2 h-full flex items-center justify-center">
                    <div className="grid grid-cols-2 grid-rows-2 gap-10 mt-12">
                        <div className="px-1 py-1 flex flex-col text-left w-3/4 h-fit">
                            <h3 className="text-2xl pb-3">Expert Barbers</h3>
                            <p className="text-base">Trust in the expertise of our skilled barbers who bring years of experience and passion to every haircut, ensuring precision and perfection with each snip.</p>
                        </div>
                        <div className="px-1 py-1 flex flex-col text-left w-3/4 h-fit">
                            <h3 className="text-2xl pb-3">Personalized Service</h3>
                            <p className="text-base">Experience personalized service tailored to your unique style and preferences, where every visit is an opportunity to indulge in luxury grooming experiences.</p>
                        </div>
                        <div className="px-1 py-1 flex flex-col text-left w-3/4 h-fit">
                            <h3 className="text-2xl pb-3">Attention to Detail</h3>
                            <p className="text-base">With meticulous attention to detail, we ensure that every haircut reflects our commitment to excellence, leaving you looking and feeling your best after each visit.</p>
                        </div>
                        <div className="px-1 py-1 flex flex-col text-left w-3/4 h-fit">
                            <h3 className="text-2xl pb-3">Welcoming Atmosphere</h3>
                            <p className="text-base">Step into our welcoming atmosphere and discover a sense of comfort and relaxation as you receive top-notch grooming services from our friendly and professional team.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
