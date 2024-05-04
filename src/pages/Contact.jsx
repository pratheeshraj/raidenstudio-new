import React, { Fragment, Suspense, useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HeaderOne from "../components/HeaderOne";
import Breadcrumb from "../components/Breadcrumb";
import FooterSectionOne from "../components/FooterSectionOne";
import NewsSectionOne from "../components/NewsSectionOne";
import ContactSection from "../components/ContactSection";
import HelmetReact from "../elements/HelmetReact";
import HeaderTwo from "../components/HeaderTwo";
import ContactSection2 from './../components/ContactSection2';
import { useSelector } from "react-redux";

const Contact = () => {
  let [active, setActive] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 2000);
  }, []);
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
        {active === true && <Preloader />}
        {/* Helmet */}
        <HelmetReact title={"Contact"} />
        {/* Header one */}
        <HeaderTwo />
        {/* Breadcrumb */}
        <Breadcrumb data={"Contact"} img={"url('/assets/img/bg-image/Frame 69.jpg')"} paragraph={"Let’s talk & work together"} />
        {/* Contact Section */}
        <ContactSection />
        {/* News Section One */}
        <NewsSectionOne />
        {/* Footer Section */}
        <FooterSectionOne />
      </Suspense>
    </Fragment>
  );
};

export default Contact;
