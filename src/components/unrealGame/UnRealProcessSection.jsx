import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

const UnRealProcessSection = () => {
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
            Unreal Development Process for{" "}
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
                    <h2>Conceptualization and Planning</h2>
                    <p>
                      Creating a detailed technical design document outlining
                      game mechanics, features, and technical requirements
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
                    <h2>Pre-production</h2>
                    <p>
                      Establishing pipelines for creating and importing 3D
                      models, textures, animations, and other assets into Unreal
                      Engine.
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
                    <h2>Level Design</h2>
                    <p>
                      Designing game levels, environments, and landscapes using
                      Unreal Engine's level editor.
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
                    <h2>Gameplay Programming</h2>
                    <p>
                      Implementing game mechanics, player controls, AI behavior,
                      physics, and interactions using Blueprints or C++.
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
                    <h2>User Testing</h2>
                    <p>
                      Conducting alpha and beta testing with real users to
                      gather feedback and identify areas for improvement.
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

export default UnRealProcessSection;
