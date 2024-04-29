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
import { useSelector } from "react-redux";

function NftDevlopment() {
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
      const data = allMetaData.filter((meta) => meta.page_name == "Metaverse Development Company");
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
        {/* metaverse-hero */}
        <MetaverseHero />
        {/* metaverse-about */}
        <MetaverseAbout />
        {/* metaverse-count */}
        <MetaverseCount />
        {/* metaverse-service */}
        <MetaverseService />
        {/* metaverse-banner */}
        <MetaverseBanner />
        {/* metaverse-features */}
        <MetaverseFeature />
        {/* metaverse-industries */}
        <MetaverseIndustries />
        {/* metaverse-tech */}
        <MetaverseTeckstack />
        {/* metaverse-process */}
        <MetaverseProcess />
        {/* metaverse-whychoose */}
        <MetaverseWhychoose />
        {/* faq */}
        <MetaverseFaq />
        {/* contact */}
        <ContactSection2 />
        {/* Footer Section */}
        {/* News Section Two */}
        <NewsSectionOne />
        <FooterSectionOne />
      </Suspense>
    </Fragment>
  );
}

export default NftDevlopment;
