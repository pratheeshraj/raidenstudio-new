import React, { Fragment, Suspense, useEffect, useState } from "react";
import HelmetReact from "../elements/HelmetReact";
import HeaderTwo from "../components/HeaderTwo";
import UnRealHeroSection from "../components/unrealGame/UnRealHeroSection";
import UnRealAbout from "../components/unrealGame/UnRealAbout";
import UnRealServicesSection from "../components/unrealGame/UnRealServicesSection";
import UnRealWhyChoose from "../components/unrealGame/UnRealWhyChoose";
import UnRealBenefitSection from "../components/unrealGame/UnRealBenefitSection";
import UnRealBannerSection from "../components/unrealGame/UnRealBannerSection";
import UnRealProcessSection from "../components/unrealGame/UnRealProcessSection";
import UnRealFaq from "../components/unrealGame/UnRealFaq";
import FooterSectionOne from "../components/FooterSectionOne";
import ContactSection2 from "../components/ContactSection2";
import NewsSectionOne from "../components/NewsSectionOne";
import NftCounter from "../components/Nftdevelopment/NftCounter";
import UnrealCount from "../components/unrealGame/UnrealCount";
import { useSelector } from "react-redux";
const UnrealGamePage = () => {
  const { allMetaData } = useSelector((state) => state.metaDataState);
  const [metadata, setMetaData] = useState([]);

  useEffect(() => {
    if (allMetaData) {
      const data = allMetaData.filter(
        (meta) => meta.page_name == "Unreal Engine Game Development"
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
        <UnRealHeroSection />
        <UnRealAbout />
        <UnRealServicesSection />
        <UnrealCount />
        <UnRealWhyChoose />
        <UnRealBenefitSection />
        <UnRealBannerSection />
        <UnRealProcessSection />
        <UnRealFaq />
        <NewsSectionOne />
        <ContactSection2 color={"#BEAB59"} buttoncolor={"#BEAB59"} />
        <FooterSectionOne />
      </Suspense>
    </Fragment>
  );
};

export default UnrealGamePage;
