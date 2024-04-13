import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

const P2eGameProcessSection = () => {
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
            Bespoke Game Development :{" "}
            <span className="theme-color" style={{ color: "#fdb441" }}>
              Crafting Unique Experiences
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
                    <h2>Requirements Analysis & Conceptualization</h2>
                    <p>
                      Analyze objectives and vision and Conceptualize game
                      mechanics and features.
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
                    <h2> Custom Blockchain Integration</h2>
                    <p>
                      Develop tailored blockchain integration.Implement secure
                      asset ownership and transparent economies.
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
                    <h2>Iterative Prototyping</h2>
                    <p>
                      Prototype for visualization and refinement.Iterate based
                      on feedback for optimal user experience.
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
                    <h2> Scalable Architecture Design</h2>
                    <p>
                      Design flexible and resilient infrastructure.Ensure
                      performance and stability.
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
                    <h2>Agile Development & Continuous Optimization</h2>
                    <p>
                      Adopt agile methodologies for rapid iteration.Continuously
                      optimize based on analytics and user feedback
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

export default P2eGameProcessSection;
