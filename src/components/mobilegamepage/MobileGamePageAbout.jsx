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
                With years of experience under our belt, we excel in creating
                engaging and addictive gaming experiences across various genres.
              </p>
              <p>
                <strong>Cutting-Edge Technology:</strong> We integrate advanced
                technologies like AR and VR for immersive experiences.
                Cross-Platform Mastery: Expertise in Unity and Unreal Engine
                ensures seamless performance across devices
              </p>
              <p>
                <strong> Diverse Genre Proficiency:</strong> From action to
                strategy, we excel in developing games across all genres.
              </p>
              <p>
                <strong> Scalable Solutions:</strong> Our games are designed for
                future expansion and feature enhancements.
              </p>
              <p>
                <strong>Monetization & Engagement:</strong> We optimize for
                revenue while fostering long-term player engagement through
                data-driven strategies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileGamePageAbout;
