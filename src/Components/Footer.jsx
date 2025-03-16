import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // ✅ Import Framer Motion
import "@fortawesome/fontawesome-free/css/all.min.css"; // FontAwesome icons
import "./Footer.css";
import logo from "../assets/images2/reliable.png";

// ✅ Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <motion.div className="col-lg-3 col-md-12" variants={fadeInUp} initial="hidden" whileInView="visible">
            <div className="about-footer">
              <div className="footer-logo">
                <img src={logo} alt="Reliable Logo" />
                <p>
                  Our post-construction services give you peace of mind knowing that we are still here for you even after.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Services Links */}
          <motion.div className="col-lg-3 col-md-4 col-12" variants={fadeInUp} initial="hidden" whileInView="visible">
            <div className="footer-links">
              <h3>Our Services</h3>
              <ul>
                {["Addition", "Basement", "Renovations", "Roofing", "Siding"].map((service, index) => (
                  <li key={index}>
                    <Link to={`/${service.toLowerCase()}`}>{service}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div className="col-lg-3 col-md-4 col-12" variants={fadeInUp} initial="hidden" whileInView="visible">
            <div className="footer-links">
              <h3>Company</h3>
              <ul>
                {["Home", "About us", "Services", "Blog", "Contact us"].map((page, index) => (
                  <li key={index}>
                    <Link to={`/${page.toLowerCase().replace(/\s+/g, "-")}`}>{page}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div className="col-lg-3 col-md-4 col-12" variants={fadeInUp} initial="hidden" whileInView="visible">
            <div className="footer-links footer-contact-box">
              <h3>Contact Us</h3>
              <div className="footer-info-box">
                <div className="icon-box">
                  <i className="fas fa-phone"></i>
                </div>
                <p>+1 809 120 6705</p>
              </div>
              <div className="footer-info-box">
                <div className="icon-box">
                  <i className="fas fa-envelope"></i>
                </div>
                <p>info@domain.com</p>
              </div>
              <div className="footer-info-box">
                <div className="icon-box">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <p>37 San Juan Lane, Graaf Florisstraat 22A, 3021 CH</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div className="footer-copyright" variants={fadeInUp} initial="hidden" whileInView="visible">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-7">
              <p>
                Copyright © 2024 Reliable Home Improvements. All Rights Reserved.
                Designed and Developed by{" "}
                <a href="https://innovadetechnologies.in" style={{ color: "#fff", fontWeight: 800, textDecoration: "none" }}>
                  Innovade Technologies
                </a>
              </p>
            </div>

            {/* Social Media Links */}
            <div className="col-lg-6 col-md-5">
              <ul className="footer-social-links">
                {["instagram", "facebook-f", "x-twitter", "github", "linkedin-in"].map((icon, index) => (
                  <li key={index}>
                    <Link to="#">
                      <i className={`fab fa-${icon}`}></i>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
