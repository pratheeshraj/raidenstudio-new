import React, { Fragment, Suspense, useEffect, useState } from 'react'
import HeaderTwo from '../components/HeaderTwo';
import SliderOne from '../components/SliderOne';
import ServiceDetailsSection from '../components/ServiceDetailsSection';
import CounterService1 from '../components/CounterService1';
import FAQSectionOne from '../components/FAQSectionOne';
import ContactSection2 from '../components/ContactSection2';
import NewsSectionOne from '../components/NewsSectionOne';
import FooterSectionOne from '../components/FooterSectionOne';
import HelmetReact from '../elements/HelmetReact';
import Preloader from '../elements/Preloader';
import NftHero from '../components/Nftdevelopment/NftHero';
import NftAboutSection from '../components/Nftdevelopment/NftAboutSection';
import NftServices from '../components/Nftdevelopment/NftServices';

function NftDevlopment() {
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
                {/*1. Hero Banner */}
                <NftHero />
                {/*2 , 3 about Details Section */}
                <NftAboutSection />
                {/*countbar*/}
                <CounterService1 />
                {/*service*/}
                <NftServices />
                {/* faq */}
                <FAQSectionOne />
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

export default NftDevlopment