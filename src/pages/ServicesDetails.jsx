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
import ProjectSectionTwo from "../components/ProjectSectionTwo";
import FAQSectionTwo from './../components/FAQSectionTwo';
import WhyChoose from "../components/WhyChoose";
import ContactSection2 from './../components/ContactSection2';
import FAQSectionOne from './../components/FAQSectionOne';
import FAQSectionThree from './../components/FAQSectionThree';
import DevelopmentProcess from './../components/DevelopmentProcess';
import Features from "../components/Features";
import CounterService1 from "../components/CounterService1";
import ServiceProgramLanguage from "../components/ServiceProgramLanguage";

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
        {/*countbar*/}
        <CounterService1 />
        {/*4.sercvices*/}
        <ServiceSectionTwo />
        {/*5.call to us*/}
        <CounterSectionOne />
        {/* { features} */}
        <Features />
        {/*6.tech-stack*/}
        <ServiceProgramLanguage />
        {/* News Section One */}
        {/* we serve */}
        <ProjectSectionTwo />
        {/* <NewsSectionOne /> */}
        {/* Development Process*/}
        <DevelopmentProcess />
        {/* why choose field  */}
        <WhyChoose />
        {/* faq */}
        <FAQSectionOne />
        {/* contact */}
        <ContactSection2 />
        {/* Footer Section */}
        <FooterSectionOne />
      </Suspense>
    </Fragment>
  );
};

export default ServicesDetails;
