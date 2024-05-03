import React from "react";

const UnityBenefitSection = () => {
  return (
    <section>
      <div className="container-fluid mobileGamePageBenifit ">
        <div className="auto-container pagebenifit_container">
          <h2>
            Benefits of Choosing <span style={{ color: "#EDAE43" }}>Unity for Your Project</span>
          </h2>
          <p style={{ color: "black", marginBottom: "40px", textAlign: "center" }}>
            Enjoy cost-effectiveness, rapid prototyping, and a vibrant community
            that supports <br /> your project every step of the way
          </p>
          <div className="pagebenifit">
            <div className="pagebenifit_card">
              <div className="top_section">
                <div className="icon">
                  <img
                    src="\assets\img\unity_game\unity benifits\immersive.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="center_section">
                <h6> Immersive Experiences</h6>
                <p>
                  Engage your audience like never before with immersive Unity
                  experiences that leave a lasting impact.
                </p>
              </div>
            </div>
            <div className="pagebenifit_card">
              <div className="top_section">
                <div className="icon">
                  <img
                    src="\assets\img\unity_game\unity benifits\scalable.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="center_section">
                <h6>Scalability</h6>
                <p>
                  Unity's flexibility allows for scalable solutions that can
                  grow with your business needs.
                </p>
              </div>
            </div>
            <div className="pagebenifit_card">
              <div className="top_section">
                <div className="icon">
                  <img
                    src="\assets\img\unity_game\unity benifits\multiplatform.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="center_section">
                <h6>Cross-platform Compatibility</h6>
                <p>
                  Reach a wider audience by deploying your Unity projects across
                  multiple platforms seamlessly.
                </p>
              </div>
            </div>
            <div className="pagebenifit_card">
              <div className="top_section">
                <div className="icon">
                  <img
                    src="\assets\img\unity_game\unity benifits\learning.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="center_section">
                <h6> Enhanced Learning</h6>
                <p>
                  Transform education and training with interactive Unity
                  simulations that facilitate better learning outcomes.
                </p>
              </div>
            </div>
            <div className="pagebenifit_card">
              <div className="top_section">
                <div className="icon">
                  <img
                    src="\assets\img\unity_game\unity benifits\competitive edge.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="center_section">
                <h6>Competitive Edge</h6>
                <p>
                  Stay ahead of the competition with innovative Unity solutions
                  that set your brand apart.
                </p>
              </div>
            </div>
            <div className="pagebenifit_card">
              <div className="top_section">
                <div className="icon">
                  <img
                    src="\assets\img\unity_game\unity benifits\costeffecti.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="center_section">
                <h6> Cost-effectiveness</h6>
                <p>
                  Unity development offers cost-effective solutions without
                  compromising on quality or performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnityBenefitSection;
