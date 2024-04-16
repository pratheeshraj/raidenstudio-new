import React, { Fragment, Suspense, useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import { useDispatch, useSelector } from "react-redux";
import HeaderOne from "../components/HeaderOne";
import Breadcrumb from "../components/Breadcrumb";
import NewsSectionOne from "../components/NewsSectionOne";
import FooterSectionOne from "../components/FooterSectionOne";
import ProjectSectionAll from "../components/ProjectSectionAll";
import HelmetReact from "../elements/HelmetReact";
import HeaderTwo from "../components/HeaderTwo";
import { AllcaseStudys } from "../action/caseStudyAction";

const AllCaseStudy = () => {
  const dispath =useDispatch()
    let [active, setActive] = useState(true);
    useEffect(() => {
      setTimeout(function () {
        setActive(false);
      }, 2000);
    }, []);

    useEffect(()=>{
      dispath(AllcaseStudys)
    },[])
  
  return (
    <Fragment>
      <Suspense>
        {active === true && <Preloader />}
        {/* Helmet */}
        <HelmetReact title={"case study"} />
        {/* Header one */}
        <HeaderTwo />
        {/* Breadcrumb */}
        <Breadcrumb data={"Case Study"} />
        {/* Project Section All */}
        <ProjectSectionAll />
        {/* News Section One */}
        <NewsSectionOne />
        {/* Footer Section */}
        <FooterSectionOne />
      </Suspense>
    </Fragment>
  )
}

export default AllCaseStudy
