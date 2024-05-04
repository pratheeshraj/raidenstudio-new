import React from "react";
import { Link } from "react-router-dom";

const AboutSectionOne = () => {
  return (
    <>
      {/* About Section one Start */}
      <div className="about-section one" style={{ background: "white" }}>
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-6">
              <div className="left-wrapper ">
                <div className=" img-file ">
                  <img
                    className=" img-fluid "
                    data-aos="fade-right"
                    data-aos-delay="200"
                    src="\assets\img\contact-img\homeabout.jpg"
                    alt=""
                  />
                  <div className="shape-7 poa">
                    <img src="/assets/img/icon/69_icon.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="right-wrapper "
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div className="section-title-shape-one">
                  <h3>ABOUT Raiden</h3>
                  <h2 style={{ color: "black", fontSize: "2rem" }}>Code And Creativity: The Dual Forces Driving World-Class Blockchain Solutions</h2>
                  <p style={{ color: "black" }}>
                    Our cutting-edge solutions help our clients achieve previously unheard-of levels of achievement by using the power of tech.                  </p>
                </div>
                <div className="inner-list">
                  <ul>
                    <li>
                      <span className="img-file">
                        <img className="service-one_image" src="/assets/img/about/strategic.webp" alt="" />
                      </span>
                      <div>
                        <h4 style={{ color: "black", fontSize: "1.6rem", marginBottom: "10px" }}>Strategize</h4>
                        <p style={{ color: "black" }}>
                          Enabling exclusive blockchain technology will allow us to realize the full potential of digital businesses. With the top priority of adding value to the projects.
                        </p>
                      </div>
                    </li>
                    <li>
                      <span className="img-file">
                        <img className="service-one_image" src="/assets/img/about/computer-science (1)@0 1.webp" alt="" />
                      </span>
                      <div>
                        <h4 style={{ color: "black", fontSize: "1.6rem", marginBottom: "10px" }}>
                          Pioneering Unique Digital Solutions</h4>
                        <p style={{ color: "black" }}>
                          An unparalleled commitment to delivering maximum satisfaction to clients, combined with truthfulness and enthusiasm.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* <div className="inner-btn">
                  <div>
                    <Link className="default-btn" to="/contact-us">
                      Learn About AI
                    </Link>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="shape-img">
          <div className="shape-1 poa">
            <img src="/assets/img/icon/10_icon.png" alt="" />
          </div>
          <div className="shape-2 poa">
            <img src="/assets/img/icon/09_icon.png" alt="" />
          </div>
          <div className="shape-3 poa">
            <img src="/assets/img/shape/01_shape.svg" alt="" />
          </div>
          <div className="shape-4 poa">
            <img src="/assets/img/icon/63_icon.png" alt="" />
          </div>
          <div className="shape-5 poa">
            <img src="/assets/img/icon/66_icon.png" alt="" />
          </div>
          <div className="shape-6 poa">
            <img src="/assets/img/icon/68_icon.png" alt="" />
          </div>
        </div> */}
      </div>
      {/* About Section one End */}
    </>
  );
};

export default AboutSectionOne;
