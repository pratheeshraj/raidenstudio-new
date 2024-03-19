import React from "react";
import { motion } from "framer-motion";
const ProductDetailCard = () => {
  return (
    <>
      {/* Service Details Section Start */}
      <section className="service-details-section">
        <h2>How we help industry leaders</h2>
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-6  order-2 order-lg-1">
              <div
                className="right-wrapper pe-2"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <h2 className="title">
                  Are you in <span>Safety Training?</span>
                </h2>
                <p>
                  Enable safety layer around your processes and machines with an
                  understanding of the Do's and Don'ts of working.
                </p>
                <ul>
                  <li>Consequence-based learning.</li>
                  <li>Past incidents integrated.</li>
                  <li>Tracking, Report Generation and Certification.</li>
                </ul>
              </div>
            </div>
            <div
              className="col-lg-6 order-1"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <div className="left-wrapper ps-2">
                <div className="img-file">
                  <img
                    className="img-fluid"
                    src="/assets/img/service/02_service.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="row">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <div className="left-wrapper pe-2">
                <div className="img-file">
                  <img
                    className="img-fluid"
                    src="/assets/img/service/03_service.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="300">
              <div className="right-wrapper ps-2">
                <h2 className="title">
                  Are you in <span>Safety Manufacturing?</span>
                </h2>
                <p>
                  Enable safety layer around your processes and machines with an
                  understanding of the Do's and Don'ts of working.
                </p>
                <ul>
                  <li>Consequence-based learning.</li>
                  <li>Past incidents integrated.</li>
                  <li>Tracking, Report Generation and Certification.</li>
                </ul>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-lg-6  order-2 order-lg-1">
              <div
                className="right-wrapper pe-2"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <h2 className="title">
                  Are you in <span> IT and Security?</span>
                </h2>
                <p>
                  Enable safety layer around your processes and machines with an
                  understanding of the Do's and Don'ts of working.
                </p>
                <ul>
                  <li>Consequence-based learning.</li>
                  <li>Past incidents integrated.</li>
                  <li>Tracking, Report Generation and Certification.</li>
                </ul>
              </div>
            </div>
            <div
              className="col-lg-6 order-1"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <div className="left-wrapper ps-2">
                <div className="img-file">
                  <img
                    className="img-fluid"
                    src="/assets/img/service/02_service.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="row">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <div className="left-wrapper pe-2">
                <div className="img-file">
                  <img
                    className="img-fluid"
                    src="/assets/img/service/03_service.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="300">
              <div className="right-wrapper ps-2">
                <h2 className="title">
                  Are you in <span>Digital Transformation?</span>
                </h2>
                <p>
                  Enable safety layer around your processes and machines with an
                  understanding of the Do's and Don'ts of working.
                </p>
                <ul>
                  <li>Consequence-based learning.</li>
                  <li>Past incidents integrated.</li>
                  <li>Tracking, Report Generation and Certification.</li>
                </ul>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
      </section>
      {/* Service Details Section End */}
    </>
  );
};

export default ProductDetailCard;
