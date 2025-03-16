import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion"; // ✅ Import Framer Motion
import blogImage1 from "../../assets/images/post-1.jpg";
import blogImage2 from "../../assets/images/post-2.jpg";
import blogImage3 from "../../assets/images/post-3.jpg";


// ✅ Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "10 Essential Tips for Choosing the Right Builder",
    image: blogImage1,
    content:
      "Detailed analyses of successful construction projects, highlighting challenges, solutions, and outcomes...",
    tags: ["Home Design", "Interior", "Landscape", "Residences"],
  },
  {
    id: 2,
    title: "The Future of Sustainable Construction Innovations",
    image: blogImage2,
    content:
      "Exploring the impact of technologies like AI, 3D printing, and drones on construction...",
    tags: ["Sustainability", "Green Building", "Technology"],
  },
  {
    id: 3,
    title: "How to Design Your Dream Home: A Step-by-Step Guide",
    image: blogImage3,
    content:
      "Strategies for keeping construction projects on schedule and budget...",
    tags: ["Dream Home", "Architecture", "Interior Design"],
  },
];

const BlogOpen = () => {
  const { id } = useParams();
  const blogPost = blogPosts.find((post) => post.id === parseInt(id));

  if (!blogPost) {
    return (
      <motion.div
        className="blogopen-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Blog Post Not Found</h2>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="blogopen-page"
      initial={{ opacity: 0, y: 50 }} // Starts hidden below
      animate={{ opacity: 1, y: 0 }} // Moves up into view
      exit={{ opacity: 0, y: -50 }} // Moves up and fades out on exit
      transition={{ duration: 0.6 }}
    >
      {/* ✅ Hero Section */}
      <motion.div
        className="hero bg-section parallaxie"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="hero-content">
                <div className="section-title">
                  <h1 className="text-anime-style-3">{blogPost.title}</h1>
                  <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
                    Home / Blog /{" "}
                    <span style={{ color: "#ffb703" }}>{blogPost.title}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ✅ Blog Content */}
      <motion.div
        className="blogopen-container"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <motion.img
          src={blogPost.image}
          alt={blogPost.title}
          className="blogopen-image"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        />
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {blogPost.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {blogPost.content}
        </motion.p>

        <motion.blockquote
          className="blog-quote"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          "Good Advice for contractors and clients on navigating contracts and
          agreements."
        </motion.blockquote>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          Key Takeaways
        </motion.h3>
        <ul>
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.3 }}
          >
            Discuss must-have tools for construction.
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.3 }}
          >
            Tips on installing and maintaining various construction elements.
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.3 }}
          >
            Project planning strategies for efficiency.
          </motion.li>
        </ul>

        {/* ✅ Tags */}
        <motion.div
          className="post-tags"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <span>Tags: </span>
          {blogPost.tags.map((tag) => (
            <Link key={tag} to={`/tag/${tag}`} className="tag">
              {tag}
            </Link>
          ))}
        </motion.div>

        {/* ✅ Social Share */}
        <motion.div
          className="post-social-sharing"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.5 }}
        >
          <ul>
            <li>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </motion.div>

        {/* ✅ Back to Blog */}
        <motion.div
          className="blogopen-back"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
        >
          <Link to="/blog">← Back to Blog</Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default BlogOpen;
