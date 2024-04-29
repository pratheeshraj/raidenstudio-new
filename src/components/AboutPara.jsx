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
                                        ABOUT COMPANY</h2>
                                    <p>
                                        We are a team of passionate Our team includes experts in a wide range of fields, including software development, game design, storytelling, and user experience design. We work closely with our clients to understand their unique needs and goals, and we use our expertise to create immersive experiences that exceed their expectations.
                                    </p>
                                    <p>
                                        At our core, we believe in the power of storytelling. We believe that immersive technologies can be used to tell stories in new and exciting ways, and we are constantly exploring new ways to use these technologies to connect with audiences on a deeper level.
                                    </p>
                                    <p>
                                        Whether you're looking to create a virtual reality training program, an immersive marketing experience, or a game-changing augmented reality application, we are here to help. We are passionate about what we do, and we are dedicated to helping our clients succeed in a rapidly-changing world.
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
                    {/* <img
                        className="shape-2 poa"
                        src="/assets/img/icon/84_icon.png"
                        alt=""
                    /> */}
                </div>
            </section>
            {/* About Section one End */}
        </>
    );
};

export default AboutSectionThree;
