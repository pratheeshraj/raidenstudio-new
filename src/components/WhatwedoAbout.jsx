import React from "react";

const WhatwedoAbout = () => {
    return (
        <>
            {/* About Section three Start */}
            <section className="about-section three" style={{ background: "#F8F9FA" }}>
                <div className="auto-container">
                    <div className="row">
                        <h2 style={{ textAlign: "center", color: "black", marginBottom: "60px" }}>
                            What We Do
                        </h2>
                        <div className="col-lg-6">
                            <div
                                className="right-wrapper pl-40 "
                                data-aos="fade-left"
                                data-aos-delay="300"
                            >
                                <div className="section-title-shape-one black">
                                    <h2 style={{ fontSize: "28px" }}>
                                        Solutions
                                    </h2>
                                    <p className="our_mission_about_para" >
                                        Leveraging the latest advancements in technology, we develop customized solutions that cater to the diverse needs of our clients. Whether you're seeking to create immersive gaming experiences, harness the potential of VR/AR for your business, or explore the opportunities presented by blockchain technology, we have the expertise to bring your vision to life.
                                    </p>
                                    <div className="about_what_we_do_image_2">
                                        <img src="/assets/img/ar/about.jpg" />
                                    </div>
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
                                    <div className="about_what_we_do_image_1">
                                        <img src="/assets/img/ar/about.jpg" />
                                    </div>
                                    <h2 style={{ fontSize: "28px" }}>
                                        Consulting
                                    </h2>
                                    <p className="our_mission_about_para">
                                        Our seasoned team of experts provides strategic guidance and industry insights to help businesses navigate the complexities of game development, VR/AR integration, and blockchain implementation. From conceptualization to execution, we offer personalized consulting services to ensure your project's success.
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

export default WhatwedoAbout;
