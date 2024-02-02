import React from "react"
import Button from "./button"
import { Link } from "react-router-dom"
import ProductCard from "./productCard"
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";
import MotionDiv from '../components/animation';
import { SlideXLeft } from '../components/animation';
import { SlideXRight } from '../components/animation';

export default function ShopSectionHome(){
    return(
        <div className=" border-b-2 border-white py-20 overflow-hidden">
            <div className="w-full flex h-full mt-5">
            <MotionDiv className='md:w-1/2 text-white mt-10 ml-7 mb-44'
            animationVariants={SlideXLeft}>
            <div className='w-[70px] h-[2px] bg-white'></div>
            <h2 className='md:mt-2 text-3xl md:text-5xl font-alumni'>Visit our shop!</h2>
            <h3 className='md:mt-2 text-2xl md:text-4xl font-alumni'>Check out best products for you hair, beard and skincare!</h3>
            <p className='md:mt-4 text-xs md:text-base mb-2 md:mb-10'>Explore our selection of premium grooming products carefully curated to enhance your grooming routine. From top-quality shampoos and conditioners to luxurious beard oils and skincare essentials, we have everything you need to keep your look sharp and your skin healthy. Discover the perfect products tailored to your needs and elevate your grooming game with Masters Barbershop. Stop by today and let our knowledgeable team assist you in finding the ideal products for your grooming regimen.</p>
            <Link target='blank' to="/shop" ><Button text="Explore" textColor="text-white" /></Link> 
           </MotionDiv>
           <MotionDiv className="hidden md:flex  w-1/2 items-center mt-44  justify-around h-full pt-20"
           animationVariants={SlideXRight}>
            <div className="-ml-20 flex gap-3">
                <div className="rounded-full w-[50px] h-[50px] border-[1px] border-zinc-200 flex items-center justify-center"><LiaLongArrowAltLeftSolid className="text-white text-2xl"/></div>
                <div className="rounded-full w-[50px] h-[50px] border-[1px] border-zinc-200 flex items-center justify-center"><LiaLongArrowAltRightSolid  className="text-white text-2xl"/></div></div>
            <ProductCard />
            <ProductCard /> 
            <ProductCard />
           </MotionDiv>
            </div>
        </div>
    )
}