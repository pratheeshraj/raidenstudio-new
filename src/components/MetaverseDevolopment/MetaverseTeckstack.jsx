import React, { useState } from "react";
import { Link } from "react-router-dom";

const MetaverseTeckstack = () => {

    const [frontend, setFrontend] = useState(true)
    const [backend, setBackend] = useState(false)

    const handleFrontEnd = () => {
        setFrontend(true)
        setBackend(false)
    }

    const handleBackend = () => {
        setFrontend(false)
        setBackend(true)
    }

    return (
        <>
            {/* style={{background:"#F8F9FA"}} */}
            {/* FAQ Section three start */}
            <section className="faq-section three">
                <div className="auto-container">
                    <div className="row">
                        <h2 style={{ textAlign: "center" }}>High-End Technologies <span className="theme-color">We Use</span></h2>
                        <p style={{ textAlign: "center" }}>Helping startups and enterprises with the right blend of experience and technology.</p>
                        <div className="left_Language_div">
                            <div onClick={handleFrontEnd} style={{ color: frontend ? '#13C4A1' : '' }}>Blockchain Front-end</div>
                            <div onClick={handleBackend} style={{ color: backend ? '#13C4A1' : '' }}>Blockchain Back-end</div>
                        </div>
                        {
                            frontend ? <div className="right_Language_div">
                                <div className="card">
                                    <img src="/assets/img/Language/becomeamernstackdeveloper-mobile-min.png" alt="" />
                                    <div className="Card_name">HTML</div>
                                </div>
                                <div className="card">
                                    <img src="/assets/img/Language/Screenshot_2024-03-27_112007-removebg-preview-min.png" alt="" />
                                    <div className="Card_name">CSS</div>
                                </div>
                                <div className="card ">
                                    <img src="/assets/img/Language/WebGL-Logo.wine.svg" alt="" />
                                    <div className="Card_name">React Native</div>
                                </div>
                                <div className="card ">
                                    <img src="/assets/img/Language/WebGL-Logo.wine.svg" alt="" />
                                    <div className="Card_name">Web3js</div>
                                </div>
                                <div className="card ">
                                    <img src="/assets/img/Language/WebGL-Logo.wine.svg" alt="" />
                                    <div className="Card_name">Websocket</div>
                                </div>
                            </div>
                                : backend ? <div className="right_Language_div">
                                    <div className="card3">
                                        <img src="/assets/img/Language/REACT NATIVE.svg" alt="" />
                                        <div className="Card_name">Rust</div>
                                    </div>
                                    <div className="card3">
                                        <img src="/assets/img/Language/FLUTTER.svg" alt="" />
                                        <div className="Card_name">Solidity</div>
                                    </div>
                                    <div className="card3">
                                        <img src="/assets/img/Language/SWIFT.svg" alt="" />
                                        <div className="Card_name">Node.js</div>
                                    </div>
                                    <div className="card3">
                                        <img src="/assets/img/Language/KATLIN.svg" alt="" />
                                        <div className="Card_name">MongoDB</div>
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

export default MetaverseTeckstack;
