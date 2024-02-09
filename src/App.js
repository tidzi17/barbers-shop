import React from 'react';
import {  Routes, Route, Navigate } from 'react-router-dom';
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
import ProductPage from './pages/productPage';
import Cart from './pages/cart';
import NotFound from './pages/404';

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
    <Route path="/products" element={<Navigate to="/products/all" replace />} />
    <Route path="/products/:category" element={<Shop />} />
    <Route path="/products/:cathegory/:id" element={<ProductPage />} />
    <Route path="/cart" element={<Cart />} />
    <Route path='*' element={<NotFound />}/>
    </Routes>
    
    <BookingSection />
    <ImageBanner />
    <Footer />
    
  </>

  );
}

export default App;
