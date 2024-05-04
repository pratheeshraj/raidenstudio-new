import React, { Suspense, useEffect, useState } from 'react'
import HeaderTwo from '../components/HeaderTwo'
import FooterSectionOne from '../components/FooterSectionOne'
import ContactSection2 from '../components/ContactSection2'
import NewsSectionOne from '../components/NewsSectionOne'
import Web3GameHeroSection from "../components/web3Game/Web3GameHeroSection"
import Web3GameAbout from "../components/web3Game/Web3GameAbout"
import Web3GameServicesSection from "../components/web3Game/Web3GameServicesSection"
import Web3GameCount from "../components/web3Game/Web3GameCount"
import Web3GameWhyChoose from "../components/web3Game/Web3GameWhyChoose"
import Web3GameBenefitSection from "../components/web3Game/Web3GameBenefitSection"
import Web3GameBannerSection from "../components/web3Game/Web3GameBannerSection"
import Web3GameProcessSection from "../components/web3Game/Web3GameProcessSection"
import Web3GameFaq from "../components/web3Game/Web3GameFaq"
import HelmetReact from '../elements/HelmetReact'
import { useSelector } from 'react-redux'
const Web3GamePage = () => {
  const { allMetaData } = useSelector((state) => state.metaDataState);
  const [metadata, setMetaData] = useState([]);

  useEffect(() => {
    if (allMetaData) {
      const data = allMetaData.filter((meta) => meta.page_name == "Web3 Game Development");
      setMetaData(data);
    }
  }, [allMetaData]);
  return (
    <Suspense>
      <HelmetReact
        title={metadata[0]?.meta_title}
        description={metadata[0]?.meta_dec}
        keywords={metadata[0]?.meta_keyword}
        ogimage={metadata[0]?.og_image}
      />
      <HeaderTwo />
      <Web3GameHeroSection />
      <Web3GameAbout />
      <Web3GameServicesSection />
      <Web3GameCount />
      <Web3GameWhyChoose />
      <Web3GameBenefitSection />
      <Web3GameBannerSection />
      <Web3GameProcessSection />
      <NewsSectionOne color={"#33E5E5"} buttoncolor={"#00ECE5"} />
      <Web3GameFaq />
      <ContactSection2 color={"#33E5E5"} buttoncolor={"#00ECE5"} img={"url('/assets/img/contact-img/game service.jpg')"} />
      <FooterSectionOne />
    </Suspense>
  )
}

export default Web3GamePage
