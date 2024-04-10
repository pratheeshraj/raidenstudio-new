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
        </div>
      </section>
      {/* Service Details Section End */}
    </>
  );
};

export default ServiceDetailsSection;
