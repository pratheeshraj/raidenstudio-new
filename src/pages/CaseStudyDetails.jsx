import React, { Fragment, Suspense, useEffect } from "react";
import HelmetReact from "../elements/HelmetReact";
import { useDispatch, useSelector } from "react-redux";
import HeaderTwo from "../components/HeaderTwo";
import FooterSectionOne from "../components/FooterSectionOne";
import NewsSectionOne from "../components/NewsSectionOne";
import CaseStudydetailHero from "../components/caseStudyDetails/CaseStudydetailHero";
import CasestudyDetailConten from "../components/caseStudyDetails/CasestudyDetailConten";
import {useParams} from "react-router-dom"
import { getSinglecaseStudys } from "../action/caseStudyAction";
const CaseStudyDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSinglecaseStudys(id));
  }, []);
  const { SinglecaseStudy, loading } = useSelector(
    (state) => state.caseStudyState
  );

  console.log(SinglecaseStudy);
  return (
    <Fragment>
      <Suspense>
        {/* Helmet */}
        <HelmetReact title={"case study"} />
        {/* Header one */}
        <HeaderTwo />
        <CaseStudydetailHero SinglecaseStudy={SinglecaseStudy} />
        <CasestudyDetailConten SinglecaseStudy={SinglecaseStudy} />
        {/* Breadcrumb */}
        <NewsSectionOne />
        {/* Footer Section */}
        <FooterSectionOne />
      </Suspense>
    </Fragment>
  );
};

export default CaseStudyDetails;
