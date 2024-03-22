import React, { Fragment, Suspense } from "react";
import HelmetReact from "../elements/HelmetReact";
import HeaderTwo from "../components/HeaderTwo";
import NewsSectionOne from "../components/NewsSectionOne";
import FooterSectionOne from "../components/FooterSectionOne";
import GameProductDetailsHero from "../components/GameProductDetailsHero";

const GameProductDetails = () => {
  return (
    <Fragment>
      <Suspense>
        <HelmetReact title={"career"} />
        <HeaderTwo />
        <GameProductDetailsHero/>
        <NewsSectionOne />
        <FooterSectionOne />
      </Suspense>
    </Fragment>
  );
};

export default GameProductDetails;
