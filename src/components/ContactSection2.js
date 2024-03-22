import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";
import "./ContactSection2.css"


const ContactSection2 = () => {
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
      <section className="contact-section" style={{ background: 'url(assets/img/bg-image/cyborg-robot-hand.avif)', paddingBottom: "80px", backgroundSize: "cover", backgroundPosition: "-20px" }}>
        <div className="auto-container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-shape-one">
                <h2 style={{ textAlign: "center", color: "black" }}>Contact With Us</h2>
              </div>
            </div>
          </div>
          <div className="row" style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
            <div className="" style={{ width: "70%" }}>
              <form
                ref={form}
                onSubmit={sendEmail}
                id="contact-form"
                className="contact-form"
              >
                <div className="d-block d-md-flex gap-3">
                  <div
                    className="form-author"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <label className="contact_input_name">
                      Name <span className="required">*</span>
                    </label>
                    <input
                      className="imput_contact"
                      type="text"
                      id="name"
                      name="user_name"
                      required="required"
                    />
                  </div>
                  <div
                    className="form-email mt-2 mt-md-0"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <label className="contact_input_name">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      className="imput_contact"
                      type="email"
                      id="email"
                      name="user_email"
                      required="required"
                    />
                  </div>
                </div>
                <div className="d-block d-md-flex gap-3 mt-2">
                  <div
                    className="form-author"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <label className="contact_input_name">
                      Subject <span className="required">*</span>
                    </label>
                    <input
                      className="imput_contact"
                      type="text"
                      id="subject"
                      name="subject"
                      required="required"
                    />
                  </div>
                  <div
                    className="form-web mt-2 mt-md-0"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <label className="contact_input_name">
                      Website</label>
                    <input className="imput_contact"
                      type="url" id="url" name="website" />
                  </div>
                </div>
                <div
                  className="form-comment mt-2"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <label className="contact_input_name">
                    Massage <span className="required">*</span>
                  </label>
                  <textarea
                    className="imput_contact"
                    name="message"
                    rows={8}
                    spellCheck="false"
                    defaultValue={""}
                  />
                </div>
                <div
                  className="form-submit"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="inner-btn">
                    <div>
                      <button className="default-btn" type="submit">
                        Send Massage
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <p className="form-Messages mt-3" />
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section end */}
    </>
  );
};

export default ContactSection2;
