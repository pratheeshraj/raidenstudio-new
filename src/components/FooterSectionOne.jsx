import React from "react";
import { Link } from "react-router-dom";

const FooterSectionOne = () => {
  return (
    <>
      {/* footer section one start */}
      <footer className="footer-section one">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-5 col-md-6 col-12">
              <div className="footer-wrapper one">
                <div className="logo" data-aos="fade-up" data-aos-delay="200">
                  <img src="/assets/img/common/logo-white.png" alt="" />
                </div>
                <div className="des" data-aos="fade-up" data-aos-delay="300">
                  <p>
                    Artificial intelligence is intelligence demonstrated by
                    machines, as opposed to intelligence of humans and other
                    animals. Example tasks in which this is done include speech
                    recognition, computer vision, translation between languages,
                    as well as other mappings of inputs.
                  </p>
                </div>
                <div
                  className="social one"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <Link to="#">
                    <i className="fa-brands fa-facebook-f" />
                  </Link>
                  <Link to="#">
                    <i className="fa-brands fa-twitter" />
                  </Link>
                  <Link to="#">
                    <i className="fa-brands fa-linkedin-in" />
                  </Link>
                  <Link to="#">
                    <i className="fa-brands fa-instagram" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-12">
              <div className="footer-wrapper two mt-4 mt-md-0">
                <h2 className="title" data-aos="fade-up" data-aos-delay="200">
                  Quick Link
                </h2>
                <ul data-aos="fade-up" data-aos-delay="300">
                  <li>
                    <Link to="#">About Us</Link>
                  </li>
                  <li>
                    <Link to="#">Services</Link>
                  </li>
                  <li>
                    <Link to="#">Blog</Link>
                  </li>
                  <li>
                    <Link to="#">Pricing Plan</Link>
                  </li>
                  <li>
                    <Link to="#">Our Team</Link>
                  </li>
                  <li>
                    <Link to="#">All Projects</Link>
                  </li>
                  <li>
                    <Link to="#">Contact</Link>
                  </li>
                  <li>
                    <Link to="#">Trams &amp; Condition</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-12">
              <div className="footer-wrapper two mt-4 mt-lg-0 ">
                <h2 className="title" data-aos="fade-up" data-aos-delay="200">
                  IT Service
                </h2>
                <ul data-aos="fade-up" data-aos-delay="300">
                  <li>
                    <Link to="#">Credit industry</Link>
                  </li>
                  <li>
                    <Link to="#">Research sector</Link>
                  </li>
                  <li>
                    <Link to="#">Finance Sector</Link>
                  </li>
                  <li>
                    <Link to="#">Credit industry</Link>
                  </li>
                  <li>
                    <Link to="#">AI Research</Link>
                  </li>
                  <li>
                    <Link to="#">ICT industry</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="footer-wrapper three mt-4 mt-lg-0">
                <h2 className="title" data-aos="fade-up" data-aos-delay="200">
                  Contact Us
                </h2>
                <ul data-aos="fade-up" data-aos-delay="300">
                  <li>3487 Harter StreetDayton, OH 45402</li>
                  <li>info@demo.com</li>
                  <li className="phone">+ (008)-345-6789</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div
                className="footer-bottom"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <p>Copyright © 2023 FaconTech, All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-image">
          <img
            className="shape-1 poa"
            src="/assets/img/icon/26_icon.png"
            alt=""
          />
          <img
            className="shape-2 poa"
            src="/assets/img/shape/08_shape.png"
            alt=""
          />
        </div>
      </footer>
      {/* footer section one end */}
    </>
  );
};

export default FooterSectionOne;
