import React from "react";

const ServiceDetailsSection = () => {
  return (
    <>
      {/* Service Details Section Start */}
      <section
        style={{ background: "white" }}
        className="service-details-section"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-6">
              <div className="left-wrapper pe-2">
                <div className="img-file">
                  <img
                    className="img-fluid"
                    src="/assets/img/service/02_service.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right-wrapper ps-2">
                <h2 style={{ color: "black" }} className="title">Custom AI Software & App Development Company</h2>
                <p style={{ color: "black" }}>
                  With our experience in creating AI apps, we, as a reputable artificial intelligence development company provide businesses with cutting-edge AI development solutions. Our skilled team of artificial intelligence developers creates tailored solutions, such as machine learning algorithms, analytical models, and interactive chatbots, to meet the particular needs of various sectors. Our state-of-the-art products and services are made to empower your business and generate prominent results as it embarks on a digital transformation.                </p>
              </div>
            </div>
          </div>
          <br />
          <br />
          {/* <div className="row">
            <div className="col-lg-7">
              <div className="question-field">
                <h2 className="title">
                  What services do AI companies provide?
                </h2>
                <ul>
                  <li>
                    Robotic Process Automation. Artificial Intelligence Platform
                    enables you to develop digital virtual agents, chatbots,
                    predictive agents and cognitive process automation.
                  </li>
                  <li>
                    Healthcare, pharmaceutical research, retail, marketing,
                    finance and intelligent process automation are some of the
                    sectors.
                  </li>
                  <li>
                    The manufacturing industry has tons of aspects that AI-based
                    bots or systems could fix.
                  </li>
                  <li>
                    AI-powered tools can help doctors and researchers analyze
                    patient data, identify potential health risks, and develop
                    personalized treatment plans.
                  </li>
                  <li>
                    AI-powered tools can help doctors and researchers analyze
                    patient data, identify potential health risks, and develop
                    personalized treatment plans.
                  </li>
                  <li>
                    The manufacturing industry has tons of aspects that AI-based
                    bots or systems could fix.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="faq-inner ps-2">
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
                          Can i have multiple activities in feature?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          As you may have read in our AI, ML, and deep learning
                          post, ML is a subset of AI. Not all AI systems learn
                          from experience but ML-enabled devices do. Very simply
                          put.
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
                          What is the difference Data Analyst?{" "}
                        </button>
                      </h2>
                      <div
                        id="flush-collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          As you may have read in our AI, ML, and deep learning
                          post, ML is a subset of AI. Not all AI systems learn
                          from experience but ML-enabled devices do. Very simply
                          put.
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
                          Things about artificial intelligence?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          As you may have read in our AI, ML, and deep learning
                          post, ML is a subset of AI. Not all AI systems learn
                          from experience but ML-enabled devices do. Very simply
                          put.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div className="shape-image-file">
          <div className="shape-img-1 poa">
            <img src="/assets/img/icon/21_icon.png" alt="" />
          </div>
          <div className="shape-img-2 poa">
            <img src="/assets/img/icon/64_icon.png" alt="" />
          </div>
          <div className="shape-img-4 poa">
            <img src="/assets/img/icon/08_icon.png" alt="" />
          </div>
          <div className="shape-img-5 poa">
            <img src="/assets/img/icon/78_icon.png" alt="" />
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
        </div>
      </section>
      {/* Service Details Section End */}
    </>
  );
};

export default ServiceDetailsSection;
