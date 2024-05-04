import React, { Fragment, Suspense, useEffect, useState } from 'react'
import HelmetReact from '../elements/HelmetReact'
import HeaderTwo from '../components/HeaderTwo'
import NewsSectionOne from '../components/NewsSectionOne'
import FooterSectionOne from '../components/FooterSectionOne'
import MetaverseRoyalContent from '../components/MetaverseRoyalContent'
import { useSelector } from 'react-redux'
import ContactSection2 from '../components/ContactSection2'

const MetaverseRoyal = () => {
  const { allMetaData } = useSelector((state) => state.metaDataState);
  const [metadata, setMetaData] = useState([]);

  useEffect(() => {
    if (allMetaData) {
      const data = allMetaData.filter((meta) => meta.page_name == "Metaverse Royale");
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
        <MetaverseRoyalContent />
        <ContactSection2 color={"#00ECE5"} buttoncolor={"#00ECE5"} img={"url('/assets/img/contact-img/game page.jpg')"} />
        <NewsSectionOne color={"#00ECE5"} buttoncolor={"#00ECE5"} />
        <FooterSectionOne />
      </Suspense>
    </Fragment>
  )
}

export default MetaverseRoyal
