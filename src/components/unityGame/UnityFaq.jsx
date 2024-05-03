import React from 'react'

const UnityFaq = () => {
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
              <h3 style={{ color: "#EDAE43" }}>
                FAQ For Unity Development{" "}
              </h3>
              <h2 style={{ color: "black" }}>
                Answers at a <br />
                <span className="theme-color" style={{ color: "#EDAE43" }}>
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
              style={{ display: "flex", justifyContent: "center" }}
              data-aos="fade-right"
              data-aos-delay="500"
            >
              <img
                className="img-fluid"
                src="/assets/img/unity/faq.png"
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
                        className="accordion-button mobile_game_color_code"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >What industries do you specialize in for Unity development?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        We cater to diverse industries including gaming, education, healthcare, entertainment, and more.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed mobile_game_color_code"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        Can you handle both 2D and 3D Unity projects?
                        {"}"}
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Yes, our team has expertise in both 2D and 3D Unity development.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed mobile_game_color_code"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        How long does it take to develop a Unity project?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        The timeline varies depending on the project scope and complexity. We provide detailed timelines during the planning phase.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed mobile_game_color_code"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFour"
                        aria-expanded="false"
                        aria-controls="flush-collapseFour"
                      >
                        Do you provide post-launch support for Unity projects?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFour"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Yes, we offer ongoing maintenance and support services to ensure your Unity projects remain up-to-date and functional.
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
        </div> */}
        {/* <div className="shape-img-7 poa">
          <img src="/assets/img/icon/68_icon.png" alt="" />
        </div> */}
        <div className="shape-img-8 poa">
          <img src="/assets/img/icon/71_icon.png" alt="" />
        </div>
      </div>
    </section>
  )
}

export default UnityFaq
