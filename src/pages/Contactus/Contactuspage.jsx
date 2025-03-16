import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "../../assets/css/bootstrap.min.css";
import "../../assets/css/custom.css";
import phoneIcon from "../../assets/images/icon-phone.svg";
import mailIcon from "../../assets/images/icon-mail.svg";
import contactImage from "../../assets/images/contact-info-img.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const ContactPage = () => {
  return (
    <>
      {/* Hero Section */}
      <motion.div 
        className="hero bg-section parallaxie"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="hero-content">
                <div className="section-title">
                  <h1 className="text-anime-style-3">Contact Us</h1>
                  <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
                    Home / <span style={{ color: "#ffb703" }}>Contact us</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Hero Section End */}

      {/* Contact Us Section */}
      <motion.div className="contact-us" variants={staggerContainer} initial="hidden" animate="visible">
        <div className="container">
          <div className="row align-items-center">
            {/* Contact Info */}
            <motion.div className="col-lg-4 col-md-5" variants={fadeInUp}>
              <div className="contact-sidebar">
                <div className="contact-info">
                  <div className="icon-box">
                    <img src={phoneIcon} alt="Phone" />
                  </div>
                  <div className="contact-info-content">
                    <p>Call support center 24/7</p>
                    <h3>+1 809 120 6705</h3>
                  </div>
                </div>

                <div className="contact-info">
                  <div className="icon-box">
                    <img src={mailIcon} alt="Email" />
                  </div>
                  <div className="contact-info-content">
                    <p>Write to us</p>
                    <h3>info@domain.com</h3>
                  </div>
                </div>

                <div className="contact-info-image">
                  <img src={contactImage} alt="Contact" />
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div className="col-lg-8 col-md-7" variants={fadeInUp}>
              <div className="contact-form">
                <div className="section-title">
                  <h3>Contact Us</h3>
                  <h2 className="text-anime-style-3">Get in touch with us</h2>
                </div>
                <form id="contactForm">
                  <div className="row">
                    <motion.div className="form-group col-md-6 mb-4" variants={fadeInUp}>
                      <input type="text" className="form-control" placeholder="Enter Your Name" required />
                    </motion.div>
                    <motion.div className="form-group col-md-6 mb-4" variants={fadeInUp}>
                      <input type="email" className="form-control" placeholder="Enter Your Email" required />
                    </motion.div>
                    <motion.div className="form-group col-md-6 mb-4" variants={fadeInUp}>
                      <input type="text" className="form-control" placeholder="Phone Number" required />
                    </motion.div>
                    <motion.div className="form-group col-md-6 mb-4" variants={fadeInUp}>
                      <input type="text" className="form-control" placeholder="Subject" required />
                    </motion.div>
                    <motion.div className="form-group col-md-12 mb-5" variants={fadeInUp}>
                      <textarea className="form-control" rows="3" placeholder="Message" required></textarea>
                    </motion.div>
                    <motion.div className="col-md-12" variants={fadeInUp}>
                      <motion.button
                        type="submit"
                        className="btn-default"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Submit
                      </motion.button>
                    </motion.div>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ContactPage;
