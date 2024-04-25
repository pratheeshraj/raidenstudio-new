import React from "react";

const DefiAbout = () => {
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
                                        src="/assets/img/defi/about.jpg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="right-wrapper ps-2">
                                <h2 style={{ color: "black" }} className="title">DeFi Development That Gets You Winning In The Cryptosphere
                                </h2>
                                <p style={{ color: "black" }}>
                                    If you are looking for the top-rated DeFi Development Company, you've come to the correct spot. We discovered the most skilled blockchain-focused DeFi app developers, who provide world-class DeFi design and development services. Our team creates cutting-edge decentralized applications for a range of business models, helping businesses in connecting with the target market.
                                </p>
                                <p style={{ color: "black" }}>
                                    We understand that dApps must meet high standards. We provide our clients with reliable decentralized applications that satisfy all blockchain requirements and user performance expectations by utilizing our in-depth knowledge and expertise of current DeFi app development technologies.                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Service Details Section End */}
        </>
    );
};

export default DefiAbout;
