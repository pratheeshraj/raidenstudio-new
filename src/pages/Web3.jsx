import React, { Fragment, Suspense, useEffect, useState } from "react";
import HeaderTwo from "../components/HeaderTwo";
import ContactSection2 from "../components/ContactSection2";
import NewsSectionOne from "../components/NewsSectionOne";
import FooterSectionOne from "../components/FooterSectionOne";
import HelmetReact from "../elements/HelmetReact";
import Preloader from "../elements/Preloader";
import BlockchainAbout from "../components/Web3/BlockchainAbout";
import BlockChainCount from "../components/Web3/BlockChainCount";
import BlockchainBanner from "../components/Web3/BlockchainBanner";
import BlockchainTech from "../components/Web3/WebchainTech";
import WebService from "./../components/Web3/WebService";
import WebHero from "../components/Web3/WebHero";
import WebProcess from "../components/Web3/WebProcess";
import WebFaq from "../components/Web3/WebFaq";
import WebWhychoose from "../components/Web3/WebWhychoose";
import WebModel from "../components/Web3/WebModel";
import { useSelector } from "react-redux";

function Web3() {
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
      const data = allMetaData.filter((meta) => meta.page_name == "Web3 Development");
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
        <WebHero />
        {/* vr-about */}
        <BlockchainAbout />
        {/* vr-service */}
        <WebService />
        {/* metaverse-banner */}
        <BlockchainBanner />
        {/* metaverse-features */}
        {/* <BlockchainFeature /> */}
        {/* metaverse-industries */}
        {/* <BlockchainIndustries /> */}
        {/* metaverse-tech */}
        <BlockchainTech />
        {/* metaverse-process */}
        <WebProcess />
        {/* vr-count */}
        <BlockChainCount />
        <WebModel />
        {/* metaverse-whychoose */}
        <WebWhychoose />
        {/* faq */}
        <WebFaq />
        {/* contact */}
        <ContactSection2 color={"#E052D1"} buttoncolor={"#E052D1"} img={"url('/assets/img/contact-img/blockchain service.jpg')"}  />
        {/* Footer Section */}
        {/* News Section Two */}
        <NewsSectionOne color={"#E052D1"} buttoncolor={"#E052D1"} />
        <FooterSectionOne />
      </Suspense>
    </Fragment>
  );
}

export default Web3;
