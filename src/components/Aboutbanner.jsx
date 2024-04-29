import React from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

const Aboutbanner = () => {
  return (
    <>
      {/* Counter-section one start */}
      <section
        className="counter-section one"
        style={{
          background:"#000C14",
          backgroundSize: "cover"
        }}
      >
        <div className="auto-container">
          <div className="award-part " data-aos="fade-up" data-aos-delay="300">
            <div className="row">
              <div className="col-lg-12">
                <div className="title">
                  <h2 style={{textAlign:"center"}}>
                  "We don’t believe that great ideas are limited to stuffy meeting rooms or fancy designations. Great ideas come from teams that celebrate collaboration and innovative ideas."
                  </h2>
                  <div className="inner-btn d-adjust" style={{display:"flex",justifyContent:"center"}}>
                    <div>
                      <Link className="default-btn" to="/contact-us">
                        Let’s Work To Do{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Counter-section one end */}
    </>
  );
};

export default Aboutbanner;
