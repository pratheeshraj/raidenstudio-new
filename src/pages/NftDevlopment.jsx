import React, { Fragment, Suspense, useEffect, useState } from "react";
import HeaderTwo from "../components/HeaderTwo";
import SliderOne from "../components/SliderOne";
import ServiceDetailsSection from "../components/ServiceDetailsSection";
import CounterService1 from "../components/CounterService1";
import FAQSectionOne from "../components/FAQSectionOne";
import ContactSection2 from "../components/ContactSection2";
import NewsSectionOne from "../components/NewsSectionOne";
import FooterSectionOne from "../components/FooterSectionOne";
import HelmetReact from "../elements/HelmetReact";
import Preloader from "../elements/Preloader";
import NftHero from "../components/Nftdevelopment/NftHero";
import NftAboutSection from "../components/Nftdevelopment/NftAboutSection";
import NftServices from "../components/Nftdevelopment/NftServices";
import NftCounter from "../components/Nftdevelopment/NftCounter";
import NftBanner from "../components/Nftdevelopment/NftBanner";
import NftFeatures from "../components/Nftdevelopment/NftFeatures";
import NftProgramming from "../components/Nftdevelopment/NftProgramming";
import NftIndustries from "../components/Nftdevelopment/NftIndustries";
import NftProcess from "../components/Nftdevelopment/NftProcess";
import NftWhyChoose from "./../components/Nftdevelopment/NftWhyChoose";
import Process from "../components/NextDevelopment/Process";
import NftFaq from "../components/Nftdevelopment/NftFaq";

function NftDevlopment() {
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
            "Non-Fungible Token (NFT) Development Company | NFT Development Services"
          }
          description={
            "Raiden is an NFT development company that provides a full cycle of custom NFT marketplace development and NFT game development services and so on."
          }
          keywords={
            "nft development, nft development company, nft development services, non-fungible token development, hire nft developers"
          }
          ogimage={""}
        />
        {/* Header two */}
        <HeaderTwo />
        {/*1. Hero Banner */}
        <NftHero />
        {/*2 , 3 about Details Section */}
        <NftAboutSection />
        {/*countbar*/}
        <NftCounter />
        {/*service*/}
        <NftServices />
        {/* <Process /> */}
        {/*banner*/}
        <NftBanner />
        {/* { features} */}
        <NftFeatures />
        {/* industries */}
        <NftIndustries />
        {/* nft programming */}
        <NftProgramming />
        {/* Nft process */}
        <NftProcess />
        {/* whyChoose */}
        <NftWhyChoose />
        {/* faq */}
        <NftFaq />
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
