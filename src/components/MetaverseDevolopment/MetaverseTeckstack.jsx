import React, { useState } from "react";


const NftProgramming = () => {
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
                        <h2 style={{ color: "black", textAlign: "center" }}>Newest Tech Stack For <span className="theme-color"> Metaverse Development</span></h2>
                        {/* <p style={{ color: "black", textAlign: "center" }}>Helping startups and enterprises with the right blend of experience and technology.</p> */}
                        <div className="left_Language_div">
                            <div onClick={handleFrontEnd} style={{ color: frontend ? '#13C4A1' : 'black' }}>Blockchain Front-end</div>
                            <div onClick={handleMobile} style={{ color: mobile ? '#13C4A1' : 'black' }}>Blockchain Back-end</div>
                        </div>
                        {
                            frontend ? <div className="right_Language_div">
                                <div className="Card_service">
                                    <img src="/assets/img/Language/ethereum-eth-logo.svg" alt="" />
                                    <div className="Card_name_sevice">HTML</div>
                                </div>
                                <div className="Card_service">
                                    <img src="/assets/img/Language/bnb-bnb-logo.svg" alt="" />
                                    <div className="Card_name_sevice">CSS</div>
                                </div>
                                <div className="Card_service ">
                                    <img src="/assets/img/Language/REACT NATIVE.svg" alt="" />
                                    <div className="Card_name_sevice">React Native</div>
                                </div>
                                <div className="Card_service ">
                                    <img src="/assets/img/Language/solana-sol-logo.svg" alt="" />
                                    <div className="Card_name_sevice">Web3js</div>
                                </div>
                                <div className="Card_service ">
                                    <img src="/assets/img/Language/polygon-matic-logo (1).svg" alt="" />
                                    <div className="Card_name_sevice">Websocket</div>
                                </div>
                            </div> : mobile ? <div className="right_Language_div">
                                <div className="Card3_service">
                                    <img src="/assets/img/Language/ipfs-logo.svg" alt="" />
                                    <div className="Card_name_sevice">Rust</div>
                                </div>
                                <div className="Card3_service">
                                    <img src="/assets/img/Language/FLUTTER.svg" alt="" />
                                    <div className="Card_name_sevice">Solidity</div>
                                </div>
                                <div className="Card3_service">
                                    <img src="/assets/img/Language/nodejs-icon.svg" alt="" />
                                    <div className="Card_name_sevice">Node.js</div>
                                </div>
                                <div className="Card3_service">
                                    <img src="/assets/img/Language/mongo.svg" alt="" />
                                    <div className="Card_name_sevice">MongoDB</div>
                                </div>
                            </div> : ""
                        }
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

export default NftProgramming;

