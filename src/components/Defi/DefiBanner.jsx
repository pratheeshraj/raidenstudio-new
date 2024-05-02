import React from "react";
import { Link } from "react-router-dom";

const DefiBanner = () => {
    return (
        <>
            {/* Counter-section one start */}
            <section
                className="counter-section one"
                style={{
                    backgroundImage: "url('/assets/img/defi/banner.jpg')",
                    backgroundSize: "cover"
                }}
            >
                <div className="auto-container">
                    <div className="award-part " data-aos="fade-up" data-aos-delay="300">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="title">
                                    <h2>
                                        Is your business prepared to embrace <span className="theme-color"> DeFi development services?</span>
                                    </h2>
                                    <p>
                                        Our DeFi development services can help you stay ahead in the rapidly evolving financial landscape. Embrace innovation, drive financial inclusion, and elevate your business with DeFi development services
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

export default DefiBanner;
