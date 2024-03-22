import React, { Fragment, Suspense } from "react";
import HelmetReact from "../elements/HelmetReact";
import NewsSectionOne from "../components/NewsSectionOne";
import FooterSectionOne from "../components/FooterSectionOne";
import CareerDetailsSection from "../components/CareerDetailsSection";
import CareerSection from "../components/CareerSection";
import HeaderTwo from "../components/HeaderTwo";

const CareerDetails = () => {
  return (
    <Fragment>
      <Suspense>
        <HelmetReact title={"career"} />
        <HeaderTwo />
        <CareerDetailsSection />
   
        <NewsSectionOne />
        <FooterSectionOne />
      </Suspense>
    </Fragment>
  );
};

export default CareerDetails;
