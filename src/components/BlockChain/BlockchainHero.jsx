

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs, EffectFade } from "swiper";
import { Link } from "react-router-dom";


const BlockchainHero = () => {
    return (
        <>
            <section className="hero-slider one"
                style={{
                    height: "90vh"
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
                                            "url('assets/img/custom-block/hero.jpg')",
                                        height: "100%"
                                    }}
                                />
                                <div className="auto-container hero-banner_div">
                                    <div className="row ">
                                        <div className="col-xl-7 col-12">
                                            <div className="slider-content-inner ">
                                                <div>
                                                    <h2 className="slider-title">
                                                        Obtain More Transparency Custom
                                                        {/* <h4 className="theme-color">The Most Professional</h4> */}
                                                        <span className="theme-color"> Blockchain Development Services</span><br />
                                                    </h2>
                                                    <p style={{ width: "500px" }} className="description metaverse_hero_para">
                                                        We helped many businesses leverage blockchain by offering cost-effective blockchain development solutions and encouraging everyone who benefits. Our blockchain developers have expertise in developing Web3, Games, NFTs, DApps, DeFi, Metaverse, DAOs, exchanges, custodial wallets, smart contracts, stablecoins, and more
                                                    </p>
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

export default BlockchainHero;

