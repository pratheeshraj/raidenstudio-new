import React, { Fragment, Suspense, useEffect, useState } from 'react'
import HeaderTwo from '../components/HeaderTwo';
import ContactSection2 from '../components/ContactSection2';
import NewsSectionOne from '../components/NewsSectionOne';
import FooterSectionOne from '../components/FooterSectionOne';
import HelmetReact from '../elements/HelmetReact';
import Preloader from '../elements/Preloader';
import VrFaq from '../components/Vrdevelopment/VrFaq';
import BlockchainHero from '../components/Web3/WebHero';
import BlockchainAbout from '../components/Web3/BlockchainAbout';
import BlockChainCount from '../components/Web3/BlockChainCount';
import BlockchainService from '../components/Web3/WebService';
import BlockchainBanner from '../components/Web3/BlockchainBanner';
import BlockchainFeature from '../components/Web3/BlockchainFeature';
import BlockchainIndustries from '../components/Web3/BlockchainIndustries';
import BlockchainTech from '../components/Web3/WebchainTech';
import BlockChainProcess from '../components/Web3/WebProcess';
import BlockChainWhychoose from '../components/Web3/WebWhychoose';
import BlockChainFaq from '../components/Web3/WebFaq';
import WebService from './../components/Web3/WebService';
import WebHero from '../components/Web3/WebHero';
import WebProcess from '../components/Web3/WebProcess';
import WebFaq from '../components/Web3/WebFaq';
import WebWhychoose from '../components/Web3/WebWhychoose';
import WebModel from '../components/Web3/WebModel';

function Web3() {
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
                <WebHero />
                {/* vr-about */}
                <BlockchainAbout />
                {/* vr-service */}
                <WebService />
                {/* metaverse-banner */}
                <BlockchainBanner />
                {/* metaverse-features */}
                {/* <BlockchainFeature /> */}
                {/* metaverse-industries */}
                {/* <BlockchainIndustries /> */}
                {/* metaverse-tech */}
                <BlockchainTech />
                {/* metaverse-process */}
                <WebProcess />
                {/* vr-count */}
                <BlockChainCount />
                <WebModel />
                {/* metaverse-whychoose */}
                <WebWhychoose />
                {/* faq */}
                <WebFaq />
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

export default Web3