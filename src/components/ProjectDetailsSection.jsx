import React from "react";
import { Link } from "react-router-dom";
import demo from "../images/Metaverse.mp4";
import ProductDetailCard from "./ProductDetailCard";
const ProjectDetailsSection = () => {
  return (
    <>
      {/* Project Details Section Start */}
      <section className="project-details">
        <div className="container-fulid">
          <div className="col-12 project_hero_section">
            <video autoPlay muted loop >
              <source src={demo} type="video/mp4" />
            </video>
          </div>
          <div className="container-fulid project_hero_content">
            <div className="container pb-4 ">
              <div className="row">
                <div
                  className="col-lg-7"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="title">
                    <h2>
                      <span>What</span> we do
                    </h2>
                  </div>
                  <div className="inner-des">
                    <p>
                      Bringing Industry <span>4.0</span> and digitization across
                      industries, we have created & delivered over{" "}
                      <span>200+ XR projects over</span> the last{" "}
                      <span>8+ years</span> that seamlessly infuse with existing
                      training ecosystems to provide a truly unified{" "}
                      <span>VR Training</span> solution.
                    </p>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div
                    className="widget-project"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <div className="project_left">
                      <h2>
                        <span>Who</span> we are
                      </h2>
                      <div>
                        <h3>
                          <span>Rocking since</span> 2016
                        </h3>
                        <h3>
                          <span>Solutions</span> VR and XR for enterprise
                        </h3>
                      </div>
                    </div>
                    <div className="inner-des2">
                      <p>
                        <span>AutoVRse</span> is a young 100+ member team,
                        building world-class AR/VR applications. We’ve been
                        pushing the limit of what’s possible in the immersive
                        media space and consistently delivering ground-breaking
                        deployments in enterprise AR and VR
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <ProductDetailCard />
      </section>
      {/* Project Details Section End */}
    </>
  );
};

export default ProjectDetailsSection;

// project_hero_content
