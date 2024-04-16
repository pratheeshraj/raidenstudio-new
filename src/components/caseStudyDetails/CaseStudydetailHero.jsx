import React from "react";
import { Link } from "react-router-dom";

const CaseStudydetailHero = ({ SinglecaseStudy }) => {
  return (
    <section className=" casestudy_detail_hero">
      <img src={SinglecaseStudy?.imageurl} alt="" />
      <div className="case_study_black"></div>
      <div className="auto-container casestudy_detail_hero_container">
        <h2>{SinglecaseStudy?.mainheading}</h2>
        <p className="casestudy_type">{SinglecaseStudy?.category}</p>
        <div className="social one" data-aos="fade-up" data-aos-delay="400">
          <p>share</p>
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
    </section>
  );
};

export default CaseStudydetailHero;
