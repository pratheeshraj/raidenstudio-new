import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";
const ContactSection = () => {
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
                <h2>Contact With Us</h2>
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
                <div className="d-block d-md-flex gap-4">
                  <div
                    style={{ padding: "0" }}
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
                <div className="d-block d-md-flex gap-4 mt-2">
                  <div
                    style={{ padding: "0" }}
                    className="form-author"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <label>
                      Phone <span className="required">*</span>
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
                    <label>Telegram No</label>
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
            {/* <div className="col-lg-4">
              <img src="\assets\img\contact-right.png" />
            </div> */}
          </div>
          <div className="row location-tag">
            <div className="col-lg-3 col-md-6 col-12 contact_box_card">
              <div className="item " data-aos="fade-up" data-aos-delay="300">
                <div className="icon">
                  <i className="fa-sharp fa-solid fa-location-dot" />
                </div>
                <div className="view">
                  <h3>Head Office</h3>
                  <p>Saravanampatti , Coimbatore</p>
                  <p>TamilNadu</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 contact_box_card">
              <div className="item " data-aos="fade-up" data-aos-delay="400">
                <div className="icon">
                  <i className="fa-sharp fa-solid fa-location-dot" />
                </div>
                <div className="view">
                  <h3>Office</h3>
                  <p>Thiru Nagar , Madurai</p>
                  <p>TamilNadu</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 contact_box_card">
              <div className="item " data-aos="fade-up" data-aos-delay="400">
                <div className="icon">
                  <i className="fa-solid fa-headset" />
                </div>
                <div className="view">
                  <h3>Need Support?</h3>
                  <p>Phone: +91 98840 36062</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 contact_box_card">
              <div className="item " data-aos="fade-up" data-aos-delay="500">
                <div className="icon">
                  <i className="fa-solid fa-envelope" />
                </div>
                <div className="view">
                  <h3>Email Us</h3>
                  <p>info@raiden.studio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d978.8673875855843!2d76.99904226955294!3d11.078339999318088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDA0JzQyLjAiTiA3NsKwNTknNTguOSJF!5e0!3m2!1sen!2sin!4v1714374950104!5m2!1sen!2sin"
            height={570}
          />
        </div> */}
        <div className="shape-image-file">
          {/* <div className="shape-img-1 poa">
            <img src="/assets/img/icon/21_icon.png" alt="" />
          </div>
          <div className="shape-img-2 poa">
            <img src="/assets/img/icon/64_icon.png" alt="" />
          </div> */}
          {/* <div className="shape-img-4 poa">
            <img src="/assets/img/icon/08_icon.png" alt="" />
          </div> */}
          {/* <div className="shape-img-5 poa">
            <img src="/assets/img/icon/78_icon.png" alt="" />
          </div> */}
          {/* <div className="shape-img-6 poa">
            <img src="/assets/img/icon/43_icon.png" alt="" />
          </div> */}
          {/* <div className="shape-img-7 poa">
            <img src="/assets/img/icon/68_icon.png" alt="" />
          </div> */}
          <div className="shape-img-8 poa">
            <img src="/assets/img/icon/71_icon.png" alt="" />
          </div>
        </div>
      </section>
      {/* Contact Section end */}
    </>
  );
};

export default ContactSection;
