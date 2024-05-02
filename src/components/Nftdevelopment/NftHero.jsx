

import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs, EffectFade } from "swiper";
import { Link } from "react-router-dom";
const NftHero = () => {


  const heroImageRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { pageX, pageY } = e;

      const X = pageX;
      const Y = pageY;

      if (heroImageRef.current) {
        heroImageRef.current.style.transform = `translate(${X / 30}px, ${Y / 30
          }px)`;
      }
    };
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);


  return (
    <>
      {/* slider-area-one-start  */}
      <section className="hero-slider one" style={{ height: "90vh" }}>
        <div className="swiper hero-slider-init-one swiper-container swiper-container-fade">
          <Swiper
            loop={false}
            modules={[FreeMode, Navigation, Thumbs, EffectFade]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
          >
            {/* background: "url('assets/img/bg-image/neon-gypsum-human-statue-head_547296-7777-transformed.jpeg')", */}
            <SwiperSlide>
              <div className="item-slider sliderm-height p-relative swiper-slide" style={{ height: "90vh" }}>
                <div
                  className="slide-bg"
                  style={{
                    height: "100%",
                    backgroundRepeat: "no-repeat",
                    objectFit: "cover",
                    background: "-webkit-linear-gradient(45deg, #5E4D84, #6B5690, #78609C, #856AA9, #9275B5, #9F7FBF, #AC89CB, #B993D7, #C69EE3, #D2A8EF, #DFB2FB)",
                  }}
                />
                <div className="auto-container hero-banner_div">
                  <div className="row ">
                    <div className="col-xl-7 col-12">
                      <div className="slider-content-inner ">
                        <div>
                          <h2 className="slider-title">
                            NFT Development Company
                            <span style={{ color: "#38FFFF" }}> Empowering Businesses</span>
                          </h2>
                          <p className="description Hero_sub_heading">
                            Create innovative, unique and seamless
                            solutions for non-fungible tokens, NFT games, NFT marketplaces, and so on.
                          </p>
                          <div className="inner-btn">
                            <div>
                              <Link style={{ background: "#00E9E2" }} className="default-btn" to="/contact-us">
                                Explore Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-5">
                      <div className="slider-content-inner-right">
                        <div className="img-wrapper" style={{ overflow: "none" }}>
                          <img src="assets/img/bg-image/cat-frame-img-transformed-removebg.png" alt="" ref={heroImageRef} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/* slider-area-one-end */}
    </>
  );
};

export default NftHero;

