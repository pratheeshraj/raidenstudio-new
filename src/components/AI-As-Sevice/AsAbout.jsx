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
                            <div className="left-wrapper pe-2">
                                <div className="img-file">
                                    <img
                                        className="img-fluid"
                                        src="/assets/img/service/02_service.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="right-wrapper ps-2">
                                <h2 style={{ color: "black" }} className="title">AI-as-a-Service
                                </h2>
                                <p style={{ color: "black", fontWeight: "bold" }}>Experience the Benefits of AI Without the Complexity</p>
                                <p style={{ color: "black" }}>
                                    Unlock the power of Artificial Intelligence without the hassle of infrastructure setup and maintenance. Our AI-as-a-Service (AIaaS) solution offers a seamless experience, allowing you to leverage cutting-edge AI technologies without worrying about the intricacies of implementation.
                                </p>
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
