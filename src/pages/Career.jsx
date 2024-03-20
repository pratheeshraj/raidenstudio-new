import React, { Fragment, Suspense } from "react";
import HelmetReact from "../elements/HelmetReact";
import HeaderTwo from "../components/HeaderTwo";
import FooterSectionOne from "../components/FooterSectionOne";
import NewsSectionOne from "../components/NewsSectionOne";
import CareerSection from "../components/CareerSection";

const Career = () => {
  return (
    <Fragment>
      <Suspense>
        {/* Helmet */}
        <HelmetReact title={"career"} />
        {/* Header one */}
        <HeaderTwo />
        {/* Breadcrumb */}
        {/* Footer Section */}
        <CareerSection/>
        <NewsSectionOne />
        <FooterSectionOne />
      </Suspense>
    </Fragment>
  );
};

export default Career;
