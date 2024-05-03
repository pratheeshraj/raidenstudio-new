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
import { useDispatch, useSelector } from "react-redux";
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
  const [metadata, setMetaData] = useState([]);
  const { allMetaData } = useSelector((state) => state.metaDataState);
  useEffect(() => {
    if (allMetaData) {
      const data = allMetaData.filter(
        (meta) => meta.page_name == "Raiden Verse"
      );
      setMetaData(data);
    }
  }, [allMetaData]);
  return (
    <Fragment>
      <Suspense>
        {/* Helmet */}
        <HelmetReact
          title={metadata[0]?.meta_title}
          description={metadata[0]?.meta_dec}
          keywords={metadata[0]?.meta_keyword}
          ogimage={metadata[0]?.og_image}
        />
        {/* Header one */}
        <HeaderTwo />
        {/* Breadcrumb */}
        {/* <Breadcrumb data={"Project Details"} /> */}
        {/* Project Details Section */}
        <ProjectDetailsSection />
        <ProductDemokit />

        <ProjectDetailUseCase />
        <BlogSectionOne color={"#1BA2D7"} buttoncolor={"#1BA2D7"} />
        {/* News Section One */}

        <ContactSection2 color={"#1BA2D7"} buttoncolor={"#1BA2D7"} />

        {/* Footer Section */}
        <FooterSectionOne />
      </Suspense>
    </Fragment>
  );
};

export default ProjectDetails;
