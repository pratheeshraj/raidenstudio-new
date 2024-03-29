import React, { useEffect, useRef } from "react";
import SwiperCore, {
    Autoplay,
    Navigation,
    FreeMode,
    Thumbs,
    EffectFade,
} from "swiper";
import { Link } from "react-router-dom";
import ParticlesComponent from "../ParticlesComponent/particles";
import section3_img from "../images/barberian.png";
// Import Swiper styles
import "swiper/css"; // Import core styles
import "swiper/css/navigation"; // Import navigation styles
import "swiper/css/effect-fade"; // Import fade effect styles
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ScrollAnimation from "react-animate-on-scroll";

// Install Swiper modules
SwiperCore.use([Autoplay, Navigation, FreeMode, Thumbs, EffectFade]);

const SliderThree = () => {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    // useEffect(() => {
    //     const pin = gsap.fromTo(
    //         sectionRef.current,
    //         {
    //             translateX: 0,
    //         },
    //         {
    //             translateX: "-300vw",
    //             ease: "none",
    //             duration: 1,
    //             scrollTrigger: {
    //                 trigger: triggerRef.current,
    //                 start: "top top",
    //                 end: "2000 top",
    //                 scrub: 0.6,
    //                 pin: true,
    //             },
    //         }
    //     );
    //     return () => {
    //         {
    //             // / A return function for killing the animation on component unmount /
    //         }
    //         pin.kill();
    //     };
    // }, []);
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const sections = gsap.utils.toArray('.scroll-section');

        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: triggerRef.current,
                pin: true,
                scrub: 1,
                snap: {
                    snapTo: 1 / (sections.length - 1),
                    duration: 0.5
                },
                end: () => `+=${triggerRef.current?.offsetWidth}`
            }
        });
    }, []);
    return (
        <>
            <section className="scroll-section-outer">
                <div ref={triggerRef}>
                    <div ref={sectionRef} className="scroll-section-inner">
                        <div className="scroll-section section1">
                            <div>
                                {" "}
                                <div className="auto-container section1_container">
                                    <ScrollAnimation
                                        animateIn="fadeInLeft"
                                        duration={1.5}
                                        className="left"
                                    >
                                        <h4>The Most Personalized</h4>
                                        <h2>
                                            Best-in-Class <span> Blockchain Development</span>
                                        </h2>

                                        <p>
                                            RAIDEN offers top-tier blockchain game development
                                            services tailored to gaming businesses of any size. Our
                                            team excels in NFT, Metaverse, and Sports Betting design
                                            and development, delivering exceptional and engaging
                                            gaming experiences.
                                        </p>
                                        <Link className="default-btn" to="/contact">
                                            Contact Us Now
                                        </Link>
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                        <div className="scroll-section section2">
                            <div className="auto-container section2_container">
                                <div className="left" data-aos="fade-left" data-aos-delay="300">
                                    <h4 style={{ color: "#2ac8fd" }} className="sub-title">
                                        The Most Personalized
                                    </h4>
                                    <h2 className="slider-title">
                                        Your New Age Generative AI
                                        <span style={{ color: "#2ac8fd" }} className="theme-color">
                                            {" "}
                                            Development Partner
                                        </span>
                                    </h2>
                                    <p className="description">
                                        Utilize our expertise to fast-track your AI projects with
                                        our end-to-end development services. From tailored AI
                                        strategies for business growth to NLP and adaptable
                                        solutions, we're your dedicated AI partner.
                                    </p>
                                    <Link
                                        style={{ backgroundColor: "#2ac8fd" }}
                                        className="default-btn"
                                        to="/contact"
                                    >
                                        Contact Us Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="scroll-section section3">
                            <div className="auto-container section3_container">
                                <div className="left">
                                    <h4 className="sub-title">The Most Personalized</h4>
                                    <h2 className="slider-title">
                                        Your New Age Generative AI
                                        <span className="theme-color"> Development Partner</span>
                                    </h2>
                                    <p className="description">
                                        Utilize our expertise to fast-track your AI projects with
                                        our end-to-end development services. From tailored AI
                                        strategies for business growth to NLP and adaptable
                                        solutions, we're your dedicated AI partner.
                                    </p>
                                    <Link className="default-btn" to="/contact">
                                        Contact Us Now
                                    </Link>
                                </div>
                                <div className="right">
                                    <img src={section3_img} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="scroll-section section4">
                            <div
                                className="auto-container section4_container"
                                data-aos="fade-left"
                                data-aos-delay="300"
                            >
                                <div className="left">
                                    <h4 className="sub-title">The Most Personalized</h4>
                                    <h2 className="slider-title">
                                        Your New Age Generative AI
                                        <span className="theme-color"> Development Partner</span>
                                    </h2>
                                    <p className="description">
                                        Utilize our expertise to fast-track your AI projects with
                                        our end-to-end development services. From tailored AI
                                        strategies for business growth to NLP and adaptable
                                        solutions, we're your dedicated AI partner.
                                    </p>
                                    <Link className="default-btn" to="/contact">
                                        Contact Us Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SliderThree;

// <div ref={triggerRef}>
// <section className="hero_section" ref={sectionRef}>

//     <div className="section-2">
//       <div className="section_2_bg" />
//       <div className="auto-container">
//         <div className="slider-content-inner middle">
//           <div className=" home_hero_section_content">
//             <h4 className="sub-title">The Most Personalized</h4>
//             <h2 className="slider-title">
//               Best-in-Class Blockchain Development
//             </h2>
//             <p className="description">
//               RAIDEN offers top-tier blockchain game development services
//               tailored to gaming businesses of any size. Our team excels in
//               NFT, Metaverse, and Sports Betting design and development,
//               delivering exceptional and engaging gaming experiences.
//             </p>
//             <div className="inner-btn">
//               <div>
//                 <Link className="default-btn" to="/contact">
//                   Contact Us Now
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="section-3">
//       <div className="section_3_bg" />
//       <div className="auto-container " style={{height:"100%"}}>
//           <div className=" home_hero_section_content section_three">
//             <div className="left">
//               <h4 className="sub-title">The Most Personalized</h4>
//               <h2 className="slider-title">
//                 Best-in-Class Blockchain Development
//               </h2>
//               <p className="description">
//                 RAIDEN offers top-tier blockchain game development services
//                 tailored to gaming businesses of any size. Our team excels
//                 in NFT, Metaverse, and Sports Betting design and
//                 development, delivering exceptional and engaging gaming
//                 experiences.
//               </p>
//               <Link className="default-btn" to="/contact">
//                 Contact Us Now
//               </Link>
//             </div>
//             <div className="right">
//               <img src={section3_img} alt="" />
//             </div>
//         </div>
//       </div>
//     </div>
//     <div className="section-4">
//       <div className="section_4_bg" />
//       <div className="auto-container">
//         <div className="slider-content-inner middle">
//           <div className=" home_hero_section_content">
//             <h4 className="sub-title">The Most Personalized</h4>
//             <h2 className="slider-title">
//               Best-in-Class Blockchain Development
//             </h2>
//             <p className="description">
//               RAIDEN offers top-tier blockchain game development services
//               tailored to gaming businesses of any size. Our team excels in
//               NFT, Metaverse, and Sports Betting design and development,
//               delivering exceptional and engaging gaming experiences.
//             </p>
//             <div className="inner-btn">
//               <div>
//                 <Link className="default-btn" to="/contact">
//                   Contact Us Now
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// </div>
