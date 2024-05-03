import React, { Fragment, Suspense, useEffect, useState } from "react";
import HeaderTwo from "../components/HeaderTwo";
import FAQSectionOne from "../components/FAQSectionOne";
import ContactSection2 from "../components/ContactSection2";
import NewsSectionOne from "../components/NewsSectionOne";
import FooterSectionOne from "../components/FooterSectionOne";
import HelmetReact from "../elements/HelmetReact";
import Preloader from "../elements/Preloader";
import MetaverseHero from "../components/MetaverseDevolopment/MetaverseHero";
import MetaverseAbout from "../components/MetaverseDevolopment/MetaverseAbout";
import MetaverseCount from "../components/MetaverseDevolopment/MetaverseCount";
import MetaverseService from "../components/MetaverseDevolopment/MetaverseService";
import MetaverseBanner from "../components/MetaverseDevolopment/MetaverseBanner";
import MetaverseFeature from "../components/MetaverseDevolopment/MetaverseFeature";
import MetaverseTeckstack from "../components/MetaverseDevolopment/MetaverseTeckstack";
import MetaverseProcess from "../components/MetaverseDevolopment/MetaverseProcess";
import MetaverseWhychoose from "../components/MetaverseDevolopment/MetaverseWhychoose";
import MetaverseFaq from "../components/MetaverseDevolopment/MetaverseFaq";
import MetaverseIndustries from "../components/MetaverseDevolopment/MetaverseIndustries";
import VrHero from "../components/Vrdevelopment/VrHero";
import VrAbout from "../components/Vrdevelopment/VrAbout";
import VrCount from "../components/Vrdevelopment/VrCount";
import Vrsevice from "../components/Vrdevelopment/Vrsevice";
import Vrfeatures from "../components/Vrdevelopment/Vrfeatures";
import VrIndustries from "../components/Vrdevelopment/VrIndustries";
import VrTech from "../components/Vrdevelopment/VrTech";
import VrWhyChoose from "../components/Vrdevelopment/VrWhyChoose";
import VrFaq from "../components/Vrdevelopment/VrFaq";
import ArHero from "../components/Ardevelopment/ArHero";
import ArAbout from "../components/Ardevelopment/ArAbout";
import ArCount from "../components/Ardevelopment/ArCount";
import ArService from "../components/Ardevelopment/ArService";
import ArBanner from "../components/Ardevelopment/ArBanner";
import ArFeature from "../components/Ardevelopment/ArFeature";
import ArIndustries from "../components/Ardevelopment/ArIndustries";
import ArTech from "../components/Ardevelopment/ArTech";
import Arwhychoose from "../components/Ardevelopment/Arwhychoose";
import ArFaq from "../components/Ardevelopment/ArFaq";
import { useSelector } from "react-redux";

function ARdevelopment() {
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
      const data = allMetaData.filter((meta) => meta.page_name == "AR Services");
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
        <ArHero />
        {/* vr-about */}
        <ArAbout />
        {/* vr-count */}
        <ArCount />
        {/* vr-service */}
        <ArService />
        {/* metaverse-banner */}
        <ArBanner />
        {/* metaverse-features */}
        <ArFeature />
        {/* metaverse-industries */}
        <ArIndustries />
        {/* metaverse-tech */}
        <ArTech />
        {/* metaverse-process */}
        {/* <MetaverseProcess /> */}
        {/* metaverse-whychoose */}
        <Arwhychoose />
        {/* faq */}
        <ArFaq />
        {/* contact */}
        <ContactSection2 color={"#59C1FF"} buttoncolor={"#4AA4DAv"} />
        {/* Footer Section */}
        {/* News Section Two */}
        <NewsSectionOne color={"#59C1FF"} buttoncolor={"#4AA4DAv"} />
        <FooterSectionOne />
      </Suspense>
    </Fragment>
  );
}

export default ARdevelopment;
