import React from "react";
import { Link } from "react-router-dom";
import demo from "../images/Metaverse.mp4";
import ProductDetailCard from "./ProductDetailCard";
const ProjectDetailsSection = ({ vidio }) => {
  return (
    <>
      {/* Project Details Section Start */}
      <section className=" project-details">
        <div className=" auto-containercontainer-fulid">
          <div className="col-12 project_hero_section">
            <video autoPlay muted loop>
              <source src={vidio ? vidio : demo} type="video/mp4" />
            </video>
          </div>
          <div className="container-fulid project_hero_content">
            <div className="container pb-4 ">
              <div className="row">
                <div
                  className="col-lg-6"
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
                      At <span>Raidenverse</span> we revolutionize the digital
                      landscape through our AI-powered Metaverse platform. Our
                      mission is to redefine virtual experiences, enabling
                      individuals and businesses to seamlessly navigate through
                      immersive environments while harnessing the power of
                      artificial intelligence.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="widget-project"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <div className="project_left">
                      <h2>
                        <span>Who</span> we are
                      </h2>
                    </div>
                    <div className="inner-des2">
                      <p>
                        <span> Raidenverse</span> is a team of visionaries,
                        technologists, and innovators dedicated to shaping the
                        future of virtual reality. With a collective passion for
                        cutting-edge technology and boundless creativity, we are
                        committed to pushing the boundaries of what's possible
                        in the Metaverse.
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
