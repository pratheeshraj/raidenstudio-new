import React, { useState } from "react";
import icon from "../images/raidenverse/game_engine/interactive.svg";
import ico2 from "../images/raidenSimx/healthcare.svg";
import bg_image from "../images/raidenSimx/w1.jpg";
import bg_image2 from "../images/raidenSimx/w2.jpg";
import bg_image3 from "../images/raidenSimx/w3.jpg";
import bg_image4 from "../images/raidenSimx/w4.jpg";
import bg_image5 from "../images/raidenSimx/w5.jpg";
import bg_image6 from "../images/raidenSimx/w6.jpg";
import bg_image7 from "../images/raidenSimx/w7.jpg";
import bg_image8 from "../images/raidenSimx/w8.jpg";
import bg_image1 from "../images/raidenSimx/2150697460-transformed.jpeg";
import { Link } from "react-router-dom";
import about from "../images/simx_about.jpg"

const RaidenSimXContent = () => {
  const [choose, setChoose] = useState(true);
  const [learn, setLearn] = useState(false);
  const [progress, setProgress] = useState(false);
  const [guidance, setGuidance] = useState(false);

  const handleChoose = () => {
    setChoose(true);
    setLearn(false);
    setProgress(false);
    setGuidance(false);
  };
  const handleGuidance = () => {
    setChoose(false);
    setLearn(false);
    setProgress(false);
    setGuidance(true);
  };
  const handleProgress = () => {
    setChoose(false);
    setLearn(false);
    setProgress(true);
    setGuidance(false);
  };
  const handleLearn = () => {
    setChoose(false);
    setLearn(true);
    setProgress(false);
    setGuidance(false);
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
                    src={about}
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
                    How We Help Industry Leaders
                  </h2>
                </div>
                <div className="inner-list">
                  <ul>
                    <li>
                      <div>
                        <p>
                          We collaborate with industry leaders to provide
                          tailored learning solutions that address specific
                          challenges and opportunities within their respective
                          sectors. By leveraging our immersive simulations and
                          personalized guidance, we help industry leaders:
                        </p>
                      </div>
                    </li>
                    <li style={{ color: "black" }}>
                      <p> ● Accelerate employee training and development.</p>
                    </li>
                    <li style={{ color: "black" }}>
                      <p> ● Foster innovation and problem-solving skills.</p>
                    </li>
                    <li style={{ color: "black" }}>
                      <p> ● Improve operational efficiency and performance.</p>
                    </li>
                    <li style={{ color: "black" }}>
                      <p>● Enhance customer experience and satisfaction.</p>
                    </li>
                    <li style={{ color: "black" }}>
                      <p> ● Stay ahead of emerging trends and technologies.</p>
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
      <section>
        <div
          className="container-fulid key_features"
          style={{ backgroundColor: "#00151e" }}
        >
          <h2 className="auto-container">Key Features</h2>
          <div className="auto-container row key_features_section_container">
            <div className="key_features_card">
              <img src="/assets/img/raidensimx/key features/immersive.svg" alt="" />
              <h6> Immersive Simulations</h6>
              <p>
                Dive into realistic scenarios crafted to mimic real-world
                situations, providing an engaging learning experience that goes
                beyond traditional methods.
              </p>
            </div>
            <div className="key_features_card">
              <img src="/assets/img/raidensimx/key features/human.svg" alt="" />
              <h6> Human-Powered AI</h6>
              <p>
                Our unique blend of human expertise and artificial intelligence
                ensures personalized guidance and support tailored to your
                individual learning needs.
              </p>
            </div>
            <div className="key_features_card">
              <img src="/assets/img/raidensimx/key features/interactive.svg" alt="" />
              <h6> Interactive Learning</h6>
              <p>
                Interact with the environment, make decisions, and witness the
                consequences in real-time, fostering critical thinking and
                problem-solving skills.
              </p>
            </div>
            <div className="key_features_card">
              <img src="/assets/img/raidensimx/key features/feedback.svg" alt="" />
              <h6> Adaptive Feedback</h6>
              <p>
                Receive immediate feedback and insights to track your progress
                and make informed adjustments to your learning approach.
              </p>
            </div>
            <div className="key_features_card">
              <img src="/assets/img/raidensimx/key features/community.svg" alt="" />
              <h6> Community Engagement</h6>
              <p>
                Connect with fellow learners, experts, and mentors in our
                vibrant community, fostering collaboration and knowledge
                sharing.
              </p>
            </div>
            <div className="key_features_card">
              <img src="/assets/img/raidensimx/key features/multi.svg" alt="" />
              <h6> Multi-disciplinary Approach</h6>
              <p>
                Explore a wide range of subjects and industries, from healthcare
                to engineering, with customizable learning paths to suit your
                interests and goals.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          className="container-fulid industry_wide_section"
          style={{ backgroundColor: "white" }}
        >
          <h2 className="auto-container">Industry-Wide Use Cases</h2>
          <div className="auto-container row industry_wide_section_container ">
            <div className="industry_wide_card">
              <div className="classy_simx_bg"></div>
              <img src={bg_image} alt="" />
              <p>Medical simulations for healthcare professionals.</p>
            </div>
            <div className="industry_wide_card">
              <div className="classy_simx_bg"></div>
              <img src={bg_image2} alt="" />
              <p>Virtual labs for STEM education.</p>
            </div>
            <div className="industry_wide_card">
              <div className="classy_simx_bg"></div>
              <img src={bg_image3} alt="" />
              <p>Safety training for manufacturing and construction workers.</p>
            </div>
            <div className="industry_wide_card">
              <div className="classy_simx_bg"></div>
              <img src={bg_image4} alt="" />
              <p>Cybersecurity simulations for IT professionals</p>
            </div>
            <div className="industry_wide_card">
              <div className="classy_simx_bg"></div>
              <img src={bg_image5} alt="" />
              <p>
                Financial modeling and risk management simulations for finance
                professionals.
              </p>
            </div>
            <div className="industry_wide_card">
              <div className="classy_simx_bg"></div>
              <img src={bg_image6} alt="" />
              <p>
                Customer service simulations for retail and hospitality staff.
              </p>
            </div>
            <div className="industry_wide_card">
              <div className="classy_simx_bg"></div>
              <img src={bg_image7} alt="" />
              <p>
                Supply chain management simulations for logistics professionals.
              </p>
            </div>
            <div className="industry_wide_card">
              <div className="classy_simx_bg"></div>
              <img src={bg_image8} alt="" />
              <p>Crisis management simulations for emergency responders.</p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="counter-section one"
        style={{
          backgroundSize: "cover",
          background: "#00151e",
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
                  <h2>
                    Ready to revolutionize{" "}
                    <span className="theme-color">
                      learning and drive success
                    </span>{" "}
                    in your industry?
                  </h2>
                  <p>
                    Let's partner together to unlock the full potential of
                    immersive simulations and human-powered AI. Contact us today
                    to explore partnership opportunities and discover how
                    RaidensimX can transform your
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
      <section>
        <div
          className="container-fulid How_it_works"
          style={{ backgroundColor: "white" }}
        >
          <h2 className="auto-container">How It Works</h2>

          <div className="auto-container row How_it_works_section_container">
            <div className="How_it_works_main">
              <div className="How_it_works_left">
                <div className="card_section1">
                  <div
                    className="How_it_works_card"
                    style={{ backgroundColor: choose ? "#00151e" : "" }}
                    onClick={handleChoose}
                  >
                    <img src="/assets/img/raidensimx/sim x - how it works/choose.svg" alt="" />
                    <p style={{ color: choose ? "white" : "" }}>
                      {" "}
                      Choose Your Path
                    </p>
                  </div>
                  <div
                    className="How_it_works_card"
                    style={{ backgroundColor: learn ? "#00151e" : "" }}
                    onClick={handleLearn}
                  >
                    <img src="/assets/img/raidensimx/sim x - how it works/engage.svg" alt="" />
                    <p style={{ color: learn ? "white" : "" }}>
                      {" "}
                      Engage and Learn
                    </p>
                  </div>
                </div>
                <div className="card_section2">
                  <div
                    className="How_it_works_card"
                    style={{ backgroundColor: progress ? "#00151e" : "" }}
                    onClick={handleProgress}
                  >
                    <img src="/assets/img/raidensimx/sim x - how it works/track.svg" alt="" />
                    <p style={{ color: progress ? "white" : "" }}>
                      Track Your Progress
                    </p>
                  </div>
                  <div
                    className="How_it_works_card"
                    style={{ backgroundColor: guidance ? "#00151e" : "" }}
                    onClick={handleGuidance}
                  >
                    <img src="/assets/img/raidensimx/sim x - how it works/receive.svg" alt="" />
                    <p style={{ color: guidance ? "white" : "" }}>
                      {" "}
                      Receive Personalized Guidance
                    </p>
                  </div>
                </div>
              </div>
              {choose ? (
                <div className="How_it_works_right">
                  <img src={bg_image1} alt="" />
                  <div className="bg_black"></div>
                  <h6> Choose Your Path</h6>
                  <p>
                    Select from our extensive library of simulations and
                    learning modules tailored to your interests and objectives.
                  </p>
                </div>
              ) : learn ? (
                <div className="How_it_works_right">
                  <img src={bg_image1} alt="" />
                  <div className="bg_black"></div>
                  <h6> Engage and Learn</h6>
                  <p>
                    Immerse yourself in dynamic scenarios, interact with virtual
                    environments, and learn through hands-on experience.
                  </p>
                </div>
              ) : progress ? (
                <div className="How_it_works_right">
                  <img src={bg_image1} alt="" />
                  <div className="bg_black"></div>
                  <h6> Track Your Progress</h6>
                  <p>
                    Monitor your progress, assess your performance, and adapt
                    your learning journey based on actionable insights and
                    analytics.
                  </p>
                </div>
              ) : guidance ? (
                <div className="How_it_works_right">
                  <img src={bg_image1} alt="" />
                  <div className="bg_black"></div>
                  <h6> Receive Personalized Guidance</h6>
                  <p>
                    Benefit from personalized feedback and support from our team
                    of experts and AI-driven algorithms, ensuring optimal
                    learning outcomes.
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="How_it_works_main_responsive">
              <div className="How_it_works_right">
                <img src={bg_image1} alt="" />
                <div className="bg_black"></div>
                <h6> Choose Your Path</h6>
                <p>
                  Select from our extensive library of simulations and learning
                  modules tailored to your interests and objectives.
                </p>
              </div>
              <div className="How_it_works_right">
                <img src={bg_image1} alt="" />
                <div className="bg_black"></div>
                <h6> Engage and Learn</h6>
                <p>
                  Immerse yourself in dynamic scenarios, interact with virtual
                  environments, and learn through hands-on experience.
                </p>
              </div>
              <div className="How_it_works_right">
                <img src={bg_image1} alt="" />
                <div className="bg_black"></div>
                <h6> Track Your Progress</h6>
                <p>
                  Monitor your progress, assess your performance, and adapt your
                  learning journey based on actionable insights and analytics.
                </p>
              </div>
              <div className="How_it_works_right">
                <img src={bg_image1} alt="" />
                <div className="bg_black"></div>
                <h6> Receive Personalized Guidance</h6>
                <p>
                  Benefit from personalized feedback and support from our team
                  of experts and AI-driven algorithms, ensuring optimal learning
                  outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="faq-section three" style={{ background: "#00151E" }}>
        <div className="auto-container">
          <div className="row">
            <h2 style={{ textAlign: "center", color: "white" }}>
              <span className="theme-color"> Industry Verticals</span>
            </h2>
            <div className="feature_div">
              <div className="feature_card idustry" style={{ width: "186px" }}>
                <img src="/assets/img/nftindustries/art.svg" />
                <div>Healthcare</div>
              </div>
              <div className="feature_card idustry" style={{ width: "186px" }}>
                <img src="/assets/img/nftindustries/music.svg" />
                <div>Education</div>
              </div>
              <div className="feature_card idustry" style={{ width: "186px" }}>
                <img src="/assets/img/nftindustries/DIGITAL.SVG" />
                <div>Manufacturing</div>
              </div>
              <div className="feature_card idustry" style={{ width: "186px" }}>
                <img src="/assets/img/nftindustries/fashion.svg" />
                <div>Information Technology</div>
              </div>
              <div className="feature_card idustry" style={{ width: "186px" }}>
                <img src="/assets/img/nftindustries/metaverse.svg" />
                <div>Finance</div>
              </div>
              <div className="feature_card idustry" style={{ width: "186px" }}>
                <img src="/assets/img/nftindustries/automotive.svg" />
                <div>Retail</div>
              </div>
              <div className="feature_card idustry" style={{ width: "186px" }}>
                <img src="/assets/img/nftindustries/oilandgas.svg" />
                <div>Hospitality</div>
              </div>
              <div className="feature_card idustry" style={{ width: "186px" }}>
                <img src="/assets/img/nftindustries/manufacturing.svg" />
                <div>Energy and Utilities</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          className="container-fulid RaidensimX_benefit"
          style={{ backgroundColor: "white" }}
        >
          <h2 className="auto-container">Who Can Benefit</h2>
          <div className="auto-container row RaidensimX_benefit_container ">
            <div className="RaidensimX_benefit_card">
              <img src={bg_image1} alt="" />
              <h6>Students</h6>
              <p>
                Enhance your education with practical, real-world experiences
                that supplement classroom learning.
              </p>
            </div>
            <div className="RaidensimX_benefit_card">
              <img src={bg_image1} alt="" />
              <h6>Professionals</h6>
              <p>
                Stay ahead of the curve and develop new skills in a dynamic and
                evolving work environment.
              </p>
            </div>
            <div className="RaidensimX_benefit_card">
              <img src={bg_image1} alt="" />
              <h6>Educators</h6>
              <p>
                Enrich your teaching methods with immersive, experiential
                learning opportunities for your students.{" "}
              </p>
            </div>
            <div className="RaidensimX_benefit_card">
              <img src={bg_image1} alt="" />
              <h6>Organizations</h6>
              <p>
                Empower your workforce with immersive training solutions that
                drive performance and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          className="container-fulid RaidensimX_commitment"
          style={{ backgroundColor: "#f8f9fa" }}
        >
          <h2 className="auto-container">Our Commitment</h2>
          <div className="auto-container row RaidensimX_commitment_container ">
            <h5>
              At Raiden we are <span>committed to</span>
            </h5>
            <div className="RaidensimX_commitment_boxs">
              <div className="RaidensimX_commitment_box">
                <img src={ico2} alt="" />
                <p>
                  Continuously innovating to deliver cutting-edge learning
                  solutions.
                </p>
              </div>
              <div className="RaidensimX_commitment_box">
                <img src={ico2} alt="" />
                <p>Providing exceptional customer support and service.</p>
              </div>

              <div className="RaidensimX_commitment_box">
                <img src={ico2} alt="" />
                <p>
                  Fostering a culture of inclusion, diversity, and
                  collaboration.
                </p>
              </div>
              <div className="RaidensimX_commitment_box">
                <img src={ico2} alt="" />
                <p>
                  Upholding the highest standards of integrity, ethics, and
                  professionalism.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="faq-section one">
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
                  Explore commonly asked questions about RaidensimX's immersive
                  Training solutions. Get quick answers to your queries and
                  learn more about how our technology is revolutionizing
                  education.
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
                          What technology powers RaidensimX?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          RaidensimX utilizes a blend of advanced simulation
                          technology and human-guided artificial intelligence to
                          create immersive learning experiences.
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
                          Can RaidensimX be customized for specific industry
                          needs?
                          {"}"}
                        </button>
                      </h2>
                      <div
                        id="flush-collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Yes, RaidensimX can be tailored to address the unique
                          challenges and requirements of various industries
                          through customizable simulations and learning modules.
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
                          Is training provided for users new to RaidensimX?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Yes, we offer comprehensive training and support for
                          users to maximize their experience with RaidensimX.
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
                          How can I request a demo or learn more about
                          RaidensimX?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseFour"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          You can request a demo or contact our team through our
                          wb ebsite to learn more about RaidensimX and its
                          capabilities.
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
    </>
  );
};

export default RaidenSimXContent;
