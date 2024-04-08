import React, { useRef } from 'react'
import "./MetaverseCasino.css"
import ScrollAnimation from 'react-animate-on-scroll';
import section4 from "../../images/gameproduct-detailimg/section4.png";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import img from "../../images/2150926863.jpg"

function MetaverseCasinoContent() {

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
            {/* {casino - Technical Specifications:} */}
            <section>
                <div className="container-fluid game_product_section2" style={{ background: "#24292D" }}>
                    <div className="auto-container">
                        <div className="row game_product_content">
                            <h2>Technical Specifications</h2>
                            <div className="col-md-12 detail">
                                <div
                                    className=" gameproduct_about section_5"
                                    style={{
                                        flexDirection: "row-reverse",
                                    }}
                                >
                                    <ScrollAnimation
                                        className="left"
                                        animateIn="fadeInRight"
                                        duration={1.5}
                                        style={{ textAlign: "end" }}
                                    >
                                        <img src={section4} alt="" />
                                    </ScrollAnimation>
                                    <ScrollAnimation
                                        animateIn="fadeInLeft"
                                        duration={1.5}
                                        className="right d-flex flex-column align-items- "
                                        style={{ marginTop: "50px" }}
                                    >
                                        <ul className="section_5_ul">
                                            <li>
                                                <i class="fa-regular fa-circle-dot"></i><span className='theme-color'>Tech Stack :</span> VirtualVegas is built on a robust tech stack including HTML5, CSS3, JavaScript, Node.js, MongoDB, and WebRTC for virtual reality integration.
                                            </li>
                                            <li>
                                                <i class="fa-regular fa-circle-dot"></i><span className='theme-color'>Hosting :</span> Our platform is cloud-based, ensuring scalability, reliability, and high performance.
                                            </li>
                                            <li>
                                                <i class="fa-regular fa-circle-dot"></i>
                                                <span className='theme-color'>Security :</span> VirtualVegas employs industry-leading security measures, including SSL encryption, two-factor authentication, and blockchain technology for secure transactions
                                            </li>
                                        </ul>
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* {casino - Technical Specifications:} */}
            <section>
                <div className="container-fluid game_product_section2" style={{ background: "#24292D", padding: "0", paddingBottom: "100px" }}>
                    <div className="auto-container">
                        <div className="row game_product_content">
                            <h2>Game Engine and Environment</h2>
                            <div className="col-md-12 detail">
                                <div
                                    className=" gameproduct_about section_5"
                                    style={{
                                        flexDirection: "row",
                                    }}
                                >
                                    <ScrollAnimation
                                        className="left"
                                        animateIn="fadeInRight"
                                        duration={1.5}
                                        style={{ textAlign: "end" }}
                                    >
                                        <img src={section4} alt="" />
                                    </ScrollAnimation>
                                    <ScrollAnimation
                                        animateIn="fadeInLeft"
                                        duration={1.5}
                                        className="right d-flex flex-column align-items- "
                                        style={{ marginTop: "50px" }}
                                    >
                                        <ul className="section_5_ul">
                                            <li>
                                                <i class="fa-regular fa-circle-dot"></i><span className='theme-color'>Unity : </span>As the primary game engine for developing casino games, including slots, blackjack, roulette, and more.
                                            </li>
                                            <li>
                                                <i class="fa-regular fa-circle-dot"></i><span className='theme-color'>Photon Unity Networking (PUN) : </span> For implementing multiplayer functionality in Unity games, allowing players to interact with each other in real-time.
                                            </li>
                                            <li>
                                                <i class="fa-regular fa-circle-dot"></i>
                                                <span className='theme-color'>Three.js : </span> For implementing multiplayer functionality in Unity games, allowing players to interact with each other in real-time.
                                            </li>
                                            <li>
                                                <i class="fa-regular fa-circle-dot"></i><span className='theme-color'>A-Frame : </span>For building virtual reality experiences using HTML and JavaScript, providing a simple and accessible way to create immersive environments.
                                            </li>
                                            <li>
                                                <i class="fa-regular fa-circle-dot"></i><span className='theme-color'>Blender : </span>For 3D modeling and animation, allowing developers to create custom assets and visual effects for casino games and virtual environments.
                                            </li>
                                        </ul>
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
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
                                    <img src={img} alt='' />
                                    <p style={{ textAlign: "center", margin: "0", fontSize: "20px", marginTop: "10px" }} class="card-title-casino">	Las Vegas Strip</p>
                                    <p style={{ textAlign: "center", lineHeight: "25px", margin: "0" }} class="card-description-casino">Experience the electrifying atmosphere of the iconic Las Vegas Strip, complete with dazzling lights, bustling crowds, and the sound of slot machines ringing in the background.</p>
                                </div>
                            </div>
                            <div class="card-casino-choice">
                                <div class="container-card-casino_choice bg-white-box-casino-choice">
                                    <img src={img} alt='' />
                                    <p style={{ textAlign: "center", margin: "0", fontSize: "20px", marginTop: "10px" }} class="card-title-casino">	Tropical Paradise</p>
                                    <p style={{ textAlign: "center", lineHeight: "25px", margin: "0" }} class="card-description-casino">Escape to a serene tropical paradise, where palm trees sway in the breeze, crystal-clear waters beckon, and colorful cocktails await at the beachside bar.</p>
                                </div>
                            </div>
                            <div class="card-casino-choice">
                                <div class="container-card-casino_choice bg-yellow-box-casino-choice">
                                    <img src={img} alt='' />
                                    <p style={{ textAlign: "center", margin: "0", fontSize: "20px", marginTop: "10px" }} class="card-title-casino">		Ancient Egypt</p>
                                    <p style={{ textAlign: "center", lineHeight: "25px", margin: "0" }} class="card-description-casino">Embark on an archaeological adventure to Ancient Egypt, where pyramids rise against the desert sands, and mysterious hieroglyphics adorn the walls of ancient temples.</p>
                                </div>
                            </div>
                            <div class="card-casino-choice">
                                <div class="container-card-casino_choice bg-blue-box-casino-choice">
                                    <img src={img} alt='' />
                                    <p style={{ textAlign: "center", margin: "0", fontSize: "20px", marginTop: "10px" }} class="card-title-casino">	Space Odyssey</p>
                                    <p style={{ textAlign: "center", lineHeight: "25px", margin: "0" }} class="card-description-casino">Blast off into outer space and explore the cosmos aboard a futuristic spaceship, where you'll encounter alien worlds, cosmic phenomena, and the infinite expanse of the universe.</p>
                                </div>
                            </div>
                            <div class="card-casino-choice">
                                <div class="container-card-casino_choice bg-green-box-casino-choice">
                                    <img src={img} alt='' />
                                    <p style={{ textAlign: "center", margin: "0", fontSize: "20px", marginTop: "10px" }} class="card-title-casino">	Underwater Kingdom</p>
                                    <p style={{ textAlign: "center", lineHeight: "25px", margin: "0" }} class="card-description-casino"> Dive into the depths of the ocean and discover a vibrant underwater kingdom teeming with exotic marine life, hidden treasures, and ancient shipwrecks.</p>
                                </div>
                            </div>
                            <div class="card-casino-choice">
                                <div class="container-card-casino_choice bg-white-box-casino-choice">
                                    <img src={img} alt='' />
                                    <p style={{ textAlign: "center", margin: "0", fontSize: "20px", marginTop: "10px" }} class="card-title-casino">Wild West Saloon</p>
                                    <p style={{ textAlign: "center", lineHeight: "25px", margin: "0" }} class="card-description-casino">Step back in time to the Wild West era and saddle up for a showdown at the local saloon, where card games, whiskey shots, and cowboy hats are the order of the day.</p>
                                </div>
                            </div>
                            <div class="card-casino-choice">
                                <div class="container-card-casino_choice bg-yellow-box-casino-choice">
                                    <img src={img} alt='' />
                                    <p style={{ textAlign: "center", margin: "0", fontSize: "20px", marginTop: "10px" }} class="card-title-casino">	Futuristic Cityscape</p>
                                    <p style={{ textAlign: "center", lineHeight: "25px", margin: "0" }} class="card-description-casino">Journey to a bustling metropolis of the future, where neon lights illuminate towering skyscrapers, flying cars zip through the air, and cutting-edge technology is at your fingertips.</p>
                                </div>
                            </div>
                            <div class="card-casino-choice">
                                <div class="container-card-casino_choice bg-blue-box-casino-choice">
                                    <img src={img} alt='' />
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