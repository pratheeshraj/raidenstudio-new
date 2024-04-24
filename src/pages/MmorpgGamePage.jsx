import React, { Fragment, Suspense } from 'react'
import HelmetReact from '../elements/HelmetReact'
import HeaderTwo from '../components/HeaderTwo'
import MmorpgHeroSection from "../components/mmorpg/MmorpgHeroSection"
import MmorpgAbout from "../components/mmorpg/MmorpgAbout"
import MmorpgServicesSection from "../components/mmorpg/MmorpgServicesSection"
import MmorpgWhyChoose from "../components/mmorpg/MmorpgWhyChoose"
import MmorpgBenefitSection from "../components/mmorpg/MmorpgBenefitSection"
import MmorpgBannerSection from "../components/mmorpg/MmorpgBannerSection"
import MmorpgProcessSection from "../components/mmorpg/MmorpgProcessSection"
import MmorpgFaq from "../components/mmorpg/MmorpgFaq"
import FooterSectionOne from '../components/FooterSectionOne'
import ContactSection2 from '../components/ContactSection2'
import NewsSectionOne from '../components/NewsSectionOne'
import NftCounter from '../components/Nftdevelopment/NftCounter'
import MmorpgCount from '../components/mmorpg/MmorpgCount'
const MmorpgGamePage = () => {
  return (
    <Fragment>
    <Suspense>
    <HelmetReact
          title={
            "MMORPG Game Development Company | Hire MMORPG Game Developers"
          }
          description={
            "Raiden is a top-notch MMORPG game development company that delivers massively multiplayer online role-playing game development solutions for the gaming industry."
          }
          keywords={
            "mmorpg game development, mmorpg game development company, mmorpg game development services, hire mmorpg game developers"
          }
          ogimage={""}
        />
      <HeaderTwo />
      <MmorpgHeroSection/>
      <MmorpgAbout />
      <MmorpgServicesSection />
      <MmorpgCount />
      <MmorpgWhyChoose />
      <MmorpgBenefitSection />
      <MmorpgBannerSection />
      <MmorpgProcessSection />
      <NewsSectionOne />
      <MmorpgFaq />
      <ContactSection2/>
      <FooterSectionOne />
    </Suspense>
  </Fragment>
  )
}

export default MmorpgGamePage
