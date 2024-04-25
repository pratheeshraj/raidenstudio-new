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
                                        src="/assets/img/web3/about.jpg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="right-wrapper ps-2">
                                <h2 style={{ color: "black" }} className="title">Expertise in Web 3.0 Development
                                </h2>
                                <p style={{ color: "black" }}>
                                    Our expertise in Web 3.0 development encompasses a deep understanding of both blockchain-related concepts and technical aspects, enabling us to deliver innovative solutions tailored to your business needs. Our key skills are
                                </p>
                                <p style={{ color: "black" }}>
                                    <span style={{ fontWeight: "bold" }}> Consensus Mechanisms:</span> Blockchain networks use various consensus mechanisms (e.g., Proof of Work, Proof of Stake) to validate and agree on the state of the ledger.
                                </p>
                                <p style={{ color: "black" }}>
                                    <span style={{ fontWeight: "bold" }}> Immutable Ledger:</span> Data on the blockchain is immutable, meaning once recorded, it cannot be altered or deleted, ensuring transparency and integrity.
                                </p>
                                <p style={{ color: "black" }}>
                                    <span style={{ fontWeight: "bold" }}> Node Setup and Management:</span> Running blockchain nodes and maintaining network connectivity is crucial for participating in blockchain networks.
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
