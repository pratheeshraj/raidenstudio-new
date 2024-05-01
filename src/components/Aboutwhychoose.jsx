

import React from "react";

const Aboutwhychoose = () => {
    return (
        <>
            {/* About Section three Start */}
            <section className="about-section three">
                <div className="auto-container">
                    <div className="row">
                        <h2 style={{ textAlign: "center", color: "black", marginBottom: "60px" }}>
                            Why Choose Raiden Studios?
                        </h2>
                        <div className="col-lg-12">
                            <div
                                className="right-wrapper pl-40 "
                                data-aos="fade-left"
                                data-aos-delay="300"
                            >
                                <div className="section-title-shape-one black about_why_card_div">
                                    <div className="about_why_card">
                                        <img style={{ width: "300px" }} src="/assets/img/ar/about.jpg" />
                                        <h6 style={{ color: "black" }}>Expertise</h6>
                                        <p>
                                            With years of experience in the gaming, VR, AR, and blockchain industries, we possess the knowledge and skills necessary to deliver exceptional results.
                                        </p>
                                    </div>
                                    <div className="about_why_card">
                                        <img style={{ width: "300px" }} src="/assets/img/ar/about.jpg" />
                                        <h6 style={{ color: "black" }}>Innovation</h6>
                                        <p>
                                            We stay at the forefront of technological innovation, constantly exploring new trends and techniques to provide our clients with innovative solutions that set them apart in the marketplace.
                                        </p>                                    </div>
                                    <div className="about_why_card">
                                        <img style={{ width: "300px" }} src="/assets/img/ar/about.jpg" />
                                        <h6 style={{ color: "black" }}>Collaboration</h6>
                                        <p>
                                            We believe in the power of collaboration and work closely with our clients to understand their unique challenges and goals. By fostering open communication and collaboration, we ensure that our solutions are tailored to meet their specific needs.
                                        </p>
                                    </div>
                                    <div className="about_why_card">
                                        <img style={{ width: "300px" }} src="/assets/img/ar/about.jpg" />
                                        <h6 style={{ color: "black" }}>Results-Driven</h6>
                                        <p>
                                            Our ultimate goal is to deliver tangible results that drive business growth and success. Whether it's increased user engagement, enhanced efficiency, or improved ROI, we are committed to helping our clients achieve their objectives.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape-img">
                    <img
                        className="shape-1 poa"
                        src="/assets/img/shape/14_shape.png"
                        alt=""
                    />
                </div>
            </section>
            {/* About Section one End */}
        </>
    );
};

export default Aboutwhychoose;
