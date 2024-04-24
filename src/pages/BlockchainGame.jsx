import React, { Fragment, Suspense, useEffect, useState } from "react";
import HeaderTwo from "../components/HeaderTwo";
import ContactSection2 from "../components/ContactSection2";
import NewsSectionOne from "../components/NewsSectionOne";
import FooterSectionOne from "../components/FooterSectionOne";
import HelmetReact from "../elements/HelmetReact";
import Preloader from "../elements/Preloader";
import VrFaq from "../components/Vrdevelopment/VrFaq";
import BlockchainHero from "../components/BlockChainGame/BlockchainHero";
import BlockchainAbout from "../components/BlockChainGame/BlockchainAbout";
import BlockChainCount from "../components/BlockChainGame/BlockChainCount";
import BlockchainService from "../components/BlockChainGame/BlockchainService";
import BlockchainBanner from "../components/BlockChainGame/BlockchainBanner";
import BlockchainFeature from "../components/BlockChainGame/BlockchainPortfolio";
import BlockChainProcess from "../components/BlockChainGame/BlockChainProcess";
import BlockChainFaq from "../components/BlockChainGame/BlockChainFaq";
import BlockChainWhy from "../components/BlockChainGame/BlockChainWhy";
import BlockchainFeatues from "../components/BlockChainGame/BlockchainFeatues";
import BlockchainPortfolio from "./../components/BlockChainGame/BlockchainPortfolio";

function BlockchainGame() {
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
            "Blockchain Game Development Company | Hire Blockchain Game Developer"
          }
          description={
            "Raiden, a reputable blockchain game development company provides a wide range of blockchain game development services with significant experience. Hire blockchain game developers to launch your own game on popular blockchain networks."
          }
          keywords={
            "blockchain game development, blockchain game development company, blockchain game development services, hire blockchain game developers"
          }
          ogimage={""}
        />
        {/* Header two */}
        <HeaderTwo />
        {/* vr-hero */}
        <BlockchainHero />
        {/* vr-about */}
        <BlockchainAbout />
        {/* vr-count */}
        {/* vr-service */}
        <BlockchainService />
        {/* metaverse-banner */}
        <BlockchainBanner />
        {/* metaverse-features */}
        <BlockchainFeatues />
        {/* metaverse-industries */}
        {/* <BlockchainIndustries /> */}
        {/* metaverse-tech */}
        {/* <BlockchainTech /> */}
        {/* metaverse-process */}
        <BlockChainProcess />
        <BlockChainCount />
        <BlockchainPortfolio />
        {/* metaverse-whychoose */}
        <BlockChainWhy />
        {/* faq */}
        <BlockChainFaq />
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

export default BlockchainGame;
