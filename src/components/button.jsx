// Button.js
import React from 'react';

const Button = ({ text }) => {
    return (
        <button className="cta flex items-center justify-center" >
            <span className="hover-underline-animation text-black uppercase text-sm pr-3">
                {text}
            </span>
            <svg
                id="arrow-horizontal"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="10"
                viewBox="0 0 46 16"
                className="transform translate-x-0 transition-transform ease-in-out duration-300"
            >
                <path
                    id="Path_10"
                    data-name="Path 10"
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    transform="translate(30)"
                ></path>
            </svg>
        </button>
    );
};

export default Button;
