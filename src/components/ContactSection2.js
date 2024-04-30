import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";
import "./ContactSection2.css"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import ReactFlagsSelect from "react-flags-select";
import { useDispatch } from "react-redux";
import { createContact } from "../action/ContactAction";
import { enqueryContact } from "../action/EnqueryAction";

const ContactSection2 = () => {

  const form = useRef();


  const dispatch = useDispatch();
  const [selected, setSelected] = useState('IN');
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    const enqueryData = {
      "name": name,
      "email": email,
      "phone": phone,
      "country": selected,
      "message": message
    };

    try {

      if (!name || !email || !phone || !message) {
        if (!name) {
          toast.error("Please Enter name", {
            position: "top-center",
          });
        }
        if (!email) {
          toast.error("Please Enter Email", {
            position: "top-center",
          });
        }
        if (!phone) {
          toast.error("Please Enter Phone", {
            position: "top-center",
          });
        }
        if (!message) {
          toast.error("Please Enter Message", {
            position: "top-center",
          });
        }
        return;
      }

      dispatch(enqueryContact(enqueryData));


      emailjs
        .sendForm(
          "service_mg9q3wt", // Replace with your service ID
          "template_o26rqua", // Replace with your template ID
          form.current, // Access the actual DOM element
          "21lNpD1cwOwuP13Qn" // Replace with your public key
        )
        .then(
          (result) => {
            if (result.text === "OK") {
              toast.success("Thank You!", {
                position: "top-center",
              });
              form.current.reset();
              setName("")
              setEmail("")
              setPhone("")
              setMessage("")
            }
          },
          (error) => {
            toast.error("Message Not Sent!");
          }
        );

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
                <form className="right_div_input_div" ref={form}
                  onSubmit={handleSubmit}>
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      name="user_name"
                      value={name}
                      onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div>
                    <input type="email"
                      placeholder="Email"
                      name="user_email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div style={{ marginTop: "8px" }}>
                    <input
                      type="tel"
                      placeholder="Phone"
                      className="phone_no_input"
                      name="user_phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <ReactFlagsSelect
                    selected={selected}
                    onSelect={(countryCode) => setSelected(countryCode)}
                    searchPlaceholder="Search Country"
                    searchable
                    name="user_country"
                    defaultCountry="IN"
                  />
                  <div className="text-contat-div">
                    <textarea
                      type="text"
                      name="message"
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