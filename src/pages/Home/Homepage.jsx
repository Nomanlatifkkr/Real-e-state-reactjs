import React from 'react'
import HeroSection from '../../Components/HeroSection/HeroSection'
import AboutSection from '../../Components/AboutSection/AboutSection'
import OurServices from '../../Components/OurServices/OurServices'
import WhyChooseUs from '../../Components/WhyChooseUs/WhyChooseUs'
import CtaBox from '../../Components/CtaBox'
import Testimonial from '../../Components/Testimonial'
import Faqs from '../../Components/FAQs/FAQs'
import Blog from '../../Components/Blog/Blog'
import Contact from '../../Components/Contact/Contact'

const Homepage = () => {
  return (
    <>
    <HeroSection/>
    <AboutSection/>
    <OurServices/>
    <WhyChooseUs/>
    <CtaBox/>
    <Testimonial/>
    <Faqs/>
    <Blog/>
    <Contact/>
    
    </>
  )
}

export default Homepage
