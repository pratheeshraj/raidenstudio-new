import React from "react";

const MmorpgFaq = () => {
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
              <h3 style={{ color: "black" }}>FAQ For MMORPG Development </h3>
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
                        How long does MMORPG development take?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Development timelines vary based on project scope and
                        complexity but typically range from several months to a
                        few years.
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
                        What platforms do you develop for?
                        {"}"}
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        We specialize in developing MMORPGs for PC, console, and
                        mobile platforms..
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
                        Can I customize my MMORPG after launch?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Absolutely! We offer post-launch support and content
                        updates to keep your game fresh and engaging.
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
                        How do you handle player feedback and community
                        management?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFour"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        We have dedicated community managers who monitor
                        feedback channels and engage with players to foster a
                        positive community experience.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapsefive"
                        aria-expanded="false"
                        aria-controls="flush-collapsefive"
                      >
                        How do you handle player feedback and community
                        management?
                      </button>
                    </h2>
                    <div
                      id="flush-collapsefive"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        We have dedicated community managers who monitor
                        feedback channels and engage with players to foster a
                        positive community experience.
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

export default MmorpgFaq;
