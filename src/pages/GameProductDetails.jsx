import React, { Fragment, Suspense } from "react";
import HelmetReact from "../elements/HelmetReact";
import HeaderTwo from "../components/HeaderTwo";
import NewsSectionOne from "../components/NewsSectionOne";
import FooterSectionOne from "../components/FooterSectionOne";
import GameProductDetailsHero from "../components/GameProductDetailsHero";
import ContactSection2 from './../components/ContactSection2';

const GameProductDetails = () => {
  return (
    <Fragment>
      <Suspense>
        <HelmetReact title={"career"} />
        <HeaderTwo />
        <GameProductDetailsHero/>
        <ContactSection2/>
        <NewsSectionOne />
        <FooterSectionOne />
      </Suspense>
    </Fragment>
  );
};

export default GameProductDetails;
