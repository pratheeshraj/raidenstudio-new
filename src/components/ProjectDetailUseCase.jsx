import React from "react";
import image from "../images/DALL·E 2024-03-18 17.49 1.webp";
import Entertainment_icom from "../images/product_detail_img/3d-cinema-film-projector.jpg";
const ProjectDetailUseCase = () => {
  return (
    <>
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
                    Game development expertise across multiple platforms
                    including PC, console, and VR/AR devices.○ Integration of AI
                    algorithms for procedural generation, NPC behavior, and
                    dynamic content adaptation.○ Implementation of multiplayer
                    networking features and social interaction mechanics within
                    virtual game environments.
                  </p>
                  <h6>Business Use Cases</h6>
                  <div className="small_card_container">
                    <div className="cards">
                      <img src={Entertainment_icom} alt="" />
                      <p>
                        Entertainment <br /> Industry
                      </p>
                    </div>
                    <div className="cards">
                      <img src={Entertainment_icom} alt="" />

                      <p>
                        {" "}
                        Brand <br /> Engagement
                      </p>
                    </div>
                    <div className="cards">
                      <img src={Entertainment_icom} alt="" />

                      <p>
                        Educational <br /> Gaming
                      </p>
                    </div>
                  </div>
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
            <div className="row UseCase_content_row">
              <div
                className="col-lg-6 order-1"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <div className="left-wrappers ps-2">
                  <div className="img-file">
                    <img className="" src={image} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6  order-2 order-lg-1">
                <div
                  className="right-wrapper pe-2"
                  data-aos="fade-left"
                  data-aos-delay="300"
                >
                  <h2 className="title">
                    <span> Metaverse Application</span>
                  </h2>
                  <p>
                    Cross-platform application development for VR/AR devices,
                    desktop computers, and mobile devices.Integration of
                    AI-powered features such as natural language processing
                    (NLP), computer vision, and sentiment analysis.Utilization
                    of cloud-based infrastructure for data storage, processing,
                    and real-time collaboration.
                  </p>
                  <h6>Business Use Cases</h6>
                  <div className="small_card_container">
                    <div className="cards">
                      <img src={Entertainment_icom} alt="" />
                      <p>
                        Virtual <br /> Events
                      </p>
                    </div>
                    <div className="cards">
                      <img src={Entertainment_icom} alt="" />

                      <p>
                        {" "}
                        Virtual <br /> Training
                      </p>
                    </div>
                    <div className="cards">
                      <img src={Entertainment_icom} alt="" />

                      <p>
                        Telepresence <br /> Solutions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row UseCase_content_row ">
              <div className="col-lg-6  order-2 order-lg-1">
                <div
                  className="right-wrapper pe-2"
                  data-aos="fade-right"
                  data-aos-delay="300"
                >
                  <h2 className="title">
                    <span> Digital Twin & Simulation</span>
                  </h2>
                  <p>
                    Development of digital twin models for physical assets,
                    environments, and processes using 3D modeling and simulation
                    software. Integration of IoT sensors, data analytics, and AI
                    algorithms to create dynamic and predictive digital twins.
                    Real-time simulation capabilities for testing scenarios,
                    optimizing operations, and simulating complex systems.
                  </p>
                  <h6>Business Use Cases</h6>
                  <div className="small_card_container">
                    <div className="cards">
                      <img src={Entertainment_icom} alt="" />
                      <p>
                        Manufacturing <br /> Optimization
                      </p>
                    </div>
                    <div className="cards">
                      <img src={Entertainment_icom} alt="" />

                      <p>
                        {" "}
                        Urban <br /> Planning
                      </p>
                    </div>
                    <div className="cards">
                      <img src={Entertainment_icom} alt="" />

                      <p>
                        Healthcare <br /> Simulation
                      </p>
                    </div>
                  </div>
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
      <section>
        <div
          className="container-fluid multi_player"
          style={{ overflow: "hidden" }}
        >
          <div className="auto-container multi_player_container">
            <h2>Engineered for the Metaverse: Advanced Multiplayer, Streaming, and Game Engine Mastery</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetailUseCase;
