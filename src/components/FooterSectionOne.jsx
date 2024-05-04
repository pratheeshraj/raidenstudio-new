import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/raiden-logo.png"
import PrivacyPolicy from './../pages/PrivacyPolicy';
import RaidenArcviz from './../pages/RaidenArcviz';

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
                    Raiden Studios: Creating the VR, AR, and blockchain of the future. Your go-to advisor for innovative, specially designed solutions. Together, let's redefine possibilities !
                  </p>
                </div>
                {/* <div
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
                </div> */}
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-12">
              <div className="footer-wrapper two mt-4 mt-lg-0 ">
                <h2 className="title" data-aos="fade-up" data-aos-delay="200">
                  Products
                </h2>
                <ul data-aos="fade-up" data-aos-delay="300">
                  <li>
                    <Link to="/raiden-verse">RaidenVerse</Link>
                  </li>
                  <li>
                    <Link to="/raiden-simx">RaidenSimX</Link>
                  </li>
                  <li>
                    <Link to="/raiden-cogni">RaidenCogni+</Link>
                  </li>
                  <li>
                    <Link to="/raiden-arcviz">RaidenArcviz</Link>
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
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer_contact_div">
              <h2 className="footer_contact_div_heading">Our Offices</h2>
              <div className="col-lg-4 col-md-6 col-12 ">
                <div className="footer-wrapper three mt-4 mt-lg-0 footer_one_div" >
                  <h2 className="title india_fla_div" data-aos="fade-up" data-aos-delay="200">
                    <img className="india_flag" src="\assets\img\Flag\india.webp" alt="" /> COIMBATORE
                  </h2>
                  <ul data-aos="fade-up" data-aos-delay="300">
                    <li>No: 5 Namachivaya Nagar,  <br />  Opp KGISL Tech park,<br /> Saravanampatti, Coimbatore,</li>
                    <li>TamilNadu - 641035</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 ">
                <div className="footer-wrapper three mt-4 mt-lg-0 footer_one_div">
                  <h2 className="title india_fla_div" data-aos="fade-up" data-aos-delay="200">
                    <img className="india_flag" src="\assets\img\Flag\india.webp" alt="" /> MADURAI
                  </h2>
                  <ul data-aos="fade-up" data-aos-delay="300">
                    <li>C37, Brindavan Street, <br /> Thiru Nagar, Madurai,</li>
                    <li>TamilNadu - 625006</li>
                    {/* <li><a style={{ marginBottom: "" }} href="mailto:info@raiden.studio" id="footer-mail-india" data-gtmeventaction="IndiaContactMailClicked"><i class="fa fa-envelope footer_icon"></i>info@raiden.studio</a></li>
                    <li className="phone"><i class="fa fa-phone footer_icon"></i>  +91 98840 36062</li> */}
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 ">
                <div className="footer-wrapper three mt-4 mt-lg-0 footer_one_div">
                  <h2 className="title india_fla_div" data-aos="fade-up" data-aos-delay="200">
                    <img className="india_flag" src="\assets\img\Flag\india.webp" alt="" /> CHENNAI
                  </h2>
                  <ul data-aos="fade-up" data-aos-delay="300">
                    <li>No 990, TNHB Main Road & Colony,<br /> West Velachery, </li>
                    <li>Chennai - 600042</li>
                    {/* <li><a style={{ marginBottom: "" }} href="mailto:info@raiden.studio" id="footer-mail-india" data-gtmeventaction="IndiaContactMailClicked"><i class="fa fa-envelope footer_icon"></i>info@raiden.studio</a></li>
                    <li className="phone"><i class="fa fa-phone footer_icon"></i>  +91 98840 36062</li> */}
                  </ul>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-12 ">
                <div className="footer-wrapper three mt-4 mt-lg-0 footer_one_div">
                  <ul className="footer_mail_phone" data-aos="fade-up" data-aos-delay="300">
                    <li style={{ display: "flex", alignItems: "center" }}><a target="_blank" href="mailto:info@raiden.studio" id="footer-mail-india" data-gtmeventaction="IndiaContactMailClicked"><i class="fa fa-envelope footer_icon"></i>info@raiden.studio</a></li>
                    <li><a style={{ display: "flex", alignItems: "center" }} target="_blank" rel="noreferrer" aria-label="Phone" href="tel:+91 9884036062" className="phone"><i class="fa fa-phone footer_icon"></i>+91 98840 36062</a></li>
                    <li><a style={{ display: "flex", alignItems: "center" }} target="_blank" href="https://telegram.me/Raidenstudios" className="phone"><i style={{ fontSize: "20px" }} class="fa-brands fa-telegram footer_icon" ></i>@Raidenstudios</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div style={{ padding: "0" }} className="col-12">
              <div
                className="footer-bottom"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <p>Copyright © 2024 RaidenStudio, All Rights Reserved |<Link className="footer_link" to={"/privacy-policy"}> Privacy Policy </Link>|<Link className="footer_link" to={"/terms-and-condtions"}> Term And Conditions </Link>|</p>
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
