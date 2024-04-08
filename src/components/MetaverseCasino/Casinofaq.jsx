import React from 'react'

function Casinofaq() {
    return (
        <section className="faq-section one">
            <div className="auto-container">
                <div className="row">
                    <div className="col-lg-6 pe-4">
                        <div
                            className="section-title-shape-one left "
                            data-aos="fade-right"
                            data-aos-delay="300"
                        >
                            <h2>
                                FAQ
                            </h2>
                            <p style={{ marginBottom: "10px" }}>
                                The FAQ section provides concise answers to common questions about VirtualVegas, ensuring users easily access essential information about game fairness, payment methods, security measures, and more. Simplifying the user experience, it serves as a reliable resource for quick solutions, empowering users to navigate the platform confidently and enjoy immersive gaming
                            </p>
                        </div>
                        <div
                            className="img-file "
                            data-aos="fade-right"
                            data-aos-delay="500"
                        >
                            <img
                                className="img-fluid"
                                src="/assets/img/service/02_service.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div
                            className="faq-inner "
                            data-aos="fade-left"
                            data-aos-delay="300"
                            style={{ marginTop: "145px" }}
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
                                                Can I customize the VirtualVegas platform with my own branding?
                                            </button>
                                        </h2>
                                        <div
                                            id="flush-collapseOne"
                                            className="accordion-collapse collapse show"
                                            data-bs-parent="#accordionFlushExample"
                                        >
                                            <div className="accordion-body">
                                                Yes, VirtualVegas offers extensive customization options, allowing you to brand the platform with your own logos, colors, and themes.                                            </div>
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
                                                Are the games on VirtualVegas fair?
                                            </button>
                                        </h2>
                                        <div
                                            id="flush-collapseTwo"
                                            className="accordion-collapse collapse"
                                            data-bs-parent="#accordionFlushExample"
                                        >
                                            <div className="accordion-body">
                                                Yes, all games on VirtualVegas are built with certified random number generators (RNGs) to ensure fair and unbiased outcomes.                                            </div>
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
                                                How secure are transactions on the VirtualVegas platform?
                                            </button>
                                        </h2>
                                        <div
                                            id="flush-collapseThree"
                                            className="accordion-collapse collapse"
                                            data-bs-parent="#accordionFlushExample"
                                        >
                                            <div className="accordion-body">
                                                VirtualVegas prioritizes security and employs the latest encryption technology, including blockchain, to ensure that all transactions are secure and transparent.
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
                                                What devices are supported by VirtualVegas?
                                            </button>
                                        </h2>
                                        <div
                                            id="flush-collapseFour"
                                            className="accordion-collapse collapse"
                                            data-bs-parent="#accordionFlushExample"
                                        >
                                            <div className="accordion-body">
                                                VirtualVegas is designed to work seamlessly across all devices and operating systems, including desktop computers, smartphones, and virtual reality headsets.                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#flush-collapseFive"
                                                aria-expanded="false"
                                                aria-controls="flush-collapseFive"
                                            >
                                                Are there any bonuses or promotions available on VirtualVegas?
                                            </button>
                                        </h2>
                                        <div
                                            id="flush-collapseFive"
                                            className="accordion-collapse collapse"
                                            data-bs-parent="#accordionFlushExample"
                                        >
                                            <div className="accordion-body">
                                                Yes, VirtualVegas offers a range of bonuses and promotions to reward players, including welcome bonuses for new players, reload bonuses, free spins, and loyalty rewards for our most dedicated patrons. Be sure to check our promotions page regularly for the latest offers!                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>)
}

export default Casinofaq