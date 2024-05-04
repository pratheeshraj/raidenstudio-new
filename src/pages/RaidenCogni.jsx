import React, { Fragment, Suspense, useEffect, useState } from "react";
import FooterSectionOne from "../components/FooterSectionOne";
import ContactSection2 from "../components/ContactSection2";
import BlogSectionOne from "../components/BlogSectionOne";
import RaidenSimXContent from "../components/RaidenSimXContent";
import HeaderTwo from "../components/HeaderTwo";
import HelmetReact from "../elements/HelmetReact";
import RaidenCogniContent from "../components/RaidenCogniContent";
import NewsSectionOne from "../components/NewsSectionOne";
import vidio from "../images/cogni.mp4";
import { useSelector } from "react-redux";

const RaidenCogni = () => {
  const { allMetaData } = useSelector((state) => state.metaDataState);
  const [metadata, setMetaData] = useState([]);

  useEffect(() => {
    if (allMetaData) {
      const data = allMetaData.filter((meta) => meta.page_name == "Raiden COGNI+");
      setMetaData(data);
    }
  }, [allMetaData]);
  return (
    <Fragment>
      <Suspense>
        {/* Helmet */}
        <HelmetReact
          title={metadata[0]?.meta_title}
          description={metadata[0]?.meta_dec}
          keywords={metadata[0]?.meta_keyword}
          ogimage={metadata[0]?.og_image}
        />
        {/* Header one */}
        <HeaderTwo />
        {/* Breadcrumb */}
        {/* <Breadcrumb data={"Project Details"} /> */}
        {/* Project Details Section */}
        <>
          {/* Project Details Section Start */}
          <section className=" project-details">
            <div className="auto-containercontainer-fulid">
              <div className="col-12 project_hero_section">
                <video autoPlay muted loop>
                  <source src={vidio} type="video/mp4" />
                </video>
              </div>
              <div className="container-fulid project_hero_content">
                <div className="container pb-4 product_what_we_do">
                  <div className="row" style={{ display: "flex", alignItems: "start" }}>
                    <div
                      className="col-lg-5"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      <div className="title">
                        <h2>
                          <span style={{ color: "#5AA9C3" }}>What we</span> Offer?
                        </h2>
                      </div>
                      <div className="inner-des">
                        <p>
                          COGNI+, is a state-of-the-art Virtual Reality (VR) Autism Training solution designed to provide immersive and customizable training experiences for individuals with ASD. With COGNI+, users can practice social interactions, communication skills, and behavioral responses in realistic and interactive environments, empowering them to develop essential life skills in a safe and controlled setting.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div
                        className="widget-project"
                        data-aos="fade-up"
                        data-aos-delay="300"
                      >
                        <div className="project_left">
                          <h2 style={{ marginBottom: "10px" }}>
                            <span style={{ color: "#5AA9C3" }}>Why</span> COGNI+?
                          </h2>
                        </div>
                        <div className="inner-des2">
                          <p>
                            COGNI+ is our revolutionary Virtual Reality (VR) Autism Training solution designed to transform the way autism spectrum disorder (ASD) is understood and managed.
                          </p>
                          <p>
                            COGNI+ utilizes immersive VR technology to create realistic and engaging training scenarios. Users are transported to interactive environments where they can practice social interactions, communication skills, and behavioral responses in a safe and controlled setting.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <RaidenCogniContent />
          {/* Project Details Section End */}
        </>
        <BlogSectionOne color={"#5AA9C3"} buttoncolor={"#5AA9C3"} />
        <ContactSection2 color={"#5AA9C3"} buttoncolor={"#5AA9C3"} img={"url('/assets/img/contact-img/product XR page.jpg')"} />

        {/* News Section One */}
        <NewsSectionOne color={"#5AA9C3"} buttoncolor={"#5AA9C3"} />
        {/* Footer Section */}
        <FooterSectionOne />
      </Suspense>
    </Fragment>
  );
};

export default RaidenCogni;
