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
                                        src="/assets/img/custom-block/about.jpg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="right-wrapper ps-2">
                                <h2 style={{ color: "black" }} className="title">Discover the Decentralized Ecosystem with a Prominent Blockchain Development Company
                                </h2>
                                <p style={{ color: "black" }}>
                                    Raiden, a recognized Blockchain development company, is well-known for its blockchain development services. Our pool of blockchain developers is well-versed in the business's various capabilities, which vary from blockchain wallet development to developing top-tier Web3 solutions. Hire Blockchain developers from us if you want only the best experts to work for you, who have become industry experts by learning from every obstacle that the blockchain development project has offered. Our team of developers, designers, project managers, and other varied experts work together to create reliable and efficient blockchain solutions.
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
