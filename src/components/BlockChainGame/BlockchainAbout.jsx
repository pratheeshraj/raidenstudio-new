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
                                <h2 style={{ color: "black" }} className="title"> Expertise in Blockchain Game Development
                                </h2>
                                <p style={{ color: "black" }}>
                                    Innovative, adaptable, and forward-thinking, our expertise in blockchain game development positions us as leaders in the industry, driving innovation and pushing the boundaries of what's possible in gaming. we have the expertise and passion to bring your ideas to life and revolutionize the gaming industry.
                                </p>
                                <p style={{ color: "black" }}>
                                    <span style={{ fontWeight: "bold" }}>Decentralized Game Logic:</span> Leveraging the decentralized nature of blockchain technology, we implement game logic directly on the blockchain through smart contracts.
                                </p>
                                <p style={{ color: "black" }}>
                                    <span style={{ fontWeight: "bold" }}>Interoperability and Cross-Game Assets:</span> We design blockchain games with interoperability in mind, allowing players to transfer assets seamlessly between different games and platforms.
                                </p>
                                {/* <p style={{ color: "black" }}>
                                    <span style={{ fontWeight: "bold" }}>Scalable Multiplayer Infrastructure:</span> Our expertise extends to designing and implementing scalable multiplayer infrastructure for blockchain games, accommodating large numbers of players while maintaining low latency and high performance.
                                </p> */}
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
