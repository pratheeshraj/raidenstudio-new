import React, { Fragment, Suspense, useEffect, useState } from 'react'
import HeaderTwo from '../components/HeaderTwo';
import ContactSection2 from '../components/ContactSection2';
import NewsSectionOne from '../components/NewsSectionOne';
import FooterSectionOne from '../components/FooterSectionOne';
import HelmetReact from '../elements/HelmetReact';
import Preloader from '../elements/Preloader';
import BlockchainAbout from '../components/AI-As-Sevice/AsAbout';
import BlockChainCount from '../components/AI-As-Sevice/BlockChainCount';
import BlockchainBanner from '../components/AI-As-Sevice/BlockchainBanner';
import BlockchainTech from '../components/AI-As-Sevice/AsTech';
import WebService from '../components/AI-As-Sevice/AsService';
import WebHero from '../components/AI-As-Sevice/AsHero';
import WebProcess from '../components/AI-As-Sevice/WebProcess';
import WebFaq from '../components/AI-As-Sevice/AsFaq';
import WebWhychoose from '../components/AI-As-Sevice/WebWhychoose';
import WebModel from '../components/AI-As-Sevice/WebModel';
import AsHero from '../components/AI-As-Sevice/AsHero';
import AsService from '../components/AI-As-Sevice/AsService';
import AsFaq from '../components/AI-As-Sevice/AsFaq';
import AiBussiness from '../components/AI-As-Sevice/AiBussiness';
import AsUseCase from './AsUseCase';
import BlockchainIndustries from './../components/BlockChain/BlockchainIndustries';
import AsIndustries from '../components/AI-As-Sevice/AsIndustries';

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
                <AsService />
                {/* metaverse-banner */}
                {/* <AsIndustries /> */}
                {/* <BlockchainBanner /> */}
                {/* <BlockchainTech /> */}
                <AiBussiness />
                {/* metaverse-features */}
                {/* <BlockchainFeature /> */}
                {/* metaverse-industries */}
                {/* metaverse-tech */}
                {/* metaverse-process */}
                {/* <WebProcess /> */}
                {/* vr-count */}
                <AsUseCase />
                <BlockChainCount />
                {/* <WebModel /> */}
                {/* metaverse-whychoose */}
                <WebWhychoose />
                {/* faq */}
                <AsFaq />
                {/* contact */}
                <ContactSection2 />
                {/* Footer Section */}
                {/* News Section Two */}
                {/* <NewsSectionOne /> */}
                <FooterSectionOne />
            </Suspense>
        </Fragment>
    );
};

export default AiasService