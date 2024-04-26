import React, { Fragment, Suspense } from 'react'
import HelmetReact from '../elements/HelmetReact'
import HeaderTwo from '../components/HeaderTwo'
import NewsSectionOne from '../components/NewsSectionOne'
import FooterSectionOne from '../components/FooterSectionOne'
import ContactSection2 from '../components/ContactSection2';
import MobileGamePageHero from '../components/mobilegamepage/MobileGamePageHero'
import MobailGamePageServices from '../components/mobilegamepage/MobailGamePageServices'
import MobileGamewhyChoose from '../components/mobilegamepage/MobileGamewhyChoose'
import MobileGamePageBenifit from '../components/mobilegamepage/MobileGamePageBenifit'
import MobileGamePageAbout from '../components/mobilegamepage/MobileGamePageAbout'
import NftCounter from '../components/Nftdevelopment/NftCounter'
import MobileGamePageBanner from '../components/mobilegamepage/MobileGamePageBanner'
import MobileGamePageProcess from '../components/mobilegamepage/MobileGamePageProcess'
import MobileGamePageFaq from '../components/mobilegamepage/MobileGamePageFaq'

const MobileGame = () => {
  return (
    <Fragment>
      <Suspense>
        <HelmetReact
          title={
            "Mobile Game Development Company | Mobile Game App Development Services"
          }
          description={
            "As a prominent mobile game development company, we devote ourselves to creating innovative games for a wide range of platforms, including mobile, PC, gaming consoles, and others."
          }
          keywords={
            "game development, mobile game development, mobile game development company, mobile game development services, mobile game development solutions, hire mobile game developers"
          }
          ogimage={""}
        />
        <HeaderTwo />
        <MobileGamePageHero />
        <MobileGamePageAbout />
        <MobailGamePageServices />
        <NftCounter />
        <MobileGamewhyChoose />
        <MobileGamePageBenifit />
        <MobileGamePageBanner />
        <MobileGamePageProcess />
        <MobileGamePageFaq />
        <NewsSectionOne />
        <ContactSection2 />
        <FooterSectionOne />
      </Suspense>
    </Fragment>
  )
}

export default MobileGame
