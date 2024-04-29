import React from "react";

const UnityAbout = () => {
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
              <div className="img-file service_img_game">
                <img
                  className="img-fluid "
                  src="/assets/img/unity/about.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="right-wrapper ps-2">
              <h2 style={{ color: "black" }} className="title">
                Our Expertise In Unity Game Development
              </h2>
              <p style={{ color: "black" }}>
                We have honed our skills to deliver innovative and immersive
                experiences across various platforms.
              </p>
              <p>
                <strong> Comprehensive Understanding:</strong> We possess an
                in-depth understanding of the Unity platform, leveraging its
                capabilities to their fullest extent in every project.
              </p>
              <p>
                <strong> Versatility Across Genres: </strong> Whether it's
                mobile games, AR/VR applications, simulations, or interactive
                experiences, our team has the versatility to excel in diverse
                genres and mediums.
              </p>
              <p>
                <strong>Creative Excellence:</strong> Creativity is at the heart
                of everything we do. From concept ideation to execution, we
                strive to push boundaries and deliver experiences that captivate
                and inspire.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnityAbout;
