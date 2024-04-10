

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs, EffectFade } from "swiper";
import { Link } from "react-router-dom";


const VrHero = () => {
    return (
        <>
            <section className="hero-slider one"
                style={{
                    height: "100vh"
                }}>
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
                                            "url('assets/img/bg-image/teenager-using-virtual-reality-glasses-play-video-games-metaverse_168310-706-transformed.png')",
                                        height: "100%"
                                    }}
                                />
                                <div className="auto-container hero-banner_div">
                                    <div className="row ">
                                        <div className="col-xl-7 col-12">
                                            <div className="slider-content-inner ">
                                                <div>
                                                    <h2 className="slider-title">
                                                        <span className="theme-color" style={{ color: "#7631CE" }}> Virtual Reality (VR)</span><br /> Development Company
                                                    </h2>
                                                    <p style={{ width: "500px" }} className="description metaverse_hero_para">
                                                        VRaiden is a one-stop shop for bespoke VR application development, with a focus on crafting custom virtual reality applications which deliver immersive, scalable virtual reality (VR) experiences for next-generation users.                                                     </p>
                                                    <div className="inner-btn" >
                                                        <div>
                                                            <Link className="default-btn" to="/contact">
                                                                Explore Now
                                                            </Link>
                                                        </div>
                                                    </div>
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

export default VrHero;

