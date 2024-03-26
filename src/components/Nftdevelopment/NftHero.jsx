

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs, EffectFade } from "swiper";
import { Link } from "react-router-dom";
const NftHero = () => {
    return (
        <>
            {/* slider-area-one-start  */}
            <section className="hero-slider one">
                <div className="swiper hero-slider-init-one swiper-container swiper-container-fade">
                    <Swiper
                        loop={false}
                        modules={[FreeMode, Navigation, Thumbs, EffectFade]}
                        effect="fade"
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        }}
                    >
                        <SwiperSlide>
                            <div className="item-slider sliderm-height p-relative swiper-slide">
                                <div
                                    className="slide-bg"
                                    style={{
                                        backgroundImage:
                                            "url('assets/img/bg-image/03_bg-image.png')",
                                    }}
                                />
                                <div className="auto-container">
                                    <div className="row ">
                                        <div className="col-xl-7 col-12">
                                            <div className="slider-content-inner ">
                                                <div>
                                                    <h2 className="slider-title">
                                                        NFT Development Company
                                                        <span className="theme-color"> Empowering Businesses</span>
                                                    </h2>
                                                    <p className="description">
                                                        Take advantage of our all-inclusive NFT development services to create innovative, unique and seamless
                                                        solutions for non-fungible tokens, NFT games, NFT marketplaces, and so on.
                                                    </p>
                                                    <div className="inner-btn">
                                                        <div>
                                                            <Link className="default-btn" to="/contact">
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
                                                    <img src="assets/img/hero/03_hero-image.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                    {/* If we need navigation buttons */}
                    {/* <div
            id="swiper-button-prev"
            className="swiper-button-prev hero-button"
          >
            <i className="fa-regular fa-angles-left" />
          </div>
          <div
            id="swiper-button-next"
            className="swiper-button-next hero-button"
          >
            <i className="fa-regular fa-angles-right" />
          </div> */}
                    {/* Shape Image */}
                    {/* <div className="shape-image">
            <div className="inner-shape-1 poa">
              <img
                className="img-fluid"
                src="assets/img/icon/01_icon.png"
                alt=""
              />
            </div>
            <div className="inner-shape-2 poa">
              <img
                className="img-fluid"
                src="assets/img/icon/02_icon.png"
                alt=""
              />
            </div>
            <div className="inner-shape-3 poa">
              <img
                className="img-fluid"
                src="assets/img/icon/03_icon.png"
                alt=""
              />
            </div>
            <div className="inner-shape-4 poa">
              <img
                className="img-fluid"
                src="assets/img/icon/04_icon.png"
                alt=""
              />
            </div>
            <div className="inner-shape-5 poa">
              <img
                className="img-fluid"
                src="assets/img/icon/04_icon.png"
                alt=""
              />
            </div>
            <div className="inner-shape-6 poa">
              <img
                className="img-fluid"
                src="assets/img/icon/06_icon.png"
                alt=""
              />
            </div>
            <div className="inner-shape-7 poa">
              <img
                className="img-fluid"
                src="assets/img/icon/07_icon.png"
                alt=""
              />
            </div>
            <div className="inner-shape-8 poa">
              <img
                className="img-fluid"
                src="assets/img/icon/08_icon.png"
                alt=""
              />
            </div>
            <div className="inner-shape-9 poa">
              <img
                className="img-fluid"
                src="assets/img/icon/27_icon.png"
                alt=""
              />
            </div>
          </div> */}
                </div>
            </section>
            {/* slider-area-one-end */}
        </>
    );
};

export default NftHero;

