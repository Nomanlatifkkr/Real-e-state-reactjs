import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import 'bootstrap/dist/css/bootstrap.min.css';

// Import CSS Files
import "./assets/css/slicknav.min.css";
import "./assets/css/swiper-bundle.min.css";
import "./assets/css/all.css"; 
import "./assets/css/magnific-popup.css";
import "./assets/css/mousecursor.css";
import "./assets/css/custom.css";

import "@fortawesome/fontawesome-free/css/all.min.css";

// Import Assets
import loader from './assets/images/loader.svg';

// Import Components
import Home from './pages/Home/Home';
import Homepage from './pages/Home/Homepage';
import ContactPage from './pages/Contactus/Contactuspage';
import About from './pages/About/About';
import Blogpage from './pages/Blogpages/Blogpage';
import BlogOpen from './pages/BlogOpen/BlogOpen';

const pageVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.5 } }
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate Preloader Delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading ? (
        <motion.div 
          className="preloader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="loading-container">
            <div className="loading"></div>
            <div id="loading-icon"><img src={loader} alt="Loading..." /></div>
          </div>
        </motion.div>
      ) : (
        <AnimatePresence mode="wait">
          <Routes>
            {/* Home Layout with Header & Footer */}
            <Route path="/" element={<Home />}>
              <Route index element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Homepage /></motion.div>} />
              <Route path="contact" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><ContactPage /></motion.div>} />
              <Route path="about" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><About /></motion.div>} />
              <Route path="blog" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Blogpage /></motion.div>} />
              <Route path="blog/:id" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><BlogOpen /></motion.div>} />
            </Route>
          </Routes>
        </AnimatePresence>
      )}
    </Router>
  );
}

export default App;
