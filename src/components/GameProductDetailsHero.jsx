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
  const processSteps = [
    "Research & Concept Creation",
    "Design",
    "Development",
    "Testing",
    "Launch",
    // Add your actual steps or content here
  ];
  const data = [1, 2, 2, 3, 4, 5];
  const KeyFeatures = [
    {
      title: "White Label Solution",
      content:
        "Utilize our white-label solution to customize and brand Realm Wars: Clash of Empires as your own unique product. With full control over branding and customization options, you can create a compelling gaming experience that reflects your vision and values.",
    },
    {
      title: "	Flexible Licensing Options",
      content:
        "Choose from a range of flexible licensing options tailored to meet your specific needs and budget requirements. Whether you're a solo entrepreneur or a budding startup, we offer scalable solutions designed to grow with your business.",
    },
    {
      title: "	Comprehensive Support",
      content:
        "From game development and design to marketing and monetization strategies, our team of experts is here to support you every step of the way. Benefit from personalized guidance, industry insights, and best practices to maximize your success in the competitive mobile gaming market.",
    },
    {
      title: "Access to Resources",
      content:
        "Gain access to a wealth of resources, including game assets, source code, documentation, and developer tools, to accelerate your development process and streamline your operations. Leverage our proven framework to build a high-quality game that captivates players and drives revenue",
    },
    {
      title: "	Community Engagement",
      content:
        "Join our thriving community of entrepreneurs, developers, and industry professionals to network, collaborate, and share insights. Exchange ideas, seek advice, and forge valuable partnerships that can help propel your business to new heights.",
    },
    {
      title: "Easy to use",
      content: "Easy to use and intuitive",
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
                    <img src={section2img} alt="" />
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
            <h2>Our NFT Game Development Services</h2>
            <div className="all_card">
              {KeyFeatures.map((KeyFeatures, i) => {
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
            <h2>Features of NFT Gaming Development</h2>
            <div className="Gamefeature_all_card">
              {data.map(() => {
                return (
                  <AnimationCardScroll animateIn="fadeInUp" duration={1.5}>
                    <GameFeaturesCards />
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
            <div className="row game_product_content">
              <h2>Technical Details</h2>
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
            <h2>Our NFT Gaming Platform Development Process</h2>
            <ul className="time_line">
              {processSteps.map((step, index) => (
                <li key={index}>
                  <ScrollAnimation
                    animateIn={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
                    animateOut={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
                  >
                    <div className="proccess_box">
                      <div className="number">
                        <p>{index + 1}</p>
                      </div>
                      <h6>{step}</h6>
                      <p>
                        To expand the basic game concept with additional ideas
                        and features, our team conducts extensive research on
                        concept.
                      </p>
                    </div>
                  </ScrollAnimation>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section>
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
      </section>
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
                  The goal of Artificial <br />
                  <span className="theme-color">intelligence</span>
                </h2>
                <p>
                  Artificial intelligence is the simulation of human
                  intelligence processes by machines, especially computer
                  systems. Specific applications of AI include expert systems,
                  natural language processing, speech recognition and machine
                  vision.
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
                          Can i have multiple activities in single feature?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          As you may have read in our AI, ML, and deep learning
                          post, ML is a subset of AI. Not all AI systems learn
                          from experience but ML-enabled devices do. Very simply
                          put, all ML systems are AI but not all AI machines are
                          ML-capable. As you may have read in our AI, ML, and
                          deep learning post, ML is a subset of AI. Not all AI
                          systems learn from experience but ML-enabled devices
                          do. Very simply put, all ML systems are AI but not all
                          AI machines are ML-capable.
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
                          What is the difference between Data Analyst?{"{"}" "
                          {"}"}
                        </button>
                      </h2>
                      <div
                        id="flush-collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          As you may have read in our AI, ML, and deep learning
                          post, ML is a subset of AI. Not all AI systems learn
                          from experience but ML-enabled devices do. Very simply
                          put, all ML systems are AI but not all AI machines are
                          ML-capable. As you may have read in our AI, ML, and
                          deep learning post, ML is a subset of AI. Not all AI
                          systems learn from experience but ML-enabled devices
                          do. Very simply put, all ML systems are AI but not all
                          AI machines are ML-capable.
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
                          What are 3 good things about artificial intelligence?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          As you may have read in our AI, ML, and deep learning
                          post, ML is a subset of AI. Not all AI systems learn
                          from experience but ML-enabled devices do. Very simply
                          put, all ML systems are AI but not all AI machines are
                          ML-capable. As you may have read in our AI, ML, and
                          deep learning post, ML is a subset of AI. Not all AI
                          systems learn from experience but ML-enabled devices
                          do. Very simply put, all ML systems are AI but not all
                          AI machines are ML-capable.
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
