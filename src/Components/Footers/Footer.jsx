// Footer.jsx
import React from 'react';
import 'bootstrap'
const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-12">
            <div className="about-footer">
              <div className="footer-logo">
                <figure>
                  <img src="images/logo.png" alt="Logo" />
                </figure>
              </div>
              <div className="footer-content">
                <p>Our post-construction services gives you peace of mind knowing that we are still here for you even after.</p>
              </div>
            </div>
          </div>
          {/* Add other footer sections here */}
        </div>
        <div className="footer-copyright">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-7">
              <div className="footer-copyright-text">
                <p>Copyright © 2024 Reliable Home Improvements. All Rights Reserved.</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-5">
              <div className="footer-social-links">
                <ul>
                  <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-github"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;