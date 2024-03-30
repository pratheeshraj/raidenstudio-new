

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs, EffectFade } from "swiper";
import { Link } from "react-router-dom";


const MetaverseHero = () => {
    return (
        <>
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
                                                        Metaverse Development
                                                        <span className="theme-color"> Company</span>
                                                    </h2>
                                                    <p className="description">
                                                        With our cutting-edge development services, you can explore the metaverse and enter a world without boundaries. VRaiden is a metaverse development company which employs its expertise in the fields of blockchain, augmented reality, virtual reality, and XR to generate innovative metaverse solutions.
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
                </div>
            </section>
        </>
    );
};

export default MetaverseHero;
