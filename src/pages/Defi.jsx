import React, { Fragment, Suspense, useEffect, useState } from 'react'
import HeaderTwo from '../components/HeaderTwo';
import ContactSection2 from '../components/ContactSection2';
import NewsSectionOne from '../components/NewsSectionOne';
import FooterSectionOne from '../components/FooterSectionOne';
import HelmetReact from '../elements/HelmetReact';
import Preloader from '../elements/Preloader';
import BlockchainHero from '../components/BlockChain/BlockchainHero';
import BlockchainAbout from '../components/BlockChain/BlockchainAbout';
import BlockChainCount from '../components/BlockChain/BlockChainCount';
import BlockchainService from '../components/BlockChain/BlockchainService';
import BlockchainBanner from '../components/BlockChain/BlockchainBanner';
import BlockchainFeature from '../components/BlockChain/BlockchainFeature';
import BlockchainIndustries from '../components/BlockChain/BlockchainIndustries';
import BlockchainTech from '../components/BlockChain/BlockchainTech';
import BlockChainProcess from '../components/BlockChain/BlockChainProcess';
import BlockChainWhychoose from '../components/BlockChain/BlockChainWhychoose';
import BlockChainFaq from '../components/BlockChain/BlockChainFaq';
import DefiHero from '../components/Defi/DefiHero';
import DefiAbout from '../components/Defi/DefiAbout';
import DefiCount from '../components/Defi/DefiCount';
import DefiService from '../components/Defi/DefiService';
import DefiBanner from '../components/Defi/DefiBanner';
import DefiFeature from '../components/Defi/DefiFeature';
import DefiIndustries from '../components/Defi/DefiIndustries';
import DefiTech from '../components/Defi/DefiTech';
import DefiWhychoose from '../components/Defi/DefiWhychoose';
import DefiFaq from '../components/Defi/DefiFaq';

function Defi() {
    let [active, setActive] = useState(true);
    useEffect(() => {
        setTimeout(function () {
            setActive(false);
        }, 2000);
    }, []);

    return (
        <Fragment>
            <Suspense>
                {active === true && <Preloader />}
                {/* Helmet */}
                <HelmetReact title={"Services Details"} />
                {/* Header two */}
                <HeaderTwo />
                {/* vr-hero */}
                <DefiHero />
                {/* vr-about */}
                <DefiAbout />
                {/* vr-count */}
                <DefiCount />
                {/* vr-service */}
                <DefiService />
                {/* metaverse-banner */}
                <DefiBanner />
                {/* metaverse-tech */}
                <DefiTech />
                {/* metaverse-features */}
                <DefiFeature />
                {/* metaverse-industries */}
                {/* <DefiIndustries /> */}
                {/* metaverse-process */}
                <BlockChainProcess />
                {/* metaverse-whychoose */}
                <DefiWhychoose />
                {/* faq */}
                <DefiFaq />
                {/* contact */}
                <ContactSection2 />
                {/* Footer Section */}
                {/* News Section Two */}
                <NewsSectionOne />
                <FooterSectionOne />
            </Suspense>
        </Fragment>
    );
};

export default Defi