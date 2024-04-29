import React from "react";

const MetaverseFaq = () => {

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
                                    Get rapid insights into the transformative potential of Metaverse development services for your business.
                                </p>
                            </div>
                            <div
                                className="img-file "
                                data-aos="fade-right"
                                data-aos-delay="500"
                            >
                                <img
                                    className="img-fluid"
                                    src="/assets/img/metaverse-block/faq.jpg"
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
                                                    What services are included in your Metaverse Development package?
                                                </button>
                                            </h2>
                                            <div
                                                id="flush-collapseOne"
                                                className="accordion-collapse collapse show"
                                                data-bs-parent="#accordionFlushExample"
                                            >
                                                <div className="accordion-body">
                                                    We offer user-centered interfaces, decentralized structure, cross-platform integration, and digital space planning and development as part of our Metaverse Development services
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
                                                    Which core technologies are required for the development of a metaverse?
                                                </button>
                                            </h2>
                                            <div
                                                id="flush-collapseTwo"
                                                className="accordion-collapse collapse"
                                                data-bs-parent="#accordionFlushExample"
                                            >
                                                <div className="accordion-body">
                                                    Blockchain, AR/VR,  IoT, cloud computing, and 3D modeling are the core technologies for the development of the metaverse.
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
                                                    What differentiates your Metaverse Development services from competitors?
                                                </button>
                                            </h2>
                                            <div
                                                id="flush-collapseThree"
                                                className="accordion-collapse collapse"
                                                data-bs-parent="#accordionFlushExample"
                                            >
                                                <div className="accordion-body">
                                                    We develop captivating and functional virtual worlds with our Metaverse Development strategy, which blends decentralized architecture, cross-platform interoperability, and user-centered design. Our team of professionals has a strong track record of completing projects successfully and a wealth of industry knowledge.
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
                                                    What types of projects can be developed within the Metaverse?
                                                </button>
                                            </h2>
                                            <div
                                                id="flush-collapseFour"
                                                className="accordion-collapse collapse"
                                                data-bs-parent="#accordionFlushExample"
                                            >
                                                <div className="accordion-body">
                                                    Virtually any digital experience can be adapted for the Metaverse, including virtual events, conferences, trade shows, product showcases, interactive storytelling experiences, virtual training simulations, gaming environments, and more.
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

export default MetaverseFaq;
