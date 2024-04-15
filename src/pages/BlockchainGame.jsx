import React, { Fragment, Suspense, useEffect, useState } from 'react'
import HeaderTwo from '../components/HeaderTwo';
import ContactSection2 from '../components/ContactSection2';
import NewsSectionOne from '../components/NewsSectionOne';
import FooterSectionOne from '../components/FooterSectionOne';
import HelmetReact from '../elements/HelmetReact';
import Preloader from '../elements/Preloader';
import VrFaq from '../components/Vrdevelopment/VrFaq';
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

function BlockchainGame() {
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
                <BlockchainHero />
                {/* vr-about */}
                <BlockchainAbout />
                {/* vr-count */}
                <BlockChainCount />
                {/* vr-service */}
                <BlockchainService />
                {/* metaverse-banner */}
                <BlockchainBanner />
                {/* metaverse-features */}
                <BlockchainFeature />
                {/* metaverse-industries */}
                <BlockchainIndustries />
                {/* metaverse-tech */}
                <BlockchainTech />
                {/* metaverse-process */}
                <BlockChainProcess />
                {/* metaverse-whychoose */}
                <BlockChainWhychoose />
                {/* faq */}
                <BlockChainFaq />
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

export default BlockchainGame;