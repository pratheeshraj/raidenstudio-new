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
import { useSelector } from "react-redux";

function BlockchainGame() {
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
      const data = allMetaData.filter((meta) => meta.page_name == "Blockchain Game Development");
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
        <ContactSection2 color={"#00ECE5"} buttoncolor={"#00ECE5"} />
        {/* Footer Section */}
        {/* News Section Two */}
        <NewsSectionOne color={"#00ECE5"} buttoncolor={"#00ECE5"} />
        <FooterSectionOne />
      </Suspense>
    </Fragment>
  );
}

export default BlockchainGame;
