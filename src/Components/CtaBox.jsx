import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import ctaImg from "../assets/images/cta-box-img.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const CtaBox = () => {
  return (
    <motion.div className="cta-box" initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-8">
            {/* Section Title */}
            <motion.div className="section-title" variants={fadeInUp}>
              <h2 className="text-anime-style-3">Let's build something great together!</h2>
              <p>
                Don't wait any longer to bring your construction dreams to life. Partner with Builtup and experience unparalleled service and quality.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div className="section-btn" variants={fadeInUp} transition={{ delay: 0.25 }}>
              <a href="#" className="btn-default btn-large">
                Get Free Quote
              </a>
            </motion.div>
          </div>

          {/* CTA Image */}
          <div className="col-lg-5 col-md-4">
            <motion.div className="cta-box-image" variants={fadeInRight}>
              <figure>
                <img src={ctaImg} alt="CTA" />
              </figure>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CtaBox;
