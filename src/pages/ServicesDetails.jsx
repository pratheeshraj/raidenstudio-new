import React, { Fragment, Suspense, useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HeaderOne from "../components/HeaderOne";
import Breadcrumb from "../components/Breadcrumb";
import NewsSectionOne from "../components/NewsSectionOne";
import FooterSectionOne from "../components/FooterSectionOne";
import ServiceDetailsSection from "../components/ServiceDetailsSection";
import HelmetReact from "../elements/HelmetReact";
import HeaderTwo from './../components/HeaderTwo';
import SliderOne from './../components/SliderOne';
import SliderTwo from "../components/SliderTwo";
import ServiceSectionTwo from "../components/ServiceSectionTwo";
import CounterSectionOne from "../components/CounterSectionOne";
import ProgramLanguage from "../components/ProgramLanguage";

const ServicesDetails = () => {
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
        <HelmetReact title={"Services Details"} />
        {/* Header one */}
        <HeaderTwo />
        {/* Breadcrumb */}
        {/* <Breadcrumb data={"Services Details"} /> */}
        {/*1. Hero Banner */}
        <SliderOne />
        {/*2 , 3 Service Details Section */}
        <ServiceDetailsSection />
        {/*4.sercvices*/}
        <ServiceSectionTwo />
        {/*5.call to us*/}
        <CounterSectionOne />
        {/*6.tech-stack*/}
        <ProgramLanguage />
        {/* News Section One */}
        <NewsSectionOne />
        {/* Footer Section */}
        <FooterSectionOne />
      </Suspense>
    </Fragment>
  );
};

export default ServicesDetails;
