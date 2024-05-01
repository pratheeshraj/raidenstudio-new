import React, { Fragment, Suspense, useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HeaderOne from "../components/HeaderOne";
import FooterSectionOne from "../components/FooterSectionOne";
import Breadcrumb from "../components/Breadcrumb";
import AboutSectionOne from "../components/AboutSectionOne";
import CounterSectionOne from "../components/CounterSectionOne";
import TestimonialSectionOne from "../components/TestimonialSectionOne";
import NewsSectionOne from "../components/NewsSectionOne";
import HelmetReact from "../elements/HelmetReact";
import HeaderTwo from "../components/HeaderTwo";
import AboutPara from "../components/AboutPara";
import TestimonialSectionThree from "./../components/TestimonialSectionThree";
import Aboutbanner from "./../components/Aboutbanner";
import { useSelector } from "react-redux";
import Breadcrumb2 from "../components/Breadcrumb2";
import WhatwedoAbout from "../components/WhatwedoAbout";

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
        <Breadcrumb2
          data={"About Raiden"}
          img={"url('/assets/img/bg-image/Frame 71.jpg')"}
        />
        {/* About Section One */}
        <AboutPara />
        <WhatwedoAbout />
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
