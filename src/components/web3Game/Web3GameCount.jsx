import React from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
const Web3GameCount = () => {
  return (
    <section
      className="counter-section two white"
      data-background="/assets/img/shape/03_shape.svg"
    >
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="wrapper " data-aos="fade-up" data-aos-delay="200">
              <div className="d-adjust gap-2 justify-content-center">
                <h2 className="counter">
                  <ReactVisibilitySensor>
                    {({ isVisible }) => (
                      <div> {isVisible ? <CountUp end={300} /> : 0}</div>
                    )}
                  </ReactVisibilitySensor>
                </h2>
                <h3>K +</h3>
              </div>
              <h4>Lines of Code Written </h4>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              className="wrapper mt-md-0 mt-4 "
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="d-adjust gap-2 justify-content-center">
                <h2 className="counter">
                  <ReactVisibilitySensor>
                    {({ isVisible }) => (
                      <div> {isVisible ? <CountUp end={99} /> : 0}</div>
                    )}
                  </ReactVisibilitySensor>
                </h2>
                <h3>%</h3>
              </div>
              <h4>On-Time Project Delivery</h4>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              className="wrapper mt-lg-0 mt-4 "
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="d-adjust gap-2 justify-content-center">
                <h2 className="counter">
                  <ReactVisibilitySensor>
                    {({ isVisible }) => (
                      <div> {isVisible ? <CountUp end={80} /> : 0}</div>
                    )}
                  </ReactVisibilitySensor>
                </h2>
                <h3>%</h3>
              </div>
              <h4>Cost Savings for Startups </h4>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              className="wrapper mt-lg-0 mt-4 "
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="d-adjust gap-2 justify-content-center">
                <h2 className="counter">
                  <ReactVisibilitySensor>
                    {({ isVisible }) => (
                      <div> {isVisible ? <CountUp end={30} /> : 0}</div>
                    )}
                  </ReactVisibilitySensor>
                </h2>
                <h3>+</h3>
              </div>
              <h4>Unity Certified Developers</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Web3GameCount;
