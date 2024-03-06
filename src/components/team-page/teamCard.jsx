import React from 'react';
import PropTypes from 'prop-types';


export default function TeamCard({ name, title, quote,  url, index }) {
    return (
        <div className="w-3/4 flex flex-col xl:flex-row items-center justify-center text-center ">
            <img className="order-2 w-full md:w-2/3 lg:w-[60%] grayscale transition-all duration-300 ease-in hover:grayscale-0 h-[160px] md:h-[320px] object-cover rounded-lg shadow-sm shadow-gray-700 brightness-50" src={url} alt="TeamMemberImage"  />
            <div className={` lg:${index >= 6 ? 'order-1' : 'order-2'} order-2  w-fit flex flex-col items-center justify-center`}>
                <h2 className="uppercase font-antonio text-white text-lg lg:text-2xl mt-1 mb-1">{name}</h2>
                <h2 className="font-rivage text-zinc-500 text-base lg:text-2xl">{title}</h2>
                <p className={`text-xs lg:text-sm font-sans  ${index % 2 === 0 ? 'text-gray-400' : 'text-white'}`}>"{quote}"</p>
            </div>
        </div>
    );
}

TeamCard.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};


