import React, { Fragment, Suspense, useEffect, useState } from "react";
import HelmetReact from "../elements/HelmetReact";
import HeaderTwo from "../components/HeaderTwo";
import ProjectDetailsSection from "../components/ProjectDetailsSection";
import ProductDemokit from "../components/ProductDemokit";
import BlogSectionOne from "../components/BlogSectionOne";
import ProjectDetailUseCase from "../components/ProjectDetailUseCase";
import NewsSectionOne from "../components/NewsSectionOne";
import FooterSectionOne from "../components/FooterSectionOne";
import vidio from "../images/viedio.mp4";
import RaidenSimXContent from "../components/RaidenSimXContent";
import demo from "../images/Metaverse.mp4";
import ContactSection2 from "../components/ContactSection2";
import { useDispatch, useSelector } from "react-redux";
import { GetAllBlogs } from "../action/BlogAction";
const RaidenSimx = () => {
  const dispatch = useDispatch();
  const { allMetaData } = useSelector((state) => state.metaDataState);
  const [metadata, setMetaData] = useState([]);

  useEffect(() => {
    if (allMetaData) {
      const data = allMetaData.filter((meta) => meta.page_name == "Raiden SimX");
      setMetaData(data);
    }
  }, [allMetaData]);
  useEffect(() => {
    try {
      dispatch(GetAllBlogs);
    } catch (error) {
      console.log(error);
    }
  }, []);

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
                <div className="container pb-4 ">
                  <div className="row">
                    <div
                      className="col-lg-6"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      <div className="title">
                        <h2>
                          <span>What</span> we do
                        </h2>
                      </div>
                      <div className="inner-des">
                        <p>
                          We specialize in
                          revolutionizing the learning experience through
                          immersive simulations powered by human-guided
                          artificial intelligence. Our cutting-edge technology
                          creates dynamic environments that enable individuals
                          and organizations to enhance their skills, knowledge,
                          and performance across various industries.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div
                        className="widget-project"
                        data-aos="fade-up"
                        data-aos-delay="300"
                      >
                        <div className="project_left">
                          <h2>
                            <span>Who</span> we are
                          </h2>
                        </div>
                        <div className="inner-des2">
                          <p>
                            Team of passionate innovators,
                            educators, and technologists dedicated to pushing
                            the boundaries of traditional learning methods. With
                            a diverse range of expertise in AI, education, and
                            simulation technologies, we are committed to
                            empowering individuals and organizations to thrive
                            in an ever-evolving world.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <RaidenSimXContent />
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

export default RaidenSimx;
