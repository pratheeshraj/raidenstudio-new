import React, { Fragment, Suspense } from "react";
import HelmetReact from "../elements/HelmetReact";
import HeaderTwo from "../components/HeaderTwo";
import NewsSectionOne from "../components/NewsSectionOne";
import FooterSectionOne from "../components/FooterSectionOne";
import MetaverseCasionoHero from "../components/MetaverseCasino/MetaverseCasionoHero";
import MetaverseCasinoContent from "../components/MetaverseCasino/MetaverseCasinoContent";

const MetaverseCasino = () => {
    return (
        <Fragment>
            <Suspense>
                <HelmetReact title={"career"} />
                <HeaderTwo />
                <MetaverseCasionoHero />
                <MetaverseCasinoContent />
                <NewsSectionOne />
                <FooterSectionOne />
            </Suspense>
        </Fragment>
    );
};

export default MetaverseCasino;
