import React from "react";

const NftFaq = () => {

    return (
        <>
            <section className="faq-section one">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div
                                className="section-title-shape-one left "
                                data-aos="fade-right"
                                data-aos-delay="300"
                            >
                                <h3>
                                    FAQ
                                </h3>
                                <h2>
                                    Answers At A <br /><span className="theme-color"> Glance</span>
                                </h2>
                                <p style={{ marginBottom: "10px" }}>
                                    We've compiled concise yet informative answers to common questions about NFTs and how our development services can benefit your business.
                                </p>
                            </div>
                            <div
                                className="img-file "
                                data-aos="fade-right"
                                data-aos-delay="500"
                            >
                                <img
                                    className="img-fluid"
                                    src="/assets/img/nft/faq.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className="faq-inner "
                                data-aos="fade-left"
                                data-aos-delay="300"
                            >
                                <div className="intro">
                                    <h3>Common Question &amp; Answer</h3>
                                </div>
                                <div className="faq-list">
                                    <div
                                        className="accordion accordion-flush"
                                        id="accordionFlushExample"
                                    >
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button
                                                    className="accordion-button"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#flush-collapseOne"
                                                    aria-expanded="false"
                                                    aria-controls="flush-collapseOne"
                                                >
                                                    What are NFTs?
                                                </button>
                                            </h2>
                                            <div
                                                id="flush-collapseOne"
                                                className="accordion-collapse collapse show"
                                                data-bs-parent="#accordionFlushExample"
                                            >
                                                <div className="accordion-body">
                                                    NFTs, or Non-Fungible Tokens, are unique digital assets stored on a blockchain that certify ownership and authenticity of digital items like art, music, videos, and virtual real estate.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#flush-collapseTwo"
                                                    aria-expanded="false"
                                                    aria-controls="flush-collapseTwo"
                                                >
                                                    Why should I consider NFT development services for my business?
                                                </button>
                                            </h2>
                                            <div
                                                id="flush-collapseTwo"
                                                className="accordion-collapse collapse"
                                                data-bs-parent="#accordionFlushExample"
                                            >
                                                <div className="accordion-body">
                                                    NFTs offer a new way to monetize digital assets, create scarcity, and establish ownership in the digital world. Our development services can help you leverage this technology to tap into new revenue streams and engage with your audience in innovative ways.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#flush-collapseThree"
                                                    aria-expanded="false"
                                                    aria-controls="flush-collapseThree"
                                                >
                                                    What types of projects can benefit from NFT development services?
                                                </button>
                                            </h2>
                                            <div
                                                id="flush-collapseThree"
                                                className="accordion-collapse collapse"
                                                data-bs-parent="#accordionFlushExample"
                                            >
                                                <div className="accordion-body">
                                                    Any project that involves digital assets with unique value, such as artwork, collectibles, gaming assets, virtual real estate, and intellectual property, can benefit from NFT development services.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#flush-collapseFour"
                                                    aria-expanded="false"
                                                    aria-controls="flush-collapseFour"
                                                >
                                                    What is the process for developing NFTs with your services?
                                                </button>
                                            </h2>
                                            <div
                                                id="flush-collapseFour"
                                                className="accordion-collapse collapse"
                                                data-bs-parent="#accordionFlushExample"
                                            >
                                                <div className="accordion-body">
                                                    Our process typically involves consultation to understand your project goals, followed by design and development of smart contracts, integration with blockchain platforms, testing, and deployment.
                                                </div>
                                            </div>
                                        </div>
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

export default NftFaq;
