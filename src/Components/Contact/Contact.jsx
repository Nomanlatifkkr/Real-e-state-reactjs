import React, { useState } from "react";
import { motion } from "framer-motion";

// Import Contact Images
import phoneIcon from "../../assets/images/icon-phone.svg";
import mailIcon from "../../assets/images/icon-mail.svg";
import contactImg from "../../assets/images/contact-info-img.png";

const contactInfo = [
  { id: 1, icon: phoneIcon, label: "Call Support Center 24/7", value: "+1 809 120 6705" },
  { id: 2, icon: mailIcon, label: "Write to Us", value: "info@domain.com" },
];

// Animation Variants
const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

// Image Cut Animation
const cutImage = {
  hidden: { opacity: 0, scale: 1.2 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: "easeOut" } },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!formData.name) validationErrors.name = "Name is required";
    if (!formData.email) validationErrors.email = "Email is required";
    if (!formData.phone) validationErrors.phone = "Phone number is required";
    if (!formData.subject) validationErrors.subject = "Subject is required";
    if (!formData.message) validationErrors.message = "Message is required";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form submitted successfully:", formData);
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setErrors({});
    }
  };

  return (
    <motion.div className="contact-us" initial="hidden" animate="visible" variants={staggerContainer}>
      <div className="container">
        <div className="row align-items-center">
          {/* Contact Info Sidebar with Slide-in Animation */}
          <motion.div className="col-lg-4 col-md-5" variants={slideInLeft}>
            <div className="contact-sidebar">
              {contactInfo.map((info) => (
                <div key={info.id} className="contact-info">
                  <div className="icon-box">
                    <img src={info.icon} alt="icon" />
                  </div>
                  <div className="contact-info-content">
                    <p>{info.label}</p>
                    <h3>{info.value}</h3>
                  </div>
                </div>
              ))}

              {/* Contact Image with Cut Animation */}
              <motion.div className="contact-info-image" variants={cutImage}>
                <figure>
                  <img src={contactImg} alt="Contact" />
                </figure>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form with Slide-in Animation */}
          <motion.div className="col-lg-8 col-md-7" variants={slideInRight}>
            <div className="contact-form">
              <div className="section-title">
                <h3>Contact Us</h3>
                <h2 className="text-anime-style-3">Get in Touch with Us</h2>
              </div>

              <form onSubmit={handleSubmit}>
                <motion.div className="row" variants={staggerContainer}>
                  <motion.div className="form-group col-md-6 mb-4" variants={slideInLeft}>
                    <input type="text" name="name" className="form-control" placeholder="Enter Your Name" value={formData.name} onChange={handleChange} />
                    {errors.name && <div className="text-danger">{errors.name}</div>}
                  </motion.div>

                  <motion.div className="form-group col-md-6 mb-4" variants={slideInRight}>
                    <input type="email" name="email" className="form-control" placeholder="Enter Your Email" value={formData.email} onChange={handleChange} />
                    {errors.email && <div className="text-danger">{errors.email}</div>}
                  </motion.div>

                  <motion.div className="form-group col-md-6 mb-4" variants={slideInLeft}>
                    <input type="text" name="phone" className="form-control" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
                    {errors.phone && <div className="text-danger">{errors.phone}</div>}
                  </motion.div>

                  <motion.div className="form-group col-md-6 mb-4" variants={slideInRight}>
                    <input type="text" name="subject" className="form-control" placeholder="Subject" value={formData.subject} onChange={handleChange} />
                    {errors.subject && <div className="text-danger">{errors.subject}</div>}
                  </motion.div>

                  <motion.div className="form-group col-md-12 mb-5" variants={slideInLeft}>
                    <textarea name="message" className="form-control" rows="3" placeholder="Message" value={formData.message} onChange={handleChange}></textarea>
                    {errors.message && <div className="text-danger">{errors.message}</div>}
                  </motion.div>

                  <motion.div className="col-md-12" variants={slideInRight}>
                    <button type="submit" className="btn-default">Submit</button>
                  </motion.div>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
