import React from 'react'
import "./WhyChoose.css"
import { Link } from 'react-router-dom';

function WhyChoose() {

    return (
        <>
            {/* FAQ Section three start */}
            <section className="faq-section three whychoose_fulldiv">
                <div className="auto-container">
                    <div className="row wwhychoose_maindiv">
                        <div className="col-lg-4 whychoose_left_div">
                            <h6 style={{ marginBottom: "25px" }}>Why Choose us as your Blockchain Development Company?</h6>
                            <p>By partnering with Antier, you can rely on a team of technical experts with real-world experience
                                delivering end-to-end Blockchain development services.</p>
                            <div className="inner-btn">
                                <div>
                                    <Link className="default-btn" to="/contact">
                                        Talk To Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 whychoose_right_div">
                            <div>
                                <div>Blockchain Pioneers</div>
                                <p>With years of experience in blockchain technology, we are the industry
                                    pioneers with extensive expertise. We do one thing, and we do it well.</p>
                            </div>
                            <div>
                                <div>Blockchain Pioneers</div>
                                <p>With years of experience in blockchain technology, we are the industry
                                    pioneers with extensive expertise. We do one thing, and we do it well.</p>
                            </div>
                            <div>
                                <div>Blockchain Pioneers</div>
                                <p>With years of experience in blockchain technology, we are the industry
                                    pioneers with extensive expertise. We do one thing, and we do it well.</p>
                            </div>
                            <div>
                                <div>Blockchain Pioneers</div>
                                <p>With years of experience in blockchain technology, we are the industry
                                    pioneers with extensive expertise. We do one thing, and we do it well.</p>
                            </div>
                            <div>
                                <div>Blockchain Pioneers</div>
                                <p>With years of experience in blockchain technology, we are the industry
                                    pioneers with extensive expertise. We do one thing, and we do it well.</p>
                            </div>
                            <div>
                                <div>Blockchain Pioneers</div>
                                <p>With years of experience in blockchain technology, we are the industry
                                    pioneers with extensive expertise. We do one thing, and we do it well.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape-image">
                    <div className="shape-img-2 poa">
                        <img src="/assets/img/shape/01_shape.svg" alt="" />
                    </div>
                    <div className="shape-img-5 poa">
                        <img src="/assets/img/icon/26_icon.png" alt="" />
                    </div>
                </div>
            </section>
            {/* FAQ Section three end */}
        </>
    );
};


export default WhyChoose