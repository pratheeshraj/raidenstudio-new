import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NewsLetterGetEmail } from "../action/newsLetter";
import NewsletterPopup from "./NewsletterPopup";
import { useSelector } from "react-redux";
import { RotatingLines } from "react-loader-spinner";

const NewsSectionOne = ({ buttoncolor, color }) => {
  const { loading, error, success } = useSelector((state) => state.newsLetterState);

  const [openPopup, setOpenPopup] = useState(false);
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await dispatch(NewsLetterGetEmail(email));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (error) {
      setOpenPopup(true);
    }
    if (success) {
      setOpenPopup(true);
    }
  }, [error, success]);
  return (
    <>
      {/* newsletter popuop */}
      {openPopup && (
        <NewsletterPopup
          error={error}
          setOpenPopup={setOpenPopup}
          success={success}
        />
      )}
      {/* News Letter One start */}
      <section
        className="news-letter one"
        style={{
          backgroundImage: "url('/assets/img/shape/06_shape.png')",
        }}
      >
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div
                className="left-wrapper "
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <h5 style={{ color: `${color}` }}>Newsletter</h5>
                <h2>
                  Subscribe to newsletter <br /> &amp; get company news.
                </h2>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div
                className="right-wrapper "
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <form action="#" onSubmit={handleSubmit}>
                  <div className="input-box">
                    <input
                      type="text"
                      placeholder="Enter Your Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />

                    <button
                      style={{ color: "white", background: `${buttoncolor}` }}
                      className="submit"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? (
                        <RotatingLines
                          visible={true}
                          height="25"
                          width="25"
                          strokeColor="white"
                          color="white"  // Change this to any color you want
                          strokeWidth="5"
                          animationDuration="0.75"
                          ariaLabel="rotating-lines-loading"
                          wrapperStyle={{}}
                          wrapperClass=""
                        />
                      ) : (
                        "Submit"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-image">
          {/* <img
            className="shape-1 poa"
            src="/assets/img/icon/60_icon.png"
            alt=""
          /> */}
          {/* <img
            className="shape-2 poa"
            src="/assets/img/icon/61_icon.png"
            alt=""
          /> */}
        </div>
      </section>
      {/* News Letter One end */}
    </>
  );
};

export default NewsSectionOne;
