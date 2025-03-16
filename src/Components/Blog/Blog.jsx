import React from "react";


// Import Blog Images
import blog1 from "../../assets/images/post-1.jpg";
import blog2 from "../../assets/images/post-2.jpg";
import blog3 from "../../assets/images/post-3.jpg";

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Tips for Choosing the Right Builder",
    image: blog1,
    link: "#",
  },
  {
    id: 2,
    title: "The Future of Sustainable Construction Innovations",
    image: blog2,
    link: "#",
  },
  {
    id: 3,
    title: "How to Design Your Dream Home: A Step-by-Step Guide",
    image: blog3,
    link: "#",
  },
];

const Blog = () => {
  return (
    <div className="our-blog">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            <div className="section-title">
              <h3 className="wow fadeInUp">News & Blog</h3>
              <h2 className="text-anime-style-3" data-cursor="-opaque">
                Articles & Blog Posts
              </h2>
              <p className="wow fadeInUp" data-wow-delay="0.25s">
                We specialize in a wide range of construction services, including residential, commercial, and industrial projects.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {blogPosts.map((post) => (
            <div key={post.id} className="col-lg-4 col-md-6 wow fadeInUp">
              <div className="blog-item">
                <div className="post-featured-image">
                  <a href={post.link} className="image-anime">
                    <img src={post.image} alt={post.title} />
                  </a>
                </div>

                <div className="post-item-content">
                  <div className="post-item-body">
                    <h2>
                      <a href={post.link}>{post.title}</a>
                    </h2>
                  </div>

                  <div className="post-item-footer">
                    <a href={post.link} className="readmore-btn">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
