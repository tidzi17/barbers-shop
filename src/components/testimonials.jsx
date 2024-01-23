import React, { useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reviewsData from '../data/reviews.json';
import '../index.css';


export default function Testimonials(){
    const [customerData, setCustomerData] = React.useState([]);

    const getCustomerData = async () => {
        try {
            const response = await fetch('https://randomuser.me/api/?results=7&gender=male');
            const data = await response.json();
            setCustomerData(data.results);
        } catch (error) {
            console.error('Error fetching customer data:', error);
        }
    };
    
    const generateTestimonialsJSX = () => {
        return customerData.map((customer, index) => (
            <div key={index} className='flex flex-col h-80'>
                <div className={`h-64  z-10 flex items-center justify-center text-center px-5   ${index % 2 === 0 ? 'bg-zinc-900' : 'bg-zinc-500'}`}>
                <p className='text-white font-athiti text-base'>"{reviewsData.reviews[index]}"</p>
                </div>
                <div className='flex z-20 -mt-10'>
                <img src={customer.picture.thumbnail} alt={customer.name.first} className='w-[60px] rounded-full  ml-2 grayscale' />
                <h3 className=' text-white ml-10  font-athiti text-base'>{`${customer.name.first} ${customer.name.last}`}</h3>
                </div>
            </div>
        ))
    }

    useEffect(() => {
        getCustomerData();
    }, []);

    const settings = {
        dots: true,
        infinite: true, 
        speed: 500, 
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        appendDots: dots => (
            <div
              style={{
                padding: "10px"
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div
              className='mt-10'
            >
              <div className='w-[10px] h-[10px] bg-black rounded-full hover:scale-150'></div>
            </div>
          )
       
    };
    
    return(
        <div id='testimonials-section'  className='w-full h-[700px] flex flex-col items-center bg-zinc-400'>
        <div className='w-full h-fit flex flex-col items-center justify-center mt-16'>
          <div className='w-[70px] h-[2px] bg-black self-center'></div>
        <h1 className='text-black text-5xl font-alumni'>Testimonials</h1>
        </div>
        <div className='w-9/12 mt-28 '>
        <Slider {...settings}>
        {generateTestimonialsJSX()}
        </Slider>
        </div>
    </div>
      
    ) 
}

