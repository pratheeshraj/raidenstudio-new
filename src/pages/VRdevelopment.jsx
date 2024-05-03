import React, { Fragment, Suspense, useEffect, useState } from "react";
import HeaderTwo from "../components/HeaderTwo";
import ContactSection2 from "../components/ContactSection2";
import NewsSectionOne from "../components/NewsSectionOne";
import FooterSectionOne from "../components/FooterSectionOne";
import HelmetReact from "../elements/HelmetReact";
import Preloader from "../elements/Preloader";
import MetaverseBanner from "../components/MetaverseDevolopment/MetaverseBanner";
import VrHero from "../components/Vrdevelopment/VrHero";
import VrAbout from "../components/Vrdevelopment/VrAbout";
import VrCount from "../components/Vrdevelopment/VrCount";
import Vrsevice from "../components/Vrdevelopment/Vrsevice";
import Vrfeatures from "../components/Vrdevelopment/Vrfeatures";
import VrIndustries from "../components/Vrdevelopment/VrIndustries";
import VrTech from "../components/Vrdevelopment/VrTech";
import VrWhyChoose from "../components/Vrdevelopment/VrWhyChoose";
import VrFaq from "../components/Vrdevelopment/VrFaq";
import VrBanner from "../components/Vrdevelopment/VrBanner";
import { useSelector } from "react-redux";

function VRdevelopment() {
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
      const data = allMetaData.filter((meta) => meta.page_name == "VR Solutions");
      setMetaData(data);
    }
  }, [allMetaData]);
  return (
    <Fragment>
      <Suspense>
        {active === true && <Preloader />}
        {/* Helmet */}
        <HelmetReact
          title={metadata[0]?.meta_title}
          description={metadata[0]?.meta_dec}
          keywords={metadata[0]?.meta_keyword}
          ogimage={metadata[0]?.og_image}
        />
        {/* Header two */}
        <HeaderTwo />
        {/* vr-hero */}
        <VrHero />
        {/* vr-about */}
        <VrAbout />
        {/* vr-count */}
        <VrCount />
        {/* vr-service */}
        <Vrsevice />
        {/* metaverse-banner */}
        <VrBanner />
        {/* metaverse-features */}
        <Vrfeatures />
        {/* metaverse-industries */}
        <VrIndustries />
        {/* metaverse-tech */}
        <VrTech />
        {/* metaverse-process */}
        {/* <MetaverseProcess /> */}
        {/* metaverse-whychoose */}
        <VrWhyChoose />
        {/* faq */}
        <VrFaq />
        {/* contact */}
        <ContactSection2 color={"#25E9EA"} buttoncolor={"#25E9EA"} />
        {/* Footer Section */}
        {/* News Section Two */}
        <NewsSectionOne />
        <FooterSectionOne />
      </Suspense>
    </Fragment>
  );
}

export default VRdevelopment;
