import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CreateCareer } from "../action/CareerAction";
import toast from "react-hot-toast";
import { RotatingLines } from "react-loader-spinner";
import { Link } from "react-router-dom";

const CareerSection = () => {
  const dispatch = useDispatch();
  const {loading} =useSelector((state)=>state.careerState)
  const [name, setName] = useState("");
  const [errorName, setErrorName] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, EmailErrorName] = useState(false);
  const [message, setMassage] = useState("");
  const [emailValidation, setEmailValidation] = useState(false);
  const [cvFile, setCvFile] = useState(null);
  const [errorCvFile, setErrorCvFile] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const validateForm = () => {
    let isValid = true;
    if (!name) {
      setErrorName(true);
      isValid = false;
    }
    if (!email) {
      EmailErrorName(true);
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailValidation(true);
      isValid = false;
    }
    if (!cvFile) {
      setErrorCvFile(true);
      isValid = false;
    }
    return isValid;
  };

  // Helper function to validate email with regex
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }
    if (!isChecked) {
      return toast.error("You need to accept our Privacy Policy.");
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    formData.append("cv", cvFile);
    try {
      await dispatch(CreateCareer(formData));
      toast.success("Successfully created!");
      setErrorCvFile(false);
      setErrorName(false);
      EmailErrorName(false);
      setCvFile(null);
      setEmail("");
      setIsChecked(false);
      setName("");
      setMassage("");
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Failed to submit. Please try again.");
    }
  };
  return (
    <section>
      <div className="careerSection_heading">
        <div className="careerSection_heading2">
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
                  <div>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    {errorName ? (
                      <p style={{ color: "red" }}>Please enter your name</p>
                    ) : null}
                  </div>
                  <div>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {emailValidation ? (
                      <p style={{ color: "red" }}>Please enter valid email</p>
                    ) : emailError ? (
                      <p style={{ color: "red" }}>Please enter your email</p>
                    ) : null}
                  </div>
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
                  {errorCvFile ? (
                    <p style={{ color: "red" }}>File requirements: pdf</p>
                  ) : (
                    <p> {cvFile ? cvFile.name : "File requirements: pdf"}</p>
                  )}
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
                {
                  loading?
                  <RotatingLines
                  visible={true}
                  height="30"
                  width="30"
                  color="grey"
                  strokeWidth="5"
                  strokeColor="white"
                  animationDuration="0.75"
                  ariaLabel="rotating-lines-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  />:"APPLY NOW"
                }
                  </button>
                </div>
              </form>
            </div>
            <div className="bottom">
              <input
                type="checkbox"
                onChange={handleChange}
                checked={isChecked}
              />
              <p>
                I agree to the terms of <Link to={"/privacy-policy"}>Privacy Policy</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
