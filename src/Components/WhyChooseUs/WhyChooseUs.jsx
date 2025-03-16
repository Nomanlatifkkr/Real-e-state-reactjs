import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import icon1 from "../../assets/images/icon-why-choose-1.svg";
import icon2 from "../../assets/images/icon-why-choose-2.svg";
import icon3 from "../../assets/images/icon-why-choose-3.svg";
import img1 from "../../assets/images/why-choose-img-1.jpg";
import img2 from "../../assets/images/why-choose-img-2.jpg";
import img3 from "../../assets/images/why-choose-img-3.jpg";

// Data for Why Choose Us section
const whyChooseData = [
  {
    id: 1,
    title: "Innovation Solutions",
    description: "We implement cutting-edge solutions to improve efficiency and quality in every project.",
    icon: icon1,
    counter: 800,
    image: img1,
  },
  {
    id: 2,
    title: "Quality Craftsmanship",
    description: "Our team ensures top-quality workmanship and attention to detail in every project we undertake.",
    icon: icon2,
    counter: 800,
    image: img2,
  },
  {
    id: 3,
    title: "Expertise and Experience",
    description: "With years of experience, we bring knowledge and reliability to construction and remodeling projects.",
    icon: icon3,
    counter: 800,
    image: img3,
  },
];

// Animations
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const WhyChooseUs = () => {
  return (
    <motion.div className="why-choose-us" initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            {/* Section Title */}
            <motion.div className="section-title" variants={fadeInUp}>
              <h3>Why Choose Us?</h3>
              <h2 className="text-anime-style-3">Why we're your best choice</h2>
              <p>
                Developed in close collaboration with our partners and clients, combining industry knowledge, decades of experience, ingenuity, and adaptability to deliver excellence.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Why Choose Us Items */}
        <div className="row">
          {whyChooseData.map((item, index) => (
            <React.Fragment key={item.id}>
              {/* Text & Icon Box */}
              <motion.div className="col-lg-4 col-md-6" variants={fadeInUp} transition={{ delay: index * 0.2 }}>
                <div className="why-choose-item">
                  <div className="icon-box">
                    <img src={item.icon} alt={item.title} />
                  </div>
                  <div className="why-choose-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <div className="why-choose-counter">
                    <h3>
                      <span className="counter">{item.counter}</span>+
                    </h3>
                    <p>Projects Completed</p>
                  </div>
                </div>
              </motion.div>

              {/* Image */}
              <motion.div className="col-lg-4 col-md-6" variants={fadeInLeft} transition={{ delay: index * 0.3 }}>
                <div className="why-choose-image">
                  <div className="image-container">
                    <img src={item.image} alt={item.title} className="img-fluid" />
                  </div>
                </div>
              </motion.div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default WhyChooseUs;
