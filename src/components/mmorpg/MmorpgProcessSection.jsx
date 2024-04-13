import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

const MmorpgProcessSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onAnimationVisible = (visible) => {
    if (visible) {
      setIsVisible(true);
    }
  };
  return (
    <section className="faq-section three Deve_process_fulldiv">
      <div className="auto-container">
        <div className="row">
          <h2 style={{ color: "black", textAlign: "center" }}>
            MMORPG Development Process for{" "}
            <span className="theme-color" style={{ color: "#fdb441" }}>
              Your Unique Needs
            </span>
          </h2>
          <p
            style={{
              color: "black",
              marginBottom: "80px",
              textAlign: "center",
            }}
          ></p>
          <VisibilitySensor onChange={onAnimationVisible}>
            <div className={`timeline  ${isVisible ? "visible" : ""}`}>
              <VisibilitySensor onChange={onAnimationVisible}>
                <div
                  className={`container_devo left-container ${
                    isVisible ? "visible" : ""
                  }`}
                >
                  <div className="devo_round_div">
                    <img
                      src="/assets/img/aiprocessdevelopment/discovery.svg"
                      alt=""
                    />
                  </div>
                  <div className="text-box">
                    <h2> Discovery</h2>
                    <p>
                      We collaborate closely with you to understand your vision,
                      goals, and audience.
                    </p>
                    <span className="left-container-arrow"></span>
                  </div>
                </div>
              </VisibilitySensor>
              <VisibilitySensor onChange={onAnimationVisible}>
                <div
                  className={`container_devo right-container ${
                    isVisible ? "visible" : ""
                  }`}
                >
                  <div className="devo_round_div">
                    <img
                      src="/assets/img/aiprocessdevelopment/datacollection.svg"
                      alt=""
                    />
                  </div>
                  <div className="text-box">
                    <h2> Planning</h2>
                    <p>
                      Our team outlines a comprehensive strategy, including
                      conceptualization, development milestones, and launch
                      objectives.
                    </p>
                    <span className="right-container-arrow"></span>
                  </div>
                </div>
              </VisibilitySensor>
              <VisibilitySensor onChange={onAnimationVisible}>
                <div
                  className={`container_devo left-container ${
                    isVisible ? "visible" : ""
                  }`}
                >
                  <div className="devo_round_div">
                    <img
                      src="/assets/img/aiprocessdevelopment/model.svg"
                      alt=""
                    />
                  </div>{" "}
                  <div className="text-box">
                    <h2> Development</h2>
                    <p>
                      Skilled developers bring your world to life, integrating
                      feedback and ensuring quality at every stage.
                    </p>
                    <span className="left-container-arrow"></span>
                  </div>
                </div>
              </VisibilitySensor>
              <VisibilitySensor onChange={onAnimationVisible}>
                <div
                  className={`container_devo right-container ${
                    isVisible ? "visible" : ""
                  }`}
                >
                  <div className="devo_round_div">
                    <img
                      src="/assets/img/aiprocessdevelopment/testing.svg"
                      alt=""
                    />
                  </div>{" "}
                  <div className="text-box">
                    <h2> Testing and Refinement</h2>
                    <p>
                      Rigorous testing ensures a seamless, immersive experience
                      for players.
                    </p>
                    <span className="right-container-arrow"></span>
                  </div>
                </div>
              </VisibilitySensor>
              <VisibilitySensor onChange={onAnimationVisible}>
                <div
                  className={`container_devo left-container ${
                    isVisible ? "visible" : ""
                  }`}
                >
                  <div className="devo_round_div">
                    <img
                      src="/assets/img/aiprocessdevelopment/deployment.svg"
                      alt=""
                    />
                  </div>{" "}
                  <div className="text-box">
                    <h2> Launch and Support</h2>
                    <p>
                      We deploy your MMORPG with care and provide ongoing
                      support to optimize performance and engagement.
                    </p>
                    <span className="left-container-arrow"></span>
                  </div>
                </div>
              </VisibilitySensor>
            </div>
          </VisibilitySensor>
        </div>
      </div>
    </section>
  );
};

export default MmorpgProcessSection;
