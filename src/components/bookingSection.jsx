import BookForm from "./bookForm";
import { FaPhone } from "react-icons/fa6";

export default function BookingSection(){
    return(
        <section id='booking-section' className='w-full px-10 h-[90vh]'>
          <div className="flex flex-col gap-7 justify-center item-center w-full h-full mt-16">
            <div className="w-1/2  text-white m-auto flex flex-col items-center text-center">
            <div className='w-[70px] h-[2px] bg-white text-white '></div>
            <h2 className='mt-2 text-5xl font-alumni'>Make an appointment!</h2>
            <h3 className=' mt-2 text-4xl font-alumni'>Fill out the form and book your next appointment!</h3>
            <p className='mt-4 text-base text-zinc-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur obcaecati, accusantium quasi quam suscipit voluptate fugit odio unde, libero dolor ratione enim hic, eum inventore repellendus. Voluptatibus nisi tenetur rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nostrum repatae.</p>
          <div className="flex items-center gap-4 mt-2">
          <FaPhone  className="text-md"/>
          <p className="text-md">+365 554 555</p>
          </div>
          
            </div>
          <div className='w-1/3 h-full m-auto  text-white flex justify-center items-center '>
        <BookForm />
      </div>
          </div>
    
  
     </section>
    )
}
