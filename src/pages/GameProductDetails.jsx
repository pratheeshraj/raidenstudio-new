import React, { Fragment, Suspense, useEffect, useState } from "react";
import HelmetReact from "../elements/HelmetReact";
import HeaderTwo from "../components/HeaderTwo";
import NewsSectionOne from "../components/NewsSectionOne";
import FooterSectionOne from "../components/FooterSectionOne";
import GameProductDetailsHero from "../components/GameProductDetailsHero";
import ContactSection2 from './../components/ContactSection2';
import { useSelector } from "react-redux";

const GameProductDetails = () => {
  const { allMetaData } = useSelector((state) => state.metaDataState);
  const [metadata, setMetaData] = useState([]);

  useEffect(() => {
    if (allMetaData) {
      const data = allMetaData.filter((meta) => meta.page_name == "Realm Wars Clash of Empires");
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
        <GameProductDetailsHero />
        <ContactSection2 color={"rgb(0, 236, 229)"} buttoncolor={"#00ECE5 "} />
        <NewsSectionOne color={"rgb(0, 236, 229)"} buttoncolor={"#00ECE5 "} />
        <FooterSectionOne />
      </Suspense>
    </Fragment>
  );
};

export default GameProductDetails;
