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
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    const ContactData = {
      "name": name,
      "email": email,
      "phone": phone,
      "country": selected,
      "message": message
    }

    try {

      if (!name) {
        return toast.error("Please Enter Name", {
          position: "top-center", // Display toast only at the top center
        });
      }
      if (!email) {
        return toast.error("Please Enter Email", {
          position: "top-center", // Display toast only at the top center
        });
      }
      if (!phone) {
        return toast.error("Please Enter Phone", {
          position: "top-center", // Display toast only at the top center
        });
      }
      if (!message) {
        return toast.error("Please Enter Message", {
          position: "top-center", // Display toast only at the top center
        });
      }

      dispatch(createContact(ContactData))


      
      toast.success("Thank You !", {
        position: "top-center",
      });

      // Reset form fields after submission
      setName("");
      setEmail("");
      setPhone("");
      setCountry("");
      setMessage("");


    } catch (error) {
      console.error("Error submitting contact form:", error);
    }

  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      {/* Contact Section start */}
      <section className="contact-section" style={{ background: "white" }}>
        <div className="auto-container">
          <div className="row">
            <div className="enqury_main_div">
              <div className="right_div aos-init aos-animate" data-aos="fade-right" data-aos-delay="300">
                <h2 className="right_div_contact_heading">Get a Free <span className="theme-color">Quote Today</span></h2>
                <p>Please fill out the quick form and we will be in touch with lightening speed.</p>
                <form className="right_div_input_div" onSubmit={handleSubmit}>
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div>
                    <input type="email"
                      placeholder="Email"
                      value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div>
                    <PhoneInput
                      type="tel"
                      className="phone_no_input"
                      country={'in'}
                      value={phone}
                      onChange={(phoneValue) => setPhone(phoneValue)}
                    />
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
                  </div>
                  <button className="Contact2_button" type="submit">
                    <div class="svg-wrapper-1">
                      <div class="svg-wrapper">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                        >
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                            fill="currentColor"
                            d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <span>Submit</span>
                  </button>
                </form>
              </div>
              <div className="left_div aos-init aos-animate" data-aos="fade-left" data-aos-delay="300">
                <div className="left_background_div">
                  <div className="left_background_div_content">
                  </div>
                </div>
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