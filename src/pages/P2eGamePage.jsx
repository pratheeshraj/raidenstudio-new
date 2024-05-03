import React, { Fragment, Suspense, useEffect, useState } from 'react'
import HelmetReact from '../elements/HelmetReact'
import HeaderTwo from '../components/HeaderTwo'
import P2eGameHeroSection from "../components/p2egame/P2eGameHeroSection"
import P2eGameAbout from "../components/p2egame/P2eGameAbout"
import P2eGameServicesSection from "../components/p2egame/P2eGameServicesSection"
import P2eGameWhyChoose from "../components/p2egame/P2eGameWhyChoose"
import P2eGameBenefitSection from "../components/p2egame/P2eGameBenefitSection"
import P2eGameBannerSection from "../components/p2egame/P2eGameBannerSection"
import P2eGameProcessSection from "../components/p2egame/P2eGameProcessSection"
import P2eGameFaq from "../components/p2egame/P2eGameFaq"
import NftCounter from '../components/Nftdevelopment/NftCounter'
import FooterSectionOne from '../components/FooterSectionOne'
import ContactSection2 from '../components/ContactSection2'
import NewsSectionOne from '../components/NewsSectionOne'
import P2eGameCount from '../components/p2egame/P2eGameCount'
import { useSelector } from 'react-redux'
const P2eGamePage = () => {
  const { allMetaData } = useSelector((state) => state.metaDataState);
  const [metadata, setMetaData] = useState([]);

  useEffect(() => {
    if (allMetaData) {
      const data = allMetaData.filter((meta) => meta.page_name == "P2E Game Development");
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
        <P2eGameHeroSection />
        <P2eGameAbout />
        <P2eGameServicesSection />
        <P2eGameCount />
        <P2eGameWhyChoose />
        <P2eGameBenefitSection />
        <P2eGameBannerSection />
        <P2eGameProcessSection />
        <P2eGameFaq />
        <NewsSectionOne color={"#F09C1F"} buttoncolor={"#F09C1F"} />
        <ContactSection2 color={"#F09C1F"} buttoncolor={"#F09C1F"} />
        <FooterSectionOne />
      </Suspense>
    </Fragment>
  )
}

export default P2eGamePage
