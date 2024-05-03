import React from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
const P2eGameCount = () => {
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
                      <div style={{ color: "#FEA521" }}> {isVisible ? <CountUp end={25} /> : 0}</div>
                    )}
                  </ReactVisibilitySensor>
                </h2>
                <h3>+</h3>
              </div>
              <h4>Blockchain Integration</h4>
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
                      <div style={{ color: "#FEA521" }}> {isVisible ? <CountUp end={50} /> : 0}</div>
                    )}
                  </ReactVisibilitySensor>
                </h2>
                <h3>+</h3>
              </div>
              <h4>Custom Smart Contracts</h4>
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
                      <div style={{ color: "#FEA521" }}> {isVisible ? <CountUp end={100} /> : 0}</div>
                    )}
                  </ReactVisibilitySensor>
                </h2>
                <h3>+</h3>
              </div>
              <h4>Monetization Strategies</h4>
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
                      <div style={{ color: "#FEA521" }}> {isVisible ? <CountUp end={20} /> : 0}</div>
                    )}
                  </ReactVisibilitySensor>
                </h2>
                <h3>+</h3>
              </div>
              <h4>Community Building</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default P2eGameCount;
