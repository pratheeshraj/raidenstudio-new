import React from "react";
import { Link } from "react-router-dom";

const BlockchainBanner = () => {
    return (
        <>
            {/* Counter-section one start */}
            <section
                className="counter-section one"
                style={{
                    backgroundImage: "url('/assets/img/bg-image/ar-banner.avif')",
                    backgroundSize: "cover"
                }}
            >
                <div className="auto-container">
                    <div className="award-part " data-aos="fade-up" data-aos-delay="300">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="title">
                                    <h2>
                                        Cutting-Edge Infrastructure for<span className="theme-color"> AI Innovation</span>
                                    </h2>
                                    <p>
                                        Gain insights into the robust technology stack powering our AIaaS platform, encompassing cloud computing, machine learning frameworks, and DevOps practices, ensuring optimal performance and scalability.
                                    </p>
                                    <div className="inner-btn d-adjust">
                                        <div>
                                            <Link className="default-btn" to="/contact">
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
