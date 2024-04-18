import React from "react";
import "./BlockChainGame.css"

const BlockchainService = () => {

    return (
        <>
            <section style={{ background: "#F8F9FA" }}>
                <div
                    className="container-fulid key_features"
                >
                    <h2 className="auto-container" style={{ color: "black" }}>	Blockchain Game Development Services<span className="theme-color"> <br />We Provide</span></h2>
                    <p style={{ color: "black", textAlign: "center", width: "70%", margin: "auto auto 80px auto" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores vitae nulla quidem deleniti officiis eligendi repellat labore dolor fugiat enim neque voluptatem consequatur minus, distinctio accusantium a eum? Optio, voluptatem.</p>
                    <div className="auto-container row key_features_section_container" style={{ rowGap: "29px" }}>
                        <div style={{ background: "white", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", borderRadius: "8px", width: "340px", height: "320px" }} className="key_features_card">
                            <img src="\assets\img\blockchain_game\block game services\conceptuli.svg" alt="" />
                            <h6 style={{ color: "black" }}> Conceptualization and Ideation</h6>
                            <p style={{ color: "black", marginBottom: "0" }}>
                                From brainstorming innovative game concepts to refining ideas, we assist in laying the foundation for your blockchain game.
                            </p>
                        </div>
                        <div style={{ background: "white", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", borderRadius: "8px", width: "340px", height: "320px" }} className="key_features_card">
                            <img src="\assets\img\blockchain_game\block game services\smartcontract.svg" alt="" />
                            <h6 style={{ color: "black" }}>Smart Contract Development</h6>
                            <p style={{ color: "black", marginBottom: "0" }}>
                                Implementing secure and efficient smart contracts to govern in-game transactions, assets, and rules.
                            </p>
                        </div>
                        <div style={{ background: "white", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", borderRadius: "8px", width: "340px", height: "320px" }} className="key_features_card">
                            <img src="\assets\img\blockchain_game\block game services\nftintegra.svg" alt="" />
                            <h6 style={{ color: "black" }}>NFT Integration</h6>
                            <p style={{ color: "black", marginBottom: "0" }}>
                                Leveraging non-fungible tokens (NFTs) to create unique in-game assets, collectibles, and experiences.
                            </p>
                        </div>
                        <div style={{ background: "white", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", borderRadius: "8px", width: "340px", height: "320px" }} className="key_features_card">
                            <img src="\assets\img\blockchain_game\block game services\blockchaininteg.svg" alt="" />
                            <h6 style={{ color: "black" }}>Blockchain Integration</h6>
                            <p style={{ color: "black", marginBottom: "0" }}>
                                Seamlessly integrating blockchain technology into game mechanics for enhanced security, transparency, and decentralization.
                            </p>
                        </div>
                        <div style={{ background: "white", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", borderRadius: "8px", width: "340px", height: "320px" }} className="key_features_card">
                            <img src="\assets\img\blockchain_game\block game services\multiplayer.svg" alt="" />
                            <h6 style={{ color: "black" }}> Multiplayer Functionality</h6>
                            <p style={{ color: "black", marginBottom: "0" }}>
                                Designing and developing multiplayer features enabled by blockchain for collaborative and competitive gaming experiences.
                            </p>
                        </div>
                        <div style={{ background: "white", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", borderRadius: "8px", width: "340px", height: "320px" }} className="key_features_card">
                            <img src="\assets\img\blockchain_game\block game services\deployment.svg" alt="" />
                            <h6 style={{ color: "black" }}>Deployment and Maintenance</h6>
                            <p style={{ color: "black", marginBottom: "0" }}>
                                Assisting in deploying your blockchain game to various platforms and providing ongoing support and maintenance services.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlockchainService;
