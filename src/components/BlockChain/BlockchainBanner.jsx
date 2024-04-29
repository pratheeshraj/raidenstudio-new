import React from "react";
import { Link } from "react-router-dom";

const BlockchainBanner = () => {
    return (
        <>
            {/* Counter-section one start */}
            <section
                className="counter-section one"
                style={{
                    backgroundImage: "url('/assets/img/custom-block/banner.jpg')",
                    backgroundSize: "cover"
                }}
            >
                <div className="auto-container">
                    <div className="award-part " data-aos="fade-up" data-aos-delay="300">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="title">
                                    <h2>
                                        Is your business ready to leverage the power of <span className="theme-color">custom blockchain solutions?</span>
                                    </h2>
                                    <p>
                                        Dive into the future of technology and innovation with tailored blockchain solutions designed to elevate your business to new heights.                                    </p>
                                    <div className="inner-btn d-adjust">
                                        <div>
                                            <Link className="default-btn" to="/contact-us">
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
