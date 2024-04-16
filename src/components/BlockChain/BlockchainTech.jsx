import React, { useState } from "react";


const BlockchainTech = () => {
    const [frontend, setFrontend] = useState(true)
    const [backend, setBackend] = useState(false)
    const [mobile, setMobile] = useState(false)
    const [database, setDatabase] = useState(false)
    const [blockchain, setBlockchain] = useState(false)
    const [game, setGame] = useState(false)
    const handleFrontEnd = () => {
        setFrontend(true)
        setBackend(false)
        setMobile(false)
        setDatabase(false)
        setBlockchain(false)
        setGame(false)
    }
    const handleMobile = () => {
        setFrontend(false)
        setBackend(false)
        setMobile(true)
        setDatabase(false)
        setBlockchain(false)
        setGame(false)

    }
    const handleBlockchain = () => {
        setFrontend(false)
        setBackend(false)
        setMobile(false)
        setDatabase(false)
        setBlockchain(true)
        setGame(false)

    }
    const handleGame = () => {
        setFrontend(false)
        setBackend(false)
        setMobile(false)
        setDatabase(false)
        setBlockchain(false)
        setGame(true)

    }

    return (
        <>
            {/* FAQ Section three start */}
            <section className="faq-section three" style={{ background: "white" }}>
                <div className="auto-container">
                    <div className="row">
                        <h2 style={{ color: "black", textAlign: "center" }}>Blockchain Development Platforms <span className="theme-color"> <br />We Majorly Work on</span></h2>
                        <p style={{ color: "black", textAlign: "center" }}>As a leading blockchain app development company, we work with all popular blockchain and smart contract platforms along with developing custom blockchain solutions.</p>
                        <div className="right_Language_div">
                            <div className="Card_service">
                                <img src="/assets/img/Language/ethereum-eth-logo.svg" alt="" />
                                <div className="Card_name_sevice">Ethereum</div>
                            </div>
                            <div className="Card_service ">
                                <img src="/assets/img/Language/polygon-matic-logo (1).svg" alt="" />
                                <div className="Card_name_sevice">Polygon</div>
                            </div>
                            <div className="Card_service">
                                <img src="/assets/img/Language/bnb-bnb-logo.svg" alt="" />
                                <div className="Card_name_sevice">Binance Smart Chain</div>
                            </div>
                            <div className="Card_service ">
                                <img src="/assets/img/Language/solana-sol-logo.svg" alt="" />
                                <div className="Card_name_sevice">Solana</div>
                            </div>
                            <div className="Card_service ">
                                <img src="/assets/img/Language/cardano-ada-logo.svg" alt="" />
                                <div className="Card_name_sevice">Cardano</div>
                            </div>
                            <div className="Card_service ">
                                <img src="/assets/img/Language/cardano-ada-logo.svg" alt="" />
                                <div className="Card_name_sevice">Tron</div>
                            </div>
                            <div className="Card_service ">
                                <img src="/assets/img/Language/cardano-ada-logo.svg" alt="" />
                                <div className="Card_name_sevice">Flow</div>
                            </div>
                            <div className="Card_service ">
                                <img src="/assets/img/Language/cardano-ada-logo.svg" alt="" />
                                <div className="Card_name_sevice">Hyperledger</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape-image">
                    <div className="shape-img-1 poa">
                        <img src="/assets/img/Language/apple-vision-pro-labs-256x256_2x.png" alt="" />
                    </div>
                    <div className="shape-img-2 poa">
                        <img src="/assets/img/shape/01_shape.svg" alt="" />
                    </div>
                    <div className="shape-img-5 poa">
                        <img src="/assets/img/icon/26_icon.png" alt="" />
                    </div>
                    <div className="shape-img-6 poa">
                        <img src="/assets/img/Language/react-2.svg" alt="" />
                    </div>
                    <div className="shape-img-7 poa">
                        <img src="/assets/img/Language/nodejs-icon.svg" alt="" />
                    </div>

                </div>
            </section>
            {/* FAQ Section three end */}
        </>
    );
};

export default BlockchainTech;

