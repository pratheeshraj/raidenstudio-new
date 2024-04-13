import React from "react";

const P2eGameFaq = () => {
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
              <h3 style={{ color: "black" }}>FAQ For P2E Game Development </h3>
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
                        What is Play-to-Earn (P2E) gaming?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Play-to-Earn (P2E) gaming allows players to earn real
                        rewards, such as cryptocurrency or in-game assets, by
                        participating in gameplay activities.
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
                        How does blockchain technology enhance P2E games?
                        {"}"}
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Blockchain technology enables secure ownership of
                        in-game assets, transparent in-game economies, and fair
                        reward distribution, enhancing the overall player
                        experience.
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
                        Can I monetize my P2E game?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Yes, with a comprehensive monetization strategy, you can
                        generate revenue through in-game purchases,
                        advertisements, and secondary market transactions.
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
                        What makes Raiden's P2E game development services
                        unique?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFour"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Raiden offers a holistic approach to P2E game
                        development, combining technical expertise with a deep
                        understanding of player engagement and monetization
                        strategies.
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
                        How long does it take to develop a P2E game?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFive"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        The timeline for P2E game development varies depending
                        on the complexity of the project. Contact Raiden for a
                        customized development plan tailored to your needs.
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

export default P2eGameFaq;
