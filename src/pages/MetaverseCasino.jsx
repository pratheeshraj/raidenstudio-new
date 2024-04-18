import React, { Fragment, Suspense } from "react";
import HelmetReact from "../elements/HelmetReact";
import HeaderTwo from "../components/HeaderTwo";
import NewsSectionOne from "../components/NewsSectionOne";
import FooterSectionOne from "../components/FooterSectionOne";
import MetaverseCasionoHero from "../components/MetaverseCasino/MetaverseCasionoHero";
import MetaverseCasinoContent from "../components/MetaverseCasino/MetaverseCasinoContent";
import ChoiceOfGames from "../components/MetaverseCasino/ChoiceOfGames";
import Casinofaq from "../components/MetaverseCasino/Casinofaq";
import BlogSectionOne from "../components/BlogSectionOne";
import ContactSection2 from "../components/ContactSection2";
import { Link } from "react-router-dom";

const MetaverseCasino = () => {
    return (
        <Fragment>
            <Suspense>
                <HelmetReact title={"career"} />
                <HeaderTwo />
                <MetaverseCasionoHero />
                <MetaverseCasinoContent />
                <section
                    className="counter-section one"
                    style={{
                        backgroundImage: "url('/assets/img/virtualvegas/banner.jpg')",
                        backgroundSize: "cover"
                    }}
                >
                    <div className="auto-container">
                        <div className="award-part " data-aos="fade-up" data-aos-delay="300">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="title">
                                        <h2>
                                        Join the ranks of leading online casinos by partnering with <span className="theme-color"> VirtualVegas today!</span>
                                        </h2>
                                        <p>
                                         Don't miss out on the future of gaming - join VirtualVegas and take your casino to new heights!                                        </p>
                                        <div className="inner-btn d-adjust">
                                            <div>
                                                <Link className="default-btn" to="/contact">
                                                    Let’s Work To Do{" "}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Casinofaq />
                <BlogSectionOne />
                <ContactSection2 />
                <NewsSectionOne />
                <FooterSectionOne />
            </Suspense>
        </Fragment>
    );
};

export default MetaverseCasino;
