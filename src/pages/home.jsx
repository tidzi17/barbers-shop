import React from 'react';
import HomeLanding from '../components/home-landing';
import '../index.css';
import HomeSectionFirst from '../components/home-section-first';
import Services from '../components/services-href';
import DiscountBanner from '../components/discountBanner';
import Testimonials from '../components/testimonials';
import HomePricesMenu from '../components/home-prices-section';
import TeamMasters from '../components/masters-team';
import HomeGallery from '../components/home-gallery';
import AboutSectionHome from '../components/aboutsection-home';
import ShopSectionHome from '../components/shopHome';





export default function Home(){
  return (
    <>
     <HomeLanding />
     <HomeSectionFirst />
     <Services />
     <HomeGallery />
     <TeamMasters />
     <HomePricesMenu />
     <DiscountBanner />
    {/*  <AboutSectionHome /> */}
    {/*  <ShopSectionHome /> */}
     {/* <Testimonials /> */}
    </>
  );
};

;

