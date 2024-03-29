import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CreateCareer } from "../action/CareerAction";
import toast from "react-hot-toast";

const CareerSection = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMassage] = useState("");
  const [cvFile, setCvFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    formData.append("cv", cvFile); // Append the selected file
    console.log(...formData);
    try {
      dispatch(CreateCareer(formData));
      toast.success("Successfully created!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <div className="careerSection_heading">
        <div className="careerSection_heading2" >
          <h2>
            FIND YOUR DREAM JOB AT <span>RAIDEN GAMES</span>
          </h2>
        </div>
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
              <form action="" onSubmit={handleSubmit}>
                <div className="two_input">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <textarea
                  type="text"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMassage(e.target.value)}
                />
                <div className="getpdf">
                  <input
                    type="file"
                    name="cv"
                    id="file_input"
                    accept=".pdf"
                    onChange={(e) => setCvFile(e.target.files[0])}
                  />
                  <label htmlFor="file_input">
                    <i className="fa-solid fa-arrow-up-from-bracket"></i>Upload
                    CV{" "}
                  </label>
                  <p>File requirements: pdf</p>
                </div>
                <div
                  className="center"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <button
                    className="default-btn career_btn"
                    value={"submit"}
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className="bottom">
              <input type="checkbox" name="" id="" />
              <p>
                I agree to the terms of <a href="#">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
