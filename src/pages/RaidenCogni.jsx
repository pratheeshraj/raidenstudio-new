import React, { Fragment, Suspense } from "react";
import FooterSectionOne from "../components/FooterSectionOne";
import ContactSection2 from "../components/ContactSection2";
import BlogSectionOne from "../components/BlogSectionOne";
import RaidenSimXContent from "../components/RaidenSimXContent";
import HeaderTwo from "../components/HeaderTwo";
import HelmetReact from "../elements/HelmetReact";
import RaidenCogniContent from "../components/RaidenCogniContent";
import NewsSectionOne from "../components/NewsSectionOne";
import vidio from "../images/viedio.mp4";

const RaidenCogni = () => {
  return (
    <Fragment>
      <Suspense>
        {/* Helmet */}
        <HelmetReact title={"Project Details"} />
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
                <div className="container pb-4 ">
                  <div className="row">
                    <div
                      className="col-lg-7"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      <div className="title">
                        <h2>
                          <span>what we</span> Offer?
                        </h2>
                      </div>
                      <div className="inner-des">
                        <p>
                          We offer immersive VR, paired with cutting edge AI
                          technology, that learns from your child, it crafts the
                          perfect therapeutic journey tailormade to improve
                          focus and attention span.
                        </p>
                        <p>
                          Raiden Cogni+ isn’t just technology. It's a belief
                          that every child, regardless of their challenges,
                          deserves a chance to explore, understand, and grow at
                          their own pace.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div
                        className="widget-project"
                        data-aos="fade-up"
                        data-aos-delay="300"
                      >
                        <div className="project_left">
                          <h2>
                            <span>Why</span> COGNI+?
                          </h2>
                        </div>
                        <div className="inner-des2">
                          <p>
                            The Biggest challenge in making VR experience
                            conducive to kids is to reduce the usage complexity.
                            We have seamlessly integrated the state of the art
                            body tracking systems into VR. There is no need for
                            controllers. Just movement, expression, and a
                            universe waiting to respond.
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
        <BlogSectionOne />
        <ContactSection2 />

        {/* News Section One */}
        <NewsSectionOne />
        {/* Footer Section */}
        <FooterSectionOne />
      </Suspense>
    </Fragment>
  );
};

export default RaidenCogni;
