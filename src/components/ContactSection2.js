import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";
import "./ContactSection2.css"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import ReactFlagsSelect from "react-flags-select";


const ContactSection2 = () => {

  const [selected, setSelected] = useState('IN');
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [Phone, setPhone] = useState("")
  const [Country, setCountry] = useState("")


  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    // Please See Documentation for more information
    emailjs
      .sendForm(
        "service_ljx76ce", //YOUR_SERVICE_ID
        "template_71bgc2q", //YOUR_TEMPLATE_ID
        form.current,
        "cwf8kROl5o3__96Ti" //YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            toast.success("Massage Sent Successfully!");
            form.current[0].value = "";
            form.current[1].value = "";
            form.current[2].value = "";
            form.current[3].value = "";
            form.current[4].value = "";
            form.current[5].value = "";
          }
        },
        (error) => {
          if (error.text !== "OK") {
            toast.error("Massage Not Sent!");
          }
        }
      );
  };
  return (
    // cosmic-quest-enchanting-pixel-art-adventures-forests-wonders-outer-space_931866-24957.avif
    // cyborg-robot-hand-uniform_110893-1208.avif
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      {/* Contact Section start */}
      <section className="contact-section">
        <div className="auto-container">
          <div className="row">
            <div className="enqury_main_div">
              <div className="right_div">
                <h2 className="right_div_contact_heading">Contact Us</h2>
                <p>Please fill out the quick form and we will be in touch with lightening speed.</p>
                <form className="right_div_input_div">
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email" />
                  <PhoneInput className="phone_no_input" country={'in'} />
                  <ReactFlagsSelect
                    selected={selected}
                    onSelect={(code) => setSelected(code)}
                    searchPlaceholder="Search Country"
                    searchable
                    defaultCountry="IN" // Set default country to India

                  />
                  <textarea type="text" placeholder="Message" />
                  <button>Submit</button>
                </form>
              </div>
              <div className="left_div">

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
