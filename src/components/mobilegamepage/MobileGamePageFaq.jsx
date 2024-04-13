import React from "react";

const MobileGamePageFaq = () => {
  return (
    <section className="faq-section one" style={{ backgroundColor: "white" }}>
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-6 pe-4">
            <div
              className="section-title-shape-one left "
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <h3 style={{ color: "black" }}>
                FAQ For Mobile Game Developments{" "}
              </h3>
              <h2 style={{ color: "black" }}>
                Answers at a <br />
                <span className="theme-color" style={{ color: "#fdb441" }}>
                  Glance
                </span>
              </h2>
              <p style={{ color: "black" }}>
                Find quick solutions and insights to common queries and concerns
                about our game with our comprehensive FAQ section
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
            >
              <div className="intro">
                <h3 style={{ color: "black" }}>Common Question &amp; Answer</h3>
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
                        What platforms do you develop games for?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        We develop games for iOS and Android platforms, ensuring
                        compatibility with a wide range of devices.
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
                        How long does the development process take?
                        {"}"}
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        The timeline depends on the complexity of the game and
                        specific client requirements. We provide estimated
                        timelines during the planning phase.
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
                        Do you offer post-launch support?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Yes, we provide comprehensive support and maintenance
                        services to ensure that your game remains updated and
                        optimized for continued success.
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
                        Can you help with monetization strategies?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFour"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Absolutely! We offer guidance and assistance with
                        implementing various monetization strategies, including
                        ads, in-app purchases, and subscription models
                      </div>
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
                        How involved will I be in the development process?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFive"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        We believe in transparent communication and
                        collaboration. You'll be involved in every step of the
                        development process, from concept to launch.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shape-image">
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
      </div>
    </section>
  );
};

export default MobileGamePageFaq;
