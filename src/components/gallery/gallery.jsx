import { useState, useRef,  useEffect } from 'react';
import { BsChevronCompactRight } from "react-icons/bs"; //next
import { BsChevronLeft } from "react-icons/bs"; //prev
import { RxCross1 } from "react-icons/rx"; //exit

const ImageGallery = ({ galleryImages }) => {

    const [slideNumber, setSlideNumber] = useState(0);
    const [openModal, setOpenModal] = useState(false);
    const touchStartX = useRef(null);

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

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
      };
    
      const handleTouchEnd = (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const deltaX = touchEndX - touchStartX.current;
    
        if (deltaX > 50) {
          prevSlide();
        } else if (deltaX < -50) {
          nextSlide();
        }
      };
    
      const handleKeyDown = (e) => {
        if (e.key === 'ArrowLeft') {
          prevSlide();
        } else if (e.key === 'ArrowRight') {
          nextSlide();
        }
      };

      useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
    
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
        };
      }, [slideNumber]);

    
    return(
        <div className='lg:px-20 lg:py-20 md:px-10 py-10'>
            {openModal && 
            <div className='fixed h-screen w-screen  bg-black/50 backdrop-blur-sm top-0 right-0 z-40 scroll-m-0 flex items-center justify-center'
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd} >
            
            <RxCross1  className='top-[40px] right-[80px] text-3xl text-white fixed cursor-pointer  z-50 hover:opacity-100' onClick={handleCloseModal}/>
            <BsChevronLeft className='top-[50%] transform -translate-y-[50%] left-0 md:left-[40px] text-5xl text-white fixed cursor-pointer  z-50 hover:opacity-100' onClick={prevSlide}/>
            <BsChevronCompactRight className='top-[50%] transform -translate-y-[50%] right-0 md:right-[40px]  text-5xl text-white fixed cursor-pointer  z-50 hover:opacity-100' onClick={nextSlide} />
            <div className='flex items-center justify-center w-[80%] md:w-full h-full'>
                <img src={galleryImages[slideNumber]} alt='' className='grayscale max-w-full max-h-full pointer-events-none select-none'/>
            </div>
                </div>
                }

            <div className='gallery '>
                {
                    galleryImages && galleryImages.map((slide, index) => {
                        return(
                            <div className='pics'
                             key={index} 
                             onClick={ () => handleOpenModal(index)}>
                                <img src={slide} alt="" className='grayscale'/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ImageGallery