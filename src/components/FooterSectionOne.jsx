import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/raiden-logo.png"
import PrivacyPolicy from './../pages/PrivacyPolicy';

const FooterSectionOne = () => {
  return (
    <>
      {/* footer section one start */}
      <footer className="footer-section one">
        <div className="auto-container">
          <div className="row ">
            <div className="col-lg-5 col-md-6 col-12">
              <div className="footer-wrapper one">
                <div className="logo" data-aos="fade-up" data-aos-delay="200">
                  <img src={logo} alt="" />
                </div>
                <div className="des" data-aos="fade-up" data-aos-delay="300">
                  <p>
                    Raiden Studios: Innovating the future of gaming, VR, AR, and blockchain. Your go-to consultancy for cutting-edge solutions tailored to your needs. Let's redefine possibilities together!
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
              <div className="footer-wrapper two mt-4 mt-lg-0 ">
                <h2 className="title" data-aos="fade-up" data-aos-delay="200">
                  Products
                </h2>
                <ul data-aos="fade-up" data-aos-delay="300">
                  <li>
                    <Link to="/raiden-verse">Raiden Verse</Link>
                  </li>
                  <li>
                    <Link to="/raiden-simx">Raiden SimX</Link>
                  </li>
                  <li>
                    <Link to="/raiden-cogni">Raiden COGNI+</Link>
                  </li>
                  <li>
                    <Link to="/raiden-arcviz">Raiden ARCVIZ</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-12">
              <div className="footer-wrapper two mt-4 mt-md-0">
                <h2 className="title" data-aos="fade-up" data-aos-delay="200">
                  Services
                </h2>
                <ul data-aos="fade-up" data-aos-delay="300">
                  <li>
                    <Link to="/blockchain-development-company">Block Chain</Link>
                  </li>
                  <li>
                    <Link to="/generative-ai-development-company">AI</Link>
                  </li>
                  <li>
                    <Link to="/augmented-reality-ar-development-company">XR</Link>
                  </li>
                  <li>
                    <Link to="/mobile-game-development">Game</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-12">
              <div className="footer-wrapper two mt-4 mt-lg-0 ">
                <h2 className="title" data-aos="fade-up" data-aos-delay="200">
                  Company
                </h2>
                <ul data-aos="fade-up" data-aos-delay="300">
                  <li>
                    <Link to="/about-us">About us</Link>
                  </li>
                  <li>
                    <Link to="/carrer">Career</Link>
                  </li>
                  <li>
                    <Link to="/contact-us">Contact us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer_contact_div">
              <h2 className="footer_contact_div_heading">Our Offices</h2>
              <div className="col-lg-4 col-md-6 col-12 ">
                <div className="footer-wrapper three mt-4 mt-lg-0 footer_one_div" >
                  <h2 className="title" data-aos="fade-up" data-aos-delay="200">
                    Head Office
                  </h2>
                  <ul data-aos="fade-up" data-aos-delay="300">
                    <li>No: 5 Namachivaya Nagar, Opp KGISL Tech park, Saravanampatti, Coimbatore,</li>
                    <li>TamilNadu - 641035</li>
                    <li><a style={{ marginBottom: "" }} href="mailto:info@raiden.studio" id="footer-mail-india" data-gtmeventaction="IndiaContactMailClicked"><i class="fa fa-envelope footer_icon"></i>info@raiden.studio</a></li>
                    <li className="phone"><i class="fa fa-phone footer_icon"></i>  +91 98840 36062</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 ">
                <div className="footer-wrapper three mt-4 mt-lg-0 footer_one_div">
                  <h2 className="title" data-aos="fade-up" data-aos-delay="200">
                    Head Office
                  </h2>
                  <ul data-aos="fade-up" data-aos-delay="300">
                    <li>No: 5 Namachivaya Nagar, Opp KGISL Tech park, Saravanampatti, Coimbatore,</li>
                    <li>TamilNadu - 641035</li>
                    <li><a style={{ marginBottom: "" }} href="mailto:info@raiden.studio" id="footer-mail-india" data-gtmeventaction="IndiaContactMailClicked"><i class="fa fa-envelope footer_icon"></i>info@raiden.studio</a></li>
                    <li className="phone"><i class="fa fa-phone footer_icon"></i>  +91 98840 36062</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 ">
                <div className="footer-wrapper three mt-4 mt-lg-0 footer_one_div">
                  <h2 className="title" data-aos="fade-up" data-aos-delay="200">
                    Head Office
                  </h2>
                  <ul data-aos="fade-up" data-aos-delay="300">
                    <li>No: 5 Namachivaya Nagar, Opp KGISL Tech park, Saravanampatti, Coimbatore,</li>
                    <li>TamilNadu - 641035</li>
                    <li><a style={{ marginBottom: "" }} href="mailto:info@raiden.studio" id="footer-mail-india" data-gtmeventaction="IndiaContactMailClicked"><i class="fa fa-envelope footer_icon"></i>info@raiden.studio</a></li>
                    <li className="phone"><i class="fa fa-phone footer_icon"></i>  +91 98840 36062</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-4 col-md-6 col-12">
              <div className="footer-wrapper two mt-4 mt-lg-0 ">
                <h2 className="title" data-aos="fade-up" data-aos-delay="200">
                  Resourses
                </h2>
                <ul data-aos="fade-up" data-aos-delay="300">
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/case-studies">Case Studies</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="footer-wrapper three mt-4 mt-lg-0">
                <h2 className="title" data-aos="fade-up" data-aos-delay="200">
                  Head Office
                </h2>
                <ul data-aos="fade-up" data-aos-delay="300">
                  <li>Saravanampatti , Coimbatore</li>
                  <li>info@raiden.studio</li>
                  <li className="phone"> +91 98840 36062</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="footer-wrapper three mt-4 mt-lg-0">
                <h2 className="title" data-aos="fade-up" data-aos-delay="200">
                  Office
                </h2>
                <ul data-aos="fade-up" data-aos-delay="300">
                  <li>Thiru Nagar , Madurai</li>
                  <li>info@raiden.studio</li>
                  <li className="phone"> +91 98840 36062</li>
                </ul>
              </div>
            </div> */}
          </div>
          <div className="row">
            <div style={{ padding: "0" }} className="col-12">
              <div
                className="footer-bottom"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <p>Copyright © 2024 RaidenStudio, All Rights Reserved <Link to={"/privacy-policy"}>| Privacy Policy |</Link><Link to={"/terms-and-condtions"}> Term And Conditions |</Link></p>
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
