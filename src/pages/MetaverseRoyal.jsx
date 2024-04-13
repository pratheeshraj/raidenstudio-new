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
        <HelmetReact title={"career"} />
        <HeaderTwo />
        <MetaverseRoyalContent/>
        <NewsSectionOne />
        <FooterSectionOne />
      </Suspense>
    </Fragment>
  )
}

export default MetaverseRoyal
