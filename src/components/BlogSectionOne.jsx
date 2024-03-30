import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BlogSectionOne = () => {
  const { allBlogs } = useSelector((state) => state.blogState);
  console.log(allBlogs);
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };
  return (
    <>
      {/* Blog Section one start */}
      <section className="blog-section one">
        <div className="auto-container">
          <div className="row">
            <div className="col-12">
              <div
                className="section-title-shape-one middle "
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h3>Our Latest Blog</h3>
                <h2>
                  Find the latest Blogs news <br />{" "}
                  <span className="theme-color">from WIRED</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {allBlogs?.slice(0, 3).map((data, index) => {
              return (
                <div className="col-lg-4 col-md-6">
                  <div
                    className="blog-items "
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div className="img-file">
                      <img className="img-fluid" src={data?.imageurl} alt="" />
                    </div>
                    <div className="text-file">
                      <div className="intro">
                        <div className="d-flex gap-3 align-items-center">
                          <div className="dp-img">
                            <img
                              src="/assets/img/testimonial/01_testimonial-profile.png"
                              alt=""
                            />
                          </div>
                          <div>
                            <p className="admin">Admin</p>
                          </div>
                        </div>
                        <div>
                          <div className="date d-flex gap-2 align-items-center">
                            <span>
                              <i className="fa-solid fa-calendar-days" />
                            </span>
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
                        <p>{`${data?.maincontent.substring(0, 60)}...`}</p>
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
            src="/assets/img/shape/05_shape.png"
            alt=""
          />
          <img
            className="shape-2 poa"
            src="/assets/img/icon/58_icon.png"
            alt=""
          />
          <img
            className="shape-3 poa"
            src="/assets/img/icon/59_icon.png"
            alt=""
          />
          <img
            className="shape-4 poa"
            src="/assets/img/icon/09_icon.png"
            alt=""
          />
          <img
            className="shape-5 poa"
            src="/assets/img/icon/43_icon.png"
            alt=""
          />
          <img
            className="shape-6 poa"
            src="/assets/img/icon/78_icon.png"
            alt=""
          />
        </div>
      </section>
      {/* Blog Section one end */}
    </>
  );
};

export default BlogSectionOne;
