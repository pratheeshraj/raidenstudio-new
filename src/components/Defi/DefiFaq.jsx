import React from "react";

const DefiFaq = () => {

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
                                Answers At A <br/>Glance
                                </h2>
                                <p style={{ marginBottom: "10px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aut cumque facere ab tempore iusto sapiente. Ex quisquam modi corporis dicta, qui, eveniet dolor amet delectus molestias incidunt suscipit neque?</p>
                            </div>
                            <div
                                className="img-file "
                                data-aos="fade-right"
                                data-aos-delay="500"
                            >
                                <img
                                    className="img-fluid"
                                    src="/assets/img/defi/faq.jpg"
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
                                                    What is Decentralised Financing (DeFi)?
                                                </button>
                                            </h2>
                                            <div
                                                id="flush-collapseOne"
                                                className="accordion-collapse collapse show"
                                                data-bs-parent="#accordionFlushExample"
                                            >
                                                <div className="accordion-body">
                                                    Decentralised Finance, often known as DeFi, is an open financial system that operates on a blockchain platform and allows users to participate directly in financial services such as trading, making investments, lending, and more.
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
                                                    Is DeFi suitable for small or large-scale businesses?
                                                </button>
                                            </h2>
                                            <div
                                                id="flush-collapseTwo"
                                                className="accordion-collapse collapse"
                                                data-bs-parent="#accordionFlushExample"
                                            >
                                                <div className="accordion-body">
                                                    Yes, DeFi technology is very flexible and inexpensive. Everything that has to be done, from design to implementation, can be done fairly inexpensively. Furthermore, it is essential to advancing your business's advanced operations. It is simple to expand with more solutions and doesn't require much work.
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
                                                    Where can I utilize DeFi development?
                                                </button>
                                            </h2>
                                            <div
                                                id="flush-collapseThree"
                                                className="accordion-collapse collapse"
                                                data-bs-parent="#accordionFlushExample"
                                            >
                                                <div className="accordion-body">
                                                    Individuals, investors, and traders can access Decentralized ecosystem by just linking up for a Defi platform. Defi development can be used in a number of sectors, including crowdfunding, insurance, lending and borrowing, asset management, decentralized exchange, and tokenization of assets.
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
                                                    How much does it cost to build DeFi?
                                                </button>
                                            </h2>
                                            <div
                                                id="flush-collapseFour"
                                                className="accordion-collapse collapse"
                                                data-bs-parent="#accordionFlushExample"
                                            >
                                                <div className="accordion-body">
                                                    The cost of creating a Decentralized Finance(DeFi) apps is totally based on our clients' business requirements and the hiring model they prefer. However, with our DeFi development services, we guarantee you of reasonably priced solutions. For a free quote, please contact our team.
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

export default DefiFaq;
