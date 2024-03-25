import React, { Fragment, useEffect, useRef } from "react";
import hero from "../images/game_detail_hero.png";
import section2img from "../images/gameproduct-detailimg/section2.png";
import { Link } from "react-router-dom";
import VanillaTilt from "vanilla-tilt";
import icon1 from "../images/gameproduct-detailimg/icon1.png";
import TiltCard from "./TiltCard";
import GameFeaturesCards from "./GameFeaturesCards";
import section4 from "../images/gameproduct-detailimg/section4.png";
import AnimationCardScroll from "./AnimationCardScroll";
const GameProductDetailsHero = () => {
  const heroImageRef = useRef(null);

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
  return (
    <Fragment>
      <section>
        <div className="container-fluid gameproduct_hero">
          <div className="auto-container gameproduct_hero_container">
            <div className="left">
              <h2>Game Product Details</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Recusandae doloremque, ipsa eligendi rerum, distinctio, nisi
                cupiditate{" "}
              </p>
            </div>
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
              <h2>
                Unlock the Potential of NFT Gaming With Our NFT Gaming
                Development Services
              </h2>
              <div className="col-md-12 detail">
                <div className=" gameproduct_about">
                  <div className=" left">
                    <img src={section2img} alt="" />
                  </div>
                  <div className="right">
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Dolorem quaerat perferendis illum sapiente magnam illo,
                      quas ad corporis. Maxime obcaecati corrupti amet possimus
                      alias porro labore odio ullam ad tenetur! Temporibus
                      obcaecati soluta itaque, magnam, minus rem exercitationem
                      aliquam explicabo, suscipit ea nemo at. Exercitationem
                      odio commodi vel id! Aut.
                    </p>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Dolorem quaerat perferendis illum sapiente magnam illo,
                      quas ad corporis. Maxime obcaecati corrupti amet possimus
                      alias porro labore odio ullam ad tenetur! Temporibus
                      obcaecati soluta itaque, magnam, minus rem exercitationem
                      aliquam explicabo, suscipit ea nemo at. Exercitationem
                      odio commodi vel id! Aut.
                    </p>
                    <ul>
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
                  </div>
                </div>
                <Link className="default-btn">Get Free Consulation</Link>
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
              {data.map(() => {
                return <TiltCard />;
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
              <GameFeaturesCards />
              <GameFeaturesCards />
              <GameFeaturesCards />
              <GameFeaturesCards />
              <GameFeaturesCards />
              <GameFeaturesCards />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid game_product_section2">
          <div className="auto-container">
            <div className="row game_product_content">
              <h2>Our Popular NFT Game Clone Scripts</h2>
              <div className="col-md-12 detail">
                <div
                  className=" gameproduct_about section_5"
                  style={{
                    flexDirection: "row-reverse",
                    alignItems: "flex-start ",
                  }}
                >
                  <div className=" left" style={{ textAlign: "end" }}>
                    <img src={section4} alt="" />
                  </div>
                  <div
                    className="right d-flex flex-column align-items-start  "
                    style={{ marginTop: "50px" }}
                  >
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Dolorem quaerat perferendis illum sapiente magnam illo,
                      quas ad corporis. Maxime obcaecati corrupti amet possimus
                      alias porro labore odio ullam ad tenetur! Temporibus
                      obcaecati soluta itaque, magnam, minus rem exercitationem
                      aliquam explicabo, suscipit ea nemo at. Exercitationem
                      odio commodi vel id! Aut.
                    </p>

                    <ul className="section_5_ul">
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
                    <Link className="default-btn mt-4">
                      Get Free Consulation
                    </Link>
                  </div>
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
                  <AnimationCardScroll
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
                  </AnimationCardScroll>
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
                <div className=" gameproduct_about">
                  <div className="col-5 left">
                    <img src={section2img} alt="" />
                  </div>
                  <div className="right">
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
                  </div>
                </div>
                <Link className="default-btn">Get Free Consulation</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="faq-section one" style={{backgroundColor:"black"}}>
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
