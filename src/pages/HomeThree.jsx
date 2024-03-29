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
import BlogSectionTwo from "../components/BlogSectionTwo";
import NewsSectionTwo from "../components/NewsSectionTwo";
import FooterSectionThree from "../components/FooterSectionThree";
import HelmetReact from "../elements/HelmetReact";
import HeaderTwo from "../components/HeaderTwo";
import NewsSectionOne from "../components/NewsSectionOne";
import NewsletterPopup from "../components/NewsletterPopup";

import {
  GetAllBlogs,
  GetBlogsCategory,
  GetBlogsTags,
  GetRecentBlogs,
} from "../action/BlogAction";
import { useDispatch } from "react-redux";

import ProgramLanguage from "../components/ProgramLanguage";
import ContactSection from "../components/ContactSection";
import ContactSection2 from "../components/ContactSection2";


const HomeThree = () => {
  let [active, setActive] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 2000);
  }, []);

  useEffect(() => {
    try {
      dispatch(GetRecentBlogs);
      dispatch(GetBlogsCategory);
      dispatch(GetBlogsTags);
      dispatch(GetAllBlogs);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <Fragment>
      <Suspense>
        {active === true && <Preloader />}
        {/* Helmet */}
        <HelmetReact title={"Home"} />
        {/* Header Three */}
        <HeaderTwo />
        {/* Slider Three */}
        <SliderThree />
        {/* About Section Three */}
        <AboutSectionThree />
        {/* Service Section Three */}
        <ServiceSectionThree />
        {/* FAQ Section Three */}
        {/* <FAQSectionThree /> */}
        {/* Project Section Three */}
        {/* Project Section Three */}
        <ProgramLanguage />
        <ProjectSectionThree />
        {/* Counter Section Three */}
        <CounterSectionThree />
        {/* Testimonial Section Three */}
        {/* <TestimonialSectionThree /> */}
        {/* Price Section Two */}
        {/* <PriceSectionTwo /> */}
        {/* Team Section Two */}
        {/* <TeamSectionTwo /> */}
        {/* Blog Section Three */}
        <BlogSectionTwo />
        <ContactSection2 />

        {/* News Section Two */}
        <NewsSectionOne />
        {/* Footer Section Three */}
        <FooterSectionThree />
      </Suspense>
    </Fragment>
  );
};

export default HomeThree;
