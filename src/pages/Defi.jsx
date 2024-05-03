import React, { Fragment, Suspense, useEffect, useState } from "react";
import HeaderTwo from "../components/HeaderTwo";
import ContactSection2 from "../components/ContactSection2";
import NewsSectionOne from "../components/NewsSectionOne";
import FooterSectionOne from "../components/FooterSectionOne";
import HelmetReact from "../elements/HelmetReact";
import Preloader from "../elements/Preloader";
import BlockchainHero from "../components/BlockChain/BlockchainHero";
import BlockchainAbout from "../components/BlockChain/BlockchainAbout";
import BlockChainCount from "../components/BlockChain/BlockChainCount";
import BlockchainService from "../components/BlockChain/BlockchainService";
import BlockchainBanner from "../components/BlockChain/BlockchainBanner";
import BlockchainFeature from "../components/BlockChain/BlockchainFeature";
import BlockchainIndustries from "../components/BlockChain/BlockchainIndustries";
import BlockchainTech from "../components/BlockChain/BlockchainTech";
import BlockChainProcess from "../components/BlockChain/BlockChainProcess";
import BlockChainWhychoose from "../components/BlockChain/BlockChainWhychoose";
import BlockChainFaq from "../components/BlockChain/BlockChainFaq";
import DefiHero from "../components/Defi/DefiHero";
import DefiAbout from "../components/Defi/DefiAbout";
import DefiCount from "../components/Defi/DefiCount";
import DefiService from "../components/Defi/DefiService";
import DefiBanner from "../components/Defi/DefiBanner";
import DefiFeature from "../components/Defi/DefiFeature";
import DefiIndustries from "../components/Defi/DefiIndustries";
import DefiTech from "../components/Defi/DefiTech";
import DefiWhychoose from "../components/Defi/DefiWhychoose";
import DefiFaq from "../components/Defi/DefiFaq";
import { useSelector } from "react-redux";

function Defi() {
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
      const data = allMetaData.filter((meta) => meta.page_name == "DeFi Development");
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
        <DefiHero />
        {/* vr-about */}
        <DefiAbout />
        {/* vr-service */}
        <DefiService />
        {/* metaverse-banner */}
        <DefiBanner />
        {/* metaverse-tech */}
        <DefiTech />
        {/* metaverse-features */}
        <DefiFeature />
        {/* metaverse-industries */}
        {/* <DefiIndustries /> */}
        {/* metaverse-process */}
        {/* <BlockChainProcess /> */}
        {/* vr-count */}
        <DefiCount />
        {/* metaverse-whychoose */}
        <DefiWhychoose />
        {/* faq */}
        <DefiFaq />
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

export default Defi;
