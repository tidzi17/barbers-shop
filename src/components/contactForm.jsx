import React from "react";

export default function ContactForm(){
    return(
        <div>
            <form action="" className="flex flex-col items-center w-full gap-4">
                <input type="text" name="name" id="name" placeholder="Your Name" className="w-full h-12 bg-neutral-800 placeholder:text-neutral-700 placeholder:pl-3" />
                <input type="tel" name="phoneNum" id="phoneNum" placeholder="Your Phone Number"  className="w-full h-12 bg-neutral-800 placeholder:text-neutral-700 placeholder:pl-3"/>
                <input type="email" name="email" id="email" placeholder="Your Email" className="w-full h-12 bg-neutral-800 placeholder:text-neutral-700 placeholder:pl-3"/>
                <textarea name="message" id="message" placeholder="Your message"  className="w-full h-32 bg-neutral-800 placeholder:text-neutral-700 placeholder:pt-2 resize-none placeholder:pl-3"></textarea>
                <button type="submit" className="px-4 py-2 font-mono text-base bg-zinc-300 text-black ">Send message</button>
            </form>
        </div>
    )
}