import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../../assets/images/about-us-img.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

// Image Cut-In Animation
const imageCutIn = {
  hidden: { opacity: 0, scale: 1.2 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: "easeOut" } },
};

const About = () => {
  return (
    <motion.div className="about-us-page" initial="hidden" animate="visible" variants={staggerContainer}>
      {/* Hero Section */}
      <motion.div className="hero bg-section parallaxie" variants={fadeInUp}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="hero-content">
                <div className="section-title">
                  <h1 className="text-anime-style-3">About Us</h1>
                  <a href="/" style={{ color: "#fff", textDecoration: "none" }}>
                    Home / <span style={{ color: "#ffb703" }}>About Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* About Section */}
      <motion.div className="about-us container" variants={staggerContainer}>
        <div className="row align-items-center">
          {/* Image Section with Cut Animation */}
          <div className="col-lg-5">
            <motion.div className="about-image" variants={imageCutIn}>
              <figure>
                <img src={aboutImage} alt="About Us" className="img-fluid" />
              </figure>
            </motion.div>
          </div>

          {/* Text Section */}
          <div className="col-lg-7">
            <motion.div className="about-content" variants={fadeInUp}>
              <div className="section-title">
                <h3>About Us</h3>
                <h2 className="text-anime-style-3">Crafting Structures That Last a Lifetime</h2>
                <p>
                  Crafting structures that last a lifetime requires a holistic approach that integrates advanced materials,
                  resilient design, and sustainability practices. We bring modern solutions for timeless structures.
                </p>
              </div>

              {/* Bullet Points with Staggered Animation */}
              <motion.ul>
                {["Comprehensive Services", "Advanced Technology", "Transparent Communication"].map((item, index) => (
                  <motion.li key={index} variants={fadeInUp}>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>

              {/* Button */}
              <motion.a href="/contact" className="btn-default" variants={fadeInUp}>
                Get Free Quote
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
