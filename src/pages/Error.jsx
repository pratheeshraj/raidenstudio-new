import React, { Fragment, Suspense, useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import { Link } from "react-router-dom";
import HelmetReact from "../elements/HelmetReact";

const Error = () => {
  let [active, setActive] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 2000);
  }, []);

  return (
    <Fragment>
      <Suspense>
        {active === true && <Preloader />}
        {/* Helmet */}
        <HelmetReact title={"Error"} />
        {/* Error Section start */}
        <section className="error-section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="wrapper">
                  <div
                    className="img-file"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <img
                      className="img-fluid"
                      src="./assets/img/common/error.png"
                      alt=""
                    />
                  </div>
                  <div className="text-file">
                    <h4 data-aos="fade-up" data-aos-delay="300">
                      PAGE NOT FOUND!
                    </h4>
                    <p data-aos="fade-up" data-aos-delay="400">
                      Sorry we can't find that page! The page you are looking{" "}
                      <br />
                      for was never existed.
                    </p>
                  </div>
                  <div
                    className="d-adjust"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <Link className="default-btn" to="/index">
                      Back to Home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Suspense>
    </Fragment>
  );
};

export default Error;
