

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
                        {/* why choose us - 1  */}

                        <div className="col-lg-6">
                            <div
                                className="right-wrapper pl-40 whychoose_left_about_image_div"
                                data-aos="fade-left"
                                data-aos-delay="300"
                            >
                                <div className="whychoose_left_about_image1">
                                    <img src="/assets/img/metaverse-block/about.jpg" />
                                    <img src="/assets/img/metaverse-block/about.jpg" />
                                </div>
                                <div className="whychoose_left_about_image2">
                                    <img src="/assets/img/metaverse-block/about.jpg" />
                                    <img src="/assets/img/metaverse-block/about.jpg" />
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className="right-wrapper pl-40 "
                                data-aos="fade-left"
                                data-aos-delay="300"
                            >
                                <div className="whychoose_left_about_content">
                                    <h6>Expertise</h6>
                                    <p>
                                        With years of experience in the gaming, VR, AR, and blockchain industries, we possess the knowledge and skills necessary to deliver exceptional results.
                                    </p>
                                </div>
                                <div className="whychoose_left_about_content">
                                    <h6>Innovation</h6>
                                    <p>
                                        We stay at the forefront of technological innovation, constantly exploring new trends and techniques to provide our clients with innovative solutions that set them apart in the marketplace.
                                    </p>
                                </div>
                                <div className="whychoose_left_about_content">
                                    <h6>Collaboration</h6>
                                    <p>
                                        We believe in the power of collaboration and work closely with our clients to understand their unique challenges and goals. By fostering open communication and collaboration, we ensure that our solutions are tailored to meet their specific needs.
                                    </p>
                                </div>
                                <div className="whychoose_left_about_content">
                                    <h6>Results-Driven</h6>
                                    <p>
                                        Our ultimate goal is to deliver tangible results that drive business growth and success. Whether it's increased user engagement, enhanced efficiency, or improved ROI, we are committed to helping our clients achieve their objectives.
                                    </p>
                                </div>
                            </div>
                        </div>


                        {/* why choose us - 2  */}

                        {/* <div className="">
                            <div
                                className="right-wrapper pl-40 whychoose_left_about_image_div2"
                                data-aos="fade-left"
                                data-aos-delay="300"
                            >
                                <div className="whychoose2_left_about_content">
                                    <h6>Expertise</h6>
                                    <p>With years of experience in the gaming, VR, AR, and blockchain industries, we possess the knowledge and skills necessary to deliver exceptional results.</p>
                                </div>
                                <div className="about_image_round_div_why">
                                    <img src="" />
                                </div>
                            </div>
                        </div> */}
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
