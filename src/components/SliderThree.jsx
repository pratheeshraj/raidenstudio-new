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

    const sections = gsap.utils.toArray(".scroll-section");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current, // Use sectionRef as the trigger
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        // base vertical scrolling on the height of the container
        end: () => `+=${triggerRef?.current?.offsetWidth}`,
      },
    });
    return () => {
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
      gsap.killTweensOf("*");
    };
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
                      VRAIDEN is a team of blockchain game professionals with varied skill sets who provide bespoke and world-class blockchain game development solutions to gaming businesses of all sizes. From NFT, Metaverse, and Sports Betting design to development, we provide outstanding and interactive gaming experiences.
                    </p>
                    <Link className="default-btn" to="/contact">
                      Talk To Us
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
                    Exploit our vast expertise to accelerate your AI journey by opting for our end-to-end AI development services that are ideal for your specific project needs. Whether you require tailored artificial intelligence tactics for business growth, NLP, and adaptable AI development solutions, we are your dedicated AI talent force.
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
                  <h4 className="sub-title" style={{ color: "#2ac8fd" }}>
                    Top AR, VR
                  </h4>
                  <h2 className="slider-title">
                    Metaverse
                    <span className="theme-color" style={{ color: "#2ac8fd" }}>
                      {" "}
                      Development Company
                    </span>
                  </h2>
                  <p style={{ width: "500px" }} className="description">
                    With our 3D Metaverse solution, you can redefine the way your business processes by combining virtual and augmented technologies. VRAIDEN, a leading AR and VR development company, aspires to create highly customized solutions that will help your modern VR/AR business prosper.
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
