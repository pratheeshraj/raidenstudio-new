import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BlockchainPortfolio = () => {



    return (
        <>
            <section className="blog-section three">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-12 col-12">
                            <div
                                className="section-title-shape-one left black "
                                data-aos="fade-right"
                                data-aos-delay="300"
                            >
                                <h2 style={{ textAlign: "center", }}>
                                    Our
                                    <span className="theme-color"> Portfolios</span>
                                </h2>
                                <p style={{ textAlign: "center" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam qui dolorum explicabo praesentium, possimus optio id necessitatibus fugiat pariatur ea in esse est, reiciendis veniam et aliquam facilis temporibus nihil.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12" style={{ marginBottom: "20px" }}>
                            <div
                                className="blog-items "
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                <div className="img-file">
                                    <img
                                        className="img-fluid"
                                        src="/assets/img/service_nft/nft1.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="text-file" style={{ bottom: "0" }}>
                                    <div className="title" style={{ textAlign: "center" }}>
                                        <h2>
                                            <Link style={{ lineHeight: "30px" }} to="#">Crypto Clash</Link>
                                        </h2>
                                        <p>
                                            A multiplayer blockchain battle royale game where players compete for scarce resources and battle for supremacy in a post-apocalyptic world. Each in-game asset is represented as an NFT, allowing players to trade, collect, and upgrade their arsenal to gain an edge over their opponents.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12" style={{ marginBottom: "20px" }}>
                            <div
                                className="blog-items "
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                <div className="img-file">
                                    <img
                                        className="img-fluid"
                                        src="/assets/img/service_nft/nft2.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="text-file" style={{ bottom: "0" }}>
                                    <div className="title" style={{ textAlign: "center" }}>
                                        <h2>
                                            <Link style={{ lineHeight: "30px" }} to="#">Ether Empires</Link>
                                        </h2>
                                        <p>
                                            Set sail on a blockchain-powered adventure in Ether Empires, a strategy game where players build and manage their own empire on the Ethereum blockchain. Conquer territories, forge alliances, and trade resources with other players in a persistent virtual world.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12" style={{ marginBottom: "20px" }}>
                            <div
                                className="blog-items "
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                <div className="img-file">
                                    <img
                                        className="img-fluid"
                                        src="/assets/img/service_nft/nft3.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="text-file" style={{ bottom: "0" }}>
                                    <div className="title" style={{ textAlign: "center" }}>
                                        <h2>
                                            <Link style={{ lineHeight: "30px" }} to="#"> Crypto Critters</Link>
                                        </h2>
                                        <p>
                                            Enter the world of CryptoCritters, a virtual pet simulation game where players can collect, breed, and trade adorable creatures on the blockchain. Each CryptoCritter is an NFT with unique traits and characteristics, making them highly sought after by collectors and enthusiasts alike.
                                        </p>
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

export default BlockchainPortfolio;
