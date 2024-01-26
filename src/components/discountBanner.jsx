
export default function DiscountBanner(){
    const handleScroll = () => {
        const section = document.getElementById('booking-section');
        section.scrollIntoView({ behavior: 'smooth' });
      };
    return(
        <div className="bg-black w-full h-24 lg:h-36 flex justify-between items-center px-3 lg:px-20 mb-[50vh]">
            <p className="text-white font-antonio font-light text-base md:text-xl  lg:text-4xl">Get 10% off by booking online</p>
            <button onClick={handleScroll} className="text-white font-antonio font-light text-xs md:text-sm lg:text-2xl w-fit h-fit px-2 py-1 lg:px-7 lg:py-2 border-[1px] border-zinc-300 rounded-md lg:rounded-lg">Book Apointment</button>
        </div>
    )
}