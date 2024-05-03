import React from "react";

const UnRealFaq = () => {
  return (
    <section className="faq-section one" style={{ backgroundColor: "#F8F9FA" }}>
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-6">
            <div
              className="section-title-shape-one left "
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <h3 style={{ color: "#BEAB59" }}>FAQ For Unreal Development </h3>
              <h2 style={{ color: "black" }}>
                Answers at a <br />
                <span className="theme-color" style={{ color: "#BEAB59" }}>
                  Glance
                </span>
              </h2>
              <p style={{ color: "black" }}>
                Find quick solutions and insights to common queries and concerns
                about our game with our comprehensive FAQ section
              </p>
            </div>
            <div
              className="img-file service_img_game_faq"
              data-aos="fade-right"
              data-aos-delay="500"
            >
              <img
                className="img-fluid"
                src="/assets/img/unreal/faq.png"
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
                        className="accordion-button unreal_color_code"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        What industries do you cater to with your Unreal
                        Development services?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        We serve clients across various industries, including
                        gaming, architecture, education, entertainment, and
                        more.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed unreal_color_code"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        Can you help us with ongoing support and maintenance for
                        our Unreal Engine projects?
                        {"}"}
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Absolutely! We offer comprehensive support and
                        maintenance services to ensure your projects remain
                        optimized and up-to-date.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed unreal_color_code"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        How long does it take to develop a custom Unreal Engine
                        solution?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        The timeline depends on the scope and complexity of the
                        project. We work closely with clients to establish
                        realistic timelines and milestones.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed unreal_color_code"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFour"
                        aria-expanded="false"
                        aria-controls="flush-collapseFour"
                      >
                        Do you provide training for using Unreal Engine?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFour"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Yes, we offer training programs tailored to your team's
                        needs, covering everything from basic to advanced Unreal
                        Engine concepts and techniques.
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
        {/* <div className="shape-img-2 poa">
          <img src="/assets/img/icon/64_icon.png" alt="" />
        </div> */}
        {/* <div className="shape-img-3 poa">
          <img src="/assets/img/icon/22_icon.png" alt="" />
        </div> */}
        {/* <div className="shape-img-4 poa">
          <img src="/assets/img/icon/08_icon.png" alt="" />
        </div> */}
        <div className="shape-img-5 poa">
          <img src="/assets/img/icon/26_icon.png" alt="" />
        </div>
        {/* <div className="shape-img-6 poa">
          <img src="/assets/img/icon/43_icon.png" alt="" />
        </div>
        <div className="shape-img-7 poa">
          <img src="/assets/img/icon/68_icon.png" alt="" />
        </div> */}
        <div className="shape-img-8 poa">
          <img src="/assets/img/icon/71_icon.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default UnRealFaq;
