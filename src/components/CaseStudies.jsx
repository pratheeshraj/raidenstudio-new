import React from "react";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  return (
    <>
      {/* Project Section two start */}
      <section className="project-section two">
        <div className="auto-container">
          <div className="row">
            <div className="col-12">
              <div
                className="section-title-shape-one "
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3 className="white" style={{ textAlign: "center", color: "#13C4A1" }}>
                  CASE STUDIES
                </h3>
                <h2 style={{ textAlign: "center" }}>
                  Our successful Latest and <br /> Unique{" "}
                  <span className="theme-color">project</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div
                className="project-wrapper "
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <img
                  className="img-fluid"
                  src="/assets/img/project/01_project.png"
                  alt=""
                />
                <div className="shape-overlay">
                  <h3>
                    <Link to="#">Robotic Automation</Link>
                  </h3>
                  <p>
                    Oracle Cloud Infrastructure (OCI) AI Services is a
                    collection{" "}
                  </p>
                  <div className="d-flex justify-content-center">
                    <Link className="default-btn" to="#">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="project-wrapper "
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <img
                  className="img-fluid"
                  src="/assets/img/project/02_project.png"
                  alt=""
                />
                <div className="shape-overlay">
                  <h3>
                    <Link to="#">Machine Learning</Link>
                  </h3>
                  <p>
                    Oracle Cloud Infrastructure (OCI) AI Services is a
                    collection{" "}
                  </p>
                  <div className="d-flex justify-content-center">
                    <Link className="default-btn" to="#">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="project-wrapper "
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <img
                  className="img-fluid"
                  src="/assets/img/project/03_project.png"
                  alt=""
                />
                <div className="shape-overlay">
                  <h3>
                    <Link to="#">Native Engagement</Link>
                  </h3>
                  <p>
                    Oracle Cloud Infrastructure (OCI) AI Services is a
                    collection{" "}
                  </p>
                  <div className="d-flex justify-content-center">
                    <Link className="default-btn" to="#">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="project-wrapper "
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <img
                  className="img-fluid"
                  src="/assets/img/project/04_project.png"
                  alt=""
                />
                <div className="shape-overlay">
                  <h3>
                    <Link to="#">Robotic Process</Link>
                  </h3>
                  <p>
                    Oracle Cloud Infrastructure (OCI) AI Services is a
                    collection{" "}
                  </p>
                  <div className="d-flex justify-content-center">
                    <Link className="default-btn" to="#">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="project-wrapper "
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <img
                  className="img-fluid"
                  src="/assets/img/project/05_project.png"
                  alt=""
                />
                <div className="shape-overlay">
                  <h3>
                    <Link to="#">Digital Money</Link>
                  </h3>
                  <p>
                    Oracle Cloud Infrastructure (OCI) AI Services is a
                    collection{" "}
                  </p>
                  <div className="d-flex justify-content-center">
                    <Link className="default-btn" to="#">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="project-wrapper "
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <img
                  className="img-fluid"
                  src="/assets/img/project/06_project.png"
                  alt=""
                />
                <div className="shape-overlay">
                  <h3>
                    <Link to="#">Native Engagement</Link>
                  </h3>
                  <p>
                    Oracle Cloud Infrastructure (OCI) AI Services is a
                    collection{" "}
                  </p>
                  <div className="d-flex justify-content-center">
                    <Link className="default-btn" to="#">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="inner-btn d-adjust">
            <div>
              <Link className="default-btn" to="/contact">
                View All Projects
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
            className="shape-7 poa"
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
