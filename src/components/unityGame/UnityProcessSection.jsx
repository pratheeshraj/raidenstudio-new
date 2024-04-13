import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

const UnityProcessSection = () => {
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
                  <h2> Discovery & Planning</h2>
                  <p>
                    We begin by understanding your requirements, goals, and
                    target audience to formulate a comprehensive development
                    plan.
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
                  <h2> Design & Prototyping</h2>
                  <p>
                    Our team creates wireframes and prototypes to visualize
                    the project's structure and user experience before
                    proceeding to full-scale development
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
                  <h2> Development & Testing</h2>
                  <p>
                    Using agile methodologies, we develop the project
                    iteratively, conducting rigorous testing at each stage to
                    ensure quality and functionality.
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
                  <h2> Deployment & Optimization</h2>
                  <p>
                    Once the project is ready, we deploy it across the desired
                    platforms and fine-tune performance for optimal user
                    experience.
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
                  <h2>Maintenance & Updates</h2>
                  <p>
                    We provide ongoing support, maintenance, and updates to
                    keep your Unity project running smoothly and up-to-date
                    with the latest technologies.
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
  )
}

export default UnityProcessSection
