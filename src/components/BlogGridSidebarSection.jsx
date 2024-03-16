import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BlogGridSidebarSection = () => {
  const [itemOffset, setItemOffset] = useState(0); 
  const { allBlogs, recentBlogs, Blogcategory } = useSelector(
    (state) => state.blogState
  );
  const itemsPerPage = 6;
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = allBlogs?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(allBlogs?.length / itemsPerPage);
  const handlePageClick = (event) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    const newOffset = (event.selected * itemsPerPage) % allBlogs?.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <>
      {/* Blog Grid Section one start */}
      <section className="blog-section blog-grid one">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                {currentItems?.map((data) => {
                  return (
                    <div className="col-lg-6 col-md-6 col-12">
                      <div
                        className="blog-items "
                        data-aos="fade-up"
                        data-aos-delay="200"
                      >
                        <div className="img-file">
                          <img
                            className="img-fluid"
                            src={data?.imageurl}
                            alt=""
                          />
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
                                <span>{formatDate(data?.createdAt)}</span>
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
              <div className="row">
                <div className="col">
                  <div
                    className="pagination"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                   
                   <ReactPaginate
                      breakLabel="..."
                      nextLabel=">>"
                      onPageChange={handlePageClick}
                      pageRangeDisplayed={5}
                      pageCount={pageCount}
                      previousLabel="<<"
                      renderOnZeroPageCount={null}
                      className="pagination"
                    />
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
                        return(
                          <li key={index}>
                          <Link to={`/blog/category/${value?._id}`}>
                            <span>{value?._id}</span>
                            <span>{value?.count}</span>
                          </Link>
                        </li>
                        )
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
            <img src="/assets/img/icon/26_icon.png" alt="" />
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
      {/* Blog Grid Section one end */}
    </>
  );
};

export default BlogGridSidebarSection;
