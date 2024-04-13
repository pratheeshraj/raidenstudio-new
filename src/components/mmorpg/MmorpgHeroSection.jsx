import React from "react";

const MmorpgHeroSection = () => {
  return (
    <section>
      <div
        className="container-fluid metaverseroyal_hero"
        style={{ backgroundImage: "none", backgroundColor: "#a2a89d" }}
      >
        <div className="auto-container metaverseroyal_hero_container">
          <div className="left" data-aos="fade-right" data-aos-delay="300">
            <h2>
              An immersive{" "}
              <span style={{ color: "#fdb441" }}>
                , fantastical world bustling{" "}
              </span>{" "}
              with <br />{" "}
              <span style={{ color: "#fdb441" }}>
                adventures and possibilities.
              </span>
            </h2>
            <p>
              Dive into the realm of limitless imagination with Raiden's MMORPG
              Development Services. Crafted by experts, fueled by creativity,
              and designed for the extraordinary, our MMORPG solutions redefine
              virtual realms.
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

export default MmorpgHeroSection;
