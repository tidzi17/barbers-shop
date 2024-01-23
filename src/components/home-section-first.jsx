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
                            <h3 className="text-2xl pb-3">Lorem ipsum dolor</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At expedita libero eum hic earum beatae cumque assumenda.</p>
                        </div>
                        <div className="px-1 py-1 flex flex-col text-left w-3/4 h-fit">
                            <h3 className="text-2xl pb-3">Lorem ipsum dolor</h3>
                            <p className="text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. At expedita libero eum hic earum beatae cumque assumenda.</p>
                        </div>
                        <div className="px-1 py-1 flex flex-col text-left w-3/4 h-fit">
                            <h3 className="text-2xl pb-3">Lorem ipsum dolor</h3>
                            <p className="text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. At expedita libero eum hic earum beatae cumque assumenda.</p>
                        </div>
                        <div className="px-1 py-1 flex flex-col text-left w-3/4 h-fit">
                            <h3 className="text-2xl pb-3">Lorem ipsum dolor</h3>
                            <p className="text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. At expedita libero eum hic earum beatae cumque assumenda.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
