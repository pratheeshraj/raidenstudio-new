import React from "react";

const MmorpgAbout = () => {
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
                Our Expertise in MMORPG Development in Detail
              </h2>
              <p style={{ color: "black" }}>
                At Raiden, we're experts in creating virtual worlds. Our team
                has years of experience and a strong passion for innovation. We
                specialize in building captivating environments and designing
                characters that bring stories to life
              </p>
              <p style={{ color: "black" }}>
                Not only do we focus on world building, but we also excel in
                other aspects of game development. From crafting engaging quests
                to making multiplayer games fun and seamless, we pay attention
                to every detail. Our goal is to create games that players love,
                with intuitive interfaces and ongoing support for the best
                experience possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MmorpgAbout;
