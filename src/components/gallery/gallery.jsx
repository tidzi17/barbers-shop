import { useState } from 'react';
import data from '../../data/gallery.json';
import { BsChevronCompactRight } from "react-icons/bs"; //next
import { BsChevronLeft } from "react-icons/bs"; //prev
import { RxCross1 } from "react-icons/rx"; //exit

const ImageGallery = ({ galleryImages }) => {

    const [slideNumber, setSlideNumber] = useState(0);
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = (index) => {
        setSlideNumber(index)
        setOpenModal(true)
    }

    const handleCloseModal = () => {
        setOpenModal(false)
    }
    const prevSlide = () => {
        slideNumber === 0 
        ? setSlideNumber( galleryImages.length -1 )
        : setSlideNumber( slideNumber -1 )
    }
    const nextSlide = () => {
        slideNumber + 1 === galleryImages.length 
        ? setSlideNumber(0) 
        : setSlideNumber( slideNumber + 1 )
    }
    
    return(
        <div>
            {openModal && 
            <div className='fixed h-screen w-screen  bg-black/50 backdrop-blur-sm top-0 right-0 z-40 scroll-m-0 flex items-center justify-center' >
            <RxCross1  className='top-[40px] right-[80px] text-3xl text-white fixed cursor-pointer  z-50 hover:opacity-100' onClick={handleCloseModal}/>
            <BsChevronLeft className='top-[50%] transform -translate-y-[50%] left-[40px] text-5xl text-white fixed cursor-pointer  z-50 hover:opacity-100' onClick={prevSlide}/>
            <BsChevronCompactRight className='top-[50%] transform -translate-y-[50%] right-[40px]  text-5xl text-white fixed cursor-pointer  z-50 hover:opacity-100' onClick={nextSlide} />
            <div className='flex items-center justify-center w-full h-full'>
                <img src={galleryImages[slideNumber]} className='grayscale max-w-full max-h-full pointer-events-none select-none'/>
            </div>
                </div>
                }

            <div className='mt-20 flex flex-wrap  justify-center content-start  max-w-full m-auto'>
                {
                    galleryImages && galleryImages.map((slide, index) => {
                        return(
                            <div className='cursor-pointer max-w-[400px] '
                             key={index} 
                             onClick={ () => handleOpenModal(index)}>
                                <img src={slide} alt="" className='max-w-full  grayscale overflow-hidden transform-all duration-500 ease-in hover:scale-105'/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ImageGallery