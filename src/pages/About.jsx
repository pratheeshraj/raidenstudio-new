import React, { Fragment, Suspense, useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import FooterSectionOne from "../components/FooterSectionOne";
import NewsSectionOne from "../components/NewsSectionOne";
import HelmetReact from "../elements/HelmetReact";
import HeaderTwo from "../components/HeaderTwo";
import AboutPara from "../components/AboutPara";
import TestimonialSectionThree from "./../components/TestimonialSectionThree";
import Aboutbanner from "./../components/Aboutbanner";
import { useSelector } from "react-redux";

import WhatwedoAbout from "../components/WhatwedoAbout";
import Aboutwhychoose from "../components/Aboutwhychoose";
import Breadcrumb from './../components/Breadcrumb';
import AboutCompany from "../components/AboutCompany";
import AboutCount from "../components/AboutCount";

const About = () => {
  let [active, setActive] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 2000);
  }, []);
  const { allMetaData } = useSelector((state) => state.metaDataState);
  const [metadata, setMetaData] = useState([]);

  useEffect(() => {
    if (allMetaData) {
      const data = allMetaData.filter((meta) => meta.page_name == "Home Page");
      setMetaData(data);
    }
  }, [allMetaData]);
  return (
    <Fragment>
      <Suspense>
        {active === true && <Preloader />}
        {/* Helmet */}
        <HelmetReact title={"About"} />
        {/* Header one */}
        <HeaderTwo />
        {/* Breadcrumb */}
        <Breadcrumb
          data={"About us"}
          img={"url('/assets/img/bg-image/Frame 71.jpg')"}
        />
        {/* About Section One */}
        <AboutCompany />
        <AboutCount />
        {/* <AboutPara /> */}
        {/* <WhatwedoAbout /> */}
        {/* <Aboutwhychoose /> */}
        {/* Testimonial Section One */}
        <TestimonialSectionThree />
        {/* Counter Section One */}
        <Aboutbanner />
        {/* News Section One */}
        <NewsSectionOne />
        {/* Footer Section */}
        <FooterSectionOne />
      </Suspense>
    </Fragment>
  );
};

export default About;
