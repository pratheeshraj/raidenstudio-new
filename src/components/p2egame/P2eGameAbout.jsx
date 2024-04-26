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
            <div className="left-wrapper ">
              <div className="img-file">
                <img
                  className="img-fluid about_game_image"
                  style={{ marginTop: "-130px", scale: "0.9" }}
                  src="/assets/img/p2e/about.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="right-wrapper ps-2">
              <h2 style={{ color: "black" }} className="title">
                Leading the Way in P2E Game Development
              </h2>
              <p style={{ color: "black" }}>
                With a deep understanding of blockchain integration, tokenomics,
                and user engagement, we ensure that every aspect of your P2E
                game is optimized for success. we're committed to unveiling the
                full potential of P2E gaming. Here's how we excel
              </p>
              <p>
                <strong> Tailored Solutions:</strong> We recognize that every
                P2E game is unique. Our expertise lies in crafting customized
                solutions that meet the specific needs and objectives of each
                project.
              </p>
              <p>
                <strong> Engaging Gameplay Design:</strong> Leveraging our
                expertise in game design and user experience, we create
                immersive gameplay experiences that keep players coming back for
                more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default P2eGameAbout;
