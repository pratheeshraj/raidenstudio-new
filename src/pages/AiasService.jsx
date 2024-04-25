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

function AiasService() {
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
        <HelmetReact
          title={
            "AI-as-a-Service (AIaaS) - Artificial Intelligence"
          }
          description={
            "Raiden provides powerful Artificial intelligence (AI) as a service, including generative AI, with prebuilt models that make it easy to apply AI to applications and business activities."
          }
          keywords={
            "Artificial Intelligence as a service, AI As A Service, AI development, AI Development Services"
          }
          ogimage={""}
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
        <ContactSection2 />
        {/* Footer Section */}
        {/* News Section Two */}
        {/* <NewsSectionOne /> */}
        <FooterSectionOne />
      </Suspense>
    </Fragment>
  );
}

export default AiasService;
