import React, { Fragment, useRef } from "react";
import { Link } from "react-router-dom";

const CareerDetailsSection = () => {
  const targetRef = useRef(null);
  const scrollToComponent = () => {
    targetRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Fragment>
      <section>
        <div className="container-fluid career_details_section">
          <div className="container  career_details">
            <h1>MIDDLE+ IT COPYWRITER</h1>
            <p>
              <Link>HOME</Link> / <Link>Career</Link>/ MIDDLE+ IT COPYWRITER
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid career_content_section">
          <div className="container career_content">
            <h3>We are on a continuous lookout for young & aspiring minds</h3>
            <p>
              raiden Believes that talent has no correlation with experience,
              hence we look forward in providing opportunities to the budding
              Techies. all we look at is excellence rather than experience.
            </p>
            <div className="content">
              <h6>MIDDLE+ IT COPYWRITER</h6>
              <p>Position : 4</p>
              <p>Location : Madurai</p>
              <p>Experience : 1-3 Years</p>
              <h6>Required Skills</h6>
              <ul>
                <li>Nodejs</li>
                <li>MongoDb</li>
              </ul>
              <h6>Key Responsibilities</h6>
              <ul>
                <li>
                  Must have strong exposure in End to End development skill
                  using Node js
                </li>
                <li>
                  Proficiency in using React JS/ Angular Js/ Angular 2/ Vue js
                  is good to have
                </li>
                <li>
                  Proficiency in using React JS/ Angular Js/ Angular 2/ Vue js
                  is good to have
                </li>
                <li>
                  Proficiency in using React JS/ Angular Js/ Angular 2/ Vue js
                  is good to have
                </li>
                <li>
                  Proficiency in using React JS/ Angular Js/ Angular 2/ Vue js
                  is good to have
                </li>
              </ul>
            </div>
            <div className="button">
              {" "}
              <button onClick={scrollToComponent} className="default-btn">
                APPLY NOW
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid career_section" ref={targetRef}>
          <div
            className="career_section_formdata "
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="top">
              <div className="top_heading">
                <h2>BE A PART OF OUR TEAM</h2>
                <p>If you want to join our team, drop us a line</p>
              </div>
              <form action="">
                <div className="two_input">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter your name"
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter your email"
                  />
                </div>
                <textarea type="text" placeholder="Message" />
                <div className="getpdf">
                  <input type="file" name="" id="file_input" />
                  <label for="file_input">
                    <i class="fa-solid fa-arrow-up-from-bracket"></i>Upload CV{" "}
                  </label>
                  <p>File requirements: pdf, doc, docx, rtf, ppt, pptx</p>
                </div>
              </form>
            </div>
            <div className="center">
              <button className="default-btn career_btn">SUBMIT</button>
            </div>
            <div className="bottom">
              <input type="checkbox" name="" id="" />
              <p>
                I agree to the terms of <a href="#">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default CareerDetailsSection;
