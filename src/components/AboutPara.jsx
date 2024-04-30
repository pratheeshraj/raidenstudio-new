import React from "react";

const AboutSectionThree = () => {
    return (
        <>
            {/* About Section three Start */}
            <section className="about-section three">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div
                                className="left-wrapper "
                                data-aos="fade-right"
                                data-aos-delay="300"
                            >
                                <div className="img-file">
                                    <img
                                        className="img-fluid "
                                        src="/assets/img/about/_e17fb051-856f-4968-a2c0-150430fd0b61 2.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className="right-wrapper pl-40 "
                                data-aos="fade-left"
                                data-aos-delay="300"
                            >
                                <div className="section-title-shape-one black">
                                    {/* <h3 style={}>ABOUT COMPANY</h3> */}
                                    <h2 style={{ fontSize: "30px", marginTop: "0" }}>
                                        Raiden Studios: Powering the Future of Gaming, VR, AR, and Blockchain
                                    </h2>
                                    <p>
                                        At Raiden Studios, we blend innovation with expertise to navigate the ever-evolving landscapes of gaming, virtual reality (VR), augmented reality (AR), and blockchain technology. As a premier consulting and solutions provider, we offer comprehensive services tailored to meet the unique needs of our clients in these dynamic industries.
                                    </p>
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

export default AboutSectionThree;
