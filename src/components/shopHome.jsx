import React, { useState } from "react";
import Button from "./button";
import { Link } from "react-router-dom";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";
import MotionDiv from "../components/animation";
import { SlideXLeft } from "../components/animation";
import { SlideXRight } from "../components/animation";
import { CartState } from "../context/Context";
import ProductCard from "./shopcomponents/productCard";

export default function ShopSectionHome() {
  const [startX, setStartX] = useState(null);
  const [isSwiping, setIsSwiping] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const cardsPerPage = 5;
  const { state: { products } } = CartState(); 

  const maxIndex = Math.ceil(products.length / cardsPerPage) - 1;

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setIsSwiping(true);
  };

  const handleTouchMove = (e) => {
    if (!isSwiping) return;
    const currentX = e.touches[0].clientX;
    const difference = startX - currentX;
    if (difference > 50) {
      handleNextSlide();
      setIsSwiping(false);
    } else if (difference < -50) {
      handlePrevSlide();
      setIsSwiping(false);
    }
  };

  const handleTouchEnd = () => {
    setIsSwiping(false);
  };

  const handlePrevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1));
  };

  const handleNextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex === maxIndex ? 0 : prevIndex + 1));
  };

  const slideStyle = {
    transform: `translateX(-${slideIndex * 100}%)`,
    transition: "transform 0.5s ease-in-out",
  };

  return (
    <div className=" border-b-2 border-white pt-10 md:pt-20 pb-20 overflow-hidden ">
      <div className="w-full flex flex-col h-full mt-5">
        <MotionDiv
          className="lg:w-1/2 text-white mt-10 ml-7 mb-44"
          animationVariants={SlideXLeft}
        >
          <div className="w-[70px] h-[2px] bg-white"></div>
          <h2 className="md:mt-2 text-3xl md:text-5xl font-alumni">
            Visit our shop!
          </h2>
          <h3 className="md:mt-2 text-2xl md:text-4xl font-alumni">
            Check out best products for you hair, beard and skincare!
          </h3>
          <p className="md:mt-4 text-xs md:text-base mb-2 md:mb-10">
            Explore our selection of premium grooming products carefully curated to enhance your grooming routine. From top-quality shampoos and conditioners to luxurious beard oils and skincare essentials, we have everything you need to keep your look sharp and your skin healthy. Discover the perfect products tailored to your needs and elevate your grooming game with Masters Barbershop. Stop by today and let our knowledgeable team assist you in finding the ideal products for your grooming regimen.
          </p>
          <Link target="blank" to="/products">
            <Button text="Explore" textColor="text-white" />
          </Link>
        </MotionDiv>

        <MotionDiv
          className="ml-[7%] md:ml-[28%] lg:ml-[40%] -mt-44 gap-5 flex md:w-2/3 items-center justify-around h-full "
          animationVariants={SlideXRight}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex gap-3 w-fit">
            <div className="flex gap-5">
              <div
                onClick={handlePrevSlide}
                className="rounded-full w-[35px] h-[35px] md:w-[50px] md:h-[50px] border-[1px] border-zinc-200 flex items-center justify-center cursor-pointer"
              >
                <LiaLongArrowAltLeftSolid className="text-white text-xl md:text-2xl transform duration-500 ease-in-out hover:scale-125" />
              </div>
              <div
                onClick={handleNextSlide}
                className="rounded-full w-[35px] h-[35px] md:w-[50px] md:h-[50px] border-[1px] border-zinc-200 flex items-center justify-center cursor-pointer"
              >
                <LiaLongArrowAltRightSolid className="text-white text-xl md:text-2xl   transform duration-500 ease-in-out hover:scale-125" />
              </div>
            </div>
          </div>

          <div className="flex gap-4 ml-5 overflow-hidden">
            {products.slice(1, 9).map((prod, index) => (
              <div key={index} style={slideStyle}>
                <ProductCard
                 prod={prod}
                 containerClassName="border-zinc-900  m-2 shadow-zinc-900 shadow-sm"
                imageContainerClassName="product-img-container"
                titleClassName="text-zinc-300"
                priceClassName="text-zinc-300" />
              </div>
            ))}
          </div>
        </MotionDiv>
      </div>
    </div>
  );
}
