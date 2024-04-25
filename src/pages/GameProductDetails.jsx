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
      <HelmetReact
          title={
            "Realm Wars Clash of Empires | Whitelabel Gaming Solutions"
          }
          description={
            "Realm Wars Clash of Empires is a turnkey gaming solution that enables entrepreneurs like you to build their game across many platforms quickly. Realm Wards Clash of Empires' superior technology and user-friendly design make it simple for entrepreneurs to launch and run a successful gaming business."
          }
          keywords={
            "realm wars clash of empires, Whitelabel gaming solutions, ready game clone script"
          }
          ogimage={""}
        />
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
