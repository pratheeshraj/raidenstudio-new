import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";
import "./ContactSection2.css"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import ReactFlagsSelect from "react-flags-select";
import { useDispatch } from "react-redux";
import { createContact } from "../action/ContactAction";

const ContactSection2 = () => {

  const dispatch = useDispatch();
  const [selected, setSelected] = useState('IN');
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [country, setCountry] = useState("");
  const [messageError, setMessageError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Validation
    let isValid = true;
    if (name === "") {
      setNameError("Name is required");
      isValid = false;
    } else {
      setNameError("");
    }
    if (email === "") {
      setEmailError("Email is required");
      isValid = false;
    } else {
      setEmailError("");
    }
    if (phone === "") {
      setPhoneError("Phone is required");
      isValid = false;
    } else {
      setPhoneError("");
    }

    if (message === "") {
      setMessageError("Phone is required");
      isValid = false;
    } else {
      setMessageError("");
    }

    if (!isValid) {
      return;
    }

    const ContactData = {
      "name": name,
      "email": email,
      "phone": phone,
      "country": selected,
      "message": message
    }

    dispatch(createContact(ContactData))

    // Reset form fields after submission
    setName("");
    setEmail("");
    setPhone("");
    setCountry("");
    setMessage("");

  };

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      {/* Contact Section start */}
      <section className="contact-section" style={{ background: "black" }}>
        <div className="auto-container">
          <div className="row">
            <div className="enqury_main_div">
              <div className="right_div aos-init aos-animate" data-aos="fade-right" data-aos-delay="300">
                <h2 className="right_div_contact_heading">Contact Us</h2>
                <p>Please fill out the quick form and we will be in touch with lightening speed.</p>
                <form className="right_div_input_div" onSubmit={handleSubmit}>
                  <div>
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    {nameError && <div className="error-message">{nameError}</div>}
                  </div>
                  <div>                  <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {emailError && <div className="error-message">{emailError}</div>}</div>
                  <div>
                    <PhoneInput
                      type="tel"
                      className="phone_no_input"
                      country={'in'}
                      value={phone}
                      onChange={(phoneValue) => setPhone(phoneValue)}
                    />
                    {phoneError && <div className="error-message">{phoneError}</div>}
                  </div>
                  <ReactFlagsSelect
                    selected={selected}
                    onSelect={(countryCode) => setSelected(countryCode)}
                    searchPlaceholder="Search Country"
                    searchable
                    defaultCountry="IN"
                  />
                  <div className="text-contat-div">
                    <textarea
                      type="text"
                      placeholder="Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                    {messageError && <div className="error-message">{messageError}</div>}
                  </div>

                  <button type="submit">Submit</button>
                </form>
              </div>
              <div className="left_div aos-init aos-animate" data-aos="fade-left" data-aos-delay="300">
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section end */}
    </>
  );
};

export default ContactSection2;