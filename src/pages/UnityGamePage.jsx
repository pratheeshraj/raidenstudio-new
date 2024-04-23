import React, { Fragment, Suspense } from "react";
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

const UnityGamePage = () => {
  return (
    <Fragment>
      <Suspense>
      <HelmetReact
          title={
            "Unity Game Development Company | Hire Unity3D Game Developers"
          }
          description={
            "As a leading Unity game development company, Raiden provides professional services in creating cross-platform games in immersive 2D/3D, AR/VR, and the Metaverse."
          }
          keywords={
            "unity game development, unity 3d game development company, unity game development company, hire unity game developers"
          }
          ogimage={""}
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
