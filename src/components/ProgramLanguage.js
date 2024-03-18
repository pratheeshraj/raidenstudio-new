import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProgramLanguage.css"

const ProgramLanguage = () => {
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
            <section className="faq-section three">
                <div className="auto-container">
                    <div className="row">
                        <h2>High-End Technologies We Use</h2>
                        <p>Helping startups and enterprises with the right blend of experience and technology.</p>
                        <div className="col-lg-3 left_Language_div">
                            <div onClick={handleFrontEnd} style={{ color: frontend ? '#13C4A1' : 'inherit' }}>Frontend {frontend && <i class="fa-solid fa-right-long"></i>}</div>
                            <div onClick={handleBackend} style={{ color: backend ? '#13C4A1' : 'inherit' }}>Backend {backend && <i class="fa-solid fa-right-long"></i>}</div>
                            <div onClick={handleMobile} style={{ color: mobile ? '#13C4A1' : 'inherit' }}>Mobile {mobile && <i class="fa-solid fa-right-long"></i>}</div>
                            <div onClick={handleDatabase} style={{ color: database ? '#13C4A1' : 'inherit' }}>Database {database && <i class="fa-solid fa-right-long"></i>}</div>
                            <div onClick={handleBlockchain} style={{ color: blockchain ? '#13C4A1' : 'inherit' }}>Blockchain {blockchain && <i class="fa-solid fa-right-long"></i>}</div>
                            <div onClick={handleGame} style={{ color: game ? '#13C4A1' : 'inherit' }}>Game {game && <i class="fa-solid fa-right-long"></i>}</div>

                        </div>
                        {
                            frontend ? <div className="col-lg-9 right_Language_div">
                                <div className="card">
                                    <img src="/assets/img/Language/react-2.svg" alt="" />
                                    <div className="Card_name">React</div>
                                </div>
                                <div className="card">
                                    <img src="/assets/img/Language/ANGULAR.svg" alt="" />
                                    <div className="Card_name">Angular</div>
                                </div>
                                <div className="card ">
                                    <img src="/assets/img/Language/Vue.js_Logo_2.svg" alt="" />
                                    <div className="Card_name">Vue</div>
                                </div>
                                <div className="card">
                                    <img src="/assets/img/Language/javascript-1.svg" alt="" />
                                    <div className="Card_name">JavaScript</div>
                                </div>
                                <div className="card">
                                    <img src="/assets/img/Language/JQUERY.svg" alt="" />
                                    <div className="Card_name">jQuery</div>
                                </div>

                            </div> : backend ?
                                <div className="col-lg-8 right_Language_div2">
                                    <div className="card2">
                                        <img src="/assets/img/Language/nodejs-icon.svg" alt="" />
                                        <div className="Card_name">Node Js</div>
                                    </div>
                                    <div className="card2">
                                        <img src="/assets/img/Language/PYTHON.svg" alt="" />
                                        <div className="Card_name">Python</div>
                                    </div>
                                    <div className="card2 ">
                                        <img src="/assets/img/Language/JAVA.svg" alt="" />
                                        <div className="Card_name">Java</div>
                                    </div>
                                    <div className="card2">
                                        <img src="/assets/img/Language/NEST JS.svg" alt="" />
                                        <div className="Card_name">Nest Js</div>
                                    </div>
                                </div> : database ? <div className="col-lg-8 right_Language_div4">
                                <div className="card4">
                                        <img src="/assets/img/Language/postgresq.svg" alt="" />
                                        <div className="Card_name">Postgres</div>
                                    </div>
                                    <div className="card4">
                                        <img src="/assets/img/Language/mongo.svg" alt="" />
                                        <div className="Card_name">MongoDB</div>
                                    </div>
                                    <div className="card4">
                                        <img src="/assets/img/Language/sql server.svg" alt="" />
                                        <div className="Card_name">SQL Server</div>
                                    </div>
                                    <div className="card4">
                                        <img src="/assets/img/Language/NEST JS.svg" alt="" />
                                        <div className="Card_name">MySQL</div>
                                    </div>
                                </div> : mobile ? <div className="col-lg-8 right_Language_div2">
                                    <div className="card3">
                                        <img src="/assets/img/Language/REACT NATIVE.svg" alt="" />
                                        <div className="Card_name">React Native</div>
                                    </div>
                                    <div className="card3">
                                        <img src="/assets/img/Language/FLUTTER.svg" alt="" />
                                        <div className="Card_name">Flutter</div>
                                    </div>
                                    <div className="card3">
                                        <img src="/assets/img/Language/SWIFT.svg" alt="" />
                                        <div className="Card_name">Swift</div>
                                    </div>
                                    <div className="card3">
                                        <img src="/assets/img/Language/KATLIN.svg" alt="" />
                                        <div className="Card_name">Kotlin</div>
                                    </div>
                                    <div className="card3">
                                        <img src="/assets/img/Language/augmented-reality (1)-min.png" alt="" />
                                        <div className="Card_name">Augumented Reality</div>
                                    </div>
                                    <div className="card3">
                                        <img src="/assets/img/Language/apple-vision-pro-labs-256x256_2x.png" alt="" />
                                        <div className="Card_name">Virtual Reality</div>
                                    </div>
                                </div> : blockchain ? <div className="col-lg-8 right_Language_div">
                                    Blockchain
                                </div> : game ? <div className="col-lg-8 right_Language_div">
                                    Game
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

export default ProgramLanguage;
