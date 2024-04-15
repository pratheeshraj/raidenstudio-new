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
                                <h2 style={{ color: "black" }} className="title"> Blockchain Game Development Services We Provide:
                                </h2>
                                <p style={{ color: "black" }}>
                                    <span style={{ fontWeight: "bold" }}>At Raiden, we offer comprehensive blockchain game development services tailored to meet your unique needs. Our services include:</span>
                                    <br />
                                    Conceptualization and Ideation: From brainstorming innovative game concepts to refining ideas, we assist in laying the foundation for your blockchain game.
                                    Smart Contract Development: Implementing secure and efficient smart contracts to govern in-game transactions, assets, and rules.
                                    NFT Integration: Leveraging non-fungible tokens (NFTs) to create unique in-game assets, collectibles, and experiences.
                                    Blockchain Integration: Seamlessly integrating blockchain technology into game mechanics for enhanced security, transparency, and decentralization.
                                    Multiplayer Functionality: Designing and developing multiplayer features enabled by blockchain for collaborative and competitive gaming experiences.

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
