import React from "react";

const P2eGameAbout = () => {
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
                Our Expertise In P2E Game Development in Detail
              </h2>
              <p style={{ color: "black" }}>
                Raiden brings a wealth of expertise to P2E game development. Our
                seasoned team of developers, designers, and strategists
                meticulously blend cutting-edge technology with innovative
                gameplay mechanics to deliver captivating experiences. With a
                deep understanding of blockchain integration, tokenomics, and
                user engagement, we ensure that every aspect of your P2E game is
                optimized for success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default P2eGameAbout;
