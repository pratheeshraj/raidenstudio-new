import React from "react";

const Web3GameHeroSection = () => {
  return (
    <section>
      <div
        className="container-fluid metaverseroyal_hero_web3"
      >
        <div className="auto-container metaverseroyal_hero_container">
          <div className="left game_hero_content" data-aos="fade-right" data-aos-delay="300">
            <h2>
              Cutting Edge
              <span style={{ color: "#38FFFF" }}> Web3 <br /> Gaming </span>
            </h2>
            <p className="Hero_sub_heading">
              Harnessing the power of blockchain technology,<br /> we offer innovative
              solutions to revolutionize your<br /> gaming experience.
            </p>
            <button
              className="default-btn"
              style={{ backgroundColor: "#00ECE5" }}
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
