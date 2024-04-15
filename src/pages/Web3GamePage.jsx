import React, { Suspense } from 'react'
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
const Web3GamePage = () => {
  return (
    <Suspense>
    <HelmetReact title={"career"} />
    <HeaderTwo />
    <Web3GameHeroSection/>
    <Web3GameAbout/>
    <Web3GameServicesSection/>
    <Web3GameCount />
    <Web3GameWhyChoose/>
    <Web3GameBenefitSection/>
    <Web3GameBannerSection/>
    <Web3GameProcessSection/>
    <NewsSectionOne />
    <Web3GameFaq/>
    <ContactSection2/>
    <FooterSectionOne/>
  </Suspense>
  )
}

export default Web3GamePage