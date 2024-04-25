import React, { Fragment, Suspense } from 'react'
import HelmetReact from '../elements/HelmetReact'
import HeaderTwo from '../components/HeaderTwo'
import NewsSectionOne from '../components/NewsSectionOne'
import FooterSectionOne from '../components/FooterSectionOne'
import MetaverseRoyalContent from '../components/MetaverseRoyalContent'

const MetaverseRoyal = () => {
  return (
    <Fragment>
      <Suspense>
      <HelmetReact
          title={
            "Metaverse Royale | Readymade Battle Royale Game Solutions"
          }
          description={
            "Metaverse Royale for Multiplayer Video Game Solution is a pre-built battle royale gaming platform that enables entrepreneurs to develop Metaverse-powered battle royale game apps quickly and within their budget and timeline."
          }
          keywords={
            "battle royale game solutions, multiplayer video game development solutions, readymade battle royale game solutions"
          }
          ogimage={""}
        />
        <HeaderTwo />
        <MetaverseRoyalContent/>
        <NewsSectionOne />
        <FooterSectionOne />
      </Suspense>
    </Fragment>
  )
}

export default MetaverseRoyal
