import React from "react";

const MobileGamePageHero = () => {
  return (
    <section>
      <div
        className="container-fluid metaverseroyal_hero"
        style={{ backgroundImage: "none", backgroundColor: "#a2a89d" }}
      >
        <div className="auto-container metaverseroyal_hero_container">
          <div className="left game_hero_content" data-aos="fade-right" data-aos-delay="300">
            <h2>
              Elevate Your{" "}
              <span style={{ color: "#FFBC48" }}>Gaming Experience</span>
            </h2>
            <p className="Hero_sub_heading">
              From captivating storylines to stunning visuals, we craft mobile
              app games that redefine entertainment.
            </p>
            <button
              className="default-btn"
              style={{ backgroundColor: "#EDAE43" }}
            >
              Explore Now
            </button>
          </div>
          <div className="right game_hero_images" data-aos="fade-left" data-aos-delay="300">
            <img src="\assets\img\mobail-game-page\hero.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileGamePageHero;
