import React from "react";

const UnRealHeroSection = () => {
  return (
    <section>
      <div
        className="container-fluid metaverseroyal_hero"
        style={{ backgroundImage: "none", backgroundColor: "#a2a89d" }}
      >
        <div className="auto-container metaverseroyal_hero_container">
          <div className="left" data-aos="fade-right" data-aos-delay="300">
            <h2>
              Unleash the Power of{" "}
              <span style={{ color: "#fdb441" }}>Unreal Development </span> with{" "}
             <span style={{ color: "#fdb441" }}>Raiden</span>
            </h2>
            <p>
              Embark on a journey of innovation and creativity with Raiden's
              expert Unreal Development services. Let's bring your vision to
              life in the immersive worlds of Unreal Engine.
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

export default UnRealHeroSection;
