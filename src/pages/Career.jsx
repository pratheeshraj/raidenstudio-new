import React, { Fragment, Suspense } from "react";
import HelmetReact from "../elements/HelmetReact";
import HeaderTwo from "../components/HeaderTwo";
import FooterSectionOne from "../components/FooterSectionOne";
import NewsSectionOne from "../components/NewsSectionOne";
import CareerSection from "../components/CareerSection";
import CareerJobSection from "../components/CareerJobSection";

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
        <CareerJobSection/>
        <NewsSectionOne />
        <FooterSectionOne />
      </Suspense>
    </Fragment>
  );
};

export default Career;
