import React from "react";

const Web3GameHeroSection = () => {
  return (
    <section>
      <div
        className="container-fluid metaverseroyal_hero_web3"
      >
        <div className="auto-container metaverseroyal_hero_container">
          <div className="left" data-aos="fade-right" data-aos-delay="300">
            <h2>
              Cutting Edge 
              <span style={{ color: "#fdb441" }}> Web3 <br/> Gaming </span>
            </h2>
            <p
              style={{
                fontSize: "20px",
                fontWeight: "600",
                lineHeight: "35px",
              }}
            >
              Harnessing the power of blockchain technology,<br/> we offer innovative
              solutions to revolutionize your<br/> gaming experience.
            </p>
            <button
              className="default-btn"
              style={{ backgroundColor: "#fdb441" }}
            >
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Web3GameHeroSection;
