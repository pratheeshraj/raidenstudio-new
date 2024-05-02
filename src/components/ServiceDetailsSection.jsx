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
              <div className="left-wrapper ">
                <div className="img-file">
                  <img
                    className="img-fluid"
                    src="/assets/img/service/aitech.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right-wrapper ps-2">
                <h2 style={{ color: "black" }} className="title">Custom AI Software & App Development Company</h2>
                <p style={{ color: "black" }}>
                  With our experience in creating AI apps, we, as a reputable artificial intelligence development company provide businesses with cutting-edge AI development solutions.
                </p>
                <p style={{ fontWeight: "bold" }}>Unlocking Innovation with Our Generative AI Expertise</p>
                <ul className="ai_service_li">
                  <li>Advanced Algorithms</li>
                  <li>Custom Solutions</li>
                  <li>Cross-Domain Expertise</li>
                  <li>Scalability and Efficiency</li>
                  <li>Ethical AI Practices</li>
                  <li>Continuous Innovation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Details Section End */}
    </>
  );
};

export default ServiceDetailsSection;
