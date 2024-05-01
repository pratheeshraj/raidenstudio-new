import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BlogSectionTwo = () => {
  const { allBlogs } = useSelector((state) => state.blogState);
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };
  return (
    <>
      {/* Blog Section two start */}
      <section className="blog-section two" style={{ background: "white" }}>
        <div className="auto-container">
          <div className="row">
            <div className="col-12">
              <div
                className="section-title-shape-one middle "
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3 style={{ color: "#13C4A1" }}>Blog</h3>
                <h2 style={{ color: "black", textAlign: "center" }}>
                  Latest thinking &amp; our <br />{" "}
                  <span className="theme-color">company news</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {allBlogs?.slice(0, 3).map((data, index) => {
              return (
                <div className="col-lg-4 col-md-6 col-12" key={index}>
                  <div
                    className="blog-items "
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div className="img-file">
                      <img className="img-fluid" src={data.imageurl} alt="" />
                    </div>
                    <div className="text-file">
                      <div className="intro">
                        <div>
                          <div className="date">
                            <i className="fa-sharp fa-solid fa-calendar-days pe-1" />
                            {formatDate(data?.createdAt)}
                          </div>
                        </div>
                      </div>
                      <div className="title">
                        <h2>
                          <Link to={`/blogdetails/${data?.url}`}>
                            {`${data?.mainheading.substring(0, 40)}...`}
                          </Link>
                        </h2>
                        <p>
                          {`${data?.maincontent.substring(0, 100)}...`}
                        </p>
                        <Link className="link" to={`/blogdetails/${data?.url}`}>
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="inner-btn d-adjust">
            <div>
              <Link className="default-btn" to="/blog">
                View More Blogs
              </Link>
            </div>
          </div>
        </div>
        <div className="shape-image">
          <img
            className="shape-1 poa"
            src="/assets/img/shape/08_shape.png"
            alt=""
          />
          <img
            className="shape-2 poa"
            src="/assets/img/icon/58_icon.png"
            alt=""
          />
          <img
            className="shape-3 poa"
            src="/assets/img/icon/69_icon.png"
            alt=""
          />
          <img
            className="shape-4 poa"
            src="/assets/img/icon/76_icon.png"
            alt=""
          />
          {/* <img
            className="shape-5 poa"
            src="/assets/img/icon/43_icon.png"
            alt=""
          /> */}
          {/* <img
            className="shape-6 poa"
            src="/assets/img/icon/89_icon.png"
            alt=""
          /> */}
        </div>
      </section>
      {/* Blog Section two end */}
    </>
  );
};

export default BlogSectionTwo;
