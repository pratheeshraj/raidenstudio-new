import React from "react";
import image from "../images/DALL·E 2024-03-18 17.49 1.webp";
const ProjectDetailUseCase = () => {
  return (
    <section>
      <div className="container-fluid UseCase">
        <div className="auto-container UseCase_content">
          <h2>Industry Wide Use Cases</h2>
          <div className="row UseCase_content_row">
            <div className="col-lg-6  order-2 order-lg-1">
              <div
                className="right-wrapper pe-2"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <h2 className="title">
                  <span>Automotive</span>
                </h2>
                <p>
                  Train employees swiftly on assembly processes to improve
                  quality and workplace safety. Enhance design and prototyping
                  processes through immersive virtual simulations. Overlay
                  real-time diagnostics onto physical vehicles aiding
                  maintenance and repair.
                </p>
                <ul>
                  <li>Assembly Training </li>
                  <li>Quality Control Training.</li>
                  <li>Tracking, Report Generation and Certification.</li>
                  <li>Quality Control Training.</li>
                  <li>Tracking, Report Generation and Certification.</li>
                </ul>
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
