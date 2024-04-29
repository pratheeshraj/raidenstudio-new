import React from "react";
import { Link } from "react-router-dom";

const P2eGameBannerSection = () => {
  return (
    <section
      className="counter-section one p2e_banner"
      style={{
        backgroundSize: "cover",
        background: 'url("/assets/img/p2e/banner.jpg")',

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
                  <span className="theme-color" style={{ color: "#fdb441" }}>
                    Learning and Drive Success
                  </span>{" "}
                  in Your Industry?
                </h2>
                <p>
                  Unlock the potential of Play-to-Earn gaming to revolutionize
                  learning and drive success in your industry. Contact Raiden
                  today to explore how P2E games can transform your business and
                  engage your audience like never before.
                </p>
                <div className="inner-btn d-adjust">
                  <div>
                    <Link
                      className="default-btn"
                      to="/contact-us"
                      style={{ backgroundColor: "#fdb441" }}
                    >
                      Let’s Work To Do{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-6">
              <img src="/assets/img/bg-image/painting-water-lillies-orange-flowers-pond-generative-ai_733139-67283-transformed-removebg-preview.png" />
            </div> */}
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

export default P2eGameBannerSection;
