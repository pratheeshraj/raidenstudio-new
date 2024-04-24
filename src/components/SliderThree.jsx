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
        trigger: sectionRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),

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
         
                {" "}
                <div className="auto-container section1_container">
                  <div
                    animateIn="fadeInLeft"
                    duration={1.5}
                    className="left"
                  >
                    <h2>
                      Leading Blockchain
                      <span> Solutions Await</span>
                    </h2>
                    <p className="Hero_sub_heading">
                      Revolutionize with Cutting-Edge Blockchain Solutions <br/> Unleash the power of innovation for your business.
                    </p>
                    <Link className="default-btn" to="/contact">
                      Explore
                    </Link>
                  </div>
                </div>
             
            </div>
            <div className="scroll-section section2">
              <div className="auto-container section2_container">
                <div className="left" data-aos="fade-left" data-aos-delay="300">
                  <h2 className="slider-title">
                    Supercharge with
                    <span style={{ color: "#2ac8fd" }} className="theme-color">
                      {" "}
                      Artificial Intelligence
                    </span>
                  </h2>
                  <p className="Hero_sub_heading description">
                    Explore the forefront of innovation with our AI development expertise. Transforming possibilities into tangible achievements.
                  </p>
                  <Link
                    style={{ backgroundColor: "#2ac8fd" }}
                    className="default-btn"
                    to="/contact"
                  >
                    Explore
                  </Link>
                </div>
              </div>
            </div>
            <div className="scroll-section section3">
              <div className="auto-container section3_container">
                <div className="left">
                  <h2 className="slider-title">
                    Forge Your Gaming
                    <span className="theme-color"> Legacy </span>
                  </h2>
                  <p className="description Hero_sub_heading" >
                    Immerse Yourself in the Art of Gaming Creation - Let's<br /> Build Your Next Masterpiece Together!
                  </p>
                  <Link className="default-btn" to="/contact">
                    Explore
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
                  <h2 className="slider-title">Redefining Experiences<span className="theme-color" style={{ color: "#5CF8FF" }}>  with XR</span>
                  </h2>
                  <p style={{ width: "500px" }} className="description Hero_sub_heading">
                    Discover augmented and virtual realities with our expert XR development.
                  </p>
                  <Link
                    style={{ backgroundColor: "#00D1DB" }}
                    className="default-btn"
                    to="/contact"
                  >
                    Explore
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
