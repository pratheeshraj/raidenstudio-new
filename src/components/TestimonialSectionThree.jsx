import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs, EffectFade } from "swiper";
const TestimonialSectionThree = () => {
  return (
    <>
      {/* Testimonial Section three start*/}
      <section className="testimonial-section three">
        <div className="auto-container">
          <div className="row">
            <div className="col-12">
              <div
                className="section-title-shape-one middle black "
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h3><span className="theme-color"> Meet The Team Member</span></h3>
                <h2>
                  Innovation, Creativity, and  Inclusivity
                </h2>
              </div>
            </div>
          </div>
          <div className="row por">
            <div className="swiper swiper-container testimonial-two">
              <div className="swiper-wrapper">
                <Swiper
                  spaceBetween={20}
                  slidesPerView={2}
                  slidesPerGroup={1}
                  speed={1000}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 1000 }}
                  className="mySwiper"
                  modules={[FreeMode, Navigation, Thumbs, EffectFade]}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      slidesPerGroup: 1,
                    },
                    768: {
                      slidesPerView: 1,
                    },
                    992: {
                      slidesPerView: 2,
                    },
                    1200: {
                      slidesPerView: 2,
                    },
                    1400: {
                      slidesPerView: 2,
                    },
                  }}
                >
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="inner-wrapper">
                        <div className="review">
                          <p>
                            Kamal founded Raiden Studios as a result of his interest in immersive technology.
                            Kamal previously worked as the chief operating officer at Osiz Technologies, where he honed his managerial and team-leading skills, as well as his knowledge of Blockchain and Web3.
                          </p>
                          {/* <div className="shape">
                            <span>
                              <i className="fa-sharp fa-solid fa-quote-left" />
                            </span>
                          </div> */}
                        </div>
                        <div className="intro-body">
                          <div className="img-file">
                            <img
                              src="/assets/img/founder/img1.jpg"
                              alt=""
                            />
                          </div>
                          <div className="text-file">
                            <h3>KAMAL</h3>
                            <h5>CEO & Co-Founder</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="inner-wrapper">
                        <div className="review">
                          <p>
                            Vaidya began his career as the CEO of Marlion Games, an Edutech gamification business that specialised in developing VR and augmented reality (VR/AR) solutions for the Indian market in the fields of education and healthcare. He has also held an academic position in engineering.
                          </p>
                          {/* <div className="shape">
                            <span>
                              <i className="fa-sharp fa-solid fa-quote-left" />
                            </span>
                          </div> */}
                        </div>
                        <div className="intro-body">
                          <div className="img-file">
                            <img
                              src="/assets/img/founder/img2.jpg"
                              alt=""
                            />
                          </div>
                          <div className="text-file">
                            <h3>VAIDYA</h3>
                            <h5>CTO & Co-Founder</h5>
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
        <div className="shape-image">
          <img
            className="shape-1 poa"
            src="/assets/img/icon/92_icon.png"
            alt=""
          />
          <img
            className="shape-3 poa"
            src="/assets/img/icon/95_icon.png"
            alt=""
          />
        </div>
      </section>
      {/* Testimonial Section three end*/}
    </>
  );
};

export default TestimonialSectionThree;
