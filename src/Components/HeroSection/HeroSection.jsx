import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const HeroSection = () => {
  return (
    <motion.div 
      className="hero bg-section parallaxie"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            {/* Hero Content Start */}
            <motion.div className="hero-content text-center">
              <div className="section-title">
                <motion.h3 variants={fadeInUp}>
                  Welcome To Reliable Home Improvement
                </motion.h3>

                <motion.h1 className="text-anime-style-3" variants={fadeInUp}>
                  Transform Your Home with Expert Craftsmanship
                </motion.h1>

                <motion.p variants={fadeInUp}>
                  At Reliable Home Improvements, we bring your dream home to life with top-quality 
                  construction, renovations, and remodeling. Whether it’s a new build or a simple 
                  upgrade, our team ensures perfection in every detail.
                </motion.p>
              </div>

              {/* Buttons */}
              <motion.div className="hero-content-body mt-4" variants={fadeInUp}>
                <motion.Link 
                  to="/contact" 
                  className="btn-default"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  Contact Us
                </motion.Link>

                <motion.Link 
                  to="/services" 
                  className="btn-default btn-highlighted"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  View Our Services
                </motion.Link>
              </motion.div>
            </motion.div>
            {/* Hero Content End */}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
