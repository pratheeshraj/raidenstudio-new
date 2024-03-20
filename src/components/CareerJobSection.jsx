import React from "react";

const CareerJobSection = () => {
  return (
    <section>
      <div className="container-fluid careersection">
        <h2>Current Openings</h2>
        <div className="container careersection_container">
          <div className="careersection_card">
            <h6 className="left">Middle+ IT Copywriter</h6>
            <div className="right">
            <p> Sales & marketing</p>
              <button className="default-btn">Read More</button>
            </div>
          </div>
          <div className="careersection_card">
            <h6 className="left">Senior Unreal Engine Developer</h6>
            <p> Sales & marketing</p>
            <div className="right">
             <p> Sales & marketing</p>
              <button className="default-btn">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerJobSection;
