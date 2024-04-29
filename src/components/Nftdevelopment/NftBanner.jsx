import React from "react";
import { Link } from "react-router-dom";

const NftBanner = () => {


    return (
        <>
            {/* Counter-section one start */}
            <section
                className="counter-section one"
                style={{
                    backgroundSize: "cover",
                    background: "#5A91AF"
                }}
            >
                <div className="auto-container">
                    <div className="award-part " data-aos="fade-up" data-aos-delay="300" style={{ paddingTop: "0", paddingBottom: "0" }}>
                        <div className="row" style={{ display: "flex", alignItems: "center" }}>
                            <div className="col-lg-6">
                                <div className="title">
                                    <h2>
                                        Is your business prepared to embrace  <span className="theme-color"> NFT development services?</span>
                                    </h2>
                                    <p>
                                        Prepare your business for the future of digital assets with NFT development services tailored to your needs. Whether you're looking to tokenize artwork, collectibles, or digital real estate, our expert team is ready to guide you through the process
                                    </p>
                                    <div className="inner-btn d-adjust">
                                        <div>
                                            <Link className="default-btn" to="/contact-us">
                                                Let’s Work To Do{" "}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 banner_right_image">
                                <img src="/assets/img/bg-image/painting-water-lillies-orange-flowers-pond-generative-ai_733139-67283-transformed-removebg-preview.png" />
                            </div>

                        </div>
                        {/* <div className="overlay-text">
              <h1>AI</h1>
            </div> */}
                        {/* <div className="shape-img">
                            <img
                                className="shape-1 poa"
                                src="./assets/img/icon/50_icon.png"
                                alt=""
                            />
                            <img
                                className="shape-2 poa"
                                src="./assets/img/icon/51_icon.png"
                                alt=""
                            />
                        </div> */}
                    </div>
                </div>
            </section>
            {/* Counter-section one end */}
        </>
    );
};

export default NftBanner;
