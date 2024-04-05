

import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs, EffectFade } from "swiper";
import { Link } from "react-router-dom";

const MetaverseCasionoHero = () => {


    // const heroImageRef = useRef(null);

    // useEffect(() => {
    //     const handleMouseMove = (e) => {
    //         const { pageX, pageY } = e;

    //         const X = pageX;
    //         const Y = pageY;

    //         if (heroImageRef.current) {
    //             heroImageRef.current.style.transform = `translate(${X / 30}px, ${Y / 30
    //                 }px)`;
    //         }
    //     };
    //     document.addEventListener("mousemove", handleMouseMove);

    //     return () => {
    //         document.removeEventListener("mousemove", handleMouseMove);
    //     };
    // }, []);


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
                            <div className="item-slider sliderm-height p-relative swiper-slide" style={{ height: "90vh" }}>
                                <div
                                    className="slide-bg"
                                    style={{
                                        height: "100%",
                                        backgroundRepeat: "no-repeat",
                                        objectFit: "cover",
                                        background: "url('assets/img/bg-image/casion-backgroun-transformed.jpeg')",
                                    }}
                                />
                                <div className="auto-container hero-banner_div">
                                    <div className="row ">
                                        <div className="col-xl-7 col-12">
                                            <div className="slider-content-inner ">
                                                <div>
                                                    <h2 className="slider-title">
                                                        Welcome to VirtualVegas: Your Ultimate
                                                        <span className="theme-color"> Metaverse Casino Destination!</span>
                                                    </h2>
                                                    <p className="description">
                                                        Embark on an exhilarating journey into the heart of virtual entertainment with VirtualVegas! As the premier white label solution for Metaverse casinos, we offer a comprehensive platform that combines the excitement of traditional casino gaming with the cutting-edge technology of the digital realm.
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
                                        {/* <div className="col-xl-5">
                                            <div className="slider-content-inner-right">
                                                <div className="img-wrapper" style={{ overflow: "none" }}>
                                                    <img src="assets/img/bg-image/cat-frame-img-transformed-removebg.png" alt="" ref={heroImageRef} />
                                                </div>
                                            </div>
                                        </div> */}
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

export default MetaverseCasionoHero;

