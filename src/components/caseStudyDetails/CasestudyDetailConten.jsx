import React from "react";
import { Link } from "react-router-dom";

const CasestudyDetailConten = ({SinglecaseStudy}) => {

  const GameDescription = ({ htmlString }) => {
    return (
      <div dangerouslySetInnerHTML={{ __html: htmlString }} />
    );
  }
  return (
    <section className="casestudy_details_content">
      <div className="caseStudy_nav">
        <a href="#challange">The Challenge</a>
        <a href="#objective">The Objective</a>
        <a href="#Solution">The Solution</a>
        <a href="#Impact">The Impact</a>
      </div>
      <div className="auto-container cdc_container">
        <div className="csc_challenge">
          <p className="csc_challenge_dec">
       {SinglecaseStudy?.case_description}
          </p>
        </div>
      </div>
      <div className="container-fluid" style={{ backgroundColor: "#eff0f7" }}>
        <div className="auto-container casestudy_challange">
          <div className="challenge_container">
            <h2 id="challange">The Challenge</h2>

            <GameDescription htmlString={SinglecaseStudy?.challenge_content} />
          </div>
        </div>
      </div>
      <div className="container-fluid" id="objective" style={{ backgroundColor: "white" }}>
        <div className="auto-container casestudy_objective">
          <div className="casestudy_objective_container">
            <h2 >The Objective</h2>
            <GameDescription htmlString={SinglecaseStudy?.objective_content} />

          </div>
        </div>
      </div>
      <div
        className="container-fluid casestudy_impact_main"
        style={{ backgroundColor: "#eff0f7" }}
      >
        padding-top: 40px;
        <div
          className="auto-container casestudy_impact"
          style={{ paddingBottom: "40px" }}
        >
          <div className="casestudy_impact_container">
            <h2 id="Solution">The Solution</h2>

            <GameDescription htmlString={SinglecaseStudy?.solution_content} />
          </div>
        </div>
      </div>
      <div className="container-fluid casestudy_impact_main">
        <div className="auto-container casestudy_impact">
          <div className="casestudy_impact_container">
            <h2 id="Impact">The Impact</h2>

            <GameDescription htmlString={SinglecaseStudy?.impact_content} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasestudyDetailConten;
