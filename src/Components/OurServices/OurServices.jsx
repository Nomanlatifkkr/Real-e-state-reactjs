import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion

import serviceImg1 from "../../assets/images/service-img-1.jpg";
import serviceImg2 from "../../assets/images/service-img-2.jpg";
import serviceImg3 from "../../assets/images/service-img-3.jpg";
import serviceImg4 from "../../assets/images/service-img-4.jpg";

// Services Data
const services = [
  {
    id: 1,
    title: "Building Construction",
    description: "Our post-construction services give you peace of mind knowing that we are still here for you even after.",
    image: serviceImg1,
  },
  {
    id: 2,
    title: "Architecture Design",
    description: "Our post-construction services give you peace of mind knowing that we are still here for you even after.",
    image: serviceImg2,
  },
  {
    id: 3,
    title: "Building Renovation",
    description: "Our post-construction services give you peace of mind knowing that we are still here for you even after.",
    image: serviceImg3,
  },
  {
    id: 4,
    title: "Building Maintenance",
    description: "Our post-construction services give you peace of mind knowing that we are still here for you even after.",
    image: serviceImg4,
  },
];

// Animations
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const OurServices = () => {
  return (
    <motion.div className="our-service" initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <div className="light-bg-section">
        <div className="container-fluid">
          <div className="row section-row">
            <div className="col-lg-12">
              {/* Section Title */}
              <motion.div className="section-title" variants={fadeInUp}>
                <h3>Our Services</h3>
                <h2 className="text-anime-style-3">Our construction services</h2>
                <p>We specialize in a wide range of construction services, including residential, commercial, and industrial projects.</p>
              </motion.div>
            </div>
          </div>

          {/* Services Grid */}
          <motion.div className="row" variants={staggerContainer}>
            {services.map((service, index) => (
              <motion.div key={service.id} className="col-lg-3 col-md-6" variants={fadeInUp}>
                <div className="service-item">
                  {/* Service Image */}
                  <motion.div
                    className="service-image"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link to="#">
                      <figure>
                        <img src={service.image} alt={service.title} />
                      </figure>
                    </Link>
                  </motion.div>

                  {/* Service Body */}
                  <div className="service-body">
                    <div className="service-body-title">
                      <h3>{service.title}</h3>
                    </div>
                    <div className="service-content">
                      <p>{service.description}</p>
                      <div className="service-content-footer">
                        <Link to="#" className="readmore-btn">
                          View More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View All Services Button */}
          <motion.div className="service-footer-btn" variants={fadeInUp}>
            <Link to="#" className="btn-default">
              View All Services
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default OurServices;
