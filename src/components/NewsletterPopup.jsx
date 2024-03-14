import React from "react";
import "./NewsletterPopup.css";
import { useDispatch, useSelector } from "react-redux";
import { clearAuthError } from "../action/newsLetter";

function NewsletterPopup({ error, setOpenPopup, success }) {
  const dispatch = useDispatch();
  const handleClose = () => {
    setOpenPopup(false);
    if(error){
      dispatch(clearAuthError);
    }
  };
  return (
    <div className="newsletter_background">
      <div className="Newsletter_popup_main_div">
        <div className="Newsletter_popup_div">
        
          {error ? <p className="Newsletter_popup_text">{error}</p> : success ? (
            <p className="Newsletter_popup_text_s">subscribe for newsletter</p>
          ):""}
          <button
            onClick={handleClose}
            className="default-btn Newsletter_popup_btn"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewsletterPopup;
