import React, { Fragment, Suspense, useEffect, useState } from 'react'
import HelmetReact from '../elements/HelmetReact'
import HeaderTwo from '../components/HeaderTwo'
import NewsSectionOne from '../components/NewsSectionOne'
import FooterSectionOne from '../components/FooterSectionOne'
import MetaverseRoyalContent from '../components/MetaverseRoyalContent'
import { useSelector } from 'react-redux'

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
        <NewsSectionOne color={"#00ECE5"} buttoncolor={"#00ECE5"} />
        <FooterSectionOne />
      </Suspense>
    </Fragment>
  )
}

export default MetaverseRoyal
