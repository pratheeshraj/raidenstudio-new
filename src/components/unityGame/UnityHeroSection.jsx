import React from "react";

const UnityHeroSection = () => {
  return (
    <section>
      <div
        className="container-fluid metaverseroyal_hero"
        style={{ backgroundImage: "none", backgroundColor: "#a2a89d" }}
      >
        <div className="auto-container metaverseroyal_hero_container">
          <div className="left" data-aos="fade-right" data-aos-delay="300">
            <h2>
              Immersive
              <span style={{ color: "#fdb441" }}> Unity Experiences</span> Await
            </h2>
            <p
              style={{
                fontSize: "20px",
                fontWeight: "600",
                lineHeight: "35px",
              }}
            >
              Enter Unity, unlock possibilities. Let us craft memorable projects
              together. Impact awaits
            </p>
            <button
              className="default-btn"
              style={{ backgroundColor: "#fdb441" }}
            >
              Explore Now
            </button>
          </div>
          <div className="right" data-aos="fade-left" data-aos-delay="300">
            <img src="\assets\img\mobail-game-page\hero.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnityHeroSection;
