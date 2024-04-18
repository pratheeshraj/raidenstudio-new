import React from "react";

const MmorpgServicesSection = () => {
  return (
    <section>
      <div
        className="container-fulid key_features"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <h2 className="auto-container " style={{ color: "black" }}>
          Forge Legends:{" "}
          <span style={{ color: "#fdb441" }}> MMORPG Creation </span> Services
        </h2>
        <p style={{ color: "black", textAlign: "center" }}>
          From character customization to seamless multiplayer experiences, we
          specialize in delivering immersive,  <br />feature-rich worlds that keep
          players coming back for more
        </p>
        <div className="auto-container row key_features_section_container">
          <div
            className="key_features_card"
            style={{
              backgroundColor: "white",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            }}
          >
            <img
              src="\assets\img\mmorpg\mmorpg forge leg\conceptualiza.svg"
              alt=""
            />
            <h6 style={{ color: "black" }}> Conceptualization and Design</h6>
            <p style={{ color: "black" }}>
              From ideation to world-building, we meticulously craft captivating
              virtual universes that immerse players in richly detailed
              landscapes and engaging narratives.
            </p>
          </div>
          <div
            className="key_features_card"
            style={{
              backgroundColor: "white",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            }}
          >
            <img
              src="\assets\img\mmorpg\mmorpg forge leg\game dev.svg"
              alt=""
            />
            <h6 style={{ color: "black" }}> Game Development</h6>
            <p style={{ color: "black" }}>
              Through meticulous coding and development expertise, we ensure
              that players enjoy seamless and engaging gameplay experiences.
            </p>
          </div>{" "}
          <div
            className="key_features_card"
            style={{
              backgroundColor: "white",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            }}
          >
            <img
              src="\assets\img\mmorpg\mmorpg forge leg\multiplayer.svg"
              alt=""
            />
            <h6 style={{ color: "black" }}> Multiplayer Integration</h6>
            <p style={{ color: "black" }}>
              Linking players globally, our robust multiplayer functionality
              fosters vibrant communities and thrilling interactive experiences.
            </p>
          </div>{" "}
          <div
            className="key_features_card"
            style={{
              backgroundColor: "white",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            }}
          >
            <img
              src="\assets\img\mmorpg\mmorpg forge leg\content expansion.svg"
              alt=""
            />
            <h6 style={{ color: "black" }}> Content Expansion</h6>
            <p style={{ color: "black" }}>
              Ensure lasting excitement by continuously refreshing your world
              with regular updates, expansions, and exciting new features.
            </p>
          </div>{" "}
          <div
            className="key_features_card"
            style={{
              backgroundColor: "white",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            }}
          >
            <img
              src="\assets\img\mmorpg\mmorpg forge leg\monetization.svg"
              alt=""
            />
            <h6 style={{ color: "black" }}> Monetization Strategies</h6>
            <p style={{ color: "black" }}>
              We meticulously design revenue streams that enhance player
              experience while maintaining the integrity of gameplay.
            </p>
          </div>{" "}
          <div
            className="key_features_card"
            style={{
              backgroundColor: "white",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            }}
          >
            <img
              src="\assets\img\mmorpg\mmorpg forge leg\community managemen.svg"
              alt=""
            />
            <h6 style={{ color: "black" }}> Community Management </h6>
            <p style={{ color: "black" }}>
              Cultivate vibrant player communities by providing dedicated
              support and fostering engagement through interactive events and
              open communication channels..
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MmorpgServicesSection;
