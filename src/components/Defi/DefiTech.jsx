import React, { useState } from "react";


const DefiTech = () => {
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
                        <h2 style={{ color: "black", textAlign: "center" }}>Our Tech Stack For<span className="theme-color"> DeFi Development</span></h2>
                        <p style={{ color: "black", textAlign: "center" }}>Helping startups and enterprises with the right blend of experience and technology.</p>
                        <div className="left_Language_div">
                            <div onClick={handleFrontEnd} style={{ color: frontend ? '#13C4A1' : 'black' }}>Languages</div>
                            <div onClick={handleMobile} style={{ color: mobile ? '#13C4A1' : 'black' }}>Tools</div>
                            <div onClick={handleBlockchain} style={{ color: blockchain ? '#13C4A1' : 'black' }}>Frameworks</div>
                            <div onClick={handleGame} style={{ color: game ? '#13C4A1' : 'black' }}>Blockchain</div>

                        </div>
                        {
                            frontend ? <div className="right_Language_div">
                                <div className="Card_service">
                                    <img src="/assets/img/Language/solidity.svg" alt="" />
                                    <div className="Card_name_sevice">Solidity</div>
                                </div>
                                <div className="Card_service">
                                    <img src="/assets/img/Language/nodejs-icon.svg" alt="" />
                                    <div className="Card_name_sevice">Node Js</div>
                                </div>
                                <div className="Card_service ">
                                    <img style={{ fill: "red" }} src="/assets/img/Language/PYTHON.svg" alt="" />
                                    <div className="Card_name_sevice">Python</div>
                                </div>
                                <div className="Card_service ">
                                    <img src="/assets/img/Language/rust-svgrepo-com.svg" alt="" />
                                    <div className="Card_name_sevice">Rust</div>
                                </div>
                                <div className="Card_service ">
                                    <img src="/assets/img/Language/JAVA.svg" alt="" />
                                    <div className="Card_name_sevice">Java</div>
                                </div>
                            </div> : mobile ? <div className="right_Language_div">
                                <div className="Card3_service">
                                    <img src="/assets/img/Language/ipfs-logo.svg" alt="" />
                                    <div className="Card_name_sevice">Truffle</div>
                                </div>
                                <div className="Card3_service">
                                    <img src="/assets/img/Language/FLUTTER.svg" alt="" />
                                    <div className="Card_name_sevice">Remix</div>
                                </div>
                                <div className="Card3_service">
                                    <img src="/assets/img/Language/SWIFT.svg" alt="" />
                                    <div className="Card_name_sevice">Hardhat</div>
                                </div>
                                <div className="Card3_service">
                                    <img src="/assets/img/Language/KATLIN.svg" alt="" />
                                    <div className="Card_name_sevice">OpenZeppelin</div>
                                </div>
                                <div className="Card3_service">
                                    <img src="/assets/img/Language/KATLIN.svg" alt="" />
                                    <div className="Card_name_sevice">Chainlink</div>
                                </div>
                            </div> : blockchain ? <div className="right_Language_div">
                                <div className="Card5_service">
                                    <img src="/assets/img/Language/ethereum-eth-logo.svg" alt="" />
                                    <div className="Card_name_sevice">Ether.js</div>
                                </div>
                                <div className="Card5_service">
                                    <img src="/assets/img/Language/solana-sol-logo.svg" alt="" />
                                    <div className="Card_name_sevice">Slither</div>
                                </div>
                                <div className="Card5_service">
                                    <img src="/assets/img/Language/cardano-ada-logo.svg" alt="" />
                                    <div className="Card_name_sevice">Drizzle</div>
                                </div>
                                <div className="Card5_service">
                                    <img src="/assets/img/Language/polkadot-new-dot-logo.svg" alt="" />
                                    <div className="Card_name_sevice">Embark</div>
                                </div>
                                <div className="Card5_service">
                                    <img src="/assets/img/Language/ipfs-logo.svg" alt="" />
                                    <div className="Card_name_sevice">Scaffold-ETH</div>
                                </div>
                            </div> : game ? <div className="right_Language_div">
                                <div className="Card6_service">
                                    <img src="/assets/img/Language/ethereum-eth-logo.svg" alt="" />
                                    <div className="Card_name_sevice">Ethereum</div>
                                </div>
                                <div className="Card6_service">
                                    <img src="/assets/img/Language/solana-sol-logo.svg" alt="" />
                                    <div className="Card_name_sevice">Solana</div>
                                </div>
                                <div className="Card6_service">
                                    <img src="/assets/img/Language/polygon-matic-logo (1).svg" alt="" />
                                    <div className="Card_name_sevice">Polygon</div>
                                </div>
                                <div className="Card6_service">
                                    <img src="/assets/img/Language/bnb-bnb-logo.svg" alt="" />
                                    <div className="Card_name_sevice">BNB Chain</div>
                                </div>
                                <div className="Card6_service">
                                    <img src="/assets/img/Language/csharp.svg.svg" alt="" />
                                    <div className="Card_name_sevice">Tron</div>
                                </div>
                                <div className="Card6_service">
                                    <img src="/assets/img/Language/blender-icon.svg" alt="" />
                                    <div className="Card_name_sevice">NEAR</div>
                                </div>
                                <div className="Card6_service">
                                    <img src="/assets/img/Language/cardano-ada-logo.svg" alt="" />
                                    <div className="Card_name_sevice">Cardano</div>
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

export default DefiTech;

