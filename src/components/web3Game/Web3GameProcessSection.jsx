import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

const Web3GameProcessSection = () => {
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
            Web3 Game Development Process for{" "}
            <span className="theme-color" style={{ color: "#33E5E5" }}>
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
                      src="\assets\img\web3game\web3 dev process\planning.svg"
                      alt=""
                    />
                  </div>
                  <div className="text-box">
                    <h2> Consultation & Planning</h2>
                    <p>
                      We collaborate closely with you to understand your vision,
                      goals, and target audience.
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
                      src="\assets\img\web3game\web3 dev process\design.svg"
                      alt=""
                    />
                  </div>
                  <div className="text-box">
                    <h2> Concept & Design</h2>
                    <p>
                      Our team of experts conceptualizes and designs game
                      mechanics, narratives, and visual assets.
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
                      src="\assets\img\web3game\web3 dev process\development.svg"
                      alt=""
                    />
                  </div>{" "}
                  <div className="text-box">
                    <h2> Development & Integration</h2>
                    <p>
                      We bring your ideas to life, leveraging cutting-edge
                      technologies to develop and integrate game features.
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
                      src="\assets\img\web3game\web3 dev process\testing.svg"
                      alt=""
                    />
                  </div>{" "}
                  <div className="text-box">
                    <h2> Testing & Optimization</h2>
                    <p>
                      Rigorous testing ensures smooth gameplay, bug-free
                      experiences, and optimal performance across platforms.
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
                      src="\assets\img\web3game\web3 dev process\launch.svg"
                      alt=""
                    />
                  </div>{" "}
                  <div className="text-box">
                    <h2> Launch & Support</h2>
                    <p>
                      We assist you in launching your game and provide ongoing
                      support to address any issues and implement updates.
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

export default Web3GameProcessSection;
