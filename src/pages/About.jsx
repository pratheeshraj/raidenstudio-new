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

const About = () => {
  let [active, setActive] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 2000);
  }, []);

  return (
    <Fragment>
      <Suspense>
        {active === true && <Preloader />}
        {/* Helmet */}
        <HelmetReact title={"About"} />
        {/* Header one */}
        <HeaderOne />
        {/* Breadcrumb */}
        <Breadcrumb data={"About us"} />
        {/* About Section One */}
        <AboutSectionOne />
        {/* Counter Section One */}
        <CounterSectionOne />
        {/* Testimonial Section One */}
        <TestimonialSectionOne />
        {/* News Section One */}
        <NewsSectionOne />
        {/* Footer Section */}
        <FooterSectionOne />
      </Suspense>
    </Fragment>
  );
};

export default About;
