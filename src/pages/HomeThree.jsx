import React, { Fragment, Suspense, useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HeaderThree from "../components/HeaderThree";
import SliderThree from "../components/SliderThree";
import AboutSectionThree from "../components/AboutSectionThree";
import ServiceSectionThree from "../components/ServiceSectionThree";
import FAQSectionThree from "../components/FAQSectionThree";
import ProjectSectionThree from "../components/ProjectSectionThree";
import CounterSectionThree from "../components/CounterSectionThree";
import TestimonialSectionThree from "../components/TestimonialSectionThree";
import PriceSectionTwo from "../components/PriceSectionTwo";
import TeamSectionTwo from "../components/TeamSectionTwo";
import BlogSectionThree from "../components/BlogSectionThree";
import NewsSectionTwo from "../components/NewsSectionTwo";
import FooterSectionThree from "../components/FooterSectionThree";
import HelmetReact from "../elements/HelmetReact";

const HomeThree = () => {
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
        <HelmetReact title={"Home"} />
        {/* Header Three */}
        <HeaderThree />
        {/* Slider Three */}
        <SliderThree />
        {/* About Section Three */}
        <AboutSectionThree />
        {/* Service Section Three */}
        <ServiceSectionThree />
        {/* FAQ Section Three */}
        <FAQSectionThree />
        {/* Project Section Three */}
        <ProjectSectionThree />
        {/* Counter Section Three */}
        <CounterSectionThree />
        {/* Testimonial Section Three */}
        <TestimonialSectionThree />
        {/* Price Section Two */}
        <PriceSectionTwo />
        {/* Team Section Two */}
        <TeamSectionTwo />
        {/* Blog Section Three */}
        <BlogSectionThree />
        {/* News Section Two */}
        <NewsSectionTwo />
        {/* Footer Section Three */}
        <FooterSectionThree />
      </Suspense>
    </Fragment>
  );
};

export default HomeThree;
