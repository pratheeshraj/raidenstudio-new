import React, { Fragment, Suspense, useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HeaderOne from "../components/HeaderOne";
import Breadcrumb from "../components/Breadcrumb";
import FooterSectionOne from "../components/FooterSectionOne";
import NewsSectionOne from "../components/NewsSectionOne";
import FAQSectionOne from "../components/FAQSectionOne";
import CounterSectionOne from "../components/CounterSectionOne";
import HelmetReact from "../elements/HelmetReact";

const FAQ = () => {
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
        <HelmetReact title={"FAQ"} />
        {/* Header one */}
        <HeaderOne />
        {/* Breadcrumb */}
        <Breadcrumb data={"FAQ"} />
        {/* FAQ Section One */}
        <FAQSectionOne />
        {/* Counter Section One */}
        <CounterSectionOne />
        {/* News Section One */}
        <NewsSectionOne />
        {/* Footer Section */}
        <FooterSectionOne />
      </Suspense>
    </Fragment>
  );
};

export default FAQ;
