
export default function DiscountBanner(){
    const handleScroll = () => {
        const section = document.getElementById('booking-section');
        section.scrollIntoView({ behavior: 'smooth' });
      };
    return(
        <div className="bg-black w-full h-36 flex justify-between items-center px-36">
            <p className="text-white font-antonio font-light text-4xl">Get 10% off by booking online</p>
            <button onClick={handleScroll} className="text-white font-antonio font-light text-2xl w-fit h-fit px-7 py-2 border-[1px] border-zinc-300 rounded-lg">Book Apointment</button>
        </div>
    )
}