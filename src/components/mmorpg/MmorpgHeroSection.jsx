import React from "react";

const MmorpgHeroSection = () => {
  return (
    <section>
      <div
        className="container-fluid metaverseroyal_hero_mmorpg"
      >
        <div className="auto-container metaverseroyal_hero_container">
          <div className="left game_hero_content" data-aos="fade-right" data-aos-delay="300">
            <h2>
              A vibrant MMORPG <br /> world of
              <span style={{ color: "#EC8268" }}> adventure </span>
            </h2>
            <p className="Hero_sub_heading">
              Crafted by experts, fueled by creativity, redefining <br /> virtual
              realms with extraordinary MMORPG solutions.
            </p>
            <button
              className="default-btn"
              style={{ backgroundColor: "#EC8268" }}
            >
              Explore Now
            </button>
          </div>
          {/* <div className="right" data-aos="fade-left" data-aos-delay="300">
            <img src="\assets\img\mobail-game-page\hero.png" alt="" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default MmorpgHeroSection;
