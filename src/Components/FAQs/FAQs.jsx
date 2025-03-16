import React from "react";
import { Accordion } from "react-bootstrap";
import { motion } from "framer-motion";

// Import FAQ Images
import faqImg1 from "../../assets/images/our-faqs-img-1.jpg";
import faqImg2 from "../../assets/images/our-faqs-img-2.jpg";
import faqImg3 from "../../assets/images/our-faqs-img-3.jpg";
import faqImg4 from "../../assets/images/our-faqs-img-4.jpg";
import faqIcon from "../../assets/images/icon-faq-bulitup.svg";

// FAQ Data
const faqsData = [
  {
    id: 1,
    question: "Do you offer a free, no obligation quotation?",
    answer: "Our post-construction services give you peace of mind knowing that we are still here for you even after.",
  },
  {
    id: 2,
    question: "What services do you offer?",
    answer: "We specialize in construction, renovation, and maintenance, ensuring your projects are in expert hands.",
  },
  {
    id: 3,
    question: "What types of projects do you specialize in?",
    answer: "We specialize in residential, commercial, and industrial projects.",
  },
  {
    id: 4,
    question: "How do I start a project with your company?",
    answer: "You can start by contacting us for a consultation to discuss your requirements and project scope.",
  },
];

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const Faqs = () => {
  return (
    <motion.div className="our-faqs" initial="hidden" animate="visible" variants={staggerContainer}>
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            <motion.div className="section-title" variants={fadeIn}>
              <h3>FAQs</h3>
              <h2 className="text-anime-style-3" data-cursor="-opaque">
                Got questions? We've got answers
              </h2>
              <p>We specialize in a wide range of construction services, including residential, commercial, and industrial projects.</p>
            </motion.div>
          </div>
        </div>

        <div className="row align-items-center">
          {/* FAQ Images */}
          <div className="col-lg-5">
            <div className="our-faqs-images">
              <div className="row align-items-end">
                <div className="col-md-6 col-6">
                  <motion.img src={faqImg1} alt="FAQ 1" className="image-anime reveal" variants={fadeIn} />
                </div>
                <div className="col-md-6 col-6">
                  <motion.img src={faqImg2} alt="FAQ 2" className="image-anime reveal" variants={fadeIn} />
                </div>
              </div>
              <div className="row align-items-start">
                <div className="col-md-6 col-6">
                  <motion.img src={faqImg3} alt="FAQ 3" className="image-anime reveal" variants={fadeIn} />
                </div>
                <div className="col-md-6 col-6">
                  <motion.img src={faqImg4} alt="FAQ 4" className="image-anime reveal" variants={fadeIn} />
                </div>
              </div>
              <motion.div className="our-faqs-bulitup" variants={fadeIn}>
                <img src={faqIcon} alt="FAQ Icon" />
              </motion.div>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="col-lg-7">
            <Accordion className="faq-accordion">
              {faqsData.map((faq, index) => (
                <motion.div key={faq.id} variants={fadeIn}>
                  <Accordion.Item eventKey={String(index)}>
                    <Accordion.Header>{faq.question}</Accordion.Header>
                    <Accordion.Body>
                      <p>{faq.answer}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Faqs;
