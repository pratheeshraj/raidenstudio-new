import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ServiceProgramLanguage.css"


const ServiceProgramLanguage = () => {
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
    const handleBackend = () => {
        setFrontend(false)
        setBackend(true)
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
    const handleDatabase = () => {
        setFrontend(false)
        setBackend(false)
        setMobile(false)
        setDatabase(true)
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
            <section className="faq-section three" style={{ background: "#F8F9FA" }}>
                <div className="auto-container">
                    <div className="row">
                        <h2 style={{ color: "black", textAlign: "center" }}>High-End Technologies We Use</h2>
                        <p style={{ color: "black", textAlign: "center" }}>Helping startups and enterprises with the right blend of experience and technology.</p>
                        <div className="left_Language_div">
                            <div onClick={handleFrontEnd} style={{ color: frontend ? '#13C4A1' : 'black' }}>Frontend</div>
                            <div onClick={handleBackend} style={{ color: backend ? '#13C4A1' : 'black' }}>Backend </div>
                            <div onClick={handleMobile} style={{ color: mobile ? '#13C4A1' : 'black' }}>Mobile </div>
                            <div onClick={handleDatabase} style={{ color: database ? '#13C4A1' : 'black' }}>Database</div>
                            <div onClick={handleBlockchain} style={{ color: blockchain ? '#13C4A1' : 'black' }}>Blockchain</div>
                            <div onClick={handleGame} style={{ color: game ? '#13C4A1' : 'black' }}>Game</div>
                        </div>
                        {
                            frontend ? <div className="right_Language_div">
                                <div className="Card_service">
                                    <img src="/assets/img/Language/react-2.svg" alt="" />
                                    <div className="Card_name_sevice">React</div>
                                </div>
                                <div className="Card_service">
                                    <img src="/assets/img/Language/ANGULAR.svg" alt="" />
                                    <div className="Card_name_sevice">Angular</div>
                                </div>
                                <div className="Card_service ">
                                    <img src="/assets/img/Language/Vue.js_Logo_2.svg" alt="" />
                                    <div className="Card_name_sevice">Vue</div>
                                </div>
                                <div className="Card_service">
                                    <img src="/assets/img/Language/javascript-1.svg" alt="" />
                                    <div className="Card_name_sevice">JavaScript</div>
                                </div>
                                <div className="Card_service">
                                    <img src="/assets/img/Language/JQUERY.svg" alt="" />
                                    <div className="Card_name_sevice">jQuery</div>
                                </div>

                            </div> : backend ?
                                <div className="right_Language_div">
                                    <div className="Card2_service">
                                        <img src="/assets/img/Language/nodejs-icon.svg" alt="" />
                                        <div className="Card_name_sevice">Node Js</div>
                                    </div>
                                    <div className="Card2_service">
                                        <img src="/assets/img/Language/PYTHON.svg" alt="" />
                                        <div className="Card_name_sevice">Python</div>
                                    </div>
                                    <div className="Card2_service ">
                                        <img src="/assets/img/Language/JAVA.svg" alt="" />
                                        <div className="Card_name_sevice">Java</div>
                                    </div>
                                    <div className="Card2_service">
                                        <img src="/assets/img/Language/NEST JS.svg" alt="" />
                                        <div className="Card_name_sevice">Nest Js</div>
                                    </div>
                                </div> : database ? <div className="right_Language_div">
                                    <div className="Card4_service">
                                        <img src="/assets/img/Language/postgresq.svg" alt="" />
                                        <div className="Card_name_sevice">Postgres</div>
                                    </div>
                                    <div className="Card4_service">
                                        <img src="/assets/img/Language/mongo.svg" alt="" />
                                        <div className="Card_name_sevice">MongoDB</div>
                                    </div>
                                    <div className="Card4_service">
                                        <img src="/assets/img/Language/sql server.svg" alt="" />
                                        <div className="Card_name_sevice">SQL Server</div>
                                    </div>
                                    <div className="Card4_service">
                                        <img src="/assets/img/Language/mysql-icon.svg" alt="" />
                                        <div className="Card_name_sevice">MySQL</div>
                                    </div>
                                </div> : mobile ? <div className="right_Language_div">
                                    <div className="Card3_service">
                                        <img src="/assets/img/Language/REACT NATIVE.svg" alt="" />
                                        <div className="Card_name_sevice">React Native</div>
                                    </div>
                                    <div className="Card3_service">
                                        <img src="/assets/img/Language/FLUTTER.svg" alt="" />
                                        <div className="Card_name_sevice">Flutter</div>
                                    </div>
                                    <div className="Card3_service">
                                        <img src="/assets/img/Language/SWIFT.svg" alt="" />
                                        <div className="Card_name_sevice">Swift</div>
                                    </div>
                                    <div className="Card3_service">
                                        <img src="/assets/img/Language/KATLIN.svg" alt="" />
                                        <div className="Card_name_sevice">Kotlin</div>
                                    </div>
                                </div> : blockchain ? <div className="right_Language_div">
                                    <div className="Card5_service">
                                        <img src="/assets/img/Language/ethereum-eth-logo.svg" alt="" />
                                        <div className="Card_name_sevice">Ethereum</div>
                                    </div>
                                    <div className="Card5_service">
                                        <img src="/assets/img/Language/solana-sol-logo.svg" alt="" />
                                        <div className="Card_name_sevice">Solana</div>
                                    </div>
                                    <div className="Card5_service">
                                        <img src="/assets/img/Language/polygon-matic-logo (1).svg" alt="" />
                                        <div className="Card_name_sevice">Polygon</div>
                                    </div>
                                    <div className="Card5_service">
                                        <img src="/assets/img/Language/bnb-bnb-logo.svg" alt="" />
                                        <div className="Card_name_sevice">Binance Smart Chain</div>
                                    </div>
                                    <div className="Card5_service">
                                        <img src="/assets/img/Language/cardano-ada-logo.svg" alt="" />
                                        <div className="Card_name_sevice">Cardano</div>
                                    </div>
                                    <div className="Card5_service">
                                        <img src="/assets/img/Language/fantom-ftm-logo.svg" alt="" />
                                        <div className="Card_name_sevice">Fantom</div>
                                    </div>
                                    <div className="Card5_service">
                                        <img src="/assets/img/Language/polkadot-new-dot-logo.svg" alt="" />
                                        <div className="Card_name_sevice">PolkaDot</div>
                                    </div>
                                </div> : game ? <div className="right_Language_div">
                                    <div className="Card6_service">
                                        <img src="/assets/img/Language/UNITY.svg" alt="" />
                                        <div className="Card_name_sevice">Unity</div>
                                    </div>
                                    <div className="Card6_service">
                                        <img style={{ fill: "red" }} src="/assets/img/Language/unreal-engine 1.svg" alt="" />
                                        <div className="Card_name_sevice">UnReal</div>
                                    </div>
                                    <div className="Card6_service">
                                        <img src="/assets/img/Language/augmented-reality (1)-min.png" alt="" />
                                        <div className="Card_name_sevice">Augumented Reality</div>
                                    </div>
                                    <div className="Card6_service">
                                        <img src="/assets/img/Language/apple-vision-pro-labs-256x256_2x.png" alt="" />
                                        <div className="Card_name_sevice">Virtual Reality</div>
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

export default ServiceProgramLanguage;
