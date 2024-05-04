import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const GameDescription = ({ htmlString }) => {
  return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
};

const CaseStudies = () => {
  const { allcaseStudy, loading } = useSelector(
    (state) => state.caseStudyState
  );

  return (
    <>
      {/* Project Section two start */}
      <section
        className="project-section two"
        style={{ background: "#F8F9FA" }}
      >
        <div className="auto-container">
          <div className="row">
            <div className="col-12">
              <div
                className="section-title-shape-one "
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3
                  className="white"
                  style={{ textAlign: "center", color: "#13C4A1" }}
                >
                  CASE STUDIES
                </h3>
                <h2 style={{ textAlign: "center", color: "black" }}>
                  Our successful Latest and <br /> Unique{" "}
                  <span className="theme-color">project</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {allcaseStudy?.slice(0, 6).map((data, index) => {
              return (

                <div className="col-xl-4 col-md-6">
                  <div
                    className="project-wrapper "
                    data-aos="fade-up"
                    data-aos-delay="200"
                    style={{ height: "200px" }}
                  >
                    <img className="img-fluid" src={data?.imageurl} alt="" style={{ objectFit: "cover", height: "100%" }} />
                    <div className="shape-overlay">
                      <h3>{`${data?.mainheading.substring(0, 15)}...`}</h3>
                      <p>
                        <GameDescription
                          htmlString={`${data?.challenge_content.substring(
                            0,
                            75
                          )}...`}
                        />
                      </p>
                      <div className="d-flex justify-content-center">
                        <Link
                          className="default-btn"
                          Link
                          to={`/case-study-detail/${data.url}`}
                        >
                          Learn More
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
              <Link className="default-btn" to="/case-studies">
                View All Case Studies
              </Link>
            </div>
          </div>
        </div>
        <div className="shape-image">
          <img
            className="shape-1 poa"
            src="/assets/img/shape/09_shape.png"
            alt=""
          />
          <img
            class="shape-7 poa"
            src="/assets/img/shape/05_shape.png"
            alt=""
          />
        </div>
      </section>
      {/* Project Section two end */}
    </>
  );
};

export default CaseStudies;
