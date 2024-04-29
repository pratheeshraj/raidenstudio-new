import React, { Fragment, Suspense, useEffect, useState } from "react";
import HelmetReact from "../elements/HelmetReact";
import HeaderTwo from "../components/HeaderTwo";
import MmorpgHeroSection from "../components/mmorpg/MmorpgHeroSection";
import MmorpgAbout from "../components/mmorpg/MmorpgAbout";
import MmorpgServicesSection from "../components/mmorpg/MmorpgServicesSection";
import MmorpgWhyChoose from "../components/mmorpg/MmorpgWhyChoose";
import MmorpgBenefitSection from "../components/mmorpg/MmorpgBenefitSection";
import MmorpgBannerSection from "../components/mmorpg/MmorpgBannerSection";
import MmorpgProcessSection from "../components/mmorpg/MmorpgProcessSection";
import MmorpgFaq from "../components/mmorpg/MmorpgFaq";
import FooterSectionOne from "../components/FooterSectionOne";
import ContactSection2 from "../components/ContactSection2";
import NewsSectionOne from "../components/NewsSectionOne";
import NftCounter from "../components/Nftdevelopment/NftCounter";
import MmorpgCount from "../components/mmorpg/MmorpgCount";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
const MmorpgGamePage = () => {
  const { allMetaData } = useSelector((state) => state.metaDataState);
  const [metadata, setMetaData] = useState([]);

  useEffect(() => {
    if (allMetaData) {
      const data = allMetaData.filter((meta) => meta.page_name == "MMorpg Game Development");
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
        <MmorpgHeroSection />
        <MmorpgAbout />
        <MmorpgServicesSection />
        <MmorpgCount />
        <MmorpgWhyChoose />
        <MmorpgBenefitSection />
        <MmorpgBannerSection />
        <MmorpgProcessSection />
        <MmorpgFaq />
        <NewsSectionOne />
        <ContactSection2 />
        <FooterSectionOne />
      </Suspense>
    </Fragment>
  )
}
        <HeaderTwo />
        <MmorpgHeroSection />
        <MmorpgAbout />
        <MmorpgServicesSection />
        <MmorpgCount />
        <MmorpgWhyChoose />
        <MmorpgBenefitSection />
        <MmorpgBannerSection />
        <MmorpgProcessSection />
        <NewsSectionOne />
        <MmorpgFaq />
        <ContactSection2 />
        <FooterSectionOne />


      </Suspense>
    </Fragment>
  );
};



export default MmorpgGamePage;
