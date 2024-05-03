import React from "react";
import { Link } from "react-router-dom";

const MmorpgBannerSection = () => {
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
                  <span className="theme-color" style={{ color: "#EC8268" }}>
                    Learning and Drive Success
                  </span>{" "}
                  in Your Industry?
                </h2>
                <p>
                  Transform your vision into reality with Raiden's MMORPG
                  Development Services. Whether you're creating an educational
                  platform, training simulation, or entertainment hub, our
                  expertise and passion for innovation will propel your project
                  to new heights.
                </p>
                <div className="inner-btn d-adjust">
                  <div>
                    <Link
                      className="default-btn"
                      to="/contact-us"
                      style={{ backgroundColor: "#EC8268" }}
                    >
                      Let’s Work To Do{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 banner_right_image" style={{ display: "flex", justifyContent: "end" }}>
              <img src="/assets/img/mmorpg-img/banner.png" />
            </div>
          </div>
          {/* <div className="overlay-text">
      <h1>AI</h1>
    </div> */}
          {/* <div className="shape-img">
                    <img
                        className="shape-1 poa"
                        src="./assets/img/icon/50_icon.png"
                        alt=""
                    />
                    <img
                        className="shape-2 poa"
                        src="./assets/img/icon/51_icon.png"
                        alt=""
                    />
                </div> */}
        </div>
      </div>
    </section>
  );
};

export default MmorpgBannerSection;
