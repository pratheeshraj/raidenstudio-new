import React from 'react'

const UnityAbout = () => {
  return (
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
            <h2 style={{ color: "black" }} className="title">
              Our Expertise In Unity Development
            </h2>
            <p style={{ color: "black" }}>
              At Raiden, we boast a team of seasoned Unity developers with a
              proven track record in crafting engaging and innovative
              experiences across various platforms. From mobile games to AR/VR
              applications, our expertise spans the entire Unity development
              spectrum.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default UnityAbout
