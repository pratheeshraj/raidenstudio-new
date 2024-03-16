import React from "react";

const AboutSectionThree = () => {
  return (
    <>
      {/* About Section three Start */}
      <section className="about-section three">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="left-wrapper "
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <div className="img-file">
                  <img
                    className="img-fluid "
                    src="/assets/img/about/_e17fb051-856f-4968-a2c0-150430fd0b61 2.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="right-wrapper pl-40 "
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div className="section-title-shape-one black">
                  <h3>ABOUT COMPANY</h3>
                  <h2>
                    Code and Creativity: The Dual Forces Driving World-class Blockchain Solutions
                  </h2>
                  <p>
                    Our pool of tech innovators is turning world-class tech ideas into reality. Our cutting-edge blockchain solutions help our clients achieve previously unheard-of levels of achievement by using the power of tech.
                  </p>
                </div>
                <div className="inner-list">
                  <ul>
                    <li>
                      <span className="img-file" style={{width:"220px"}}>
                        <img src="/assets/img/about/strategic.webp" alt="" />
                      </span>
                      <div>
                        <h4>Strategize</h4>
                        <p>
                        Enabling exclusive blockchain technology will allow us to realize the full potential
                        of digital businesses. With the top priority of adding value to the projects.
                        </p>
                      </div>
                    </li>
                    <li>
                      <span className="img-file">
                        <img src="/assets/img/about/computer-science (1)@0 1.webp" alt="" />
                      </span>
                      <div>
                        <h4>Pioneering Unique Digital Solutions</h4>
                        <p>
                        An unparalleled commitment to delivering maximum satisfaction to clients, combined with truthfulness and enthusiasm.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-img">
          <img
            className="shape-1 poa"
            src="/assets/img/shape/14_shape.png"
            alt=""
          />
          <img
            className="shape-2 poa"
            src="/assets/img/icon/84_icon.png"
            alt=""
          />
        </div>
      </section>
      {/* About Section one End */}
    </>
  );
};

export default AboutSectionThree;
