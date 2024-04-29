import React from "react";
import { Link } from "react-router-dom";

const ProjectSectionThree = () => {
  return (
    <>
      {/* Project Section three start */}
      <section className="project-section three">
        <div className="auto-container">
          <div className="row">
            <div className="">
              <div
                className="section-title-shape-one left black "
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <h3 style={{ textAlign: "center", color: "#13C4A1" }}>Our Products</h3>
                <h2 style={{ textAlign: "center", width: "100%" }}>
                  Next-Level
                  <span className="theme-color"> Gaming,VR and Blockchain </span>Innovations!
                </h2>
                <p style={{ textAlign: "center" }}>
                  Dive into a Realm of Cutting-Edge Entertainment with Our Exciting Gaming, VR, and Blockchain Solutions. Unleash Innovation Today!
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div
                className="project-wrapper "
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="img-file por">
                  <img
                    className="img-fluid"
                    src="/assets/img/product/raiden verse.jpg"
                    alt=""
                  />
                  <div className="shape-overlay poa">
                    <div className="inner">
                      <h2>Raiden Verse</h2>
                      <p>
                        In this space, we will explore the most innovative and
                        impactful Artificial Intelligence projects, real-world
                        applications.
                      </p>
                      <div className="link d-inline-block">
                        <Link to="/raiden-verse">View More</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="project-wrapper "
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="img-file por">
                  <img
                    className="img-fluid"
                    src="/assets/img/product/simx.jpg"
                    alt=""
                  />
                  <div className="shape-overlay poa">
                    <div className="inner">
                      <h2>Raiden SimX</h2>
                      <p>
                        In this space, we will explore the most innovative and
                        impactful Artificial Intelligence projects, real-world
                        applications.
                      </p>
                      <div className="link d-inline-block">
                        <Link to="/raiden-simx">View More</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="project-wrapper "
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="img-file por">
                  <img
                    className="img-fluid"
                    src="/assets/img/product/CASINOGAMES.jpg"
                    alt=""
                  />
                  <div className="shape-overlay poa">
                    <div className="inner">
                      <h2>Metaverse CASINO</h2>
                      <p>
                        In this space, we will explore the most innovative and
                        impactful Artificial Intelligence projects, real-world
                        applications.
                      </p>
                      <div className="link d-inline-block">
                        <Link to="/raiden-cogni">View More</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="project-wrapper "
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="img-file por">
                  <img
                    className="img-fluid"
                    src="/assets/img/product/arcviz.jpg"
                    alt=""
                  />
                  <div className="shape-overlay poa">
                    <div className="inner">
                      <h2>Raiden ARCVIZ</h2>
                      <p>
                        In this space, we will explore the most innovative and
                        impactful Artificial Intelligence projects, real-world
                        applications.
                      </p>
                      <div className="link d-inline-block">
                        <Link to="/raiden-arcviz">View More</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="inner-btn d-adjust">
            <div>
              <Link className="default-btn" to="/contact">
                View All Projects
              </Link>
            </div>
          </div> */}
        </div>
        <div className="shape-image">
          <img
            className="shape-1 poa"
            src="/assets/img/shape/14_shape.png"
            alt=""
          />
          {/* <img
            className="shape-2 poa"
            src="/assets/img/icon/03_icon.png"
            alt=""
          />
          <img
            className="shape-3 poa"
            src="/assets/img/icon/89_icon.png"
            alt=""
          /> */}
        </div>
      </section>
      {/* Project Section three end */}
    </>
  );
};

export default ProjectSectionThree;
