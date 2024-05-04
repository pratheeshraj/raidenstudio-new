import React, { Fragment, Suspense, useEffect, useState } from "react";
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
import { useSelector } from "react-redux";

const MetaverseCasino = () => {
    const { allMetaData } = useSelector((state) => state.metaDataState);
    const [metadata, setMetaData] = useState([]);

    useEffect(() => {
        if (allMetaData) {
            const data = allMetaData.filter((meta) => meta.page_name == "Virtual Vegas");
            setMetaData(data);
        }
    }, [allMetaData]);
    return (
        <Fragment>
            <Suspense>
                <HelmetReact
                    title={metadata[0]?.meta_title}
                    description={metadata[0]?.meta_dec}
                    keywords={metadata[0]?.meta_keyword}
                    ogimage={metadata[0]?.og_image}
                />
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
                                            Join the ranks of leading online casinos by partnering with <span className="theme-color" style={{ color: "#57E400" }}> VirtualVegas today!</span>
                                        </h2>
                                        <p>
                                            Don't miss out on the future of gaming - join VirtualVegas and take your casino to new heights!                                        </p>
                                        <div className="inner-btn d-adjust">
                                            <div>
                                                <Link className="default-btn" to="/contact-us" style={{ backgroundColor: "#4ecd00" }}>
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
                <BlogSectionOne color={"rgb(87, 228, 0)"} buttoncolor={"#4ecd00"} />
                <ContactSection2 color={"rgb(87, 228, 0)"} buttoncolor={"#4ecd00 "} img={"url('/assets/img/contact-img/game virtual.jpg')"} />
                <NewsSectionOne color={"rgb(87, 228, 0)"} buttoncolor={"#4ecd00 "} />
                <FooterSectionOne />
            </Suspense>
        </Fragment>
    );
};

export default MetaverseCasino;
