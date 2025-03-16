import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // ✅ Import Framer Motion
import blogImage1 from "../../assets/images/post-1.jpg";
import blogImage2 from "../../assets/images/post-2.jpg";
import blogImage3 from "../../assets/images/post-3.jpg";
 // Import CSS for styling

// ✅ Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "10 Essential Tips for Choosing the Right Builder",
    image: blogImage1,
    content: "Full content of blog 1...",
  },
  {
    id: 2,
    title: "The Future of Sustainable Construction Innovations",
    image: blogImage2,
    content: "Full content of blog 2...",
  },
  {
    id: 3,
    title: "How to Design Your Dream Home: A Step-by-Step Guide",
    image: blogImage3,
    content: "Full content of blog 3...",
  },
];

const Blogpage = () => {
  return (
    <motion.div
      className="blog-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* ✅ Hero Section */}
      <motion.div
        className="hero bg-section parallaxie"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="hero-content">
                <div className="section-title">
                  <motion.h1
                    className="text-anime-style-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    Blog
                  </motion.h1>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
                      Home / <span style={{ color: "#ffb703" }}>Blog</span>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ✅ Blog Section */}
      <motion.div
        className="our-blog"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title">
                <motion.h3
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  News & Blog
                </motion.h3>
                <motion.h2
                  className="text-anime-style-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  Articles & Blog Posts
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  We specialize in a wide range of construction services, including
                  residential, commercial, and industrial projects.
                </motion.p>
              </div>
            </div>
          </div>

          {/* ✅ Blog Items */}
          <div className="row">
            {blogPosts.map((post, index) => (
              <motion.div
                className="col-lg-4 col-md-6"
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.2, duration: 0.5 }}
              >
                <motion.div
                  className="blog-item"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="post-featured-image"
                    data-cursor-text="View"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                  >
                    <figure>
                      <Link to={`/blog/${post.id}`} className="image-anime">
                        <img src={post.image} alt={post.title} />
                      </Link>
                    </figure>
                  </motion.div>
                  <motion.div
                    className="post-item-content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.2, duration: 0.5 }}
                  >
                    <div className="post-item-body">
                      <h2>
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                      </h2>
                    </div>
                    <div className="post-item-footer">
                      <Link to={`/blog/${post.id}`} className="readmore-btn">
                        Read More
                      </Link>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Blogpage;
