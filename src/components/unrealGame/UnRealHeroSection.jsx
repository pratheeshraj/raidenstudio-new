import React from "react";

const UnRealHeroSection = () => {
  return (
    <section>
      <div
        className="container-fluid metaverseroyal_hero_unreal"
      >
        <div className="auto-container metaverseroyal_hero_container">
          <div className="left game_hero_content" data-aos="fade-right" data-aos-delay="300">
            <h2>
              Unreal <span style={{ color: "#BEAB59" }}> Potential, <br /> Experts Unleashed </span>
            </h2>
            <p
              className="Hero_sub_heading"
            >
              Crafting immersive experiences with expert Unreal<br /> Development
              services. Let your imagination soar
            </p>
            <button
              className="default-btn"
              style={{ backgroundColor: "#BEAB59" }}
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

export default UnRealHeroSection;
