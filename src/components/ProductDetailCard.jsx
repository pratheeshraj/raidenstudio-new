import React from "react";
import image1 from "../images/raidenverse/Frame8.jpg";
import image2 from "../images/raidenverse/Frame12.jpg";
import image3 from "../images/raidenverse/Frame11.jpg";
import image4 from "../images/raidenverse/Frame10.jpg";
const ProductDetailCard = () => {
  return (
    <>
      {/* Service Details Section Start */}

      <section className="project-section three">
        <div className="auto-container">
          <div className="row">
            <div className="">
              <div
                className="section-title-shape-one left black "
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <h2 style={{ textAlign: "center", width: "100%" }}>
                  How we help industry
                  <span className="theme-color"> leaders</span>
                </h2>
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
                  <img className="img-fluid" style={{ height: "362px" }} src={image1} alt="" />
                  <div className="shape-overlay poa">
                    <div className="inner Industry">
                      <h2>Retail Revolution</h2>

                      <div className="link d-inline-block">
                        <p>
                          Partnering with leading retail
                          brands, Raidenverse has transformed the shopping
                          experience through immersive virtual stores.
                        </p>
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
                  <img className="img-fluid" style={{ height: "362px" }} src={image2} alt="" />
                  <div className="shape-overlay poa">
                    <div className="inner Industry">
                      <h2>Educational Empowerment</h2>

                      <div className="link d-inline-block">
                        <p>
                          In the realm of education, Raidenverse has facilitated
                          immersive learning environments that transcend
                          physical limitations.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </p>
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
                  <img className="img-fluid" src={image4} style={{ height: "362px" }} alt="" />
                  <div className="shape-overlay poa">
                    <div className="inner Industry">
                      <h2>Healthcare Revolution</h2>

                      <div className="link d-inline-block">
                        <p>
                          In healthcare, Raidenverse has revolutionized patient
                          care and medical training. By creating lifelike
                          simulations and virtual environments
                        </p>
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
                  <img className="img-fluid" src={image3} style={{ height: "362px" }} alt="" />
                  <div className="shape-overlay poa">
                    <div className="inner Industry">
                      <h2>Corporate Collaboration</h2>

                      <div className="link d-inline-block">
                        <p>
                          For enterprise clients, Raidenverse serves as a
                          catalyst for collaboration and innovation. Our
                          platform enables distributed teams to collaborate
                          seamlessly in virtual workspaces
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="inner-btn d-adjust">
            <div>
              <Link className="default-btn" to="/contact-us">
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
          <img
            className="shape-2 poa"
            src="/assets/img/icon/03_icon.png"
            alt=""
          />
          <img
            className="shape-3 poa"
            src="/assets/img/icon/89_icon.png"
            alt=""
          />
        </div>
      </section>
      {/* Service Details Section End */}
    </>
  );
};

export default ProductDetailCard;
