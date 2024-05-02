import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
const ServiceSectionThree = () => {
  return (
    <>
      {/* Service Section three Start */}
      <section className="service-section three">
        <div className="auto-container">
          <div className="row">
            <div className="col-12">
              <div
                className="section-title-shape-one middle black "
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h3 style={{ color: "#13C4A1", textAlign: "center" }} className="theme-color">ADVANCED SERVICES</h3>
                <h2 style={{ textAlign: "center" }}>
                  We provide a range of all-inclusive
                  <span className="theme-color"> services & solutions</span>
                </h2>
                <p style={{ textAlign: "center" }}>We're experts at providing innovative solutions that use cutting-edge technology to boost creativity and revolutionize industries.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="swiper swiper-container service-one">
              <div className="swiper-wrapper">
                <Swiper
                  loop={false}
                  spaceBetween={20}
                  slidesPerView={3}
                  speed={1000}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 6000 }}
                  className="mySwiper"
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      pagination: false,
                      spaceBetween: 20,
                      slidesPerGroup: 1,
                    },
                    500: {
                      slidesPerView: 1,
                      pagination: false,
                      spaceBetween: 20,
                      slidesPerGroup: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    992: {
                      slidesPerView: 3,
                    },
                    1200: {
                      slidesPerView: 3,
                    },
                    1400: {
                      slidesPerView: 3,
                    },
                  }}
                >
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="inner-wrapper ">
                        <div className="img-file">
                          <img
                            className="img-fluid"
                            style={{ width: "-webkit-fill-available" }}
                            src="/assets/img/service/network-structure-technology-concept-blockchain-technology-technological-abstract-cube-with-dat(1).webp"
                            alt=""
                          />
                        </div>
                        <div className="text-file">
                          <h2 className="title">
                            <Link to="/blockchain-development-company">
                              Blockchain Development
                            </Link>
                          </h2>
                          <p>
                            We provide scalable, secure, and intuitive business solutions using immutable blockchain technology. Our team can create feature-rich custom decentralized applications that work seamlessly with top blockchain networks like Ethereum, BSC, Solana, Polygon, and so on.                          </p>
                          {/* <div className="link">
                            <Link to="/service-details">Read More</Link>
                          </div> */}
                          <div className="shape-overlay">
                            <img src="/assets/img/shape/15_shape.svg" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="inner-wrapper ">
                        <div className="img-file">
                          <img
                            className="img-fluid"
                            style={{ width: "-webkit-fill-available" }}
                            src="/assets/img/service/nft-digital-art-non-fungible-token-blockchain-technology-cryptographic-data-block-collecting-un(1).webp"
                            alt=""
                          />
                        </div>
                        <div className="text-file">
                          <h2 className="title">
                            <Link to="/nft-development-company">
                              NFT Development
                            </Link>
                          </h2>
                          <p>
                            We create platforms that let users trade and mint NFTs rights on your website. We can create a custom NFT marketplace, integrate wallets, and offer trading options like Opensea. A purpose-built platform will enable your users to trade assets seamlessly.                          </p>
                          {/* <div className="link">
                            <Link to="/service-details">Read More</Link>
                          </div> */}
                          <div className="shape-overlay">
                            <img src="/assets/img/shape/15_shape.svg" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="inner-wrapper ">
                        <div className="img-file">
                          <img
                            className="img-fluid"
                            style={{ width: "-webkit-fill-available" }}
                            src="/assets/img/service/big-data-ai-analysis-generative-ai(1).webp"
                            alt=""
                          />
                        </div>
                        <div className="text-file">
                          <h2 className="title">
                            <Link to="/generative-ai-development-company">
                              Generative AI Development
                            </Link>
                          </h2>
                          <p>
                            We will assist you in creating cutting-edge, custom Generative AI solutions such as chatbots, business robo-advisors, lifecycle project automation, and more. We innovate and automatically improve business operations by leveraging our experience working on AI projects.
                          </p>
                          {/* <div className="link">
                            <Link to="/service-details">Read More</Link>
                          </div> */}
                          <div className="shape-overlay">
                            <img src="/assets/img/shape/15_shape.svg" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div className="inner-btn d-adjust">
          <div>
            <Link className="default-btn" to="/service">
              View All Services
            </Link>
          </div>
        </div>
        <div className="shape-img">
          {/* <img
            className="shape-1 poa"
            src="/assets/img/icon/96_icon.png"
            alt=""
          /> */}
          <img
            className="shape-2 poa"
            src="/assets/img/icon/92_icon.png"
            alt=""
          />
          <img
            className="shape-3 poa"
            src="/assets/img/icon/71_icon.png"
            alt=""
          />
          {/* <img
            className="shape-4 poa"
            src="/assets/img/icon/77_icon.png"
            alt=""
          /> */}
        </div>
      </section>
      {/* Service Section three End */}
    </>
  );
};

export default ServiceSectionThree;
