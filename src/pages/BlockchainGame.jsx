import React, { Fragment, Suspense, useEffect, useState } from 'react'
import HeaderTwo from '../components/HeaderTwo';
import ContactSection2 from '../components/ContactSection2';
import NewsSectionOne from '../components/NewsSectionOne';
import FooterSectionOne from '../components/FooterSectionOne';
import HelmetReact from '../elements/HelmetReact';
import Preloader from '../elements/Preloader';
import VrFaq from '../components/Vrdevelopment/VrFaq';
import BlockchainHero from '../components/BlockChainGame/BlockchainHero';
import BlockchainAbout from '../components/BlockChainGame/BlockchainAbout';
import BlockChainCount from '../components/BlockChainGame/BlockChainCount';
import BlockchainService from '../components/BlockChainGame/BlockchainService';
import BlockchainBanner from '../components/BlockChainGame/BlockchainBanner';
import BlockchainFeature from '../components/BlockChainGame/BlockchainFeature';
import BlockChainProcess from '../components/BlockChainGame/BlockChainProcess';
import BlockChainFaq from '../components/BlockChainGame/BlockChainFaq';
import BlockchainPortfolio from '../components/BlockChainGame/BlockchainPortfolio';
import BlockChainWhy from '../components/BlockChainGame/BlockChainWhy';

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
                {/* <BlockchainIndustries /> */}
                {/* metaverse-tech */}
                {/* <BlockchainTech /> */}
                {/* metaverse-process */}
                <BlockChainProcess />
                <BlockchainPortfolio />
                {/* metaverse-whychoose */}
                <BlockChainWhy />
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