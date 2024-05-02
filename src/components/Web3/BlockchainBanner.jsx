import React from "react";
import { Link } from "react-router-dom";

const BlockchainBanner = () => {
    return (
        <>
            {/* Counter-section one start */}
            <section
                className="counter-section one"
                style={{
                    backgroundImage: "url('/assets/img/web3/banner.jpg')",
                    backgroundSize: "cover"
                }}
            >
                <div className="auto-container">
                    <div className="award-part " data-aos="fade-up" data-aos-delay="300">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="title">
                                    <h2>
                                        Are you ready to adopt <span style={{ color: "#FB57E9" }}> Web 3.0 development services</span> for your business?
                                    </h2>
                                    <p>
                                        Embracing Web 3.0 allows you to stay ahead of the curve, tap into new revenue streams, and engage with your audience in innovative ways
                                    </p>
                                    <div className="inner-btn d-adjust">
                                        <div>
                                            <Link style={{ background: "#E052D1" }} className="default-btn" to="/contact-us">
                                                Let’s Work To Do{" "}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
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

export default BlockchainBanner;
