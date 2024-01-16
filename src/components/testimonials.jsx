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
            <div key={index} className='flex flex-col h-70'>
                <div className={`h-64 rounded-2xl z-10 flex items-center justify-center text-center px-5 shadow-2xl  ${index % 2 === 0 ? 'bg-secondaryBlack' : 'bg-brown'}`}>
                <p className='text-white font-athiti text-base'>"{reviewsData.reviews[index]}"</p>
                </div>
                <div className='flex z-20 -mt-10'>
                <img src={customer.picture.thumbnail} alt={customer.name.first} className='w-[60px] rounded-full opacity-60 ml-2' />
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
        <div id='testimonials-section' className='w-full h-[700px] flex flex-col items-center '>
        <h1 className='text-white text-5xl mt-16 font-athiti'>Testimonials</h1>
        <div className='w-8/12 mt-36 '>
        <Slider {...settings}>
        {generateTestimonialsJSX()}
        </Slider>
        </div>
    </div>
      
    ) 
}

