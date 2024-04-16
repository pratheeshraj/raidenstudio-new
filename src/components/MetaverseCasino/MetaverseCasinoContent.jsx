import React, { useRef, useState } from 'react'
import "./MetaverseCasino.css"
import ScrollAnimation from 'react-animate-on-scroll';
import section4 from "../../images/gameproduct-detailimg/section4.png";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import img from "../../images/2150926863.jpg"
import multiPlayer_icon1 from "../../images/raidenverse/multiplayer_integ/cross platform.svg";
import multiPlayer_icon2 from "../../images/raidenverse/multiplayer_integ/custom netcode.svg";
import multiPlayer_icon3 from "../../images/raidenverse/multiplayer_integ/network optimization.svg";
import multiPlayer_icon4 from "../../images/raidenverse/multiplayer_integ/unreal and unity.svg";
import streaming_icon1 from "../../images/raidenverse/streaming/content protection.svg";
import streaming_icon2 from "../../images/raidenverse/streaming/intractive streaming.svg";
import streaming_icon3 from "../../images/raidenverse/streaming/performance optimization.svg";
import streaming_icon4 from "../../images/raidenverse/streaming/video streaming.svg";
import gameengine_icon1 from "../../images/raidenverse/game_engine/cross platform.svg";
import gameengine_icon2 from "../../images/raidenverse/game_engine/interactive.svg";
import gameengine_icon3 from "../../images/raidenverse/game_engine/unity.svg";
import gameengine_icon4 from "../../images/raidenverse/game_engine/unreal.svg";
import ChoiceOfGames from './ChoiceOfGames';

function MetaverseCasinoContent() {

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

    const sliderRef = useRef();


    var settings = {
        dots: true,
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


    return (
        <>
            {/* {casino - key features} */}
            <section className="project-section three Raidenarcviz_card_main_div" style={{ padding: "100px 0", background: "black" }}>
                <div className="auto-container">
                    <div className="row Raidenarcviz_card">
                        <h2 className="raidenarcviz_card_h2"><span className="theme-color">Key Features</span></h2>
                        <p className='raidenarcviz_card_p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eveniet maiores ipsa, error totam non rerum, placeat fugit repellendus vitae optio sit? Ducimus, optio! Iste ipsum aliquid molestiae vitae nemo.</p>
                        <div class="gradient-cards-casino">
                            <div class="card-casino">
                                <div class="container-card-casino bg-green-box-casino">
                                    <p class="card-title-casino">	Customizable Branding</p>
                                    <p class="card-description-casino">Tailor the VirtualVegas platform to reflect your brand identity with ease. From logo placement to color schemes, our white label solution allows you to create a unique and immersive casino experience for your players.</p>
                                </div>
                            </div>

                            <div class="card-casino">
                                <div class="container-card-casino bg-white-box-casino">
                                    <p class="card-title-casino">	Advanced Multiplayer Networking</p>
                                    <p class="card-description-casino">Challenge friends or compete against players from around the world in real-time, thanks to our advanced multiplayer networking capabilities. Experience the thrill of social interaction and competitive gaming like never before.</p>
                                </div>
                            </div>

                            <div class="card-casino">
                                <div class="container-card-casino bg-yellow-box-casino">
                                    <p class="card-title-casino">	Seamless Integration</p>
                                    <p class="card-description-casino">Integrate VirtualVegas seamlessly into your existing website or mobile app with our user-friendly API. Our platform is designed to work seamlessly across all devices and operating systems, ensuring a smooth and enjoyable gaming experience for your players.</p>
                                </div>
                            </div>

                            <div class="card-casino">
                                <div class="container-card-casino bg-blue-box-casino">
                                    <p class="card-title-casino">	Advanced Security Features</p>
                                    <p class="card-description-casino">Rest easy knowing that your players' data and transactions are protected by the latest in encryption technology. VirtualVegas prioritizes security and transparency, so you can focus on providing the best possible gaming experience for your customers.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <ChoiceOfGames />
            <section
                className="service-details-section"
            >
                <h2>
                    Engineered for the Metaverse <br /> <span>Technical Innovations</span>,
                    <span> Multiplayer Networking</span>, and <br />
                    AI Integration
                </h2>

                <div className="auto-container">
                    <div className="row game_engine_expertise ">
                        <div className="game_engine_expertise_heading">
                            <p
                                onClick={handleMultiplayer}
                                className="title"
                                style={{
                                    color: multiplayer ? "#50c4a1" : "",
                                    borderBottom: multiplayer ? "3px solid #50c4a1" : "",
                                }}
                            >
                                Technical Innovations
                            </p>
                            <p
                                className="title"
                                style={{
                                    color: streaming ? "#50c4a1" : "",
                                    borderBottom: streaming ? "3px solid #50c4a1" : "",
                                }}
                                onClick={handeStream}
                            >
                                Multiplayer Networking
                            </p>
                            <p
                                className="title"
                                style={{
                                    color: game ? "#50c4a1" : "",
                                    borderBottom: game ? "3px solid #50c4a1" : "",
                                }}
                                onClick={handleGame}
                            >
                                AI Integration <br />
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
                                            <img src="/assets/img/technical/blockchain.svg" alt="" />
                                        </div>
                                        <div className="right">
                                            <h6 >Blockchain Integration</h6>
                                            <p>
                                                Utilizes blockchain technology for secure and transparent transactions.
                                                Enables provably fair gaming and transparent record-keeping.
                                                Enhances trust and reliability for players and operators alike.

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
                                            <img src="/assets/img/technical/live.svg" alt="" />
                                        </div>
                                        <div className="right">
                                            <h6 >Live Dealer Casino Technology</h6>
                                            <p>
                                                Integrates live dealer casino technology to offer immersive and interactive gaming experiences.
                                                Streams live video feeds of real dealers hosting games such as blackjack, roulette, and baccarat.

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
                                            <img src="/assets/img/technical/ar.svg" alt="" />
                                        </div>
                                        <div className="right">
                                            <h6 >	Augmented Reality (AR) Integration</h6>
                                            <p>
                                                Offers immersive AR experiences for enhanced gameplay.
                                                Blends virtual casino elements seamlessly with the real-world environment.
                                                Allows players to interact with virtual objects overlaid on their physical surroundings.

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
                                            <img src="/assets/img/technical/voice.svg" alt="" />
                                        </div>
                                        <div className="right">
                                            <h6 >	Voice Recognition Technology</h6>
                                            <p>
                                                Incorporates voice commands for hands-free gaming interaction.
                                                Enables players to control gameplay, place bets, and navigate menus using voice commands.
                                                Enhances accessibility for players with mobility impairments or disabilities.

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
                                            <img src="/assets/img/multi/multiplayer.svg" alt="" />
                                        </div>
                                        <div className="right">
                                            <h6 >	Real-Time Multiplayer Games</h6>
                                            <p>
                                                Supports synchronous multiplayer gaming for real-time interaction.
                                                Enables players to compete against each other or collaborate in multiplayer game modes.
                                                Enhances social engagement and competitive gameplay experiences.

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
                                            <img src="/assets/img/multi/crossplatform.svg" alt="" />
                                        </div>
                                        <div className="right">
                                            <h6 >	Cross-Platform Compatibility</h6>
                                            <p>
                                                Allows players on different devices and platforms to play together seamlessly.
                                                Ensures a unified gaming experience across PC, mobile, and console platforms.
                                                Expands player communities and enhances matchmaking opportunities.

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
                                            <img src="/assets/img/multi/scalable.svg" alt="" />
                                        </div>
                                        <div className="right">
                                            <h6 >	Scalable Server Infrastructure</h6>
                                            <p>
                                                Utilizes scalable cloud-based server architecture to support large player populations.
                                                Ensures smooth gameplay experiences even during peak traffic periods.
                                                Enables rapid deployment of additional server resources to meet growing demand.

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
                                            <img src="/assets/img/multi/social.svg" alt="" />
                                        </div>
                                        <div className="right">
                                            <h6 >	Social Features and Interactions</h6>
                                            <p>
                                                Incorporates social networking features to connect players and foster community engagement.
                                                Allows players to form friends lists, join groups, and participate in social activities within the game.
                                                Enables social sharing of achievements, gameplay highlights, and in-game content.
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
                                            <img src="/assets/img/AI/predictive.svg" alt="" />
                                        </div>
                                        <div className="right">
                                            <h6 >	Predictive Analytics</h6>
                                            <p>
                                                Utilizes AI algorithms to analyze player behavior and predict gaming preferences.
                                                Offers personalized game recommendations and promotions tailored to individual players.
                                                Enhances player retention and engagement by delivering targeted offers and incentives.

                                            </p >
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
                                            <img src="/assets/img/AI/adaption.svg" alt="" />
                                        </div>
                                        <div className="right">
                                            <h6 >	Dynamic Game Adaptation</h6>
                                            <p>
                                                Implements AI-driven game mechanics that adapt in real-time based on player performance.
                                                Adjusts difficulty levels, pacing, and gameplay elements to match player skill levels and preferences.
                                                Provides customized gaming experiences that evolve with each player's abilities and progression.

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
                                            <img src="/assets/img/AI/Behavioral.svg" alt="" />
                                        </div>
                                        <div className="right">
                                            <h6 >	Behavioral Biometrics</h6>
                                            <p>
                                                Leverages AI-powered behavioral biometrics to enhance player identification and security.
                                                Analyzes unique behavioral patterns such as typing speed, mouse movements, and gameplay style.
                                                Provides continuous authentication and fraud detection to prevent unauthorized access and fraudulent activities.

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
                                            <img src="/assets/img/AI/chatbot.svg" alt="" />
                                        </div>
                                        <div className="right">
                                            <h6 >	Chatbot Customer Support</h6>
                                            <p>
                                                Implements AI-driven chatbots to provide instant customer support and assistance.
                                                Offers 24/7 availability for addressing player inquiries, troubleshooting issues, and providing information.
                                                Utilizes natural language processing (NLP) to understand and respond to player queries in real-time.


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
            {/* {casino - coice of enviro} */}
            <section className="project-section three Raidenarcviz_card_main_div" style={{ padding: "100px 0", background: "black" }}>
                <div className="auto-container">
                    <div className="row Raidenarcviz_card">
                        <h2 className="raidenarcviz_card_h2"><span className="theme-color">Choice of Environments and Themes</span></h2>

                        <p className='raidenarcviz_card_p'>Explore a variety of immersive environments and captivating themes to enhance your gaming experience on VirtualVegas. From the glitz and glamor of a bustling Las Vegas casino floor to exotic locales and fantastical worlds, our platform offers a diverse selection of settings to suit every player's preferences. </p>
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
                                    <img src="\assets\img\virtualvegas\Choice\Frame 40.jpg" alt='' />
                                    <p style={{ textAlign: "center", margin: "0", fontSize: "20px", marginTop: "10px" }} class="card-title-casino">	Las Vegas Strip</p>
                                    <p style={{ textAlign: "center", lineHeight: "25px", margin: "0" }} class="card-description-casino">Experience the electrifying atmosphere of the iconic Las Vegas Strip, complete with dazzling lights, bustling crowds, and the sound of slot machines ringing in the background.</p>
                                </div>
                            </div>
                            <div class="card-casino-choice">
                                <div class="container-card-casino_choice bg-white-box-casino-choice">
                                    <img src="\assets\img\virtualvegas\Choice\Frame 42.jpg" alt='' />
                                    <p style={{ textAlign: "center", margin: "0", fontSize: "20px", marginTop: "10px" }} class="card-title-casino">	Tropical Paradise</p>
                                    <p style={{ textAlign: "center", lineHeight: "25px", margin: "0" }} class="card-description-casino">Escape to a serene tropical paradise, where palm trees sway in the breeze, crystal-clear waters beckon, and colorful cocktails await at the beachside bar.</p>
                                </div>
                            </div>
                            <div class="card-casino-choice">
                                <div class="container-card-casino_choice bg-yellow-box-casino-choice">
                                    <img src="\assets\img\virtualvegas\Choice\Frame 43.jpg" alt='' />
                                    <p style={{ textAlign: "center", margin: "0", fontSize: "20px", marginTop: "10px" }} class="card-title-casino">		Ancient Egypt</p>
                                    <p style={{ textAlign: "center", lineHeight: "25px", margin: "0" }} class="card-description-casino">Embark on an archaeological adventure to Ancient Egypt, where pyramids rise against the desert sands, and mysterious hieroglyphics adorn the walls of ancient temples.</p>
                                </div>
                            </div>
                            <div class="card-casino-choice">
                                <div class="container-card-casino_choice bg-blue-box-casino-choice">
                                    <img src="\assets\img\virtualvegas\Choice\Frame 44.jpg" alt='' />
                                    <p style={{ textAlign: "center", margin: "0", fontSize: "20px", marginTop: "10px" }} class="card-title-casino">	Space Odyssey</p>
                                    <p style={{ textAlign: "center", lineHeight: "25px", margin: "0" }} class="card-description-casino">Blast off into outer space and explore the cosmos aboard a futuristic spaceship, where you'll encounter alien worlds, cosmic phenomena, and the infinite expanse of the universe.</p>
                                </div>
                            </div>
                            <div class="card-casino-choice">
                                <div class="container-card-casino_choice bg-green-box-casino-choice">
                                    <img src="\assets\img\virtualvegas\Choice\Frame 45.jpg" alt='' />
                                    <p style={{ textAlign: "center", margin: "0", fontSize: "20px", marginTop: "10px" }} class="card-title-casino">	Underwater Kingdom</p>
                                    <p style={{ textAlign: "center", lineHeight: "25px", margin: "0" }} class="card-description-casino"> Dive into the depths of the ocean and discover a vibrant underwater kingdom teeming with exotic marine life, hidden treasures, and ancient shipwrecks.</p>
                                </div>
                            </div>
                            <div class="card-casino-choice">
                                <div class="container-card-casino_choice bg-white-box-casino-choice">
                                    <img src="\assets\img\virtualvegas\Choice\Frame 46.jpg" alt='' />
                                    <p style={{ textAlign: "center", margin: "0", fontSize: "20px", marginTop: "10px" }} class="card-title-casino">Wild West Saloon</p>
                                    <p style={{ textAlign: "center", lineHeight: "25px", margin: "0" }} class="card-description-casino">Step back in time to the Wild West era and saddle up for a showdown at the local saloon, where card games, whiskey shots, and cowboy hats are the order of the day.</p>
                                </div>
                            </div>
                            <div class="card-casino-choice">
                                <div class="container-card-casino_choice bg-yellow-box-casino-choice">
                                    <img src="\assets\img\virtualvegas\Choice\Frame 47.jpg" alt='' />
                                    <p style={{ textAlign: "center", margin: "0", fontSize: "20px", marginTop: "10px" }} class="card-title-casino">	Futuristic Cityscape</p>
                                    <p style={{ textAlign: "center", lineHeight: "25px", margin: "0" }} class="card-description-casino">Journey to a bustling metropolis of the future, where neon lights illuminate towering skyscrapers, flying cars zip through the air, and cutting-edge technology is at your fingertips.</p>
                                </div>
                            </div>
                            <div class="card-casino-choice">
                                <div class="container-card-casino_choice bg-blue-box-casino-choice">
                                    <img src="\assets\img\virtualvegas\Choice\Frame 48.jpg" alt='' />
                                    <p style={{ textAlign: "center", margin: "0", fontSize: "20px", marginTop: "10px" }} class="card-title-casino">	Medieval Castle</p>
                                    <p style={{ textAlign: "center", lineHeight: "25px", margin: "0" }} class="card-description-casino">Enter the realm of knights and kings as you explore a majestic medieval castle, complete with towering turrets, stone walls, and a grand banquet hall fit for royalty.</p>
                                </div>
                            </div>
                        </Slider>
                    </div>

                </div>
            </section >


        </>

    )
}

export default MetaverseCasinoContent