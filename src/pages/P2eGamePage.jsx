import React, { Fragment, Suspense } from 'react'
import HelmetReact from '../elements/HelmetReact'
import HeaderTwo from '../components/HeaderTwo'
import  P2eGameHeroSection from "../components/p2egame/P2eGameHeroSection"
import  P2eGameAbout from "../components/p2egame/P2eGameAbout"
import  P2eGameServicesSection from "../components/p2egame/P2eGameServicesSection"
import  P2eGameWhyChoose from "../components/p2egame/P2eGameWhyChoose"
import  P2eGameBenefitSection from "../components/p2egame/P2eGameBenefitSection"
import  P2eGameBannerSection from "../components/p2egame/P2eGameBannerSection"
import  P2eGameProcessSection from "../components/p2egame/P2eGameProcessSection"
import  P2eGameFaq from "../components/p2egame/P2eGameFaq"
import NftCounter from '../components/Nftdevelopment/NftCounter'
import FooterSectionOne from '../components/FooterSectionOne'
import ContactSection2 from '../components/ContactSection2'
import NewsSectionOne from '../components/NewsSectionOne'
import P2eGameCount from '../components/p2egame/P2eGameCount'
const P2eGamePage = () => {
  return (
    <Fragment>
    <Suspense>
    <HelmetReact
          title={
            "Play to Earn Game Development Company | P2E Game Development Services"
          }
          description={
            "Raiden is a trustworthy P2E game development company with a pool of game developers who help develop Play-To-Earn games across multiple categories using cutting-edge technologies."
          }
          keywords={
            "play-to-earn game development, p2e game development company, p2e game development services, hire p2e game developers, launch your own p2e game"
          }
          ogimage={""}
        />
      <HeaderTwo/>
      <P2eGameHeroSection/>
      <P2eGameAbout />
      <P2eGameServicesSection />
      <P2eGameCount />
      <P2eGameWhyChoose />
      <P2eGameBenefitSection />
      <P2eGameBannerSection />
      <P2eGameProcessSection />
      <NewsSectionOne />
      <P2eGameFaq />
      <ContactSection2/>
      <FooterSectionOne />
    </Suspense>
  </Fragment>
  )
}

export default P2eGamePage
