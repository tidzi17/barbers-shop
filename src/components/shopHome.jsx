import React from "react"
import Button from "./button"
import { Link } from "react-router-dom"
import ProductCard from "./productCard"
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";

export default function ShopSectionHome(){
    return(
        <div className="h-[90vh]">
            <div className="w-full flex h-full mt-5">
            <div className='w-1/2 text-white mt-10 ml-7 mb-44'>
            <div className='w-[70px] h-[2px] bg-white'></div>
            <h2 className='mt-2 text-5xl font-alumni'>Visit our shop!</h2>
            <h3 className=' mt-2 text-4xl font-alumni'>Check out best products for you hair, beard and skincare!</h3>
            <p className=' mt-4 text-base mb-10'>Explore our selection of premium grooming products carefully curated to enhance your grooming routine. From top-quality shampoos and conditioners to luxurious beard oils and skincare essentials, we have everything you need to keep your look sharp and your skin healthy. Discover the perfect products tailored to your needs and elevate your grooming game with Masters Barbershop. Stop by today and let our knowledgeable team assist you in finding the ideal products for your grooming regimen.</p>
            <Link target='blank' to="/shop" ><Button text="Explore" textColor="text-white" /></Link> 
           </div>
           <div className="flex w-1/2 items-center  justify-around h-full pt-20">
            <div className="-ml-20 flex gap-3">
                <div className="rounded-full w-[50px] h-[50px] border-[1px] border-zinc-200 flex items-center justify-center"><LiaLongArrowAltLeftSolid className="text-white text-2xl"/></div>
                <div className="rounded-full w-[50px] h-[50px] border-[1px] border-zinc-200 flex items-center justify-center"><LiaLongArrowAltRightSolid  className="text-white text-2xl"/></div></div>
            <ProductCard />
            <ProductCard /> 
            <ProductCard />
           </div>
            </div>
        </div>
    )
}