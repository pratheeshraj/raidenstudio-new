import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";
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
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      {/* Contact Section start */}
      <section className="contact-section">
        <div className="auto-container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-shape-one">
                <h2 style={{textAlign:"center"}}>Contact With Us</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <form
                ref={form}
                onSubmit={sendEmail}
                id="contact-form"
                className="contact-form"
              >
                <div className="d-block d-md-flex gap-0">
                  <div
                    className="form-author"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <label>
                      Name <span className="required">*</span>
                    </label>
                    <input
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
                    <label>
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="user_email"
                      required="required"
                    />
                  </div>
                </div>
                <div className="d-block d-md-flex gap-0 mt-2">
                  <div
                    className="form-author"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <label>
                      Subject <span className="required">*</span>
                    </label>
                    <input
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
                    <label>Website</label>
                    <input type="url" id="url" name="website" />
                  </div>
                </div>
                <div
                  className="form-comment mt-2"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <label>
                    Massage <span className="required">*</span>
                  </label>
                  <textarea
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
        <div className="shape-image-file">
          <div className="shape-img-1 poa">
            <img src="/assets/img/icon/21_icon.png" alt="" />
          </div>
          <div className="shape-img-2 poa">
            <img src="/assets/img/icon/64_icon.png" alt="" />
          </div>
          <div className="shape-img-4 poa">
            <img src="/assets/img/icon/08_icon.png" alt="" />
          </div>
          <div className="shape-img-5 poa">
            <img src="/assets/img/icon/78_icon.png" alt="" />
          </div>
          <div className="shape-img-6 poa">
            <img src="/assets/img/icon/43_icon.png" alt="" />
          </div>
          <div className="shape-img-7 poa">
            <img src="/assets/img/icon/68_icon.png" alt="" />
          </div>
          <div className="shape-img-8 poa">
            <img src="/assets/img/icon/71_icon.png" alt="" />
          </div>
        </div>
      </section>
      {/* Contact Section end */}
    </>
  );
};

export default ContactSection2;
