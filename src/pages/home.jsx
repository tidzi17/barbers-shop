import React from 'react';
import HomeLanding from '../components/home-landing';
import '../index.css';
import HomeSectionFirst from '../components/home-section-first';
import Services from '../components/services-href';
import GalleryParallax from '../components/galleryParallax';
import DiscountBanner from '../components/discountBanner';
import WorkingHoursSection from '../components/workingHours';
import image from '../assets/blackbg.png';
import Testimonials from '../components/testimonials';
import BookForm from '../components/bookForm';
import HomePricesMenu from '../components/home-prices-section';
import TeamMasters from '../components/masters-team';
import BookingSection from '../components/bookingSection';
import HomeGallery from '../components/home-gallery';



export default function Home(){
  return (
    <>
     <HomeLanding />
     <HomeSectionFirst />
     <Services />
     <HomeGallery />
     <TeamMasters />
     <HomePricesMenu />
    {/*  <WorkingHoursSection /> */}
     <DiscountBanner />
     <GalleryParallax />
     
     <Testimonials />
     <BookingSection />
     
     
    </>
  );
};

;

