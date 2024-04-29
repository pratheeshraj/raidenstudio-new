import React, { Fragment, Suspense, useEffect, useState } from "react";
import HelmetReact from "../elements/HelmetReact";
import HeaderTwo from "../components/HeaderTwo";
import FooterSectionOne from "../components/FooterSectionOne";
import NewsSectionOne from "../components/NewsSectionOne";
import CareerSection from "../components/CareerSection";
import CareerJobSection from "../components/CareerJobSection";
import { useSelector } from "react-redux";

const Career = () => {
  const { allMetaData } = useSelector((state) => state.metaDataState);
  const [metadata, setMetaData] = useState([]);

  useEffect(() => {
    if (allMetaData) {
      const data = allMetaData.filter((meta) => meta.page_name == "Home Page");
      setMetaData(data);
    }
  }, [allMetaData]);
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
