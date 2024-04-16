import React, { Fragment, Suspense, useEffect, useState } from 'react'
import HeaderTwo from '../components/HeaderTwo';
import ContactSection2 from '../components/ContactSection2';
import NewsSectionOne from '../components/NewsSectionOne';
import FooterSectionOne from '../components/FooterSectionOne';
import HelmetReact from '../elements/HelmetReact';
import Preloader from '../elements/Preloader';
import BlockchainAbout from '../components/AI-As-Sevice/BlockchainAbout';
import BlockChainCount from '../components/AI-As-Sevice/BlockChainCount';
import BlockchainBanner from '../components/AI-As-Sevice/BlockchainBanner';
import BlockchainTech from '../components/AI-As-Sevice/WebchainTech';
import WebService from './../components/AI-As-Sevice/WebService';
import WebHero from '../components/AI-As-Sevice/AsHero';
import WebProcess from '../components/AI-As-Sevice/WebProcess';
import WebFaq from '../components/AI-As-Sevice/WebFaq';
import WebWhychoose from '../components/AI-As-Sevice/WebWhychoose';
import WebModel from '../components/AI-As-Sevice/WebModel';
import AsHero from '../components/AI-As-Sevice/AsHero';

function AiasService() {
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
                <AsHero />
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

export default AiasService