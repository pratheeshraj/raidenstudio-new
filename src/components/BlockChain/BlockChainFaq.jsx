import React from "react";

const BlockChainFaq = () => {

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
                                <h3 style={{ color: "#53A6FF" }}>
                                    FAQ
                                </h3>
                                <h2>
                                    Answers At A <br /><span style={{ color: "#53A6FF" }}> Glance</span>
                                </h2>
                                <p style={{ marginBottom: "10px" }}>
                                    Gain clarity on the benefits, industries served, development timelines, ongoing support, and how to kickstart your journey into the world of tailored blockchain solutions.
                                </p>
                            </div>
                            <div
                                className="img-file "
                                data-aos="fade-right"
                                data-aos-delay="500"
                            >
                                <img
                                    className="img-fluid"
                                    src="/assets/img/custom-block/faq.jpg"
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
                                                    className="accordion-button coustom-blockchain-color"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#flush-collapseOne"
                                                    aria-expanded="false"
                                                    aria-controls="flush-collapseOne"
                                                >
                                                    What are custom blockchain solutions?
                                                </button>
                                            </h2>
                                            <div
                                                id="flush-collapseOne"
                                                className="accordion-collapse collapse show"
                                                data-bs-parent="#accordionFlushExample"
                                            >
                                                <div className="accordion-body">
                                                    Custom blockchain solutions are tailored technological platforms built to meet specific business needs using blockchain technology. They offer flexibility, security, and efficiency by addressing unique requirements.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button
                                                    className="accordion-button collapsed coustom-blockchain-color"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#flush-collapseTwo"
                                                    aria-expanded="false"
                                                    aria-controls="flush-collapseTwo"
                                                >
                                                    How can custom blockchain solutions benefit my business?
                                                </button>
                                            </h2>
                                            <div
                                                id="flush-collapseTwo"
                                                className="accordion-collapse collapse"
                                                data-bs-parent="#accordionFlushExample"
                                            >
                                                <div className="accordion-body">
                                                    Custom blockchain solutions can streamline operations, enhance transparency, improve security, reduce costs, and provide a competitive edge by leveraging decentralized and immutable ledger technology.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button
                                                    className="accordion-button collapsed coustom-blockchain-color"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#flush-collapseThree"
                                                    aria-expanded="false"
                                                    aria-controls="flush-collapseThree"
                                                >
                                                    How do I know if my business needs a custom blockchain solution?
                                                </button>
                                            </h2>
                                            <div
                                                id="flush-collapseThree"
                                                className="accordion-collapse collapse"
                                                data-bs-parent="#accordionFlushExample"
                                            >
                                                <div className="accordion-body">
                                                    Consider implementing a custom blockchain solution if you face challenges related to data security, transparency, traceability, efficiency, or if you operate in industries where trust and authenticity are paramount.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button
                                                    className="accordion-button collapsed coustom-blockchain-color"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#flush-collapseFour"
                                                    aria-expanded="false"
                                                    aria-controls="flush-collapseFour"
                                                >
                                                    What industries can benefit from custom blockchain solutions?
                                                </button>
                                            </h2>
                                            <div
                                                id="flush-collapseFour"
                                                className="accordion-collapse collapse"
                                                data-bs-parent="#accordionFlushExample"
                                            >
                                                <div className="accordion-body">
                                                    Virtually any industry can benefit, but particularly those with complex supply chains, financial transactions, identity verification, intellectual property management, healthcare records, and legal documentation.
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

export default BlockChainFaq;
