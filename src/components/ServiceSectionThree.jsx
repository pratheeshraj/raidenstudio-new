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
                <h3>ADVANCED SERVICES</h3>
                <h2>
                  We provide a range of all-inclusive <br />
                  <span className="theme-color">services & solutions</span>
                </h2>
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
                            src="/assets/img/service/yyrd 1.webp"
                            alt=""
                          />
                        </div>
                        <div className="text-file">
                          <h2 className="title">
                            <Link to="/service-details">
                              Custom Blockchain Development
                            </Link>
                          </h2>
                          <p>
                            Offering scalable, secure business solutions through immutable blockchain tech. Specializing in custom decentralized apps for Ethereum, BSC, Solana, Polygon, and more
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
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="inner-wrapper ">
                        <div className="img-file">
                          <img
                            className="img-fluid"
                            src="/assets/img/service/DALL·E 2024-03-18 17.49 1.webp"
                            alt=""
                          />
                        </div>
                        <div className="text-file">
                          <h2 className="title">
                            <Link to="/service-details">
                              NFT Development
                            </Link>
                          </h2>
                          <p>
                            Top NFT development company offering custom marketplace solutions with integrated wallet support and seamless asset trading options for your website
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
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="inner-wrapper ">
                        <div className="img-file">
                          <img
                            className="img-fluid"
                            src="/assets/img/service/ai.webp"
                            alt=""
                          />
                        </div>
                        <div className="text-file">
                          <h2 className="title">
                            <Link to="/service-details">
                              Generative AI Development
                            </Link>
                          </h2>
                          <p>
                            Unlock innovation with our expert Generative AI team, crafting bespoke solutions like chatbots and robo-advisors to streamline business processes and enhance efficiency
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
          <img
            className="shape-1 poa"
            src="/assets/img/icon/96_icon.png"
            alt=""
          />
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
          <img
            className="shape-4 poa"
            src="/assets/img/icon/77_icon.png"
            alt=""
          />
        </div>
      </section>
      {/* Service Section three End */}
    </>
  );
};

export default ServiceSectionThree;
