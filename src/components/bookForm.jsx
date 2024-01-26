

export default function BookForm(){
    return(
        <div className="w-full h-full">
            <form action="" className="flex flex-col items-center w-full gap-4">
            <div className="flex gap-3 w-full h-12">
            <input type="date" placeholder="Date" className="w-1/2 bg-transparent  placeholder:text-neutral-700 placeholder:pl-3 border-[1px] border-zinc-300"></input>
            <input type="time" min="08:00" max="20:00" placeholder="Time" className="w-1/2 bg-transparent  placeholder:text-neutral-700 placeholder:pl-3 border-[1px] border-zinc-300"></input>
            </div>
            <input type="text" name="name" id="name" placeholder="Your Name" className="w-full h-12 bg-transparent  placeholder:text-neutral-700 placeholder:pl-3 border-[1px] border-zinc-300" />
            <input type="tel" name="phonenum" id="phonenum" placeholder="Your Phone Number" className="w-full h-12 bg-transparent  placeholder:text-neutral-700 placeholder:pl-3 border-[1px] border-zinc-300"/>
            <textarea name="message" id="message" placeholder="Your message"  className="w-full h-32 bg-transparent placeholder:text-neutral-700 placeholder:pl-3 border-[1px] border-zinc-300"></textarea>
            <button type="submit" className="font-mono text-base bg-zinc-800 text-zinc-400 px-4 py-2">Send message</button>
            </form>
        </div>
    )
}




