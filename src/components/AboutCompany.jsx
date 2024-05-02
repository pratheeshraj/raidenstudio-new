import React from "react";
import { Link } from "react-router-dom";

const AboutCompany = () => {
    return (
        <>
            {/* About Section one Start */}
            <div className="about-section one" style={{ background: "white" }}>
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div
                                style={{ margin: "0" }}
                                className="right-wrapper "
                                data-aos="fade-left"
                                data-aos-delay="300"
                            >
                                <div className="section-title-shape-one">
                                    <h3 style={{ textAlign: "center", }}>ABOUT Raiden</h3>
                                    <h2 style={{ color: "black", textAlign: "center", fontSize: "2rem" }}>Raiden Studios: Powering the Future of Gaming, VR, AR, and Blockchain</h2>
                                    <p style={{ color: "black", textAlign: "center", }}>
                                        At Raiden Studios, we blend innovation with expertise to navigate the ever-evolving landscapes of gaming, virtual reality (VR), augmented reality (AR), and blockchain technology. As a premier consulting and solutions provider, we offer comprehensive services tailored to meet the unique needs of our clients in these dynamic industries.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About Section one End */}
        </>
    );
};

export default AboutCompany;
