import React, { useRef, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Slider from "react-slick";


const MetaverseRoyalContent = () => {
  const [advanced, setAdvanced] = useState(true);
  const [enhancements, setEnhancements] = useState(false);
  const [measures, setMeasures] = useState(false);
  const [business, setBusiness] = useState(false);
  const [multiplayer, setMultiplayer] = useState(true);
  const [streaming, setStreaming] = useState(false);
  const [game, setGame] = useState(false);

  const sliderRef = useRef();


  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1050, // Screen width up to 600px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 850, // Screen width up to 480px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 550, // Screen width up to 480px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can add more breakpoints here
    ],
  };



  const handleAdvanced = () => {
    setAdvanced(true);
    setEnhancements(false);
    setMeasures(false);
    setBusiness(false);
  };

  const handleEnhancements = () => {
    setAdvanced(false);
    setEnhancements(true);
    setMeasures(false);
    setBusiness(false);
  };

  const handleMeasures = () => {
    setAdvanced(false);
    setEnhancements(false);
    setMeasures(true);
    setBusiness(false);
  };
  const handleBusiness = () => {
    setAdvanced(false);
    setEnhancements(false);
    setMeasures(false);
    setBusiness(true);
  };

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
        <div className="container-fluid metaverseroyal_hero" >
          <div className="auto-container metaverseroyal_hero_container">
            <div className="left" data-aos="fade-right" data-aos-delay="300">
              <h2>
                MetaVerse <span style={{ color: "#2BFEF8" }}>Royale</span>
              </h2>
              <p className="Hero_sub_heading">
                Revolutionizes gaming with a customizable,<br />
                immersive Battle Royale experience in the Metaverse.
              </p>
            </div>
            {/* <div className="right" data-aos="fade-left" data-aos-delay="300">
              <img src="\assets\img\metaverse-royale\dl.beatsnoop.jpg" alt="" />
            </div> */}
          </div>
        </div>
      </section>
      <section
        className="service-details-section"
        style={{ backgroundColor: "white" }}
      >
        <h2>
          Advanced Cutting Edge <br />{" "}
          <span style={{ color: "#00ECE5" }}>Technology</span>,
          <span style={{ color: "#00ECE5" }}> Streaming</span>, and <br />
          <span style={{ color: "#00ECE5" }}>
            {" "}
            Game Engine Expertise Tailored
          </span>{" "}
          for You
        </h2>

        <div className="auto-container">
          <div className="row game_engine_expertise ">
            <div className="game_engine_expertise_heading">
              <p
                onClick={handleMultiplayer}
                className="title"
                style={{
                  color: multiplayer ? "#00ECE5" : "",
                  borderBottom: multiplayer ? "3px solid #00ECE5" : "",
                }}
              >
                Technical Specifications
              </p>
              <p
                className="title"
                style={{
                  color: streaming ? "#00ECE5" : "",
                  borderBottom: streaming ? "3px solid #00ECE5" : "",
                }}
                onClick={handeStream}
              >
                Game Engine Mastery
              </p>

              <p
                className="title"
                style={{
                  color: game ? "#00ECE5" : "",
                  borderBottom: game ? "3px solid #00ECE5" : "",
                }}
                onClick={handleGame}
              >
                Community Streamlin <br />
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
                      <img
                        src="/assets/img/royale-technical/cross.svg"
                        alt=""
                      />
                    </div>
                    <div className="right">
                      <h6>Cross-Platform Compatibility</h6>
                      <p>
                        Seamlessly play across PC, console, and mobile devices
                        for a truly universal gaming experience. Enjoy
                        consistent performance and gameplay mechanics regardless
                        of your preferred platform.
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
                      <img src="/assets/img/royale-technical/high.svg" alt="" />
                    </div>
                    <div className="right">
                      <h6> High-Definition Graphics</h6>
                      <p>
                        Immerse yourself in stunning visuals powered by advanced
                        rendering techniques and high-resolution textures.
                        Experience lifelike environments and character models
                        with realistic lighting and dynamic effects.
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
                      <img
                        src="/assets/img/royale-technical/multi.svg"
                        alt=""
                      />
                    </div>
                    <div className="right">
                      <h6> Seamless Multiplayer Integration</h6>
                      <p>
                        Engage in fast-paced multiplayer action with low-latency
                        networking and reliable server infrastructure.
                        Experience smooth matchmaking and join matches with
                        friends or random players effortlessly.
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
                      <img
                        src="/assets/img/royale-technical/customi.svg"
                        alt=""
                      />
                    </div>
                    <div className="right">
                      <h6> Customizable Gameplay Mechanics</h6>
                      <p>
                        Tailor your gameplay experience with customizable
                        controls, keybindings, and interface settings. Adjust
                        gameplay mechanics such as weapon balance, movement
                        speed, and player health to suit your playstyle.
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
                      <img
                        src="/assets/img/royalegame-engine/unity.svg"
                        alt=""
                      />
                    </div>
                    <div className="right">
                      <h6> Unity Engine Optimization</h6>
                      <p>
                        Optimize performance and efficiency with Unity Engine's
                        versatile development tools and optimization
                        techniques.Leverage Unity's multiplatform support to
                        reach a broad audience across PC, console, and mobile
                        platforms.
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
                      <img
                        src="/assets/img/royalegame-engine/unreal.svg"
                        alt=""
                      />
                    </div>
                    <div className="right">
                      <h6>Unreal Engine 5 Integration</h6>
                      <p>
                        Harness the power of Unreal Engine 5's cutting-edge
                        technology for unparalleled graphical fidelity and
                        performance.Take advantage of advanced rendering
                        features such as Nanite and Lumen to create highly
                        detailed environments and dynamic lighting effects.
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
                      <img
                        src="/assets/img/royalegame-engine/streaming.svg"
                        alt=""
                      />
                    </div>
                    <div className="right">
                      <h6> Streaming Integration</h6>
                      <p>
                        Seamlessly integrate streaming capabilities into
                        MetaVerse Royale, allowing players to broadcast their
                        gameplay sessions to audiences worldwide. Utilize
                        popular streaming platforms such as Twitch, YouTube, and
                        Mixer to reach a diverse audience and build a community
                        around your game.
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
                      <img
                        src="/assets/img/royalegame-engine/gameengine.svg"
                        alt=""
                      />
                    </div>
                    <div className="right">
                      <h6> Game Engine Mastery</h6>
                      <p>
                        Master the intricacies of game engine development with
                        comprehensive documentation, tutorials, and support
                        resources.Access dedicated developer forums and
                        communities to collaborate with fellow developers, share
                        knowledge, and troubleshoot issues.
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
                      <img src="/assets/img/community/interactive.svg" alt="" />
                    </div>
                    <div className="right">
                      <h6> Interactive Streaming Events</h6>
                      <p>
                        Host interactive streaming events within MetaVerse
                        Royale where players can participate in live broadcasts,
                        interact with streamers, and engage in community
                        challenges and activities in real-time.
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
                      <img src="/assets/img/community/playerrun.svg" alt="" />
                    </div>
                    <div className="right">
                      <h6> Player-Run Community Channels</h6>
                      <p>
                        Empower players to create and manage their own community
                        channels within MetaVerse Royale, where they can stream
                        gameplay, host events, and foster collaboration among
                        like-minded players.
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
                      <img src="/assets/img/community/community.svg" alt="" />
                    </div>
                    <div className="right">
                      <h6>Community-Driven Content Creation</h6>
                      <p>
                        Encourage community-driven content creation by providing
                        tools and resources for players to share custom maps,
                        mods, artwork, and other user-generated content,
                        fostering creativity and collaboration within the player
                        community.
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
                      <img src="/assets/img/community/rewarding.svg" alt="" />
                    </div>
                    <div className="right">
                      <h6> Rewarding Community Engagement</h6>
                      <p>
                        Reward active community members and content creators
                        with special perks, recognition, and in-game rewards
                        based on their contributions, participation, and
                        engagement, incentivizing positive interactions and
                        community growth.
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
      <section>
        <div className="container-fluid Royal_section4" style={{ background: "#f8f9fa" }}>
          <h2>
            Game <span style={{ color: "#00ECE5" }}>Themes & Environments</span>
          </h2>
          <p>
            Explore immersive worlds ranging from futuristic cityscapes to
            ancient ruins, offering diverse and captivating environments.
          </p>
          <div
            className="auto-container section4_container"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <div className="card_section1">
              <div className="royal_cards">
                <div className="royal_cards_side_img">
                  <img
                    src="\assets\img\MeatverseRoyal\game theme and envire\futuristic.svg"
                    alt=""
                  />
                </div>
                <img src="\assets\img\metaverse-royale\Frame 49.jpg" alt="" />
                <div>
                  <h6>Futuristic Cityscape</h6>
                  <p>
                    Battle amidst towering skyscrapers, neon-lit streets, and
                    sprawling megacorporations in a cyberpunk-inspired
                    metropolis.
                  </p>
                </div>
              </div>
              <div className="royal_cards">
                <div className="royal_cards_side_img">
                  <img
                    src="\assets\img\MeatverseRoyal\game theme and envire\ancient.svg"
                    alt=""
                  />
                </div>
                <img src="\assets\img\metaverse-royale\Frame 50.jpg" alt="" />
                <div>
                  <h6> Ancient Ruins</h6>
                  <p>
                    Explore mystical ruins, hidden temples, and ancient
                    civilizations while evading enemies and uncovering ancient
                    artifacts.
                  </p>
                </div>
              </div>
            </div>
            <div className="card_section2">
              <div className="royal_cards">
                <div className="royal_cards_side_img">
                  <img
                    src="\assets\img\MeatverseRoyal\game theme and envire\post.svg"
                    alt=""
                  />
                </div>
                <img src="\assets\img\metaverse-royale\Frame 51.jpg" alt="" />
                <div>
                  <h6> Post-Apocalyptic Wasteland</h6>
                  <p>
                    Survive in a desolate wasteland ravaged by environmental
                    disasters and mutated creatures, scavenging for resources in
                    a fight for survival.
                  </p>
                </div>
              </div>
              <div className="royal_cards">
                <div className="royal_cards_side_img">
                  <img
                    src="\assets\img\MeatverseRoyal\game theme and envire\vr.svg"
                    alt=""
                  />
                </div>
                <img src="\assets\img\metaverse-royale\Frame 52.jpg" alt="" />
                <div>
                  <h6> Virtual Reality Arena</h6>
                  <p>
                    Enter a digital realm where the laws of physics are bent,
                    and reality is only limited by imagination, offering endless
                    possibilities for creative gameplay mechanics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section style={{background:"white"}}>
        <div className="container-fluid Royal_section5" style={{background:"white"}}>
          <h2 className="auto-container">
            Choices of <span>Games</span>
          </h2>
          <p className="auto-container">
            Diverse game selection awaits, catering to every gaming preference
            and offering endless adventures in the Metaverse
          </p>
          <div
            className="auto-container section5_container"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="card1">
              <div className="section5_card">
                <div
                  className="div_img"
                  style={{
                    background:
                      "linear-gradient(136.76deg, #E2B0FF 0%, #9F44D3 100%)",
                  }}
                >
                  <img
                    src="\assets\img\MeatverseRoyal\choice of\warfare.svg"
                    alt="Specifications"
                  />
                </div>
                <div className="section5_card_content">
                  <h6 style={{color:"black"}}>Urban Warfare </h6>
                  <p style={{color:"black"}}>
                    Dive into intense urban combat in a futuristic cityscape
                    filled with skyscrapers and high-tech gadgets.
                  </p>
                </div>
              </div>
              <div className="section5_card">
                <div
                  className="div_img"
                  style={{
                    background:
                      "linear-gradient(136.76deg, #FEB692 0%, #EA5455 100%)",
                  }}
                >
                  <img
                    src="\assets\img\MeatverseRoyal\choice of\lost.svg"
                    alt="Specifications"
                  />
                </div>
                <div className="section5_card_content">
                  <h6 style={{color:"black"}}>Lost Kingdoms</h6>
                  <p style={{color:"black"}}>
                    Embark on an epic journey through ancient ruins and mystical
                    lands, battling rival factions for dominance.
                  </p>
                </div>
              </div>
            </div>
            <div className="card1">
              <div className="section5_card">
                <div
                  className="div_img"
                  style={{
                    background:
                      "linear-gradient(136.76deg, #ABDCFF 0%, #0396FF 100%)",
                  }}
                >
                  <img
                    src="\assets\img\MeatverseRoyal\choice of\wastland.svg"
                    alt="Specifications"
                  />
                </div>
                <div className="section5_card_content">
                  <h6 style={{color:"black"}}>Wasteland Chronicles </h6>
                  <p style={{color:"black"}}>
                    Survive in a harsh post-apocalyptic world, where only the
                    strongest and most cunning can endure.
                  </p>
                </div>
              </div>
              <div className="section5_card">
                <div
                  className="div_img "
                  style={{
                    background:
                      "linear-gradient(136.76deg, #FF9897 0%, #F650A0 100%)",
                  }}
                >
                  <img
                    src="\assets\img\MeatverseRoyal\choice of\virtual.svg"
                    alt="Specifications"
                  />
                </div>
                <div className="section5_card_content">
                  <h6 style={{color:"black"}}>Virtual Conquest</h6>
                  <p style={{color:"black"}}>
                    Explore a virtual reality playground where anything is
                    possible, from gravity-defying battles to mind-bending
                    puzzles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="project-section three Raidenarcviz_card_main_div" style={{ padding: "100px 0", background: "white" }}>
        <div className="auto-container">
          <div className="row Raidenarcviz_card">

            <h2 className="raidenarcviz_card_h2">Choice of <span style={{ color: "#00ECE5" }}> Games</span></h2>

            <p className='raidenarcviz_card_p' style={{ color: "black", marginBottom: "0" }}>Diverse game selection awaits, catering to every gaming preference and offering endless adventures in the Metaverse.</p>
            <div className="choice_slider_arrow">
              <i

                class="fa-regular fa-circle-left"
                onClick={() => sliderRef.current.slickNext()}
              ></i>
              <i
                class="fa-regular fa-circle-right"
                onClick={() => sliderRef.current.slickPrev()}
              ></i>
            </div>
            <Slider class="gradient-cards-casino-choice"
              {...settings}
              ref={sliderRef}>
              <div class="card-casino-choice">
                <div class="container-card-casino_choice bg-green-box-casino-choice">
                  <img src="\assets\img\metaverse-royale-choiceofgame\urban war.jpg" alt='' />
                  <p style={{ textAlign: "center", margin: "0", fontSize: "20px", marginTop: "10px" }} class="card-title-casino">Urban Warfare</p>
                  <p style={{ textAlign: "center", lineHeight: "25px", margin: "0" }} class="card-description-casino">Dive into intense urban combat in a futuristic cityscape filled with skyscrapers and high-tech gadgets.</p>
                </div>
              </div>
              <div class="card-casino-choice">
                <div class="container-card-casino_choice bg-white-box-casino-choice">
                  <img src="\assets\img\metaverse-royale-choiceofgame\lost.jpg" alt='' />
                  <p style={{ textAlign: "center", margin: "0", fontSize: "20px", marginTop: "10px" }} class="card-title-casino">Lost Kingdoms</p>
                  <p style={{ textAlign: "center", lineHeight: "25px", margin: "0" }} class="card-description-casino">Embark on an epic journey through ancient ruins and mystical lands, battling rival factions for dominance.</p>
                </div>
              </div>
              <div class="card-casino-choice">
                <div class="container-card-casino_choice bg-yellow-box-casino-choice">
                  <img src="\assets\img\metaverse-royale-choiceofgame\waste.jpg" alt='' />
                  <p style={{ textAlign: "center", margin: "0", fontSize: "20px", marginTop: "10px" }} class="card-title-casino">Wasteland Chronicles</p>
                  <p style={{ textAlign: "center", lineHeight: "25px", margin: "0" }} class="card-description-casino">Survive in a harsh post-apocalyptic world, where only the strongest and most cunning can endure.</p>
                </div>
              </div>
              <div class="card-casino-choice">
                <div class="container-card-casino_choice bg-blue-box-casino-choice">
                  <img src="\assets\img\metaverse-royale-choiceofgame\virtual.jpg" alt='' />
                  <p style={{ textAlign: "center", margin: "0", fontSize: "20px", marginTop: "10px" }} class="card-title-casino">Virtual Conquest</p>
                  <p style={{ textAlign: "center", lineHeight: "25px", margin: "0" }} class="card-description-casino">Explore a virtual reality playground where anything is possible, from gravity-defying battles to mind-bending puzzles.</p>
                </div>
              </div>
            </Slider>
          </div>

        </div>
      </section >
      <section className="faq-section three" style={{ background: "#24292d" }}>
        <div className="auto-container">
          <div className="row">
            <h2 style={{ textAlign: "center", color: "white" }}>
              Game<span style={{ color: "#2BFEF8" }}> features</span>
            </h2>
            <p style={{ textAlign: "center", color: "white" }}>
              Dive into gameplay rich with features, from customizable
              characters to dynamic map environments, ensuring thrilling
              experiences.
            </p>
            <div className="feature_div">
              <div
                className="feature_card section6_card "
                style={{ backgroundColor: "#000c14" }}
              >
                <img src="/assets/img/royale-game-fea/customized.svg" />
                <div style={{ color: "white" }}>Customizable Characters</div>
              </div>
              <div
                className="feature_card section6_card"
                style={{ backgroundColor: "#000c14" }}
              >
                <img src="/assets/img/royale-game-fea/dynamic.svg" />
                <div style={{ color: "white" }}>Dynamic Map Environments</div>
              </div>
              <div
                className="feature_card section6_card"
                style={{ backgroundColor: "#000c14" }}
              >
                <img src="/assets/img/royale-game-fea/gameplay.svg" />
                <div style={{ color: "white" }}>Varied Gameplay Modes</div>
              </div>
              <div
                className="feature_card section6_card"
                style={{ backgroundColor: "#000c14" }}
              >
                <img src="/assets/img/royale-game-fea/arsenal.svg" />
                <div style={{ color: "white" }}>Arsenal of Weapons </div>
              </div>
              <div
                className="feature_card section6_card"
                style={{ backgroundColor: "#000c14" }}
              >
                <img src="/assets/img/royale-game-fea/gamestra.svg" />
                <div style={{ color: "white" }}>Game strategies</div>
              </div>
              <div
                className="feature_card section6_card"
                style={{ backgroundColor: "#000c14" }}
              >
                <img src="/assets/img/royale-game-fea/progression.svg" />
                <div style={{ color: "white" }}>Progression and Rewards</div>
              </div>
              <div
                className="feature_card section6_card"
                style={{ backgroundColor: "#000c14" }}
              >
                <img src="/assets/img/royale-game-fea/spectat.svg" />
                <div style={{ color: "white" }}>
                  Spectator and Streaming Support
                </div>
              </div>
              <div
                className="feature_card section6_card"
                style={{ backgroundColor: "#000c14" }}
              >
                <img src="/assets/img/royale-game-fea/cross.svg" />
                <div style={{ color: "white" }}>
                  Cross-Platform Compatibility
                </div>
              </div>
              <div
                className="feature_card section6_card"
                style={{ backgroundColor: "#000c14" }}
              >
                <img src="/assets/img/royale-game-fea/social.svg" />
                <div style={{ color: "white" }}>
                  Social Interaction and Community Features
                </div>
              </div>
              <div
                className="feature_card section6_card"
                style={{ backgroundColor: "#000c14" }}
              >
                <img src="/assets/img/royale-game-fea/regular.svg" />
                <div style={{ color: "white" }}>
                  Regular Content Updates and Events
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="faq-section three " style={{ background: "none" }}>
        <div className="auto-container">
          <div className="row nft_whychoose_full_div">
            <div className="nft_whychoose_left_div">
              <h2 style={{ color: "black", textAlign: "center" }}>
                NFT with
                <span style={{ color: "#00ECE5" }}> MetaVerse Royale</span>
              </h2>
              <p
                style={{
                  color: "black",
                  textAlign: "center",
                  marginBottom: "80px",
                }}
              >
                Unlock the potential of blockchain integration, securing virtual
                assets and empowering players with true ownership within the
                Metaverse
              </p>
            </div>
            <div className="nft_whychoose_Right_div">
              <div
                className="nft_whychoose_Right_box"
                style={{ backgroundColor: "white" }}
              >
                <div
                  style={{
                    background:
                      "linear-gradient(136.76deg, #F40076 0%, #DF98FA 100%)",
                  }}
                  className="nft_img_round"
                >
                  <img
                    className="nft_whychoose_img"
                    src="/assets/img/royale-nft-meta/virtual.svg"
                  />
                </div>
                <div className="nft_whychoose_name section7_card">
                  Unique Virtual Assets
                </div>
              </div>
              <div
                className="nft_whychoose_Right_box"
                style={{ backgroundColor: "white" }}
              >
                <div
                  style={{
                    background:
                      "linear-gradient(136.76deg, #DF98FA 0%, #9055FF 100%)",
                  }}
                  className="nft_img_round"
                >
                  <img
                    className="nft_whychoose_img"
                    src="/assets/img/royale-nft-meta/playowned.svg"
                  />
                </div>
                <div className="nft_whychoose_name section7_card">
                  Player-Owned Land and Properties
                </div>
              </div>
              <div
                className="nft_whychoose_Right_box"
                style={{ backgroundColor: "white" }}
              >
                <div
                  style={{
                    background:
                      "linear-gradient(136.76deg, #FCCF31 0%, #F55555 100%)",
                  }}
                  className="nft_img_round"
                >
                  <img
                    className="nft_whychoose_img"
                    src="/assets/img/royale-nft-meta/limited.svg"
                  />
                </div>
                <div className="nft_whychoose_name section7_card">
                  Limited Edition Collectibles
                </div>
              </div>
              <div
                className="nft_whychoose_Right_box"
                style={{ backgroundColor: "white" }}
              >
                <div
                  style={{
                    background:
                      "linear-gradient(136.76deg, #ABDCFF 0%, #0396FF 100%)",
                  }}
                  className="nft_img_round"
                >
                  <img
                    className="nft_whychoose_img"
                    src="/assets/img/royale-nft-meta/generatedcontent.svg"
                  />
                </div>
                <div className="nft_whychoose_name section7_card">
                  Player-Generated Content Ownership
                </div>
              </div>
              <div
                className="nft_whychoose_Right_box"
                style={{ backgroundColor: "white" }}
              >
                <div
                  style={{
                    background:
                      "linear-gradient(136.76deg, #90F7EC 0%, #32CCBC 100%)",
                  }}
                  className="nft_img_round"
                >
                  <img
                    className="nft_whychoose_img"
                    src="/assets/img/royale-nft-meta/interop.svg"
                  />
                </div>
                <div className="nft_whychoose_name section7_card">
                  {" "}
                  Cross-Game Interoperability
                </div>
              </div>
              <div
                className="nft_whychoose_Right_box"
                style={{ backgroundColor: "white" }}
              >
                <div
                  style={{
                    background:
                      "linear-gradient(136.76deg, #F889D5 0%, #5650DE 100%)",
                  }}
                  className="nft_img_round"
                >
                  <img
                    className="nft_whychoose_img"
                    src="/assets/img/royale-nft-meta/prevenance.svg"
                  />
                </div>
                <div className="nft_whychoose_name section7_card">
                  Provenance and Authenticity Verification
                </div>
              </div>
              <div
                className="nft_whychoose_Right_box"
                style={{ backgroundColor: "white" }}
              >
                <div
                  style={{
                    background:
                      "linear-gradient(136.76deg, #FF9897 0%, #F650A0 100%)",
                  }}
                  className="nft_img_round"
                >
                  <img
                    className="nft_whychoose_img"
                    src="/assets/img/royale-nft-meta/communit.svg"
                  />
                </div>
                <div className="nft_whychoose_name section7_card">
                  Community-driven Governance and Decentralization
                </div>
              </div>
              <div
                className="nft_whychoose_Right_box"
                style={{ backgroundColor: "white" }}
              >
                <div
                  style={{
                    background:
                      "linear-gradient(136.76deg, #FFCDA5 0%, #EE4D5F 100%)",
                  }}
                  className="nft_img_round"
                >
                  <img
                    className="nft_whychoose_img"
                    src="/assets/img/royale-nft-meta/ingame.svg"
                  />
                </div>
                <div className="nft_whychoose_name section7_card">
                  In-Game Economies and Monetization
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-image">
          <div className="shape-img-2 poa">
            <img src="/assets/img/shape/01_shape.svg" alt="" />
          </div>
          <div className="shape-img-5 poa">
            <img src="/assets/img/icon/26_icon.png" alt="" />
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid Royal_section8" style={{ background: "white" }}>
          <h2 style={{ color: "black", marginBottom: "10px" }} className="auto-container">
            Why <span style={{ color: "#00ECE5" }} >us</span>
          </h2>
          <p style={{ color: "black" }} className="auto-container">
            Celebrate Your Journey with Us: Discover Why MetaVerse Royale is
            Your Ultimate Destination for Unforgettable Gaming Experiences!
          </p>
          <div className="auto-container section8_container">
            <div
              className="section8_left"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <p style={{ color: advanced ? "white" : "black" }}
                className={advanced ? "section8_card_border" : ""}
                onClick={handleAdvanced}
              >
                Game Engine Expertise
              </p>
              <p style={{ color: enhancements ? "white" : "black" }}
                className={enhancements ? "section8_card_border" : ""}
                onClick={handleEnhancements}
              >
                UI & UX
              </p>
              <p style={{ color: measures ? "white" : "black" }}
                className={measures ? "section8_card_border" : ""}
                onClick={handleMeasures}
              >
                Monetization
              </p>
              <p style={{ color: business ? "white" : "black" }}
                className={business ? "section8_card_border" : ""}
                onClick={handleBusiness}
              >
                supports
              </p>
            </div>
            {advanced ? (
              <div
                className="section8_card_container1"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div className="card8" >
                  <div className="bg">
                    <img
                      src="\assets\img\why-us-metaverse-royale\optimizedperfor.svg"
                      alt=""
                    />
                  </div>
                  <p>Optimized Performance</p>
                </div>
                <div className="card8">
                  <div className="bg">
                    <img src="\assets\img\why-us-metaverse-royale\crossplatform.svg" alt="" />
                  </div>
                  <p> Cross-Platform Compatibility</p>
                </div>
                <div className="card8">
                  <div className="bg">
                    <img
                      src="\assets\img\why-us-metaverse-royale\dynamicenvire.svg"
                      alt=""
                    />
                  </div>
                  <p> Dynamic Environments</p>
                </div>
                <div className="card8">
                  <div className="bg">
                    <img
                      src="\assets\img\why-us-metaverse-royale\futureproof.svg"
                      alt=""
                    />
                  </div>
                  <p> Future-Proof Technology</p>
                </div>
              </div>
            ) : enhancements ? (
              <div
                className="section8_card_container1"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div className="card8">
                  <div className="bg">
                    <img src="\assets\img\why-us-metaverse-royale\inituiative.svg" alt="" />
                  </div>
                  <p> Intuitive Design</p>
                </div>
                <div className="card8">
                  <div className="bg">
                    <img src="\assets\img\why-us-metaverse-royale\immersive.svg" alt="" />
                  </div>
                  <p>Immersive Experience</p>
                </div>
                <div className="card8">
                  <div className="bg">
                    <img
                      src="\assets\img\why-us-metaverse-royale\custmizable.svg"
                      alt=""
                    />
                  </div>
                  <p> Customizable Interfaces</p>
                </div>
                <div className="card8">
                  <div className="bg">
                    <img
                      src="\assets\img\why-us-metaverse-royale\accessibility.svg"
                      alt=""
                    />
                  </div>
                  <p>Accessibility Features</p>
                </div>
              </div>
            ) : measures ? (
              <div
                className="section8_card_container1"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div className="card8">
                  <div className="bg">
                    <img
                      src="\assets\img\why-us-metaverse-royale\flexible.svg"
                      alt=""
                    />
                  </div>
                  <p>Flexible Revenue Models</p>
                </div>
                <div className="card8">
                  <div className="bg">
                    <img
                      src="\assets\img\why-us-metaverse-royale\optimizedperfor.svg"
                      alt=""
                    />
                  </div>
                  <p> Revenue Optimization Tools</p>
                </div>
                <div className="card8">
                  <div className="bg">
                    <img
                      src="\assets\img\why-us-metaverse-royale\blockchain.svg"
                      alt=""
                    />
                  </div>
                  <p>Blockchain-Based Economies</p>
                </div>
                <div className="card8">
                  <div className="bg">
                    <img
                      src="\assets\img\why-us-metaverse-royale\communi.svg"
                      alt=""
                    />
                  </div>
                  <p>Community Engagement</p>
                </div>
              </div>
            ) : business ? (
              <div
                className="section8_card_container1"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div className="card8">
                  <div className="bg">
                    <img
                      src="\assets\img\why-us-metaverse-royale\customozat.svg"
                      alt=""
                    />
                  </div>
                  <p>Customizable Gameplay Mechanics</p>
                </div>
                <div className="card8">
                  <div className="bg">
                    <img
                      src="\assets\img\why-us-metaverse-royale\personalizedconten.svg"
                      alt=""
                    />
                  </div>
                  <p> Personalized Content Creation</p>
                </div>
                <div className="card8">
                  <div className="bg">
                    <img
                      src="\assets\img\why-us-metaverse-royale\collabra.svg"
                      alt=""
                    />
                  </div>
                  <p> Community Collaboration</p>
                </div>
                <div className="card8">
                  <div className="bg">
                    <img
                      src="\assets\img\why-us-metaverse-royale\custumer24-7.svg"
                      alt=""
                    />
                  </div>
                  <p> 24/7 supports</p>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="auto-container section8_responsive">
            <p className="heading">Advanced Immersion</p>
            <div className="section8_card_container1">
              <div className="card8">
                <div className="bg">
                  <img src="/assets/img/whychooseusnft/client.svg" alt="" />
                </div>
                <p> High-Performance Game Engine Optimization</p>
              </div>
              <div className="card8">
                <div className="bg">
                  <img src="/assets/img/whychooseusnft/client.svg" alt="" />
                </div>
                <p> Realistic Physics and Environmental Effects</p>
              </div>
              <div className="card8">
                <div className="bg">
                  <img src="/assets/img/whychooseusnft/client.svg" alt="" />
                </div>
                <p> Scalable Backend Infrastructure</p>
              </div>
            </div>
            <p className="heading">UI & UX Enhancements</p>
            <div className="section8_card_container1">
              <div className="card8">
                <div className="bg">
                  <img src="/assets/img/whychooseusnft/client.svg" alt="" />
                </div>
                <p> Intuitive User Interface Design</p>
              </div>
              <div className="card8">
                <div className="bg">
                  <img src="/assets/img/whychooseusnft/client.svg" alt="" />
                </div>
                <p> Personalized Player Experiences</p>
              </div>
              <div className="card8">
                <div className="bg">
                  <img src="/assets/img/whychooseusnft/client.svg" alt="" />
                </div>
                <p> Immersive User Experience</p>
              </div>
            </div>
            <p className="heading">Security Measures</p>
            <div className="section8_card_container1">
              <div className="card8">
                <div className="bg">
                  <img src="/assets/img/whychooseusnft/client.svg" alt="" />
                </div>
                <p> Blockchain-Powered Asset Security</p>
              </div>
              <div className="card8">
                <div className="bg">
                  <img src="/assets/img/whychooseusnft/client.svg" alt="" />
                </div>
                <p> End-to-End Encryption</p>
              </div>
              <div className="card8">
                <div className="bg">
                  <img src="/assets/img/whychooseusnft/client.svg" alt="" />
                </div>
                <p> Multi-Factor Authentication (MFA)</p>
              </div>
            </div>
            <p className="heading">Business Aspects</p>
            <div className="section8_card_container1">
              <div className="card8">
                <div className="bg">
                  <img src="/assets/img/whychooseusnft/client.svg" alt="" />
                </div>
                <p> Monetization Strategies</p>
              </div>
              <div className="card8">
                <div className="bg">
                  <img src="/assets/img/whychooseusnft/client.svg" alt="" />
                </div>
                <p> Licensing and White Label Solutions</p>
              </div>
              <div className="card8">
                <div className="bg">
                  <img src="/assets/img/whychooseusnft/client.svg" alt="" />
                </div>
                <p> Data Analytics and Insights</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="faq-section one"
        style={{ backgroundColor: "#24292d" }}
      >
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="section-title-shape-one left "
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <h3>FAQ</h3>
                <h2>Answers At <span style={{ color: "#00ECE5" }}>A Glance</span></h2>
                <p style={{ marginBottom: "20px" }}>
                  Find quick solutions and insights to common queries and concerns about our casino with our comprehensive FAQ section.
                </p>
              </div>
              <div
                className="img-file "
                data-aos="fade-right"
                data-aos-delay="500"
              >
                <img
                  className="img-fluid"
                  src="/assets/img/metaverse-royale/_740a4e96-eff5-4b8a-ba80-572c07f79145 1.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6" style={{ marginTop: "147px" }}>
              <div
                className="faq-inner "
                data-aos="fade-left"
                data-aos-delay="300"
                style={{ marginTop: "15px" }}
              >
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
                          className="accordion-button faq_clash_of_empire"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="false"
                          aria-controls="flush-collapseOne"
                        >
                          What is MetaVerse Royale?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          MetaVerse Royale is a cutting-edge white label
                          solution for immersive Battle Royale experiences set
                          in the Metaverse. It offers a platform for game
                          developers to create customizable multiplayer games
                          with advanced features and dynamic environments.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed faq_clash_of_empire"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseTwo"
                          aria-expanded="false"
                          aria-controls="flush-collapseTwo"
                        >
                          What platforms is MetaVerse Royale available on?
                          {"}"}
                        </button>
                      </h2>
                      <div
                        id="flush-collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          MetaVerse Royale is compatible with PC, web, and
                          mobile devices, providing cross-platform support for
                          seamless multiplayer experiences.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed faq_clash_of_empire"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseThree"
                          aria-expanded="false"
                          aria-controls="flush-collapseThree"
                        >
                          Can I customize my gameplay experience in MetaVerse
                          Royale?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Yes, MetaVerse Royale offers extensive customization
                          options, including character creation, weapon
                          loadouts, and gameplay modes, allowing players to
                          tailor their experience to their preferences.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed faq_clash_of_empire"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseFour"
                          aria-expanded="false"
                          aria-controls="flush-collapseFour"
                        >
                          Are there different themes and environments available
                          in MetaVerse Royale?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseFour"
                        className="accordion-collapse collapse "
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Yes, MetaVerse Royale offers diverse themes and
                          environments, including futuristic cityscapes, ancient
                          ruins, post-apocalyptic wastelands, and virtual
                          reality arenas, each with its own unique challenges
                          and gameplay dynamics.
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
          <div className="shape-img-5 poa">
            <img src="/assets/img/icon/26_icon.png" alt="" />
          </div>
          <div className="shape-img-8 poa">
            <img src="/assets/img/icon/71_icon.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default MetaverseRoyalContent;
