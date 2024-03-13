import React, { Fragment, Suspense, useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HeaderOne from "../components/HeaderOne";
import Breadcrumb from "../components/Breadcrumb";
import NewsSectionOne from "../components/NewsSectionOne";
import FooterSectionOne from "../components/FooterSectionOne";
import BlogGridSection from "../components/BlogGridSection";
import HelmetReact from "../elements/HelmetReact";

const BlogGrid = () => {
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
        <HelmetReact title={"Blog Grid"} />
        {/* Header one */}
        <HeaderOne />
        {/* Breadcrumb */}
        <Breadcrumb data={"Blog Grid"} />
        {/* Blog Grid */}
        <BlogGridSection />
        {/* News Section One */}
        <NewsSectionOne />
        {/* Footer Section */}
        <FooterSectionOne />
      </Suspense>
    </Fragment>
  );
};

export default BlogGrid;
