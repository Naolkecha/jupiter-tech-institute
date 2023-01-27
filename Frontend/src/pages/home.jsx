import React from 'react';
import HomePage from '../components/homePage';
import About from '../components/about';
import Features from '../components/features';
import Contact from '../components/contact';
import Navbar from '../components/navbar';
import Footer from '../components/footer';


const Home = () => {
  return ( 
    <>
    <Navbar/>
    <HomePage />
    <About />
 
    <Features />
    <Contact/>
    <Footer/>
    </>
   

)
  }

export default Home;