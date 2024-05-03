import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
const MobileGamePageProcess = () => {
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
            Game Development Process for{" "}
            <span className="theme-color" style={{ color: "#EDAE43" }}>
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
                  className={`container_devo left-container ${isVisible ? "visible" : ""
                    }`}
                >
                  <div className="devo_round_div">
                    <img
                      src="/assets/img/aiprocessdevelopment/discovery.svg"
                      alt=""
                    />
                  </div>
                  <div className="text-box">
                    <h2>Discovery</h2>
                    <p>
                      We start by understanding your requirements and goals,
                      conducting thorough research to identify opportunities and
                      challenges.
                    </p>
                    <span className="left-container-arrow"></span>
                  </div>
                </div>
              </VisibilitySensor>
              <VisibilitySensor onChange={onAnimationVisible}>
                <div
                  className={`container_devo right-container ${isVisible ? "visible" : ""
                    }`}
                >
                  <div className="devo_round_div">
                    <img
                      src="/assets/img/mobile-game-process/plan.svg"
                      alt=""
                    />
                  </div>
                  <div className="text-box">
                    <h2>Planning</h2>
                    <p>
                      Next, we devise a comprehensive strategy outlining the
                      game concept, design elements, development milestones, and
                      launch timeline.
                    </p>
                    <span className="right-container-arrow"></span>
                  </div>
                </div>
              </VisibilitySensor>
              <VisibilitySensor onChange={onAnimationVisible}>
                <div
                  className={`container_devo left-container ${isVisible ? "visible" : ""
                    }`}
                >
                  <div className="devo_round_div">
                    <img
                      src="/assets/img/mobile-game-process/designanddev.svg"
                      alt=""
                    />
                  </div>{" "}
                  <div className="text-box">
                    <h2>Design and Development</h2>
                    <p>
                      Our team brings your vision to life, crafting every aspect
                      of the game with meticulous attention to detail.
                    </p>
                    <span className="left-container-arrow"></span>
                  </div>
                </div>
              </VisibilitySensor>
              <VisibilitySensor onChange={onAnimationVisible}>
                <div
                  className={`container_devo right-container ${isVisible ? "visible" : ""
                    }`}
                >
                  <div className="devo_round_div">
                    <img
                      src="/assets/img/aiprocessdevelopment/testing.svg"
                      alt=""
                    />
                  </div>{" "}
                  <div className="text-box">
                    <h2> Testing and QA</h2>
                    <p>
                      Rigorous testing ensures that your game meets quality
                      standards and delivers a seamless gaming experience.
                    </p>
                    <span className="right-container-arrow"></span>
                  </div>
                </div>
              </VisibilitySensor>
              <VisibilitySensor onChange={onAnimationVisible}>
                <div
                  className={`container_devo left-container ${isVisible ? "visible" : ""
                    }`}
                >
                  <div className="devo_round_div">
                    <img
                      src="/assets/img/mobile-game-process/launchandopti.svg"
                      alt=""
                    />
                  </div>{" "}
                  <div className="text-box">
                    <h2>Launch and Optimization</h2>
                    <p>
                      We deploy your game to the app stores and monitor its
                      performance, making necessary adjustments to optimize user
                      engagement and retention.
                    </p>
                    <span className="left-container-arrow"></span>
                  </div>
                </div>
              </VisibilitySensor>
              <VisibilitySensor onChange={onAnimationVisible}>
                <div
                  className={`container_devo right-container ${isVisible ? "visible" : ""
                    }`}
                >
                  <div className="devo_round_div">
                    <img
                      src="/assets/img/mobile-game-process/support.svg"
                      alt=""
                    />
                  </div>{" "}
                  <div className="text-box">
                    <h2>Support and Maintenance</h2>
                    <p>
                      Our commitment doesn't end at launch. We provide ongoing
                      support and maintenance to ensure that your game remains
                      successful in the long run.
                    </p>
                    <span className="right-container-arrow"></span>
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

export default MobileGamePageProcess;
