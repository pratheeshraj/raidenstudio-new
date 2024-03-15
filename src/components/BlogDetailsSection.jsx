import React, { useEffect } from "react";
<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { GetBlogDetails } from "../action/BlogAction";

const BlogDetailsSection = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetBlogDetails(id));
  }, []);
  const getContent = (data) => {
    return <div dangerouslySetInnerHTML={{ __html: data }} />;
  };
  const { BlogDetails } = useSelector((state) => state.blogState);
=======
// import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
// import { GetBlogDetails } from "../action/BlogAction";

const BlogDetailsSection = () => {
  // const { id } = useParams();
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(GetBlogDetails(id));
  // }, []);
  // const getContent = (data) => {
  //   return <div dangerouslySetInnerHTML={{ __html: data }} />;
  // };
  // const { BlogDetails } = useSelector((state) => state.blogState);
>>>>>>> dd80101908b06ceeb523bbb49b2eaba7af986fac
  return (
    <>
      {/* Blog Details Section one start */}
      {/* <section className="blog-section details">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-8">
              <div className="wrapper" data-aos="fade-up" data-aos-delay="300">
                <div className="blog-image">
                  <img
                    className="img-fluid"
                    src={BlogDetails?.imageurl}
                    alt=""
                  />
                </div>
                <div className="article-content">
                  <div className="title">
                    <h2>{BlogDetails?.mainheading}</h2>
                  </div>
                  <div className="meta">
                    <ul>
                      <li>
                        <span>
                          <i className="fa-solid fa-user" />
                        </span>
                        <Link to="#">By admin</Link>
                      </li>
                      <li>
                        <span>
                          <i className="fa-solid fa-folder" />
                        </span>
                        <Link to="#">Artificial</Link>
                      </li>
                      <li>
                        <span>
                          <i className="fa-solid fa-comment" />
                        </span>
                        <Link to="#">3 Comments</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="inner-text">{getContent(BlogDetails?.content)}</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="widget-area">
                <div
                  className="widget widget-search"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="search">
                    <div className="title">
                      <h2>Search Inside</h2>
                    </div>
                    <div className="search-wrap">
                      <form className="search-form">
                        <input
                          type="search"
                          className="search-field"
                          placeholder="Search..."
                        />
                        <button type="submit">
                          <i className="fa-solid fa-magnifying-glass" />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <div
                  className="widget widget-post"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="post">
                    <div className="title">
                      <h2>Recent Posts</h2>
                    </div>
                    <article className="post-item">
                      <Link to="/blog-details">
                        <div className="img-file">
                          <img src="/assets/img/blog/01_blog.png" alt="" />
                        </div>
                      </Link>
                      <div className="info">
                        <time dateTime="2023-06-19">May 26, 2023</time>
                        <h4 className="title">
                          <Link to="/blog-details">
                            AI consulting services and solutions that will help.
                          </Link>
                        </h4>
                      </div>
                    </article>
                    <article className="post-item">
                      <Link to="/blog-details">
                        <div className="img-file">
                          <img src="/assets/img/blog/02_blog.png" alt="" />
                        </div>
                      </Link>
                      <div className="info">
                        <time dateTime="2023-06-19">May 26, 2023</time>
                        <h4 className="title">
                          <Link to="/blog-details">
                            We will respond within one working day and arrange.
                          </Link>
                        </h4>
                      </div>
                    </article>
                    <article className="post-item">
                      <Link to="/blog-details">
                        <div className="img-file">
                          <img src="/assets/img/blog/03_blog.png" alt="" />
                        </div>
                      </Link>
                      <div className="info">
                        <time dateTime="2023-06-19">May 26, 2023</time>
                        <h4 className="title">
                          <Link to="/blog-details">
                            An expert matching your market niche and industry.
                          </Link>
                        </h4>
                      </div>
                    </article>
                    <article className="post-item">
                      <Link to="/blog-details">
                        <div className="img-file">
                          <img src="/assets/img/blog/04_blog.png" alt="" />
                        </div>
                      </Link>
                      <div className="info">
                        <time dateTime="2023-06-19">May 26, 2023</time>
                        <h4 className="title">
                          <Link to="/blog-details">
                            You will get a service suite offering, including
                            time.
                          </Link>
                        </h4>
                      </div>
                    </article>
                  </div>
                </div>
                <div
                  className="widget widget-follow"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="follow">
                    <div className="title">
                      <h2>Follow Us</h2>
                    </div>
                    <div className="social">
                      <ul>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-facebook-f" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-linkedin-in" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-pinterest" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-instagram" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="widget widget-categories"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="categories">
                    <div className="title">
                      <h2>Categories</h2>
                    </div>
                    <div className="list-inner">
                      <ul>
                        <li>
                          <Link to="#">
                            <span>Business</span>
                            <span>(8)</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>Finance</span>
                            <span>(10)</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>Web Design</span>
                            <span>(3)</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>Counseling</span>
                            <span>(5)</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>IT Service</span>
                            <span>(11)</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>AI software</span>
                            <span>(12)</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="widget widget-tags"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="tags">
                    <div className="title">
                      <h2>Tags</h2>
                    </div>
                    <div className="list-grid">
                      <Link to="#">Machine Learning (4)</Link>
                      <Link to="#">ICT Book (6)</Link>
                      <Link to="#">Technology (2)</Link>
                      <Link to="#">Robot (3)</Link>
                      <Link to="#">AI Tech (11)</Link>
                      <Link to="#">Intelligence (6)</Link>
                      <Link to="#">Artificial (3)</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-image-file">
          <div className="shape-img-1 poa">
            <img src="/assets/img/icon/21_icon.png" alt="" />
          </div>
          <div className="shape-img-2 poa">
            <img src="/assets/img/icon/64_icon.png" alt="" />
          </div>
          <div className="shape-img-4 poa">
            <img src="/assets/img/icon/08_icon.png" alt="" />
          </div>
          <div className="shape-img-5 poa">
            <img src="/assets/img/icon/78_icon.png" alt="" />
          </div>
          <div className="shape-img-6 poa">
            <img src="/assets/img/icon/43_icon.png" alt="" />
          </div>
          <div className="shape-img-7 poa">
            <img src="/assets/img/icon/68_icon.png" alt="" />
          </div>
          <div className="shape-img-8 poa">
            <img src="/assets/img/icon/71_icon.png" alt="" />
          </div>
        </div>
      </section> */}
      {/* Blog Details Section one end */}
    </>
  );
};

export default BlogDetailsSection;
