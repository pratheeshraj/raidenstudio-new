import React from "react";
import image from "../images/DALL·E 2024-03-18 17.49 1.webp";
const ProjectDetailUseCase = () => {
  return (
    <section>
      <div className="container-fluid UseCase" style={{ overflow: "hidden" }}>
        <div className="auto-container UseCase_content">
          <h2>Services</h2>
          <div className="row UseCase_content_row">
            <div className="col-lg-6  order-2 order-lg-1">
              <div
                className="right-wrapper pe-2"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <h2 className="title">
                  <span> Metaverse Game</span>
                </h2>
                <p>
                  Game development expertise across multiple platforms including
                  PC, console, and VR/AR devices.○ Integration of AI algorithms
                  for procedural generation, NPC behavior, and dynamic content
                  adaptation.○ Implementation of multiplayer networking features
                  and social interaction mechanics within virtual game
                  environments.
                </p>
                <h6>Business Use Cases</h6>
              </div>
            </div>
            <div
              className="col-lg-6 order-1"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <div className="left-wrappers ps-2">
                <div className="img-file">
                  <img className="" src={image} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailUseCase;
