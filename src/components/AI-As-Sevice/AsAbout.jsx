import React from "react";

const BlockchainAbout = () => {
    return (
        <>
            {/* Service Details Section Start */}
            <section
                style={{ background: "white" }}
                className="service-details-section"
                data-aos="fade-up"
                data-aos-delay="300"
            >
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="left-wrapper ">
                                <div className="img-file">
                                    <img
                                        className="img-fluid"
                                        src="/assets/img/ai-as-service/about.jpg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="right-wrapper ps-2">
                                <h2 style={{ color: "black" }} className="title">AI-as-a-Service
                                </h2>
                                <p style={{ color: "black", fontWeight: "bold" }}>Expertise in AI Models: Tailored Solutions for Your Needs</p>
                                <p style={{ color: "black" }}>
                                    Unlock the power of Artificial Intelligence without the hassle of infrastructure setup and maintenance. Our AI-as-a-Service (AIaaS) solution offers a seamless experience, Our Tailor-made solutions to address  for your unique business challenges , They are
                                </p>
                                <ul style={{ color: "black", fontSize: "16px", listStyleType: "square", marginLeft: "18px" }}>
                                    <li style={{ marginBottom: "5px" }} >Natural Language Processing ( NLP )</li>
                                    <li style={{ marginBottom: "5px" }}>Computer Vision</li>
                                    <li style={{ marginBottom: "5px" }}>Predictive Analytics</li>
                                    <li style={{ marginBottom: "5px" }}>Speech Recognition</li>
                                    <li style={{ marginBottom: "5px" }}>Recommender Systems</li>
                                    <li style={{ marginBottom: "5px" }}>Anomaly Detection</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Service Details Section End */}
        </>
    );
};

export default BlockchainAbout;
