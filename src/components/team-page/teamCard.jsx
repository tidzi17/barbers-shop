import React from 'react';
import PropTypes from 'prop-types';


export default function TeamCard({ name, title, quote,  url, index }) {
    return (
        <div className="w-3/4 flex items-center justify-center text-center gap-4">
            <img className="order-2 w-1/3 grayscale transition-all duration-300 ease-in hover:grayscale-0   s h-[320px] object-cover rounded-lg shadow-sm shadow-gray-700 brightness-50" src={url} alt="TeamMemberImage"  />
            <div className={` ${index >= 6 ? 'order-1' : 'order-2'}`}>
                <h2 className="uppercase font-antonio text-white text-2xl mt-1 mb-1">{name}</h2>
                <h2 className="font-rivage text-zinc-500 text-2xl">{title}</h2>
                <p className={`text-base font-sans ${index % 2 === 0 ? 'text-gray-400' : 'text-white'}`}>"{quote}"</p>
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

