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
                        <h2 style={{ color: "black", textAlign: "center" }}>Our Tech Stack For<span style={{ color: "#00ECE5" }}
                        > DeFi Development</span></h2>
                        <p style={{ color: "black", textAlign: "center" }}>Helping startups and enterprises with the right blend of experience and technology.</p>
                        <div className="left_Language_div">
                            <div onClick={handleFrontEnd} style={{ color: frontend ? '#00ECE5' : 'black' }}>Languages</div>
                            <div onClick={handleMobile} style={{ color: mobile ? '#00ECE5' : 'black' }}>Tools</div>
                            <div onClick={handleBlockchain} style={{ color: blockchain ? '#00ECE5' : 'black' }}>Frameworks</div>
                            <div onClick={handleGame} style={{ color: game ? '#00ECE5' : 'black' }}>Blockchain</div>

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
                                    <img src="/assets/img/Language/Truffle Suite.svg" alt="" />
                                    <div className="Card_name_sevice">Truffle</div>
                                </div>
                                <div className="Card3_service">
                                    <img src="/assets/img/Language/remix.svg" alt="" />
                                    <div className="Card_name_sevice">Remix</div>
                                </div>
                                <div className="Card3_service">
                                    <img src="/assets/img/Language/hardhat-logo.svg" alt="" />
                                    <div className="Card_name_sevice">Hardhat</div>
                                </div>
                                <div className="Card3_service">
                                    <img src="/assets/img/Language/openzeppelin-seeklogo.svg" alt="" />
                                    <div className="Card_name_sevice">OpenZeppelin</div>
                                </div>
                                <div className="Card3_service">
                                    <img src="/assets/img/Language/chainlink-link-logo.svg" alt="" />
                                    <div className="Card_name_sevice">Chainlink</div>
                                </div>
                            </div> : blockchain ? <div className="right_Language_div">
                                <div className="Card5_service">
                                    <img src="/assets/img/Language/ethers-seeklogo.svg" alt="" />
                                    <div className="Card_name_sevice">Ether.js</div>
                                </div>
                                <div className="Card5_service">
                                    <img src="/assets/img/Language/logo (1)-min.png" alt="" />
                                    <div className="Card_name_sevice">Slither</div>
                                </div>
                                <div className="Card5_service">
                                    <img src="/assets/img/Language/Skarmavbild-2021-07-14-kl.-16.38.05-1024x386-removebg-preview-min.png" alt="" />
                                    <div className="Card_name_sevice">Drizzle</div>
                                </div>
                                <div className="Card5_service">
                                    <img src="/assets/img/Language/Embark-removebg-preview-min.png" alt="" />
                                    <div className="Card_name_sevice">Embark</div>
                                </div>
                                <div className="Card5_service">
                                    <img src="/assets/img/Language/63a1d920e67a83396c581a94_IMyiXvP2rn-Hjx_Lbix41k0xkJfSdbRc1AHgw8Zdy9M-removebg-preview-min.png" alt="" />
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
                                    <img src="/assets/img/Language/tron-trx-logo.svg" alt="" />
                                    <div className="Card_name_sevice">Tron</div>
                                </div>
                                <div className="Card6_service">
                                    <img src="/assets/img/Language/near-protocol-near-logo.svg" alt="" />
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

