import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import bg_image1 from "../images/raidenSimx/2150697460-transformed.jpeg";
import ico2 from "../images/raidenSimx/healthcare.svg";
import icon from "../images/raidenverse/game_engine/interactive.svg";
import { useDispatch } from "react-redux";
import { GetAllBlogs } from "../action/BlogAction";

const RaidenCogniContent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      dispatch(GetAllBlogs);
    } catch (error) {
      console.log(error);
    }
  }, []);
  const sliderRef = useRef();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 576, // Screen width up to 600px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Screen width up to 480px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can add more breakpoints here
    ],
  };
  return (
    <>
      <section className="about-section three">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="left-wrapper "
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <div className="img-file">
                  <img
                    className="img-fluid "
                    src="/assets/img/about/_e17fb051-856f-4968-a2c0-150430fd0b61 2.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="right-wrapper pl-40 "
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div className="section-title-shape-one black">
                  <h2 style={{ fontSize: "30px" }}>
                    Unlock Your Potential with <span>Cogni+</span>: Empowering
                    Minds, Enriching Lives
                  </h2>
                </div>
                <div className="inner-list">
                  <ul>
                    <li>
                      <div>
                        <p>
                          Welcome to a revolutionary solution designed to
                          empower individuals on the autism spectrum through
                          immersive Virtual Reality (VR) training. Introducing
                          Raiden COGNI+, a cutting-edge program meticulously
                          crafted to cater specifically to the needs of those
                          with autism. With a focus on enhancing social skills,
                          communication abilities, and fostering a sense of
                          independence, Raiden GOGNI+ is poised to redefine the
                          landscape of autism intervention.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-img">
          <img
            className="shape-1 poa"
            src="/assets/img/shape/14_shape.png"
            alt=""
          />
          <img
            className="shape-2 poa"
            src="/assets/img/icon/84_icon.png"
            alt=""
          />
        </div>
      </section>
      <section className="service-section two">
        <div className="auto-container">
          <div className="row">
            <div className="col-12">
              <div
                style={{ padding: "0 100px" }}
                className="section-title-shape-one middle "
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h2 style={{ color: "black" }}>
                  Key
                  <span className="theme-color"> Features</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="section-wrapper "
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="wrapper-inner one">
                  <div className="img-file">
                    <img
                      src="/assets/img/Services_Enterprises/1 AI technology consulting@0.png"
                      alt=""
                    />
                  </div>
                  <div className="text-file">
                    <h3>
                      <Link to="#"> Immersive VR Environment</Link>
                    </h3>
                    <p>
                      Step into a captivating virtual world where learning
                      becomes an adventure. The immersive environment provides a
                      safe space for individuals to practice various social
                      scenarios at their own pace.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="section-wrapper "
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="wrapper-inner one">
                  <div className="img-file">
                    <img
                      src="/assets/img/Services_Enterprises/2ai models@0.3x.png"
                      alt=""
                    />
                  </div>
                  <div className="text-file">
                    <h3>
                      <Link to="#"> Customizable Training Modules</Link>
                    </h3>
                    <p>
                      Tailored to meet diverse needs, Raiden GOGNI+ offers a
                      range of customizable training modules. From basic social
                      interactions to complex communication strategies, users
                      can select exercises that align with their specific goals
                      and abilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="section-wrapper "
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="wrapper-inner one">
                  <div className="img-file">
                    <img
                      style={{ scale: "0.9" }}
                      src="/assets/img/Services_Enterprises/3 ai (1)@0.3x.png"
                      alt=""
                    />
                  </div>
                  <div className="text-file">
                    <h3>
                      <Link to="#"> Realistic Social Scenarios</Link>
                    </h3>
                    <p>
                      Engage in realistic social simulations that mirror
                      everyday encounters. Whether it's initiating
                      conversations, interpreting facial expressions, or
                      navigating social cues, users can hone their skills
                      through interactive scenarios.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="section-wrapper "
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="wrapper-inner one">
                  <div className="img-file">
                    <img
                      style={{ scale: "1.1" }}
                      src="/assets/img/Services_Enterprises/4 mobile-app@0.3x.png"
                      alt=""
                    />
                  </div>
                  <div className="text-file">
                    <h3>
                      <Link to="#"> Data-Driven Progress Tracking</Link>
                    </h3>
                    <p>
                      Monitor progress effortlessly with built-in data tracking
                      features. Detailed analytics provide insights into user
                      performance, allowing for targeted intervention and
                      continuous improvement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="section-wrapper "
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="wrapper-inner one">
                  <div className="img-file">
                    <img
                      src="/assets/img/Services_Enterprises/5 integrations@0.3x.png"
                      alt=""
                    />
                  </div>
                  <div className="text-file">
                    <h3>
                      <Link to="#">User-Friendly Interface</Link>
                    </h3>
                    <p>
                      Designed with accessibility in mind, the user-friendly
                      interface ensures a seamless experience for individuals of
                      all skill levels. Intuitive controls and clear
                      instructions facilitate independent learning and
                      exploration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="section-wrapper "
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="wrapper-inner one">
                  <div className="img-file">
                    <img
                      src="/assets/img/Services_Enterprises/6 ai atrib@0.3x.png"
                      alt=""
                    />
                  </div>
                  <div className="text-file">
                    <h3>
                      <Link to="#">Supportive Community</Link>
                    </h3>
                    <p>
                      Connect with a supportive community of users and
                      professionals dedicated to autism advocacy. Share
                      experiences, exchange tips, and celebrate milestones as
                      part of a vibrant online community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="inner-btn d-adjust">
            <div>
              <Link className="default-btn" to="/service">
                View All Services
              </Link>
            </div>
          </div> */}
        </div>
        <div className="shape-img">
          <img
            className="shape-1 poa"
            src="/assets/img/icon/65_icon.png"
            alt=""
          />
          <img
            className="shape-7 poa"
            src="/assets/img/icon/71_icon.png"
            alt=""
          />
          <img
            className="shape-8 poa"
            src="/assets/img/icon/74_icon.png"
            alt=""
          />
        </div>
      </section>
      {/* <section
        className="project-section three Raidenarcviz_card_main_div"
        style={{ padding: "80px 0", background: "black" }}
      >
        <div className="auto-container">
          <div className="row">
            <h2 className="raidenarcviz_card_h2">
              <span className="theme-color">Benefits</span>
            </h2>
            <div className="arcviz_benifit_div" style={{justifyContent:"center" ,gap:"20px"}}>
              <div className="arcviz_benifit">
                <img src="/assets/img/nftdevfeatu/nftwallet.svg" alt="" />
                <div>Enhanced Visualization</div>
                <p>
                  Gain a clearer understanding of architectural designs with
                  immersive, photorealistic visualizations.
                </p>
              </div>
              <div className="arcviz_benifit">
                <img src="/assets/img/nftdevfeatu/nftwallet.svg" alt="" />
                <div>Improved Decision-Making</div>
                <p>
                  Make informed decisions with real-time insights and
                  customizable design options.
                </p>
              </div>
              <div className="arcviz_benifit">
                <img src="/assets/img/nftdevfeatu/nftwallet.svg" alt="" />
                <div>Cost and Time Savings</div>
                <p>
                  Reduce costs and save time by eliminating the need for
                  physical staging and in-person property viewings.
                </p>
              </div>
              <div className="arcviz_benifit">
                <img src="/assets/img/nftdevfeatu/nftwallet.svg" alt="" />
                <div>Wider Reach</div>
                <p>
                  Reach a wider audience of potential buyers and clients by
                  offering immersive virtual experiences.
                </p>
              </div>
              <div className="arcviz_benifit">
                <img src="/assets/img/nftdevfeatu/nftwallet.svg" alt="" />
                <div>Streamlined Transactions</div>
                <p>
                  Simplify real estate transactions with virtual commerce,
                  making buying and selling properties more convenient.
                </p>
              </div>
       
            </div>
          </div>
        </div>
      </section> */}
      <section>
        <div className="cogni_benefits_section">
          <h2 className="auto-container">Benefits</h2>
          <div className="auto-container cogini_slider">
            <img src={bg_image1} alt="" className="sideimage" />
            <Slider
              {...settings}
              className="cogini_slider_main"
              ref={sliderRef}
            >
              <div className="new">
                <img src={"/assets/img/raidenCogni/cogni  benefits/social.svg"} alt="" />
                <h6> Enhanced Social Skills</h6>
                <p>
                  Develop confidence and proficiency in social interactions
                  through repeated exposure and practice in a controlled
                  environment.
                </p>
              </div>
              <div className="new">
              <img src={"/assets/img/raidenCogni/cogni  benefits/immprovedcommu.svg"} alt="" />

                <h6> Improved Communication</h6>
                <p>
                  Refine verbal and nonverbal communication skills, including
                  tone of voice, body language, and active listening techniques.
                </p>
              </div>
              <div className="new">
              <img src={"/assets/img/raidenCogni/cogni  benefits/reducedanxi.svg"} alt="" />

                <h6> Reduced Anxiety</h6>
                <p>
                  Alleviate anxiety associated with unfamiliar social situations
                  through gradual exposure and desensitization techniques.
                </p>
              </div>
              <div className="new">
              <img src={"/assets/img/raidenCogni/cogni  benefits/increasedinde.svg"} alt="" />

                <h6> Increased Independence</h6>
                <p>
                  Build independence by mastering essential life skills, such as
                  navigating public spaces, following routines, and handling
                  unexpected situations.
                </p>
              </div>{" "}
              <div className="new">
              <img src={"/assets/img/raidenCogni/cogni  benefits/empowern.svg"} alt="" />

                <h6> Empowerment</h6>
                <p>
                  Foster a sense of empowerment and self-efficacy as users gain
                  mastery over challenging social scenarios and tasks.
                </p>
              </div>
            </Slider>
            <div className="cogini_slider_arrow">
              <i
                class="fa-regular fa-circle-left"
                onClick={() => sliderRef.current.slickNext()}
              ></i>
              <i
                class="fa-regular fa-circle-right"
                onClick={() => sliderRef.current.slickPrev()}
              ></i>
            </div>
          </div>
        </div>
      </section>
      <section
        className="counter-section one"
        style={{
          backgroundSize: "cover",
          background: "white",
          padding: "50px 0",
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
                    Who Can <span className="theme-color">Benefit</span> ?
                  </h2>
                  <p style={{ color: "black" }}>
                    Raiden GOGNI+ is suitable for individuals of all ages and
                    abilities on the autism spectrum. Whether you're a parent
                    seeking supplementary support for your child, a therapist
                    looking to enhance intervention strategies, or an individual
                    seeking to improve social skills independently, Raiden
                    GOGNI+ offers a transformative learning experience.
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
          </div>
        </div>
      </section>
      <section className="cogni_lesson">
        <div className="auto-container cogni_lesson_container">
          <h2>
            LESSONS FOR <span>DEVELOPING</span> PRACTICAL{" "}
            <span>
              {" "}
              <br /> LIFE SKILLS
            </span>
          </h2>
          <p>
            Our platform continually expands its content, drawing from proven
            social and communication strategies aimed at empowering individuals
            with tangible real-world abilities. Our focus lies in crafting
            lessons that target specific social behaviors, adeptly handling both
            anticipated and unexpected situations, and refining sensory and
            emotional management techniques.
          </p>
          <div className="cogni_card_container">
            <div className="cogni_card">
              <div>
                <img src={"/assets/img/raidenCogni/cogni lesson for (1)/joint.svg"} alt="" />
              </div>
              <h6>Joint Attention</h6>
              <p>
                Learn the fundamentals of joint attention, a crucial skill for
                successful social interactions. Practice techniques to focus
                attention on shared objects or activities, fostering meaningful
                connections with others.
              </p>
            </div>
            <div className="cogni_card">
              <div>
                <img src="\assets\img\raidenCogni\cogni lesson for (1)\imitation.svg" alt="" />
              </div>
              <h6>Imitation</h6>
              <p>
                Develop imitation skills through interactive exercises designed
                to mimic and replicate actions, gestures, and expressions.
                Strengthen your ability to observe and emulate behavior,
                facilitating social learning and communication.
              </p>
            </div>
            <div className="cogni_card">
              <div>
                <img src="\assets\img\raidenCogni\cogni lesson for (1)\gesture.svg" alt="" />
              </div>
              <h6>Gestures</h6>
              <p>
                Explore the power of gestures in communication and expression.
                Master a diverse range of gestures and their meanings, enhancing
                your ability to convey thoughts, feelings, and intentions
                nonverbally.
              </p>
            </div>
            <div className="cogni_card">
              <div>
                <img src="\assets\img\raidenCogni\cogni lesson for (1)\street.svg" alt="" />
              </div>
              <h6>Street Crossing</h6>
              <p>
                Navigate the complexities of street crossing with confidence and
                safety. Engage in simulated scenarios to learn proper pedestrian
                techniques, including traffic awareness, crosswalk navigation,
                and pedestrian signals interpretation.
              </p>
            </div>
            <div className="cogni_card">
              <div>
                <img src="\assets\img\raidenCogni\cogni lesson for (1)\noun-hallway-3310023.svg" alt="" />
              </div>
              <h6>School Hallway</h6>
              <p>
                Navigate the bustling school hallway with ease and poise.
                Practice spatial awareness, navigation etiquette, and social
                interaction skills to navigate crowded hallways and transitions
                between classes smoothly.
              </p>
            </div>
            <div className="cogni_card">
              <div>
                <img src="\assets\img\raidenCogni\cogni lesson for (1)\hallwaysmall.svg" alt="" />
              </div>
              <h6>Hallway Small Talk</h6>
              <p>
                Refine your small talk skills for hallway interactions. Learn
                conversational techniques and topics suitable for brief
                encounters, fostering connections and building rapport with
                peers and teachers.
              </p>
            </div>
            <div className="cogni_card">
              <div>
                <img src="\assets\img\raidenCogni\cogni lesson for (1)\cafeteria.svg" alt="" />
              </div>
              <h6>Cafeteria Social Skills</h6>
              <p>
                Master the art of socializing in the cafeteria setting. Practice
                table manners, conversation starters, and inclusive behaviors to
                navigate mealtime social interactions with confidence and grace.
              </p>
            </div>
            <div className="cogni_card">
              <div>
                <img src="\assets\img\raidenCogni\cogni lesson for (1)\mindful.svg" alt="" />
              </div>
              <h6>Mindful Thinking</h6>
              <p>
                Cultivate mindful thinking habits to enhance self-awareness and
                emotional regulation. Explore mindfulness exercises and
                techniques to promote calmness, focus, and resilience in daily
                life.
              </p>
            </div>
            <div className="cogni_card">
              <div>
                <img src="\assets\img\raidenCogni\cogni lesson for (1)\classrroom.svg" alt="" />
              </div>
              <h6>Classroom Social Skills</h6>
              <p>
                Develop essential social skills for the classroom environment.
                Practice active listening, group participation, and
                collaboration to foster a positive learning environment and
                academic success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RaidenCogniContent;
