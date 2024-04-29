import React, { Fragment, Suspense, useEffect, useState } from "react";
import HelmetReact from "../elements/HelmetReact";
import HeaderTwo from "../components/HeaderTwo";
import ProjectDetailsSection from "../components/ProjectDetailsSection";
import ProductDemokit from "../components/ProductDemokit";
import BlogSectionOne from "../components/BlogSectionOne";
import ProjectDetailUseCase from "../components/ProjectDetailUseCase";
import NewsSectionOne from "../components/NewsSectionOne";
import FooterSectionOne from "../components/FooterSectionOne";
import vidio from "../images/arcviz.mp4";
import RaidenArcvizComponent from "../components/RaidenArcvizComponent";
import ContactSection2 from "./../components/ContactSection2";
import { useSelector } from "react-redux";

const RaidenArcviz = () => {
  const { allMetaData } = useSelector((state) => state.metaDataState);
  const [metadata, setMetaData] = useState([]);

  useEffect(() => {
    if (allMetaData) {
      const data = allMetaData.filter(
        (meta) => meta.page_name == "Raiden ARCVIZ"
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
        <RaidenArcvizComponent vidio={vidio} />
        {/* <BlogSectionOne /> */}
        {/* News Section One */}
        <ContactSection2 />
        <NewsSectionOne />
        {/* Footer Section */}
        <FooterSectionOne />
      </Suspense>
    </Fragment>
  );
};

export default RaidenArcviz;
