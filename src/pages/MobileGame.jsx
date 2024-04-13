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
        <HelmetReact title={"career"} />
        <HeaderTwo />
        <MobileGamePageHero/>
        <MobileGamePageAbout/>
        <MobailGamePageServices/>
        <NftCounter />
        <MobileGamewhyChoose/>
        <MobileGamePageBenifit/>
        <MobileGamePageBanner/>
        <MobileGamePageProcess/>
        <MobileGamePageFaq/>
        <NewsSectionOne />
        <ContactSection2 />
        <FooterSectionOne/>
        <ContactSection2/>
      </Suspense>
    </Fragment>
  )
}

export default MobileGame
