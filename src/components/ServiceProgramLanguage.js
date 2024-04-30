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

    return (
        <>
            {/* FAQ Section three start */}
            <section className="faq-section three" style={{ background: "#F8F9FA" }}>
                <div className="auto-container">
                    <div className="row">
                        <h2 style={{ color: "black", textAlign: "center" }}>High-End Technologies<span className="theme-color"> We Use</span></h2>
                        <p style={{ color: "black", textAlign: "center" }}>Helping startups and enterprises with the right blend of experience and technology.</p>
                        <div className="left_Language_div">
                            <div onClick={handleFrontEnd} style={{ color: frontend ? '#13C4A1' : 'black' }}>AI Frameworks</div>
                            <div onClick={handleMobile} style={{ color: mobile ? '#13C4A1' : 'black' }}>Language & Tools </div>
                            <div onClick={handleBlockchain} style={{ color: blockchain ? '#13C4A1' : 'black' }}>Infra & Deployment</div>
                        </div>
                        {
                            frontend ? <div className="right_Language_div">
                                <div className="Card_service">
                                    <img src="/assets/img/Language/becomeamernstackdeveloper-mobile-min.png" alt="" />
                                    <div className="Card_name_sevice">OpenAI GPT</div>
                                </div>
                                <div className="Card_service">
                                    <img src="/assets/img/Language/Screenshot_2024-03-27_112007-removebg-preview-min.png" alt="" />
                                    <div className="Card_name_sevice">Microsoft Cognitive Toolkit (CNTK)</div>
                                </div>
                                <div className="Card_service ">
                                    <img style={{ scale: "1.3" }} src="/assets/img/Language/WebGL-Logo.wine.svg" alt="" />
                                    <div className="Card_name_sevice">TensorFlow</div>
                                </div>
                                <div className="Card_service ">
                                    <img style={{ scale: "1.3" }} src="/assets/img/Language/WebGL-Logo.wine.svg" alt="" />
                                    <div className="Card_name_sevice">PyTorch</div>
                                </div>
                                <div className="Card_service ">
                                    <img style={{ scale: "1.3" }} src="/assets/img/Language/WebGL-Logo.wine.svg" alt="" />
                                    <div className="Card_name_sevice">Keras</div>
                                </div>
                            </div> : mobile ? <div className="right_Language_div">
                                <div className="Card3_service">
                                    <img src="/assets/img/Language/REACT NATIVE.svg" alt="" />
                                    <div className="Card_name_sevice">Python</div>
                                </div>
                                <div className="Card3_service">
                                    <img src="/assets/img/Language/FLUTTER.svg" alt="" />
                                    <div className="Card_name_sevice">Java</div>
                                </div>
                                <div className="Card3_service">
                                    <img src="/assets/img/Language/SWIFT.svg" alt="" />
                                    <div className="Card_name_sevice">Jupyter Notebooks</div>
                                </div>
                                <div className="Card3_service">
                                    <img src="/assets/img/Language/KATLIN.svg" alt="" />
                                    <div className="Card_name_sevice">Git</div>
                                </div>
                            </div> : blockchain ? <div className="right_Language_div">
                                <div className="Card5_service">
                                    <img src="/assets/img/Language/ethereum-eth-logo.svg" alt="" />
                                    <div className="Card_name_sevice">Docker</div>
                                </div>
                                <div className="Card5_service">
                                    <img src="/assets/img/Language/solana-sol-logo.svg" alt="" />
                                    <div className="Card_name_sevice">Kubernetes</div>
                                </div>
                                <div className="Card5_service">
                                    <img src="/assets/img/Language/cardano-ada-logo.svg" alt="" />
                                    <div className="Card_name_sevice">AWS/Azure (Cloud Platforms)</div>
                                </div>
                                <div className="Card5_service">
                                    <img src="/assets/img/Language/polkadot-new-dot-logo.svg" alt="" />
                                    <div className="Card_name_sevice">Hadoop</div>
                                </div>
                                <div className="Card5_service">
                                    <img src="/assets/img/Language/ipfs-logo.svg" alt="" />
                                    <div className="Card_name_sevice">Apache Kafka</div>
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
