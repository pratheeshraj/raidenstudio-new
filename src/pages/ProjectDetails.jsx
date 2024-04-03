import React, { Fragment, Suspense, useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HeaderOne from "../components/HeaderOne";
import Breadcrumb from "../components/Breadcrumb";
import NewsSectionOne from "../components/NewsSectionOne";
import FooterSectionOne from "../components/FooterSectionOne";
import ProjectDetailsSection from "../components/ProjectDetailsSection";
import HelmetReact from "../elements/HelmetReact";
import HeaderThree from "../components/HeaderThree";
import HeaderTwo from "../components/HeaderTwo";
import ProductDemokit from "../components/ProductDemokit";
import BlogSectionOne from "../components/BlogSectionOne";
import ProjectDetailUseCase from "../components/ProjectDetailUseCase";
import ContactSection2 from "../components/ContactSection2";
import { useDispatch } from "react-redux";
import { GetAllBlogs } from "../action/BlogAction";

const ProjectDetails = () => {
  let [active, setActive] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 2000);
  }, []);
  useEffect(() => {
    try {
      dispatch(GetAllBlogs);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <Fragment>
      <Suspense>
        {/* Helmet */}
        <HelmetReact title={"Project Details"} />
        {/* Header one */}
        <HeaderTwo />
        {/* Breadcrumb */}
        {/* <Breadcrumb data={"Project Details"} /> */}
        {/* Project Details Section */}
        <ProjectDetailsSection />
        <ProductDemokit />

        <ProjectDetailUseCase />
        <BlogSectionOne />
        {/* News Section One */}
     
        <ContactSection2 />

        {/* Footer Section */}
        <FooterSectionOne />
      </Suspense>
    </Fragment>
  );
};

export default ProjectDetails;
