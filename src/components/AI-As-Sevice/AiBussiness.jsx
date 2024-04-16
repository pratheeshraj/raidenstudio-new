import React from "react";
import image1 from "../../images/raidenverse/Frame8.jpg";
import image2 from "../../images/raidenverse/Frame12.jpg";
import image3 from "../../images/raidenverse/Frame11.jpg";
import image4 from "../../images/raidenverse/Frame10.jpg";
const AiBussiness = () => {
    return (
        <>
            {/* Service Details Section Start */}

            <section className="project-section three" style={{ background: "white" }}>
                <div className="auto-container">
                    <div className="row">
                        <div className="">
                            <div
                                className="section-title-shape-one left black "
                                data-aos="fade-right"
                                data-aos-delay="300"
                            >
                                <h2 style={{ textAlign: "center", width: "100%" }}>
                                    Unlocking the Power of AI for
                                    <span className="theme-color"> <br /> Your Business</span>
                                </h2>
                                <p style={{ textAlign: "center", width: "90%" }}>Learn why leveraging our AI-as-a-Service offerings is essential for your business, enabling you to harness the transformative potential of AI without the complexities of infrastructure management.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div
                                className="project-wrapper "
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                <div className="img-file por">
                                    <img className="img-fluid" style={{ height: "362px" }} src={image1} alt="" />
                                    <div className="shape-overlay poa">
                                        <div className="inner Industry">
                                            <h2>Focus on Core Competencies</h2>

                                            <div className="link d-inline-block">
                                                <p>
                                                    By outsourcing AI infrastructure and development to us, you can focus on your core business activities, driving innovation and growth.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className="project-wrapper "
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                <div className="img-file por">
                                    <img className="img-fluid" style={{ height: "362px" }} src={image2} alt="" />
                                    <div className="shape-overlay poa">
                                        <div className="inner Industry">
                                            <h2>Cost Efficiency</h2>

                                            <div className="link d-inline-block">
                                                <p>
                                                    Eliminate the need for upfront investment in AI infrastructure and resources, paying only for what you use, thus reducing overall operational costs
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className="project-wrapper "
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                <div className="img-file por">
                                    <img className="img-fluid" src={image4} style={{ height: "362px" }} alt="" />
                                    <div className="shape-overlay poa">
                                        <div className="inner Industry">
                                            <h2>Rapid Deployment</h2>

                                            <div className="link d-inline-block">
                                                <p>
                                                    Expedite the deployment of AI solutions with our ready-to-use infrastructure and pre-built models, accelerating time-to-value for your AI initiatives.  </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className="project-wrapper "
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                <div className="img-file por">
                                    <img className="img-fluid" src={image3} style={{ height: "362px" }} alt="" />
                                    <div className="shape-overlay poa">
                                        <div className="inner Industry">
                                            <h2>Access to Expertise</h2>

                                            <div className="link d-inline-block">
                                                <p>
                                                    Tap into the expertise of our AI specialists, who possess extensive experience in developing and deploying AI solutions across diverse industries.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default AiBussiness;
