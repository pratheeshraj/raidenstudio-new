import React from "react";
const ProductDetailCard = () => {
  return (
    <>
      {/* Service Details Section Start */}
      <section className="service-details-section">
        <h2>How we help industry leaders</h2>
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-6  order-2 order-lg-1">
              <div
                className="right-wrapper pe-2"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <h2 className="title">
                  <span> Retail Revolution</span>
                </h2>
                <p>
                  Retail Revolution: Partnering with leading retail brands,
                  Raidenverse has transformed the shopping experience through
                  immersive virtual stores. By integrating AI-powered
                  personalization and interactive features, we've boosted
                  customer engagement, streamlined purchasing processes, and
                  unlocked new revenue streams for our partners.
                </p>
              </div>
            </div>
            <div
              className="col-lg-6 order-1"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <div className="left-wrapper ps-2">
                <div className="img-file">
                  <img
                    className="img-fluid"
                    src="/assets/img/service/02_service.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="row">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <div className="left-wrapper pe-2">
                <div className="img-file">
                  <img
                    className="img-fluid"
                    src="/assets/img/service/03_service.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="300">
              <div className="right-wrapper ps-2">
                <h2 className="title">
                  <span> Educational Empowerment</span>
                </h2>
                <p>
                  In the realm of education, Raidenverse has facilitated
                  immersive learning environments that transcend physical
                  limitations. Through virtual classrooms, simulations, and
                  interactive content, we've empowered educators to deliver
                  dynamic and engaging lessons, fostering deeper understanding
                  and retention among students.
                </p>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-lg-6  order-2 order-lg-1">
              <div
                className="right-wrapper pe-2"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <h2 className="title">
                  <span> Healthcare Revolution</span>
                </h2>
                <p>
                  In healthcare, Raidenverse has revolutionized patient care and
                  medical training. By creating lifelike simulations and virtual
                  environments, we've provided medical professionals with
                  realistic scenarios for training and skills development.
                  Additionally, our telemedicine capabilities have expanded
                  access to healthcare services, allowing patients to receive
                  remote consultations and treatment from anywhere in the world.
                </p>
              </div>
            </div>
            <div
              className="col-lg-6 order-1"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <div className="left-wrapper ps-2">
                <div className="img-file">
                  <img
                    className="img-fluid"
                    src="/assets/img/service/02_service.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="row">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <div className="left-wrapper pe-2">
                <div className="img-file">
                  <img
                    className="img-fluid"
                    src="/assets/img/service/03_service.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="300">
              <div className="right-wrapper ps-2">
                <h2 className="title">
                  <span> Corporate Collaboration</span>
                </h2>
                <p>
                  For enterprise clients, Raidenverse serves as a catalyst for
                  collaboration and innovation. Our platform enables distributed
                  teams to collaborate seamlessly in virtual workspaces,
                  facilitating real-time communication, project management, and
                  ideation. By leveraging AI-driven analytics and productivity
                  tools, we've optimized workflows and accelerated
                  decision-making processes.
                </p>
              </div>
            </div>
          </div>
          <br />
          <br />
      
        </div>
      </section>
      {/* Service Details Section End */}
    </>
  );
};

export default ProductDetailCard;
