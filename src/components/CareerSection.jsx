import React from "react";

const CareerSection = () => {
  return (
    <section>
      <h2 className="careerSection_heading">
        FIND YOUR DREAM JOB AT <span>RAIDEN GAMES</span>
      </h2>
      <div className="container-fluid career_section">
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
   
  );
};

export default CareerSection;
