import React, { Fragment, Suspense, useEffect, useState } from "react";
import HelmetReact from "../elements/HelmetReact";
import HeaderTwo from "../components/HeaderTwo";
import NewsSectionOne from "../components/NewsSectionOne";
import FooterSectionOne from "../components/FooterSectionOne";
import ContactSection2 from "../components/ContactSection2";
import MobileGamePageHero from "../components/mobilegamepage/MobileGamePageHero";
import MobailGamePageServices from "../components/mobilegamepage/MobailGamePageServices";
import MobileGamewhyChoose from "../components/mobilegamepage/MobileGamewhyChoose";
import MobileGamePageBenifit from "../components/mobilegamepage/MobileGamePageBenifit";
import MobileGamePageAbout from "../components/mobilegamepage/MobileGamePageAbout";
import NftCounter from "../components/Nftdevelopment/NftCounter";
import MobileGamePageBanner from "../components/mobilegamepage/MobileGamePageBanner";
import MobileGamePageProcess from "../components/mobilegamepage/MobileGamePageProcess";
import MobileGamePageFaq from "../components/mobilegamepage/MobileGamePageFaq";
import { useSelector } from "react-redux";
import MobileGameCount from "../components/MobileGameCount";

const MobileGame = () => {
  const { allMetaData } = useSelector((state) => state.metaDataState);
  const [metadata, setMetaData] = useState([]);

  useEffect(() => {
    if (allMetaData) {
      const data = allMetaData.filter(
        (meta) => meta.page_name == "Mobile Game Development"
      );
      setMetaData(data);
    }
  }, [allMetaData]);
  return (
    <Fragment>
      <Suspense>
        <HelmetReact
          title={metadata[0]?.meta_title}
          description={metadata[0]?.meta_dec}
          keywords={metadata[0]?.meta_keyword}
          ogimage={metadata[0]?.og_image}
        />
        <HeaderTwo />
        <MobileGamePageHero />
        <MobileGamePageAbout />
        <MobailGamePageServices />
        <MobileGameCount />
        <MobileGamewhyChoose />
        <MobileGamePageBenifit />
        <MobileGamePageBanner />
        <MobileGamePageProcess />
        <MobileGamePageFaq />
        <NewsSectionOne color={"#EDAE43"} buttoncolor={"#EDAE43"} />
        <ContactSection2 color={"#EDAE43"} buttoncolor={"#EDAE43"} img={"url('/assets/img/contact-img/game service.jpg')"} />
        <FooterSectionOne />
      </Suspense>
    </Fragment>
  );
};

export default MobileGame;
