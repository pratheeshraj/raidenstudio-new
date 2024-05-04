import React, { Fragment, Suspense, useEffect, useState } from "react";
import HeaderTwo from "../components/HeaderTwo";
import ContactSection2 from "../components/ContactSection2";
import FooterSectionOne from "../components/FooterSectionOne";
import HelmetReact from "../elements/HelmetReact";
import Preloader from "../elements/Preloader";
import BlockchainAbout from "../components/AI-As-Sevice/AsAbout";
import BlockChainCount from "../components/AI-As-Sevice/BlockChainCount";
import AsHero from "../components/AI-As-Sevice/AsHero";
import AsService from "../components/AI-As-Sevice/AsService";
import AsFaq from "../components/AI-As-Sevice/AsFaq";
import AiBussiness from "../components/AI-As-Sevice/AiBussiness";
import AsUseCase from "./AsUseCase";
import AiAswhychoose from "../components/AI-As-Sevice/AiAswhychoose";
import BlockchainIndustries from "./../components/BlockChain/BlockchainIndustries";
import AsIndustries from "../components/AI-As-Sevice/AsIndustries";
import { useSelector } from "react-redux";
import NewsSectionOne from './../components/NewsSectionOne';

function AiasService() {
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
      const data = allMetaData.filter((meta) => meta.page_name == "AI as a Services");
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
        <AsHero />
        {/* vr-about */}
        <BlockchainAbout />
        {/* vr-service */}
        <AsService />
        <BlockChainCount />

        {/* metaverse-banner */}
        {/* <AsIndustries /> */}
        {/* <BlockchainBanner /> */}
        {/* <BlockchainTech /> */}
        <AiBussiness />
        {/* metaverse-features */}
        {/* <BlockchainFeature /> */}
        {/* metaverse-industries */}
        {/* metaverse-tech */}
        {/* metaverse-process */}
        {/* <WebProcess /> */}
        {/* vr-count */}
        <AsUseCase />
        {/* <WebModel /> */}
        {/* metaverse-whychoose */}
        <AiAswhychoose />
        {/* faq */}
        <AsFaq />
        {/* contact */}
        <ContactSection2 color={"#5AA9C3"} buttoncolor={"#5AA9C3"} img={"url('/assets/img/contact-img/ai service.jpg')"} />
        {/* Footer Section */}
        {/* News Section Two */}
        <NewsSectionOne color={"#5AA9C3"} buttoncolor={"#5AA9C3"} />
        <FooterSectionOne />
      </Suspense>
    </Fragment>
  );
}

export default AiasService;
