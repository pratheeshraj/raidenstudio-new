import React from 'react'
import { Link } from 'react-router-dom'

const UnityBannerSection = () => {
  return (
    <section
      className="counter-section one"
      style={{
        backgroundSize: "cover",
        background: "#00151e",
      }}
    >
      <div className="auto-container">
        <div
          className="award-part "
          data-aos="fade-up"
          data-aos-delay="300"
          style={{ paddingTop: "0", paddingBottom: "0" }}
        >
          <div
            className="row"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className="col-lg-6">
              <div className="title">
                <h2>
                  Ready to Revolutionize{" "}
                  <span className="theme-color" style={{ color: "#EDAE43" }}>
                    Learning and Drive Success
                  </span>{" "}
                  in Your Industry?
                </h2>
                <p>
                  Unlock the full potential of Unity development with Raiden.
                  Let's collaborate to revolutionize learning and drive success
                  in your industry. Contact us today to get started!
                </p>
                <div className="inner-btn d-adjust">
                  <div>
                    <Link
                      className="default-btn"
                      to="/contact-us"
                      style={{ backgroundColor: "#EDAE43" }}
                    >
                      Let’s Work To Do{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 banner_right_image" style={{ display: "flex", justifyContent: "end" }}>
              <img style={{ width: "60%" }} src="/assets/img/unity/banner.svg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UnityBannerSection
