

export default function BookForm(){
    return(
        <div>
            <form className="flex flex-col w-[600px]  gap-5">
                <div className="flex gap-3  w-[300px] h-[40px]">
                <input type="date" placeholder="Date" className="bg-transparent border-b-[1px] border-gray-400 w-1/2"></input>
                <input type="time" min="08:00" max="20:00" placeholder="Time" className="bg-transparent border-b-[1px] border-gray-400 w-1/2"></input>
                </div>
                <input type="text" placeholder="Name" className="bg-transparent border-b-[1px] border-gray-400 w-[300px] h-[40px]" name="name" id="name" />
                <input type="tel" placeholder="PhoneNumber" className="bg-transparent border-b-[1px] border-gray-400  w-[300px] h-[40px]" name="" id="" />
                <textarea placeholder="Message" className="bg-transparent border-b-[1px] border-gray-400 w-[300px] h-[60px]"></textarea>
            </form>
            <button type="submit" className="bg-transparent border-[1px] border-gray-400 w-[300px] h-[60px] mt-5">Submit</button>
        </div>
    )
}