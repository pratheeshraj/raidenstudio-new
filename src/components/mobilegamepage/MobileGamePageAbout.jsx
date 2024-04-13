import React from "react";

const MobileGamePageAbout = () => {
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
                Our Expertise In Mobile Game Development
              </h2>
              <p style={{ color: "black" }}>
                 At Raiden, we boast a team of seasoned developers and
                designers who are passionate about mobile game development. With
                years of experience under our belt, we excel in creating
                engaging and addictive gaming experiences across various genres.
              </p>
      
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileGamePageAbout;
