import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { GetBlogDetails } from "../action/BlogAction";
// import { useDispatch, useSelector } from "react-redux";
// import { GetBlogDetails } from "../action/BlogAction";

const BlogDetailsSection = () => {
  const getContent = (data) => {
    return <div dangerouslySetInnerHTML={{ __html: data }} />;
  };
  const { BlogDetails, BlogByCategory, recentBlogs, Blogcategory, tags } =
    useSelector((state) => state.blogState);
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <>
      {/* Blog Details Section one start */}
      <section className="blog-section details">
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
                        {BlogDetails?.tags.map((tagsString, index) => {
                          const tagsArray = tagsString
                            .replace(/\s/g, "")
                            .split(",");
                          return (
                            <React.Fragment key={index}>
                              {tagsArray.map((tag, tagIndex) => (
                                <Link to={`/blog/tag/${tag}`} key={tagIndex}>
                                  {tag},
                                </Link>
                              ))}
                            </React.Fragment>
                          );
                        })}
                      </li>
                    </ul>
                  </div>
                  <div className="inner-text">
                    {getContent(BlogDetails?.content)}
                  </div>
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

                    {recentBlogs?.map((data, index) => {
                      return (
                        <article className="post-item" key={index}>
                          <div>
                            <div className="img-file">
                              <img src={data?.imageurl} alt="" />
                            </div>
                          </div>
                          <div className="info">
                            <time dateTime="2023-06-19">
                              {formatDate(data?.createdAt)}
                            </time>
                            <h4 className="title">
                              <Link to={`/blogdetails/${data?.url}`}>
                                {`${data?.mainheading.substring(0, 40)}...`}
                              </Link>
                            </h4>
                          </div>
                        </article>
                      );
                    })}
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
                        {Blogcategory?.map((value, index) => {
                          return (
                            <li key={index}>
                              <Link to={`/blog/category/${value?._id}`}>
                                <span>{value?._id}</span>
                                <span>{value?.count}</span>
                              </Link>
                            </li>
                          );
                        })}
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
                      {tags?.map((data, index) => {
                        return (
                          <Link to={`/blog/tag/${data?.tag}`} key={index}>
                            {data?.tag} ({data?.count})
                          </Link>
                        );
                      })}
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
      </section>
      {/* Blog Details Section one end */}
    </>
  );
};

export default BlogDetailsSection;
