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
            <div className="left-wrapper ">
              <div className="img-file service_img_game" style={{ display: "flex", justifyContent: "center" }}>
                <img
                  className="img-fluid"
                  src="/assets/img/unreal/about.png"
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
                crafting immersive gaming experiences to pushing the boundaries
                of architectural visualization, our track record speaks volumes.
                Trust us to turn your vision into reality with precision,
                creativity, and a touch of magic.
              </p>
              <p>
                <strong> Seasoned Team:</strong> Our team comprises seasoned developers with years
                of experience in Unreal Engine development.
              </p>
              <p>
                <strong>Immersive Experiences:</strong> We specialize in crafting immersive
                gaming experiences and architectural visualizations that push
                the boundaries of realism.
              </p>
              <p>
                <strong>Cutting-Edge Technology:</strong> Leveraging the latest tools and
                techniques, we stay at the forefront of Unreal Engine's
                capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnRealAbout;
