import React from "react";

const UnityHeroSection = () => {
  return (
    <section>
      <div
        className="container-fluid metaverseroyal_hero_unity"

      >
        <div className="auto-container metaverseroyal_hero_container">
          <div className="left game_hero_content" data-aos="fade-right" data-aos-delay="300">
            <h2>
              Immersive
              <span style={{ color: "rgb(216 11 168)" }}> Unity <br /> Experiences</span> Await
            </h2>
            <p className="Hero_sub_heading">
              Enter Unity, unlock possibilities. Let us craft memorable<br /> projects
              together. Impact awaits
            </p>
            <button
              className="default-btn"
              style={{ backgroundColor: "rgb(216 11 168)" }}
            >
              Explore Now
            </button>
          </div>
          {/* <div className="right" data-aos="fade-left" data-aos-delay="300">
            <img src="\assets\img\unity_game\hero.png" alt="" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default UnityHeroSection;
