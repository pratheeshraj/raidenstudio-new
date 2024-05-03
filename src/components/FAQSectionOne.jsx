import React from "react";

const FAQSectionOne = () => {
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
                <h3 style={{ color: "#13C4A1" }}>FAQ</h3>
                <h2>
                  The goal of Artificial <br />
                  <span className="theme-color">intelligence</span>
                </h2>
                <p>
                  Artificial intelligence is the simulation of human
                  intelligence processes by machines, especially computer
                  systems. Specific applications of AI include expert systems,
                  natural language processing, speech recognition and machine
                  vision.
                </p>
              </div>
              <div
                className="img-file "
                data-aos="fade-right"
                data-aos-delay="500"
              >
                <img
                  className="img-fluid"
                  src="/assets/img/AI/aidevfaq.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                style={{ marginTop: "240px" }}
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
                          What is generative AI?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Generative AI refers to technology that enables machines to generate content such as images, text, or music autonomously, often mimicking or creating new data based on patterns learned from existing data.
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
                          What are the applications of generative AI?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Generative AI has various applications across industries, including content creation, artistic design, product prototyping, virtual environments, and data augmentation for training machine learning models.
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
                          How can generative AI benefit my business?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Generative AI can streamline content creation processes, enhance creativity, generate realistic prototypes, personalize user experiences, and improve efficiency in various tasks, ultimately driving innovation and competitive advantage.
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
                          What expertise do you offer in generative AI development?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseFour"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          We specialize in developing custom generative AI solutions tailored to your specific needs, leveraging advanced algorithms, cross-domain expertise, and ethical AI practices to deliver innovative and scalable solutions.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="shape-image">
          <div className="shape-img-2 poa">
            <img src="/assets/img/icon/64_icon.png" alt="" />
          </div>
          <div className="shape-img-3 poa">
            <img src="/assets/img/icon/22_icon.png" alt="" />
          </div>
          <div className="shape-img-4 poa">
            <img src="/assets/img/icon/08_icon.png" alt="" />
          </div>
          <div className="shape-img-5 poa">
            <img src="/assets/img/icon/26_icon.png" alt="" />
          </div>
          <div className="shape-img-6 poa">
            <img src="/assets/img/icon/43_icon.png" alt="" />
          </div>
          <div className="shape-img-7 poa">
            <img src="/assets/img/icon/68_icon.png" alt="" />
          </div>
          <div className="shape-img-8 poa">
            <img src="/assets/img/icon/71_icon.png" alt="" />
          </div>
        </div> */}
      </section>
    </>
  );
};

export default FAQSectionOne;
