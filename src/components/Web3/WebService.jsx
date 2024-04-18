import React from "react";

const WebService = () => {

    return (
        <>
            <section>
                <div
                    className="container-fulid key_features"
                    style={{ background: "#F8F9FA" }}
                >
                    <h2 className="auto-container" style={{ color: "black" }}>Our Popular Services In <span className="theme-color"> Web 3.0 <br />Development </span></h2>
                    <p style={{ color: "black", textAlign: "center", width: "70%", margin: "auto auto 80px auto" }}>Unlock the endless possibilities of Web 3.0 with our comprehensive range of services tailored to meet your specific needs.
                    </p>
                    <div className="auto-container row key_features_section_container" style={{ rowGap: "29px" }}>
                        <div style={{ background: "white", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", borderRadius: "8px", width: "340px", height: "320px" }} className="key_features_card">
                            <img src="/assets/img/web3-services/dapp.svg" alt="" />
                            <h6 style={{ color: "black" }}>Decentralized Application (DApp) Development</h6>
                            <p style={{ color: "black", marginBottom: "0" }}>
                                Revolutionize your business operations with custom-built decentralized applications, leveraging the security and transparency of blockchain technology.
                            </p>
                        </div>
                        <div style={{ background: "white", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", borderRadius: "8px", width: "340px", height: "320px" }} className="key_features_card">
                            <img src="/assets/img/web3-services/smartcontract.svg" alt="" />
                            <h6 style={{ color: "black" }}>Smart Contract Development</h6>
                            <p style={{ color: "black", marginBottom: "0" }}>
                                Automate agreements and transactions securely with smart contracts, ensuring trustless execution and immutable records on the blockchain.
                            </p>
                        </div>
                        <div style={{ background: "white", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", borderRadius: "8px", width: "340px", height: "320px" }} className="key_features_card">
                            <img src="/assets/img/web3-services/blockchaininteg.svg" alt="" />
                            <h6 style={{ color: "black" }}>Blockchain Integration</h6>
                            <p style={{ color: "black", marginBottom: "0" }}>
                                Seamlessly integrate blockchain technology into your existing systems or develop new solutions to enhance transparency, security, and efficiency.
                            </p>
                        </div>
                        <div style={{ background: "white", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", borderRadius: "8px", width: "340px", height: "320px" }} className="key_features_card">
                            <img src="/assets/img/web3-services/tokenization.svg" alt="" />
                            <h6 style={{ color: "black" }}>Tokenization Solutions</h6>
                            <p style={{ color: "black", marginBottom: "0" }}>
                                Explore new avenues for fundraising, asset management, and token economies with our expertise in tokenization services.
                            </p>
                        </div>
                        <div style={{ background: "white", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", borderRadius: "8px", width: "340px", height: "320px" }} className="key_features_card">
                            <img src="/assets/img/web3-services/nft.svg" alt="" />
                            <h6 style={{ color: "black" }}>NFT (Non-Fungible Token) Development</h6>
                            <p style={{ color: "black", marginBottom: "0" }}>
                                Capitalize on the growing trend of digital ownership and unique asset representation through custom NFT development solutions.
                            </p>
                        </div>
                        <div style={{ background: "white", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", borderRadius: "8px", width: "340px", height: "320px" }} className="key_features_card">
                            <img src="/assets/img/web3-services/immersive.svg" alt="" />
                            <h6 style={{ color: "black" }}>Custom Blockchain Development</h6>
                            <p style={{ color: "black", marginBottom: "0" }}>
                                Building custom blockchain solutions tailored to your specific business requirements, including private or permissioned blockchains, consensus mechanisms, and governance models, to address unique use cases and industry challenges.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WebService;
