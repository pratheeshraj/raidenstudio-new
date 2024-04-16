import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";

const ProjectSectionAll = () => {
  const { allcaseStudy, loading } = useSelector(
    (state) => state.caseStudyState
  );
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 4;


  const endOffset = itemOffset + itemsPerPage;
  const currentItems = allcaseStudy?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(allcaseStudy?.length / itemsPerPage);
  const handlePageClick = (event) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    const newOffset = (event.selected * itemsPerPage) % allcaseStudy?.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <>
      {/* Project Section one start */}
      <section className="project-section one single-row">
        <div className="auto-container">
          <div className="row">
            {allcaseStudy?.map((data,i) => {
              return (
                <div className="col-lg-6" key={i}>
                  <div
                    className="project-wrapper "
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div className="img-file por image_conatiner">
                      <img
                        className="img-fluid"
                        src={data?.imageurl}
                        alt=""
                      />
                      <div className="shape-overlay poa">
                        <h2>
                       {data?.mainheading}
                        </h2>
                        <p>
                      {
                        `${data?.case_description.substring(0,120)}...`
                      }
                        </p>
                        <div className="d-inline-block">
                          <Link to={`/case-study-detail/${data.url}`}>
                            View More{" "}
                            <i className="fa-light fa-chevrons-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="row">
            <div className="col-12">
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
        </div>
      </section>
      {/* Project Section one end */}
    </>
  );
};

export default ProjectSectionAll;
