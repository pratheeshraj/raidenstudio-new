import React from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import ReactVisibilitySensor from "react-visibility-sensor";

const AboutCount = () => {
    return (
        <>
            {/* Counter-section one start */}
            <section
                className="counter-section one"
                style={{
                    backgroundImage: "url('/assets/img/bg-image/04_bg-image.jpg')",
                    background: "#F8F9FA",
                    padding: "100px 0"
                }}
            >
                <div className="auto-container">
                    <div className="inner-wrapper">
                        <div className="row">
                            <div className="col-lg-6">
                                <div
                                    className="left-wrapper "
                                    data-aos="fade-right"
                                    data-aos-delay="300"
                                >
                                    <div className="title-des">
                                        <h2 style={{ color: "black" }}>Why Choose Raiden Studios?</h2>
                                    </div>
                                    <div className="list">
                                        <ul>
                                            <li style={{ color: "black", fontSize: "16px" }}>
                                                <i className="fa-regular fa-chevrons-right" />
                                                <span style={{ fontWeight: "bold", marginLeft: "10px", color: "black" }}>Expertise :</span>  With years of experience in the gaming, VR, AR, and blockchain industries, we possess the knowledge and skills necessary to deliver exceptional results.
                                            </li>
                                            <li style={{ color: "black", fontSize: "16px" }}>
                                                <i className="fa-regular fa-chevrons-right" />
                                                <span style={{ fontWeight: "bold", marginLeft: "10px", color: "black" }}>Innovation :</span>  We stay at the forefront of technological innovation, constantly exploring new trends and techniques to provide our clients with innovative solutions that set them apart in the marketplace.
                                            </li>
                                            <li style={{ color: "black", fontSize: "16px" }}>
                                                <i className="fa-regular fa-chevrons-right" />
                                                <span style={{ fontWeight: "bold", marginLeft: "10px", color: "black" }}>Collaboration :</span>  We believe in the power of collaboration and work closely with our clients to understand their unique challenges and goals. By fostering open communication and collaboration, we ensure that our solutions are tailored to meet their specific needs.
                                            </li>
                                            <li style={{ color: "black", fontSize: "16px" }}>
                                                <i className="fa-regular fa-chevrons-right" />
                                                <span style={{ fontWeight: "bold", marginLeft: "10px", color: "black" }}>Results-Driven :</span>  Our ultimate goal is to deliver tangible results that drive business growth and success. Whether it's increased user engagement, enhanced efficiency, or improved ROI, we are committed to helping our clients achieve their objectives.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div
                                    className="right-wrapper "
                                    data-aos="fade-left"
                                    data-aos-delay="300"
                                >
                                    <div className="d-sm-flex d-block gap-4">
                                        <div>
                                            <div className="item">
                                                <img src="/assets/img/metaverse-block/about.jpg" />
                                            </div>
                                            <div className="item mt-30">
                                                <img src="/assets/img/metaverse-block/about.jpg" />

                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <div className="item">
                                                <img src="/assets/img/metaverse-block/about.jpg" />

                                            </div>
                                            <div className="item mt-30">
                                                <img src="/assets/img/metaverse-block/about.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="shape-img">
                        <img
                            className="shape-5 poa"
                            src="./assets/img/icon/53_icon.png"
                            alt=""
                        />
                        <img
                            className="shape-6 poa"
                            src="./assets/img/icon/15_icon.png"
                            alt=""
                        />
                        <img
                            className="shape-7 poa"
                            src="./assets/img/icon/17_icon.png"
                            alt=""
                        />
                        <img
                            className="shape-8 poa"
                            src="./assets/img/icon/54_icon.png"
                            alt=""
                        />
                    </div> */}
                </div>
            </section>
            {/* Counter-section one end */}
        </>
    );
};

export default AboutCount;
