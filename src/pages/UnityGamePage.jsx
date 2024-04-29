import React, { Fragment, Suspense, useEffect, useState } from "react";
import HelmetReact from "../elements/HelmetReact";
import HeaderTwo from "../components/HeaderTwo";
import ContactSection2 from "../components/ContactSection2";
import FooterSectionOne from "../components/FooterSectionOne";
import UnityHeroSection from "../components/unityGame/UnityHeroSection";
import UnityAbout from "../components/unityGame/UnityAbout";
import UnityServicesSection from "../components/unityGame/UnityServicesSection";
import NftCounter from "../components/Nftdevelopment/NftCounter";
import UnityWhyChoose from "../components/unityGame/UnityWhyChoose";
import UnityBenefitSection from "../components/unityGame/UnityBenefitSection";
import UnityBannerSection from "../components/unityGame/UnityBannerSection";
import UnityProcessSection from "../components/unityGame/UnityProcessSection";
import NewsSectionOne from "../components/NewsSectionOne";
import UnityFaq from "../components/unityGame/UnityFaq";
import UnityCount from "../components/unityGame/UnityCount";
import { useSelector } from "react-redux";

const UnityGamePage = () => {
  const { allMetaData } = useSelector((state) => state.metaDataState);
  const [metadata, setMetaData] = useState([]);

  useEffect(() => {
    if (allMetaData) {
      const data = allMetaData.filter((meta) => meta.page_name == "Unity Game Development");
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
        <UnityHeroSection />
        <UnityAbout/>
        <UnityServicesSection/>
        <UnityCount/>
        <UnityWhyChoose/>
        <UnityBenefitSection/>
        <UnityBannerSection/>
        <UnityProcessSection/>
        <NewsSectionOne />
        <UnityFaq/>
        <ContactSection2 />
        <FooterSectionOne />
      </Suspense>
    </Fragment>
  );
};

export default UnityGamePage;
