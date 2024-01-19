import BookForm from "./bookForm";

export default function BookingSection(){
    return(
        <section id='booking-section' className='w-full h-auto px-36 py-20 flex flex-col items-center gap-5'>
      <div className='text-white text-center flex flex-col self-end justify-center w-1/2'>
        <h4 className='text-primaryOrange font-allison text-4xl ml-2'>booking</h4>
        <h2 className="font-inika text-6xl">Make an appointment</h2>
        <p className="font-athiti text-xl mt-3">+367 846 8945</p>
        <p className="text-base font-sans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, omnis reiciendis ex provident vel aliquid quas officia laborum quo possimus? </p>
      </div>
      <div className='text-white self-start  border-2 border-white'>
        <BookForm />
      </div>
     </section>
    )
}