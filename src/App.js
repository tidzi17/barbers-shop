import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar";
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Gallery from './pages/gallery';
import Team from './pages/team';
import Contact from './pages/contact';
import Shop from './pages/shop';
import Footer from './components/footer';
import ScrollButton from './components/scroll-button';
import ImageBanner from './components/imagebanner';
import BookingSection from './components/bookingSection';

function App() {
  return (
    <>
    <Navbar/>
    <ScrollButton />
    
    <Routes>
    <Route path="/" exact element={<Home />} />
    <Route path="/about" exact element={<About />} />
    <Route path="/services" exact element={<Services />} />
    <Route path="/team" exact element={<Team />} />
    <Route path="/gallery" exact element={<Gallery />} />
    <Route path="/contact" exact element={<Contact />} />
    <Route path="/shop" exact element={<Shop/>} />
    {/* <Route path='*' element={<NotFound />}/> */}
    </Routes>
    <BookingSection />
    {/* <ImageBanner />
    <Footer /> */}
    
  </>

  );
}

export default App;
