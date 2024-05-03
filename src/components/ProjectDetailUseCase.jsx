import React, { useState } from "react";
import image from "../images/DALL·E 2024-03-18 17.49 1.webp";
import card_Streaming_Services1 from "../images/product_detail_img/3d-cinema-film-projector.jpg";
import NftCounter from "./Nftdevelopment/NftCounter";
import NewsSectionOne from "./NewsSectionOne";
import ScrollAnimation from "react-animate-on-scroll";
import Metaverse from "../images/raidenverse/metaverse game.jpg";
import Metaverse_Application from "../images/raidenverse/metaverse application.jpg";
import Digital_Twin from "../images/raidenverse/metaverse simulation.jpg";
import Entertainment_icom from "../images/raidenverse/raidenverse_services/entertainment.svg";
import brand_engagement from "../images/raidenverse/raidenverse_services/brand_engagement.svg";
import educational_gaming from "../images/raidenverse/raidenverse_services/educational_gaming.svg";
import healthcare_simulation from "../images/raidenverse/raidenverse_services/healthcare_simulation.svg";
import manufacturing_opt from "../images/raidenverse/raidenverse_services/manufacturing_opt.svg";
import telepresence_solution from "../images/raidenverse/raidenverse_services/telepresence_solution.svg";
import urban_planning from "../images/raidenverse/raidenverse_services/urban_planning.svg";
import virtual_events from "../images/raidenverse/raidenverse_services/virtual_events.svg";
import virtual_traing from "../images/raidenverse/raidenverse_services/virtual_traing.svg";
import multiPlayer_icon1 from "../images/raidenverse/multiplayer_integ/cross platform.svg";
import multiPlayer_icon2 from "../images/raidenverse/multiplayer_integ/custom netcode.svg";
import multiPlayer_icon3 from "../images/raidenverse/multiplayer_integ/network optimization.svg";
import multiPlayer_icon4 from "../images/raidenverse/multiplayer_integ/unreal and unity.svg";
import streaming_icon1 from "../images/raidenverse/streaming/content protection.svg";
import streaming_icon2 from "../images/raidenverse/streaming/intractive streaming.svg";
import streaming_icon3 from "../images/raidenverse/streaming/performance optimization.svg";
import streaming_icon4 from "../images/raidenverse/streaming/video streaming.svg";
import gameengine_icon1 from "../images/raidenverse/game_engine/cross platform.svg";
import gameengine_icon2 from "../images/raidenverse/game_engine/interactive.svg";
import gameengine_icon3 from "../images/raidenverse/game_engine/unity.svg";
import gameengine_icon4 from "../images/raidenverse/game_engine/unreal.svg";
const ProjectDetailUseCase = () => {
  const [multiplayer, setMultiplayer] = useState(true);
  const [streaming, setStreaming] = useState(false);
  const [game, setGame] = useState(false);

  const handleMultiplayer = () => {
    setMultiplayer(true);
    setStreaming(false);
    setGame(false);
  };

  const handeStream = () => {
    setMultiplayer(false);
    setStreaming(true);
    setGame(false);
  };

  const handleGame = () => {
    setMultiplayer(false);
    setStreaming(false);
    setGame(true);
  };
  return (
    <>
      <section>
        <div className="container-fluid UseCase" style={{ overflow: "hidden" }}>
          <div className="auto-container UseCase_content">
            <h2 style={{ color: "#1BA2D7" }}>Services</h2>
            <div className="row UseCase_content_row">
              <div className="col-lg-6  order-2 order-lg-1">
                <div
                  className="right-wrapper pe-2"
                  data-aos="fade-right"
                  data-aos-delay="300"
                >
                  <h2 className="title">
                    <span style={{ color: "#1BA2D7" }}> Metaverse Game</span>
                  </h2>
                  <p>
                    Game development expertise across multiple platforms
                    including PC, console, and VR/AR devices.○ Integration of AI
                    algorithms for procedural generation, NPC behavior, and
                    dynamic content adaptation.○ Implementation of multiplayer
                    networking features and social interaction mechanics within
                    virtual game environments.
                  </p>
                  <h6 style={{ color: "#1BA2D7" }}>Business Use Cases</h6>
                  <div className="small_card_container">
                    <div className="cards">
                      <div
                        className="services_icon"
                        style={{
                          background:
                            "linear-gradient(136.76deg, #DF98FA 0%, #9055FF 100%)",
                        }}
                      >
                        <img src={Entertainment_icom} alt="" />
                      </div>

                      <p>
                        Entertainment <br /> Industry
                      </p>
                    </div>
                    <div className="cards">
                      <div
                        className="services_icon"
                        style={{
                          background:
                            "linear-gradient(136.76deg, #F40076 0%, #DF98FA 100%)",
                        }}
                      >
                        <img src={brand_engagement} alt="" />
                      </div>

                      <p>
                        {" "}
                        Brand <br /> Engagement
                      </p>
                    </div>
                    <div className="cards">
                      <div
                        className="services_icon "
                        style={{
                          background:
                            "linear-gradient(136.76deg, #FCCF31 0%, #F55555 100%)",
                        }}
                      >
                        <img src={educational_gaming} alt="" />
                      </div>

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
                    <img className="" src={Metaverse} alt="" />
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
                    <img className="" src={Metaverse_Application} alt="" />
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
                    <span style={{ color: "#1BA2D7" }}> Metaverse Application</span>
                  </h2>
                  <p>
                    Cross-platform application development for VR/AR devices,
                    desktop computers, and mobile devices.Integration of
                    AI-powered features such as natural language processing
                    (NLP), computer vision, and sentiment analysis.Utilization
                    of cloud-based infrastructure for data storage, processing,
                    and real-time collaboration.
                  </p>
                  <h6 style={{ color: "#1BA2D7" }}>Business Use Cases</h6>
                  <div className="small_card_container">
                    <div className="cards">
                      <div
                        className="services_icon"
                        style={{
                          background:
                            "linear-gradient(136.76deg, #ABDCFF 0%, #0396FF 100%)",
                        }}
                      >
                        <img src={virtual_events} alt="" />
                      </div>

                      <p>
                        Virtual <br /> Events
                      </p>
                    </div>
                    <div className="cards">
                      <div
                        className="services_icon"
                        style={{
                          background:
                            "linear-gradient(136.76deg, #90F7EC 0%, #32CCBC 100%)",
                        }}
                      >
                        <img src={virtual_traing} alt="" />
                      </div>

                      <p>
                        {" "}
                        Virtual <br /> Training
                      </p>
                    </div>
                    <div className="cards">
                      <div
                        className="services_icon"
                        style={{
                          background:
                            "linear-gradient(136.76deg, #F889D5 0%, #5650DE 100%)",
                        }}
                      >
                        <img src={telepresence_solution} alt="" />
                      </div>

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
                    <span style={{ color: "#1BA2D7" }}> Digital Twin & Simulation</span>
                  </h2>
                  <p>
                    Development of digital twin models for physical assets,
                    environments, and processes using 3D modeling and simulation
                    software. Integration of IoT sensors, data analytics, and AI
                    algorithms to create dynamic and predictive digital twins.
                    Real-time simulation capabilities for testing scenarios,
                    optimizing operations, and simulating complex systems.
                  </p>
                  <h6 style={{ color: "#1BA2D7" }}>Business Use Cases</h6>
                  <div className="small_card_container">
                    <div className="cards">
                      <div
                        className="services_icon"
                        style={{
                          background:
                            "linear-gradient(136.76deg, #FF9897 0%, #F650A0 100%)",
                        }}
                      >
                        <img src={manufacturing_opt} alt="" />
                      </div>

                      <p>
                        Manufacturing <br /> Optimization
                      </p>
                    </div>
                    <div className="cards">
                      <div
                        className="services_icon"
                        style={{
                          background:
                            "linear-gradient(136.76deg, #FFCDA5 0%, #EE4D5F 100%)",
                        }}
                      >
                        <img src={urban_planning} alt="" />
                      </div>

                      <p>
                        {" "}
                        Urban <br /> Planning
                      </p>
                    </div>
                    <div className="cards">
                      <div
                        className="services_icon"
                        style={{
                          background:
                            "linear-gradient(136.76deg, #ABDCFF 0%, #0396FF 100%)",
                        }}
                      >
                        <img src={healthcare_simulation} alt="" />
                      </div>

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
                    <img className="" src={Digital_Twin} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <NewsSectionOne color={"#1BA2D7"} buttoncolor={"#1BA2D7"} />
      <section
        className="service-details-section"
        style={{ backgroundColor: "white" }}
      >
        <h2>
          Engineered for the Metaverse <br /> <span style={{ color: "#1BA2D7" }}>Advanced Multiplayer</span>,
          <span style={{ color: "#1BA2D7" }}> Streaming</span>, and <br />
          Game Engine Mastery
        </h2>

        <div className="auto-container">
          <div className="row game_engine_expertise ">
            <div className="game_engine_expertise_heading">
              <p
                onClick={handleMultiplayer}
                className="title"
                style={{
                  color: multiplayer ? "#1BA2D7" : "",
                  borderBottom: multiplayer ? "3px solid #1BA2D7" : "",
                }}
              >
                Multiplayer Integration
              </p>
              <p
                className="title"
                style={{
                  color: streaming ? "#1BA2D7" : "",
                  borderBottom: streaming ? "3px solid #1BA2D7" : "",
                }}
                onClick={handeStream}
              >
                Streaming Services
              </p>
              <p
                className="title"
                style={{
                  color: game ? "#1BA2D7" : "",
                  borderBottom: game ? "3px solid #1BA2D7" : "",
                }}
                onClick={handleGame}
              >
                Game Engine Expertise <br />
              </p>
            </div>
            {multiplayer ? (
              <>
                <div className="game_engine_expertise_cards">
                  <ScrollAnimation
                    className="game_engine_expertise_card"
                    animateIn="fadeInUp"
                    duration={1}
                  >
                    <div
                      className="left"
                      style={{
                        background:
                          "linear-gradient(136.76deg, #ABDCFF 0%, #0396FF 100%)",
                      }}
                    >
                      <img src={multiPlayer_icon4} alt="" />
                    </div>
                    <div className="right">
                      <h6>Advanced Networking in Unity/Unreal</h6>
                      <p>
                        Proficiency in implementing advanced networking features
                        within popular game engines such as Unity or Unreal
                        Engine, leveraging high-level networking APIs and
                        low-level socket programming for real-time
                        communication.
                      </p>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation
                    animateIn="fadeInUp"
                    duration={1.5}
                    className="game_engine_expertise_card"
                  >
                    <div
                      className="left"
                      style={{
                        background:
                          "linear-gradient(136.76deg, #E2B0FF 0%, #9F44D3 100%)",
                      }}
                    >
                      <img src={multiPlayer_icon2} alt="" />
                    </div>
                    <div className="right">
                      <h6>Custom Netcode Solutions</h6>
                      <p>
                        Development of custom networking solutions tailored to
                        specific multiplayer requirements, including
                        authoritative server architectures, client-side
                        prediction, and lag compensation techniques.
                      </p>
                    </div>
                  </ScrollAnimation>
                </div>
                <div className="game_engine_expertise_cards top">
                  <ScrollAnimation
                    animateIn="fadeInUp"
                    duration={2}
                    className="game_engine_expertise_card"
                  >
                    <div
                      className="left"
                      style={{
                        background:
                          "linear-gradient(136.76deg, #FEB692 0%, #EA5455 100%)",
                      }}
                    >
                      <img src={multiPlayer_icon1} alt="" />
                    </div>
                    <div className="right">
                      <h6>Cross-Platform Multiplayer</h6>
                      <p>
                        Implementation of cross-platform multiplayer
                        functionality, enabling seamless gameplay experiences
                        across different devices and operating systems while
                        ensuring compatibility with various networking
                        protocols.
                      </p>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation
                    animateIn="fadeInUp"
                    duration={2.5}
                    className="game_engine_expertise_card"
                  >
                    <div
                      className="left"
                      style={{
                        background:
                          "linear-gradient(136.76deg, #FCCF31 0%, #F55555 100%)",
                      }}
                    >
                      <img src={multiPlayer_icon3} alt="" />
                    </div>
                    <div className="right">
                      <h6>Network Optimization</h6>
                      <p>
                        Optimization of network traffic and bandwidth usage
                        through techniques such as packet prioritization, data
                        compression, and efficient state synchronization to
                        minimize latency and improve overall network
                        performance.
                      </p>
                    </div>
                  </ScrollAnimation>
                </div>
              </>
            ) : streaming ? (
              <>
                <div className="game_engine_expertise_cards">
                  <ScrollAnimation
                    className="game_engine_expertise_card"
                    animateIn="fadeInUp"
                    duration={1}
                  >
                    <div
                      className="left"
                      style={{
                        background:
                          "linear-gradient(136.76deg, #90F7EC 0%, #32CCBC 100%)",
                      }}
                    >
                      <img src={streaming_icon4} alt="" />
                    </div>
                    <div className="right">
                      <h6>Video Streaming in Unity/Unreal</h6>
                      <p>
                        Integration of video streaming capabilities directly
                        into Unity or Unreal Engine projects, utilizing plugins
                        and APIs for real-time video playback and rendering
                        within virtual environments.
                      </p>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation
                    animateIn="fadeInUp"
                    duration={1.5}
                    className="game_engine_expertise_card"
                  >
                    <div
                      className="left"
                      style={{
                        background:
                          "linear-gradient(136.76deg, #F889D5 0%, #5650DE 100%)",
                      }}
                    >
                      <img src={streaming_icon2} alt="" />
                    </div>
                    <div className="right">
                      <h6>Interactive Streaming</h6>
                      <p>
                        Implementation of interactive streaming features such as
                        live chat, viewer interactions, and dynamic content
                        updates using streaming platforms' APIs and SDKs,
                        enhancing viewer engagement and immersion.
                      </p>
                    </div>
                  </ScrollAnimation>
                </div>
                <div className="game_engine_expertise_cards top">
                  <ScrollAnimation
                    animateIn="fadeInUp"
                    duration={2}
                    className="game_engine_expertise_card"
                  >
                    <div
                      className="left"
                      style={{
                        background:
                          "linear-gradient(136.76deg, #FF9897 0%, #F650A0 100%)",
                      }}
                    >
                      <img src={streaming_icon3} alt="" />
                    </div>
                    <div className="right">
                      <h6>Performance Optimization</h6>
                      <p>
                        Optimization of streaming performance through techniques
                        such as video transcoding, adaptive bitrate streaming,
                        and caching mechanisms to ensure smooth playback and
                        minimal buffering.
                      </p>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation
                    animateIn="fadeInUp"
                    duration={2.5}
                    className="game_engine_expertise_card"
                  >
                    <div
                      className="left"
                      style={{
                        background:
                          "linear-gradient(136.76deg, #FFCDA5 0%, #EE4D5F 100%)",
                      }}
                    >
                      <img src={streaming_icon1} alt="" />
                    </div>
                    <div className="right">
                      <h6>Content Protection</h6>
                      <p>
                        Implementation of content protection mechanisms within
                        game engines, including DRM solutions, encryption
                        techniques, and access control policies to safeguard
                        copyrighted content and prevent unauthorized access.
                      </p>
                    </div>
                  </ScrollAnimation>
                </div>
              </>
            ) : game ? (
              <>
                <div className="game_engine_expertise_cards">
                  <ScrollAnimation
                    className="game_engine_expertise_card"
                    animateIn="fadeInUp"
                    duration={1}
                  >
                    <div
                      className="left"
                      style={{
                        background:
                          "linear-gradient(136.76deg, #ABDCFF 0%, #0396FF 100%)",
                      }}
                    >
                      <img src={gameengine_icon3} alt="" />
                    </div>
                    <div className="right">
                      <h6>Unity Development</h6>
                      <p>
                        Extensive experience in Unity development, including
                        proficiency in C# scripting, asset management, scene
                        composition, and optimization techniques to create
                        immersive and high-performance virtual experiences.
                      </p>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation
                    animateIn="fadeInUp"
                    duration={1.5}
                    className="game_engine_expertise_card"
                  >
                    <div
                      className="left"
                      style={{
                        background:
                          "linear-gradient(136.76deg, #E2B0FF 0%, #9F44D3 100%)",
                      }}
                    >
                      <img src={gameengine_icon4} alt="" />
                    </div>
                    <div className="right">
                      <h6>Unreal Engine Development</h6>
                      <p>
                        Proficiency in Unreal Engine development, encompassing
                        Blueprint scripting, material and particle effects
                        creation, level design, and optimization strategies for
                        achieving visually stunning and responsive gameplay
                        environments.
                      </p>
                    </div>
                  </ScrollAnimation>
                </div>
                <div className="game_engine_expertise_cards top">
                  <ScrollAnimation
                    animateIn="fadeInUp"
                    duration={2}
                    className="game_engine_expertise_card"
                  >
                    <div
                      className="left"
                      style={{
                        background:
                          "linear-gradient(136.76deg, #FEB692 0%, #EA5455 100%)",
                      }}
                    >
                      <img src={gameengine_icon1} alt="" />
                    </div>
                    <div className="right">
                      <h6>Cross-Platform Development</h6>
                      <p>
                        Ability to develop games and applications for multiple
                        platforms (PC, console, mobile, VR/AR) using Unity or
                        Unreal Engine, with expertise in platform-specific
                        optimizations and deployment workflows.&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </p>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation
                    animateIn="fadeInUp"
                    duration={2.5}
                    className="game_engine_expertise_card"
                  >
                    <div
                      className="left"
                      style={{
                        background:
                          "linear-gradient(136.76deg, #ABDCFF 0%, #0396FF 100%)",
                      }}
                    >
                      <img src={gameengine_icon2} alt="" />
                    </div>
                    <div className="right">
                      <h6>Integration with External Services</h6>
                      <p>
                        Integration of external services and APIs within game
                        engines for features such as analytics, monetization,
                        social media, and backend connectivity, enhancing
                        functionality and extending the capabilities of virtual
                        experiences.
                      </p>
                    </div>
                  </ScrollAnimation>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetailUseCase;
