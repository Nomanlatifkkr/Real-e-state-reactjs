import React from "react";
import { Link } from "react-router-dom";

import aboutImage from '../../assets/images/about-us-img.png';  // ✅ Correct Import
import phoneIcon from "../../assets/images/icon-phone.svg"; 

const AboutSection = () => {
  return (
    <div className="about-us">
      <div className="container">
        <div className="row align-items-center">
         <div className="col-lg-5">
                     <div className="about-image">
                       <figure>
                         <img src={aboutImage} alt="About Us" className="img-fluid" />
                       </figure>
                     </div>
                   </div>

          {/* About Content */}
          <div className="col-lg-7">
            <div className="about-content">
              {/* Section Title */}
              <div className="section-title">
                <h3 className="wow fadeInUp">About Us</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Crafting structures that last a lifetime
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.25s">
                  Crafting structures that last a lifetime requires a holistic
                  approach that integrates advanced materials, resilient
                  design, regular maintenance, and sustainability practices.
                  By learning from historical examples and leveraging modern
                  technology.
                </p>
              </div>

              {/* About Content Body */}
              <div className="about-content-body wow fadeInUp" data-wow-delay="0.5s">
                <ul>
                  <li>Comprehensive Services</li>
                  <li>Advanced Technology</li>
                  <li>Transparent Communication</li>
                </ul>
              </div>

              {/* About Content Footer */}
              <div className="about-content-footer wow fadeInUp" data-wow-delay="0.75s">
                <div className="about-footer-btn">
                  <Link to="/contact" className="btn-default">
                    Get Free Quote
                  </Link>
                </div>
                <div className="about-contact-support">
                  <div className="icon-box">
                    <img src={phoneIcon} alt="Phone Icon" />
                  </div>
                  <div className="about-support-content">
                    <p>Call Support Center 24X7</p>
                    <h3>+1 809 120 6705</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
