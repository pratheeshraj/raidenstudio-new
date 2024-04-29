

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs, EffectFade } from "swiper";
import { Link } from "react-router-dom";
const SliderOne = () => {
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
            <SwiperSlide>
              <div className="item-slider sliderm-height p-relative swiper-slide" style={{
                height: "90vh"
              }}>
                <div
                  className="slide-bg"
                  style={{
                    backgroundImage:
                      "url('assets/img/service/brain.jpg')",
                    backgroundSize: "cover",
                    height: "100%"
                  }}
                />
                <div className="auto-container hero-banner_div">
                  <div className="row ">
                    <div className="col-xl-7 col-12">
                      <div className="slider-content-inner ">
                        <div>
                          <h2 className="slider-title">
                            AI Development
                            <span className="theme-color"> Company</span>
                          </h2>
                          <p className="description">
                            We're an international custom AI development company that helps to simplify your business workflows and boost operational productivity. Combining our creativity, AI expertise, and AI applications development approach, we deliver a complete AI spectrum that matters to users' and businesses' success.
                          </p>
                          <div className="inner-btn">
                            <div>
                              <Link className="default-btn" to="/contact-us">
                                Explore Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-5">
                      <div className="slider-content-inner-right">
                        <div className="img-wrapper">
                          {/* <img src="assets/img/hero/01_hero-image.png" alt="" /> */}
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

export default SliderOne;

