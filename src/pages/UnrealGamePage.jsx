import React, { Fragment, Suspense } from "react";
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
const UnrealGamePage = () => {
  return (
    <Fragment>
      <Suspense>
      <HelmetReact
          title={
            "Unreal Engine Game Development Company | Hire Unreal Engin Game Developers"
          }
          description={
            "Raiden is a premier Unreal Game Development Company that specializes in Unreal Engine Game design and development. Hire dedicated and professional Unreal Developers for all types of business vectors"
          }
          keywords={
            "unreal engine game development, unreal game development company, unreal game development services, hire unreal game developers"
          }
          ogimage={""}
        />
        <HeaderTwo />
        <UnRealHeroSection />
        <UnRealAbout />
        <UnRealServicesSection />
        <UnrealCount/>
        <UnRealWhyChoose />
        <UnRealBenefitSection />
        <UnRealBannerSection />
        <UnRealProcessSection />
        <NewsSectionOne />
        <UnRealFaq />
        <ContactSection2 />
        <FooterSectionOne />
      </Suspense>
    </Fragment>
  );
};

export default UnrealGamePage;
