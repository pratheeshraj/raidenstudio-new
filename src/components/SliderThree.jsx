import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs, EffectFade } from "swiper";
import { Link } from "react-router-dom";
import ParticlesComponent from "../ParticlesComponent/particles";
const SliderThree = () => {
    return (
        <>
            {/* slider-area-three-start  */}
            <section className="hero-slider two" style={{ marginTop: "-50px" }}>
                <div className="swiper hero-slider-init-one swiper-container swiper-container-fade">
                    <div className="swiper-wrapper p-relative">
                        <Swiper
                            loop={false}
                            modules={[FreeMode, Navigation, Thumbs, EffectFade]}
                            navigation={{
                                nextEl: ".swiper-button-next",
                                prevEl: ".swiper-button-prev",
                            }}
                        >
                            <SwiperSlide>
                                <div>
                                    <ParticlesComponent id="particles" />
                                    <div className="item-slider sliderm-height p-relative swiper-slide">
                                        <div
                                            className="slide-bg"
                                        />
                                        <div className="auto-container">
                                            <div className="row ">
                                                <div className="col-12">
                                                    <div className="slider-content-inner middle">
                                                        <div>
                                                            <h4 className="sub-title">The Most Personalized</h4>
                                                            <h2 className="slider-title">
                                                                Best-in-Class Blockchain Development
                                                            </h2>
                                                            <p className="description">
                                                                RAIDEN offers top-tier blockchain game development services tailored to gaming businesses of any size.
                                                                Our team excels in NFT, Metaverse, and Sports Betting design and development, delivering exceptional and engaging gaming experiences.
                                                            </p>
                                                            <div className="inner-btn">
                                                                <div>
                                                                    <Link className="default-btn" to="/contact">
                                                                        Contact Us Now
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="item-slider sliderm-height p-relative swiper-slide">
                                    <div
                                        className="slide-bg"
                                        style={{
                                            backgroundImage:
                                                "url('assets/img/bg-image/Artificial Inteliigence.png')",
                                        }}
                                    />
                                    <div className="auto-container">
                                        <div className="row ">
                                            <div className="col-lg-7">
                                                <div className="slider-content-inner ">
                                                    <div>
                                                        <h4 className="sub-title">The Most Personalized</h4>
                                                        <h2 className="slider-title">
                                                            Your New Age Generative AI
                                                            <span className="theme-color"> Development Partner</span>
                                                        </h2>
                                                        <p className="description">
                                                            Utilize our expertise to fast-track your AI projects with our end-to-end development services.
                                                            From tailored AI strategies for business growth to NLP and adaptable solutions, we're your dedicated AI partner.
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
                                            <div className="col-lg-5">
                                                <div className="slider-content-inner-right">
                                                    <div className="img-wrapper" style={{ position: "relative", top: "-25px" }}>
                                                        <img
                                                            src="assets/img/bg-image/ai raiden@4x 2.png"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                {" "}
                                <div className="item-slider sliderm-height p-relative swiper-slide">
                                    <div
                                        className="slide-bg"
                                        style={{
                                            backgroundImage:
                                                "url('assets/img/bg-image/Gaming.png')",
                                        }}
                                    />
                                    <div className="auto-container">
                                        <div className="row ">
                                            <div className="col-lg-6">
                                                <div className="slider-content-inner ">
                                                    <h4 className="sub-title">The Most Personalized</h4>
                                                    <h2 className="slider-title">
                                                        AI Development Company &amp; Services in The World
                                                    </h2>
                                                    <p className="description">
                                                        To take a trivial example, which of us ever
                                                        undertakes laborious physical exercise, except to
                                                        obtain some advantage from it.
                                                    </p>
                                                    <div className="inner-btn">
                                                        <div>
                                                            <Link className="default-btn" to="/contact">
                                                                Learn More About AI
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="slider-content-inner-right">
                                                    <div className="img-wrapper" style={{ position: "relative", top: "25px" }}>
                                                        <img
                                                            src="assets/img/bg-image/barberian.png"
                                                            alt=""
                                                            style={{ height: "100%" }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                {" "}
                                <div className="item-slider sliderm-height p-relative swiper-slide">
                                    <div
                                        className="slide-bg"
                                        style={{
                                            backgroundImage:
                                                "url('assets/img/bg-image/metaverse.png')",
                                            height: "135%"
                                        }}

                                    />
                                    <div className="auto-container">
                                        <div className="row ">
                                            <div className="col-12">
                                                <div className="slider-content-inner middle">
                                                    <div>
                                                        <h4 className="sub-title">The Most Personalized</h4>
                                                        <h2 className="slider-title">
                                                            Top AR,VR Metaverse Development Company
                                                        </h2>
                                                        <p className="description">
                                                            Transform your business with our innovative 3D Metaverse solution, merging virtual and augmented technologies.
                                                            Partner with VRAIDEN, a top AR and VR development firm, for tailored solutions to propel your VR/AR business forward.
                                                        </p>
                                                        <div className="inner-btn">
                                                            <div>
                                                                <Link className="default-btn" to="/contact">
                                                                    Contact Us Now
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
                    {/* If we need navigation buttons */}
                    <div className="swiper-button-prev hero-button">
                        <i className="fa-regular fa-angles-left" />
                    </div>
                    <div className="swiper-button-next hero-button">
                        <i className="fa-regular fa-angles-right" />
                    </div>
                    {/* Shape Image */}
                    {/* <div className="shape-image">
                        <div className="inner-shape-1 poa">
                            <img
                                className="img-fluid"
                                src="/assets/img/icon/48_icon.png"
                                alt=""
                            />
                        </div>
                        <div className="inner-shape-2 poa">
                            <img
                                className="img-fluid"
                                src="/assets/img/icon/02_icon.png"
                                alt=""
                            />
                        </div>
                        <div className="inner-shape-3 poa">
                            <img
                                className="img-fluid"
                                src="/assets/img/icon/03_icon.png"
                                alt=""
                            />
                        </div>
                        <div className="inner-shape-4 poa">
                            <img
                                className="img-fluid"
                                src="/assets/img/icon/71_icon.png"
                                alt=""
                            />
                        </div>
                        <div className="inner-shape-5 poa">
                            <img
                                className="img-fluid"
                                src="/assets/img/icon/04_icon.png"
                                alt=""
                            />
                        </div>
                        <div className="inner-shape-6 poa">
                            <img
                                className="img-fluid"
                                src="/assets/img/icon/11_icon.png"
                                alt=""
                            />
                        </div>
                        <div className="inner-shape-7 poa">
                            <img
                                className="img-fluid"
                                src="/assets/img/icon/28_icon.png"
                                alt=""
                            />
                        </div>
                        <div className="inner-shape-8 poa">
                            <img
                                className="img-fluid"
                                src="/assets/img/icon/08_icon.png"
                                alt=""
                            />
                        </div>
                        <div className="inner-shape-9 poa">
                            <img
                                className="img-fluid"
                                src="/assets/img/icon/27_icon.png"
                                alt=""
                            />
                        </div>
                    </div> */}
                </div>
            </section>
            {/* slider-area-three-end */}
        </>
    );
};

export default SliderThree;
