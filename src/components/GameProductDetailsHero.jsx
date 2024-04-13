import React, { Fragment, useEffect, useRef, useState } from "react";
import hero from "../images/game_detail_hero.png";
import section2img from "../images/gameproduct-detailimg/section2.png";
import { Link } from "react-router-dom";
import VanillaTilt from "vanilla-tilt";
import icon1 from "../images/gameproduct-detailimg/icon1.png";
import TiltCard from "./TiltCard";
import GameFeaturesCards from "./GameFeaturesCards";
import section4 from "../images/gameproduct-detailimg/section4.png";
import AnimationCardScroll from "./AnimationCardScroll";
import ScrollAnimation from "react-animate-on-scroll";
import technical_img from "../images/clashof/2151004297.jpg";
import section2 from "../images/clashof/clash.png";
const GameProductDetailsHero = () => {
  const heroImageRef = useRef(null);
  const [Compatibility, setCompatibility] = useState(true);
  const [Architecture, setArchitecture] = useState(false);
  const [Support, setSupport] = useState(false);
  const [Monetization, setMonetization] = useState(false);
  const [Reporting, setReporting] = useState(false);
  const [Security, setSecurity] = useState(false);
  const [API, setAPI] = useState(false);
  const [Customization, setCustomization] = useState(false);

  const handleCompatibility = () => {
    setCompatibility(true);
    setArchitecture(false);
    setSupport(false);
    setMonetization(false);
    setReporting(false);
    setSecurity(false);
    setAPI(false);
    setCustomization(false);
  };

  const handleArchitecture = () => {
    setCompatibility(false);
    setArchitecture(true);
    setSupport(false);
    setMonetization(false);
    setReporting(false);
    setSecurity(false);
    setAPI(false);
    setCustomization(false);
  };

  const handleSupport = () => {
    setCompatibility(false);
    setArchitecture(false);
    setSupport(true);
    setMonetization(false);
    setReporting(false);
    setSecurity(false);
    setAPI(false);
    setCustomization(false);
  };

  const handleMonetization = () => {
    setCompatibility(false);
    setArchitecture(false);
    setSupport(false);
    setMonetization(true);
    setReporting(false);
    setSecurity(false);
    setAPI(false);
    setCustomization(false);
  };

  const handleReporting = () => {
    setCompatibility(false);
    setArchitecture(false);
    setSupport(false);
    setMonetization(false);
    setReporting(true);
    setSecurity(false);
    setAPI(false);
    setCustomization(false);
  };

  const handleSecurity = () => {
    setCompatibility(false);
    setArchitecture(false);
    setSupport(false);
    setMonetization(false);
    setReporting(false);
    setSecurity(true);
    setAPI(false);
    setCustomization(false);
  };

  const handleAPI = () => {
    setCompatibility(false);
    setArchitecture(false);
    setSupport(false);
    setMonetization(false);
    setReporting(false);
    setSecurity(false);
    setAPI(true);
    setCustomization(false);
  };

  const handleCustomization = () => {
    setCompatibility(false);
    setArchitecture(false);
    setSupport(false);
    setMonetization(false);
    setReporting(false);
    setSecurity(false);
    setAPI(false);
    setCustomization(true);
  };
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { pageX, pageY } = e;

      const X = pageX;
      const Y = pageY;

      if (heroImageRef.current) {
        heroImageRef.current.style.transform = `translate(${X / 30}px, ${
          Y / 30
        }px)`;
      }
    };
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const tiltRef = useRef(null); // Create a ref for the element

  useEffect(() => {
    // Initialize vanilla-tilt on the element with the ref
    VanillaTilt.init(tiltRef.current, {
      max: 10, // Maximum tilt rotation (degrees)
      speed: 100, // Speed of the tilt effect // Enables glare effect
      "max-glare": 0.5, // Maximum glare opacity
    });

    // Cleanup on component unmount
    return () => tiltRef.current && tiltRef.current.vanillaTilt.destroy();
  }, []);

  const data = [1, 2, 2, 3, 4, 5];
  const KeyFeatures = [
    {
      title: "Guild Halls",
      content:
        "Build and upgrade guild halls as a focal point for alliance members, providing bonuses, buffs, and special features to enhance collaboration and camaraderie.",
    },
    {
      title: "Recruit Powerful Heroes",
      content:
        "From valiant knights to cunning sorcerers, strategically deploy your heroes to lead your armies into battle and turn the tide of war in your favor.",
    },
    {
      title: "Forge Alliances",
      content:
        "Coordinate attacks, share resources, and strategize together to conquer rival kingdoms and claim ultimate victory.",
    },
    {
      title: "Epic Battles",
      content:
        "Command your armies with precision, unleash devastating spells, and watch as your forces clash in glorious combat on the battlefield.",
    },
    {
      title: "Progressive Gameplay",
      content:
        " Unlock new technologies, upgrade your buildings, and research powerful spells to strengthen your kingdom and gain an edge over your adversaries. ",
    },
    {
      title: "Global Competition",
      content:
        "Compete in epic tournaments and global events to prove your dominance and earn prestigious rewards. ",
    },
  ];
  const KeyFeatures1 = [
    {
      title: "White Label Solution",
      content:
        "With full control over branding and customization options, you can create a compelling gaming experience that reflects your vision and values.",
    },
    {
      title: "Flexible Licensing Options",
      content:
        "Choose from a range of flexible licensing options tailored to meet your specific needs and budget requirements. ",
    },
    {
      title: "Comprehensive Support",
      content:
        "From game development and design to marketing and monetization strategies, our team of experts is here to support you every step of the way.",
    },
    {
      title: "Player Profiles and Customization",
      content:
        "Customize your player profile with avatars, titles, and badges, showcasing your unique identity and achievements within the community.",
    },
    {
      title: "Guilds and Alliances",
      content:
        "Form powerful alliances with other players to coordinate attacks, share resources, and dominate the battlefield together. ",
    },
    {
      title: "Leaderboards and Rankings",
      content:
        "Compete for glory and recognition on global leaderboards, showcasing your skills and achievements to the entire community. ",
    },
  ];
  const section5 = [
    {
      title: "Cross-Platform Compatibility",
      content:
        "Realm Wars: Clash of Empires is built using cross-platform technologies, ensuring compatibility across a wide range of devices and operating systems. Whether your target audience uses iOS or Android, smartphones or tablets, our solution delivers a seamless gaming experience on any platform.",
    },
    {
      title: "Real-Time Multiplayer Support",
      content:
        "Engage players in thrilling real-time battles with support for multiplayer functionality. Our platform provides robust networking capabilities, enabling seamless matchmaking, peer-to-peer connections, and synchronous gameplay experiences that keep players coming back for more.",
    },
    {
      title: "	Comprehensive Support",
      content:
        "From game development and design to marketing and monetization strategies, our team of experts is here to support you every step of the way. Benefit from personalized guidance, industry insights, and best practices to maximize your success in the competitive mobile gaming market.",
    },
    {
      title: "	Monetization Options",
      content:
        "Monetize your game effectively with a range of flexible monetization options, including in-app purchases, advertising, and subscription services. Our platform integrates seamlessly with leading ad networks and payment gateways, allowing you to maximize revenue while providing value to your players.",
    },
    {
      title: "	Analytics and Reporting",
      content:
        "Gain valuable insights into player behavior, engagement metrics, and revenue performance with comprehensive analytics and reporting tools. Track key performance indicators, identify trends, and optimize your game strategy based on real-time data to drive continuous improvement and success.",
    },
    {
      title: "	Security and Compliance",
      content:
        "Protect your game and your players' data with robust security measures and compliance standards. Our platform implements industry-leading encryption protocols, secure authentication mechanisms, and strict data privacy policies to ensure the highest level of security and regulatory compliance.",
    },
    {
      title: "	API Integration",
      content:
        "Seamlessly integrate Realm Wars: Clash of Empires with third-party services and APIs to extend functionality and enhance the gaming experience. From social media integration and user authentication to cloud storage and push notifications, our platform supports a wide range of integrations to meet your specific requirements.",
    },
    {
      title: "	Customization and Extensibility",
      content:
        "Customize every aspect of your game with our flexible customization and extensibility options. From game mechanics and user interface design to content creation and feature development, our platform empowers you to tailor your game to suit your vision and differentiate your brand in the market.",
    },
  ];
  const development = [
    {
      title: "Conceptualization and Planning",
      content_1: "Define the vision and goals for your game.",
      content_2: "Conduct market research and identify target audience",
    },
    {
      title: "	Design and Prototyping",
      content_1: "Develop game concept, storyline, and characters",
      content_2: "Design game mechanics, levels, and user interface.",
    },
    {
      title: "Development",
      content_1: "Implement game logic, graphics, and audio assets",
      content_2:
        "Build core features such as city-building, resource management, and battle mechanics",
    },
    {
      title: "Integration and Testing",
      content_1:
        "Integrate third-party services and APIs for analytics, monetization, and social features",
      content_2:
        "Address any bugs or issues identified during testing and optimize game performance.",
    },
    {
      title: "	Deployment",
      content_1:
        "Release the game to app stores and distribute promotional codes to early adopters.",
      content_2:
        "Prepare for launch by creating promotional materials, app store listings",
    },
    {
      title: "	Support and Maintenance",
      content_1:
        "Provide ongoing support to address user inquiries, technical issues, and feedback.",
      content_2:
        "Release regular updates and patches to introduce new features, content",
    },
  ];

  return (
    <Fragment>
      <section>
        <div className="container-fluid gameproduct_hero">
          <div className="auto-container gameproduct_hero_container">
            <ScrollAnimation
              animateIn="fadeInLeft"
              className="left"
              duration={1.5}
            >
              <h2>Game Product Details</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Recusandae doloremque, ipsa eligendi rerum, distinctio, nisi
                cupiditate{" "}
              </p>
            </ScrollAnimation>
            <div className="right">
              <img src={hero} alt="" className="hero" ref={heroImageRef} />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid game_product_section2">
          <div className="auto-container">
            <div className="row game_product_content">
              <div className="col-md-12 detail">
                <div className=" gameproduct_about">
                  <ScrollAnimation
                    animateIn="fadeInLeft"
                    duration={1.5}
                    className=" left"
                  >
                    <img src={section2} alt="" />
                  </ScrollAnimation>
                  <ScrollAnimation
                    animateIn="fadeInRight"
                    duration={1.5}
                    className="right"
                  >
                    <h2>About Realm Wars: Clash of Empires</h2>
                    <p>
                      Realm Wars: Clash of Empires isn't just a game; it's a
                      powerful business tool designed to empower startup
                      entrepreneurs in the mobile gaming industry. Our platform
                      provides a comprehensive suite of services and resources
                      to help you bring your vision to life, from concept to
                      launch and beyond.
                    </p>
                    <Link className="default-btn">Get Free Consulation</Link>
                  </ScrollAnimation>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid section-3">
          <div className="auto-container game-details-Services">
            <h2>Feature Highlights</h2>
            <p style={{ textAlign: "center" }}>
              Discover the core functionalities and standout attributes that set
              our game apart from the competition
            </p>
            <div className="all_card">
              {KeyFeatures1.map((KeyFeatures, i) => {
                return (
                  <AnimationCardScroll animateIn="fadeInUp" duration={1.5}>
                    {" "}
                    <TiltCard KeyFeatures={KeyFeatures} key={i} />
                  </AnimationCardScroll>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid section_4">
          <div className="auto-container game_features">
            <h2>In-Game Experiences</h2>
            <p style={{ textAlign: "center" }}>
              Delve into the immersive gameplay elements and interactive
              features that make our game truly captivating
            </p>
            <div className="Gamefeature_all_card">
              {KeyFeatures.map((data, index) => {
                return (
                  <AnimationCardScroll animateIn="fadeInUp" duration={1.5}>
                    <GameFeaturesCards number={index} data={data} />
                  </AnimationCardScroll>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid game_product_section5">
          <div className="auto-container">
            <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
              Under the Hood
            </h2>
            <p style={{ textAlign: "center", marginBottom: "80px" }}>
              {" "}
              Explore the hardware and software requirements necessary for
              seamless gameplay and optimal performance
            </p>
            <div className="row game_product_content">
              <div className="col-md-12 detail">
                <div className="section_5">
                  <div className="left">
                    <div
                      className="first"
                      style={{
                        background: Compatibility
                          ? "linear-gradient(119.66deg, #16d9b2 0%, #1be1ba 0.01%, #5fe86c 100%)"
                          : "",
                      }}
                      onClick={handleCompatibility}
                    >
                      <h6 className="technical_heading  ">
                        {" "}
                        Cross-Platform Compatibility
                      </h6>
                    </div>
                    <div
                      className="first"
                      onClick={handleArchitecture}
                      style={{
                        background: Architecture
                          ? "linear-gradient(119.66deg, #16d9b2 0%, #1be1ba 0.01%, #5fe86c 100%)"
                          : "",
                      }}
                    >
                      <h6 className="technical_heading  ">
                        {" "}
                        Scalable Architecture
                      </h6>
                    </div>{" "}
                    <div
                      className="first"
                      onClick={handleSupport}
                      style={{
                        background: Support
                          ? "linear-gradient(119.66deg, #16d9b2 0%, #1be1ba 0.01%, #5fe86c 100%)"
                          : "",
                      }}
                    >
                      <h6 className="technical_heading  ">
                        {" "}
                        Real-Time Multiplayer Support
                      </h6>
                    </div>{" "}
                    <div
                      className="first"
                      onClick={handleMonetization}
                      style={{
                        background: Monetization
                          ? "linear-gradient(119.66deg, #16d9b2 0%, #1be1ba 0.01%, #5fe86c 100%)"
                          : "",
                      }}
                    >
                      <h6 className="technical_heading  ">
                        {" "}
                        Monetization Options
                      </h6>
                    </div>{" "}
                    <div
                      className="first"
                      onClick={handleReporting}
                      style={{
                        background: Reporting
                          ? "linear-gradient(119.66deg, #16d9b2 0%, #1be1ba 0.01%, #5fe86c 100%)"
                          : "",
                      }}
                    >
                      <h6 className="technical_heading  ">
                        {" "}
                        Analytics and Reporting
                      </h6>
                    </div>{" "}
                    <div
                      className="first"
                      onClick={handleSecurity}
                      style={{
                        background: Security
                          ? "linear-gradient(119.66deg, #16d9b2 0%, #1be1ba 0.01%, #5fe86c 100%)"
                          : "",
                      }}
                    >
                      <h6 className="technical_heading  ">
                        {" "}
                        Security and Compliance
                      </h6>
                    </div>{" "}
                    <div
                      className="first"
                      onClick={handleAPI}
                      style={{
                        background: API
                          ? "linear-gradient(119.66deg, #16d9b2 0%, #1be1ba 0.01%, #5fe86c 100%)"
                          : "",
                      }}
                    >
                      <h6 className="technical_heading  ">API Integration</h6>
                    </div>{" "}
                    <div
                      className="first"
                      onClick={handleCustomization}
                      style={{
                        background: Customization
                          ? "linear-gradient(119.66deg, #16d9b2 0%, #1be1ba 0.01%, #5fe86c 100%)"
                          : "",
                      }}
                    >
                      <h6 className="technical_heading  ">
                        {" "}
                        Customization and Extensibility
                      </h6>
                    </div>
                  </div>
                  <div className="right">
                    <div className="right_img">
                      <img src={technical_img} alt="" />
                    </div>
                    {Compatibility ? (
                      <p>
                        Realm Wars: Clash of Empires is built using
                        cross-platform technologies, ensuring compatibility
                        across a wide range of devices and operating systems.
                        Whether your target audience uses iOS or Android,
                        smartphones or tablets, our solution delivers a seamless
                        gaming experience on any platform.
                      </p>
                    ) : Architecture ? (
                      <p>
                        Our platform is built on a scalable architecture
                        designed to accommodate rapid growth and increasing user
                        demand. With flexible server infrastructure and dynamic
                        load balancing, you can scale your game to support
                        millions of players without compromising performance or
                        reliability.
                      </p>
                    ) : Support ? (
                      <p>
                        Engage players in thrilling real-time battles with
                        support for multiplayer functionality. Our platform
                        provides robust networking capabilities, enabling
                        seamless matchmaking, peer-to-peer connections, and
                        synchronous gameplay experiences that keep players
                        coming back for more.
                      </p>
                    ) : Monetization ? (
                      <p>
                        Monetize your game effectively with a range of flexible
                        monetization options, including in-app purchases,
                        advertising, and subscription services. Our platform
                        integrates seamlessly with leading ad networks and
                        payment gateways, allowing you to maximize revenue while
                        providing value to your players.
                      </p>
                    ) : Reporting ? (
                      <p>
                        Gain valuable insights into player behavior, engagement
                        metrics, and revenue performance with comprehensive
                        analytics and reporting tools. Track key performance
                        indicators, identify trends, and optimize your game
                        strategy based on real-time data to drive continuous
                        improvement and success.
                      </p>
                    ) : Security ? (
                      <p>
                        Protect your game and your players' data with robust
                        security measures and compliance standards. Our platform
                        implements industry-leading encryption protocols, secure
                        authentication mechanisms, and strict data privacy
                        policies to ensure the highest level of security and
                        regulatory compliance.
                      </p>
                    ) : API ? (
                      <p>
                        Seamlessly integrate Realm Wars: Clash of Empires with
                        third-party services and APIs to extend functionality
                        and enhance the gaming experience. From social media
                        integration and user authentication to cloud storage and
                        push notifications, our platform supports a wide range
                        of integrations to meet your specific requirements.
                      </p>
                    ) : Customization ? (
                      <p>
                        Customize every aspect of your game with our flexible
                        customization and extensibility options. From game
                        mechanics and user interface design to content creation
                        and feature development, our platform empowers you to
                        tailor your game to suit your vision and differentiate
                        your brand in the market.
                      </p>
                    ) : (
                      ""("")
                    )}
                  </div>
                </div>
                <div className="mobile_section5">
                  {section5.map((data) => {
                    return (
                      <div className="card_section5">
                        <img src={technical_img} alt="" />
                        <h6>{data.title}</h6>
                        <p>{data.content}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid section-6">
          <div className="auto-container development_process">
            <h2>Development and Implementation Lifecycle</h2>
            <ul className="time_line">
              {development.map((step, index) => (
                <li key={index}>
                  <ScrollAnimation
                    animateIn={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
                    animateOut={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
                  >
                    <div className="proccess_box">
                      <div className="number">
                        <p>{index + 1}</p>
                      </div>
                      <h6>{step.title}</h6>
                      <p>{step.content_1}</p>
                      <p>{step.content_2}</p>
                    </div>
                  </ScrollAnimation>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section
        className="counter-section one"
        style={{
          backgroundSize: "cover",
          background: "white",
        }}
      >
        <div className="auto-container">
          <div
            className="award-part "
            data-aos="fade-up"
            data-aos-delay="300"
            style={{ paddingTop: "0", paddingBottom: "0" }}
          >
            <div
              className="row"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div className="col-lg-6">
                <div className="title">
                  <h2 style={{ color: "black" }}>
                    Are you ready to revolutionize
                    <span className="theme-color">
                      mobile gaming industry with
                    </span>{" "}
                    the your innovative ideas?
                  </h2>
                  <p style={{ color: "black" }}>
                    <strong>
                      {" "}
                      Take the first step towards success with Realm Wars
                    </strong>{" "}
                    : Clash of Empires. Contact us now to learn more about our
                    B2B solutions and discover how we can help turn your vision
                    into reality.
                  </p>
                  <div className="inner-btn d-adjust">
                    <div>
                      <Link className="default-btn" to="/contact">
                        Let’s Work To Do{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <img src="/assets/img/bg-image/painting-water-lillies-orange-flowers-pond-generative-ai_733139-67283-transformed-removebg-preview.png" />
              </div>
            </div>
            {/* <div className="overlay-text">
              <h1>AI</h1>
            </div> */}
            {/* <div className="shape-img">
                            <img
                                className="shape-1 poa"
                                src="./assets/img/icon/50_icon.png"
                                alt=""
                            />
                            <img
                                className="shape-2 poa"
                                src="./assets/img/icon/51_icon.png"
                                alt=""
                            />
                        </div> */}
          </div>
        </div>
      </section>
      {/* <section>
        <div
          className="container-fluid game_product_section2"
          style={{ backgroundColor: "white" }}
        >
          <div className="auto-container">
            <div className="row game_product_content">
              <h2>
                Why Choose Fire Bee Techno Services As Your NFT Game Development
                Company
              </h2>
              <div className="col-md-12 detail">
                <div className="gameproduct_about">
                  <ScrollAnimation
                    className="col-5 left"
                    animateIn="fadeInLeft"
                    duration={1.5}
                  >
                    <img src={section2img} alt="" />
                  </ScrollAnimation>
                  <ScrollAnimation
                    className="right"
                    animateIn="fadeInRight"
                    duration={1.5}
                  >
                    <p style={{ color: "black" }}>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Dolorem quaerat perferendis illum sapiente magnam illo,
                      quas ad corporis. Maxime obcaecati corrupti amet possimus
                      alias porro labore odio ullam ad tenetur! Temporibus
                      obcaecati soluta itaque, magnam, minus rem exercitationem
                      aliquam explicabo, suscipit ea nemo at. Exercitationem
                      odio commodi vel id! Aut.
                    </p>
                    <ul style={{ color: "black" }}>
                      <li>
                        <i class="fa-regular fa-circle-dot"></i> Lorem ipsum
                        dolor, sit amet{" "}
                      </li>
                      <li>
                        <i class="fa-regular fa-circle-dot"></i> Lorem ipsum
                        dolor, sit amet{" "}
                      </li>
                      <li>
                        <i class="fa-regular fa-circle-dot"></i> Lorem ipsum
                        dolor, sit amet{" "}
                      </li>
                      <li>
                        <i class="fa-regular fa-circle-dot"></i> Lorem ipsum
                        dolor, sit amet{" "}
                      </li>
                    </ul>
                  </ScrollAnimation>
                </div>
                <Link className="default-btn">Get Free Consulation</Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="faq-section one" style={{ backgroundColor: "black" }}>
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-6 pe-4">
              <div
                className="section-title-shape-one left "
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <h3>FAQ For Artificial Intelligence </h3>
                <h2>
                  Answers at a <br />
                  <span className="theme-color">Glance</span>
                </h2>
                <p>
                  Find quick solutions and insights to common queries and
                  concerns about our game with our comprehensive FAQ section
                </p>
              </div>
              <div
                className="img-file "
                data-aos="fade-right"
                data-aos-delay="500"
              >
                <img
                  className="img-fluid"
                  src="/assets/img/service/02_service.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="faq-inner "
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div className="icon-shape">
                  <img
                    className="img-fluid"
                    src="/assets/img/icon/23_icon.png"
                    alt=""
                  />
                </div>
                <div className="intro">
                  <h3>Common Question &amp; Answer</h3>
                </div>
                <div className="faq-list">
                  <div
                    className="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="false"
                          aria-controls="flush-collapseOne"
                        >
                          What is Realm Wars: Clash of Empires?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Clash of Empires is a strategic mobile game that
                          combines city-building, resource management, and
                          tactical warfare in a vibrant fantasy world.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseTwo"
                          aria-expanded="false"
                          aria-controls="flush-collapseTwo"
                        >
                          Who is Realm Wars: Clash of Empires designed for?
                          {"}"}
                        </button>
                      </h2>
                      <div
                        id="flush-collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Clash of Empires is designed for startup entrepreneurs
                          and businesses in the mobile gaming industry who are
                          looking for a customizable white-label solution to
                          launch their own mobile game.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseThree"
                          aria-expanded="false"
                          aria-controls="flush-collapseThree"
                        >
                          What platforms is Realm Wars: Clash of Empires
                          available on?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Clash of Empires is available on both iOS and Android
                          platforms, offering cross-platform compatibility for a
                          wide range of devices.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseFour"
                          aria-expanded="false"
                          aria-controls="flush-collapseFour"
                        >
                          What licensing options are available for Realm Wars:
                          Clash of Empires?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseFour"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          We offer flexible licensing options tailored to meet
                          your specific needs and budget requirements, whether
                          you're a solo entrepreneur or a budding startup
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseFive"
                          aria-expanded="false"
                          aria-controls="flush-collapseFive"
                        >
                          How can I customize Realm Wars: Clash of Empires for
                          my brand?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseFive"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          With our white-label solution, you can customize and
                          brand Realm Wars: Clash of Empires as your own unique
                          product, with full control over branding and
                          customization options.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-image">
          <div className="shape-img-2 poa">
            <img src="/assets/img/icon/64_icon.png" alt="" />
          </div>
          <div className="shape-img-3 poa">
            <img src="/assets/img/icon/22_icon.png" alt="" />
          </div>
          <div className="shape-img-4 poa">
            <img src="/assets/img/icon/08_icon.png" alt="" />
          </div>
          <div className="shape-img-5 poa">
            <img src="/assets/img/icon/26_icon.png" alt="" />
          </div>
          <div className="shape-img-6 poa">
            <img src="/assets/img/icon/43_icon.png" alt="" />
          </div>
          <div className="shape-img-7 poa">
            <img src="/assets/img/icon/68_icon.png" alt="" />
          </div>
          <div className="shape-img-8 poa">
            <img src="/assets/img/icon/71_icon.png" alt="" />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default GameProductDetailsHero;
