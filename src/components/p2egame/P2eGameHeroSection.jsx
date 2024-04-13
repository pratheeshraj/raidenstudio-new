import React from "react";

const P2eGameHeroSection = () => {
  return (
    <section>
      <div
        className="container-fluid metaverseroyal_hero"
        style={{ backgroundImage: "none", backgroundColor: "#a2a89d" }}
      >
        <div className="auto-container metaverseroyal_hero_container">
          <div className="left" data-aos="fade-right" data-aos-delay="300">
            <h2>
              Unlock the Power of{" "}
              <span style={{ color: "#fdb441" }}>Play-to-Earn Games </span> with{" "}
              <span style={{ color: "#fdb441" }}>Raiden</span>
            </h2>
            <p>
              Dive into the dynamic world of Play-to-Earn (P2E) gaming with
              Raiden. From concept to launch, we craft immersive experiences
              that redefine gaming and empower players to earn rewards while
              having fun.
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

export default P2eGameHeroSection;
