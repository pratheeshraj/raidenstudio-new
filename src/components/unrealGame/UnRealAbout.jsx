import React from "react";

const UnRealAbout = () => {
  return (
    <section
      style={{ background: "white" }}
      className="service-details-section"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-6">
            <div className="left-wrapper pe-2">
              <div className="img-file">
                <img
                  className="img-fluid"
                  src="/assets/img/service/02_service.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="right-wrapper ps-2">
              <h2 style={{ color: "black" }} className="title">
                Our Expertise in Unreal Development
              </h2>
              <p style={{ color: "black" }}>
                At Raiden, we're passionate about pushing the boundaries of
                what's possible in Unreal Engine. Our team of skilled developers
                possesses in-depth knowledge and extensive experience in Unreal
                Development, ensuring top-notch solutions tailored to your
                needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnRealAbout;
