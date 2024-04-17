import React from "react";
import demo from "../images/Metaverse.mp4";
import "./RaidenArcvizComponent.css"
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import image1 from "../images/raidenverse/RAIDENVERSEPURCHASE.jpg";
import image2 from "../images/raidenverse/raideneducational.jpg";
import image3 from "../images/raidenverse/raidenverseclient.jpg";
import image4 from "../images/raidenverse/raidenversemedical.jpg";

const RaidenArcvizComponent = ({ vidio }) => {
    return (
        <>
            {/* Raiden arcviz - hero */}
            <section className=" project-details">
                <div className=" auto-containercontainer-fulid">
                    <div className="col-12 project_hero_section">
                        <video autoPlay muted loop>
                            <source src={vidio ? vidio : demo} type="video/mp4" />
                        </video>
                    </div>
                    <div className="container-fulid project_hero_content">
                        <div className="container pb-4 ">
                            <div className="row" style={{ alignItems: "center" }}>
                                <div
                                    className="col-lg-7"
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                >
                                    <div className="title">
                                        <h2 className="arcviz_who_heading">
                                            <span>What</span> We Offer ?
                                        </h2>
                                    </div>
                                    <div className="inner-des">
                                        <ul>
                                            <li>
                                                Class Leading hyper-realistic
                                                property visualizations.</li>
                                            <li>
                                                Integrating AI to offer a dynamic
                                                experience.
                                            </li>
                                            <li>

                                                Swift turn-aroundtime of 20
                                                business days per project.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div
                                        className="widget-project"
                                        data-aos="fade-up"
                                        data-aos-delay="300"
                                    >
                                        <div className="project_left">
                                            <h2 className="arcviz_who_heading">
                                                <span> Be the </span>Vanguard of Real Estate Marketing
                                            </h2>
                                        </div>
                                        <div className="inner-des2">
                                            <p>
                                                Meet your new property guide.
                                                answering questions, offering
                                                insights, and making the
                                                experience deeply personal.

                                            </p>
                                            <p>
                                                Our AI bot can personalize
                                                interior color schemes and
                                                decors in runtime.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Raiden arcviz - experience */}
            {/* <section>
                <section className="project-section three Raidenarcviz_main_div" style={{ padding: "80px 0" }}>
                    <div className="auto-container">
                        <div className="row Raidenarcviz">
                            <h2 className="raidenarcviz_h2">Experience the <span className="theme-color">Future Today :</span></h2>
                            <p>Embark on a journey into the future of architectural visualization with Raiden ARCVIZ. Whether you're envisioning a residential masterpiece, a commercial landmark, or an urban development, our immersive experiences provide the clarity, insight, and inspiration you need to bring your vision to life. Join us as we redefine the way we see, understand, and interact with architecture. Discover the power of Raiden ARCVIZ and elevate your designs to new heights.</p>
                        </div>
                    </div>
                </section>
            </section> */}
            {/* Raiden arcviz - cards */}
            {/* <section className="project-section three Raidenarcviz_card_main_div" style={{ padding: "80px 0" }}>
                <div className="auto-container">
                    <div className="row Raidenarcviz_card">
                        <h2 className="raidenarcviz_card_h2"><span className="theme-color">Solutions</span></h2>
                        <p className='raidenarcviz_card_p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eveniet maiores ipsa, error totam non rerum, placeat fugit repellendus vitae optio sit? Ducimus, optio! Iste ipsum aliquid molestiae vitae nemo.</p>
                        <div className="arcviz_card_div">
                            <div class="arcviz_card">
                                <div className="arcviz_round_img_div"><img src="/assets/img/whychooseusnft/experiencedteam.svg" alt="" /></div>
                                <div>Discover Your Vision Come to Life</div>
                                <p>
                                    Our team brings every architectural vision to life with stunning accuracy. With our cutting-edge technology and meticulous attention to detail, you can explore your project before it's built, gaining invaluable insights and ensuring every aspect meets your expectations.
                                </p>
                            </div>
                            <div class="arcviz_card">
                                <div className="arcviz_round_img_div"><img src="/assets/img/whychooseusnft/experiencedteam.svg" alt="" /></div>
                                <div>Immersive Experiences, Unmatched Realism</div>
                                <p>
                                    Equipped with state-of-the-art virtual reality (VR) headsets, you can walk through rooms, inspect materials, and experience the scale of your project firsthand. Feel the warmth of natural light streaming through windows, admire the intricacies of interior finishes, and visualize the flow of space in real time.
                                </p>
                            </div>
                            <div class="arcviz_card">
                                <div className="arcviz_round_img_div"><img src="/assets/img/whychooseusnft/experiencedteam.svg" alt="" /></div>

                                <div>Seamless Collaboration, Enhanced Communication</div>
                                <p>
                                    Whether you're an architect, designer, developer, or client, our immersive visualizations facilitate clearer communication, foster better understanding, and streamline decision-making processes. Break down barriers, bridge the gap between imagination and reality.
                                </p>                                </div>
                            <div class="arcviz_card">
                                <div className="arcviz_round_img_div"><img src="/assets/img/whychooseusnft/experiencedteam.svg" alt="" /></div>

                                <div>Unleash the Power of Innovation</div>
                                <p>
                                    Deliver groundbreaking solutions that empower architects, designers, and developers to realize their creative visions. From augmented reality (AR) experiences to interactive walkthroughs, we offer a diverse range of tools and services tailored to your needs.                                     </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <section className="project-section three" style={{ background: "white" }}>
                <div className="auto-container">
                    <div className="row">
                        <div className="">
                            <div
                                className="section-title-shape-one left black "
                                data-aos="fade-right"
                                data-aos-delay="300"
                            >
                                <h2 style={{ textAlign: "center", width: "100%" }}>
                                    <span className="theme-color"> Solutions</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div
                                className="project-wrapper "
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                <div className="img-file por">
                                    <img className="img-fluid" style={{ height: "362px" }}
                                        src="/assets/img/Arcviz/Frame 28.jpg"
                                        alt="" />
                                    <div className="shape-overlay poa">
                                        <div className="inner Industry2">
                                            <h2>Discover Your Vision Come to Life</h2>

                                            <div className="link d-inline-block">
                                                <p>
                                                    Our team brings every architectural vision to life with stunning accuracy. With our cutting-edge technology and meticulous attention to detail, you can explore your project before it's built, gaining invaluable insights and ensuring every aspect meets your expectations.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className="project-wrapper "
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                <div className="img-file por">
                                    <img className="img-fluid" style={{ height: "362px" }}
                                        src="/assets/img/Arcviz/Frame 29.jpg"
                                        alt="" />
                                    <div className="shape-overlay poa">
                                        <div className="inner Industry2">
                                            <h2>Immersive Experiences, Unmatched Realism</h2>

                                            <div className="link d-inline-block">
                                                <p>
                                                    Equipped with state-of-the-art virtual reality (VR) headsets, you can walk through rooms, inspect materials, and experience the scale of your project firsthand. Feel the warmth of natural light streaming through windows, and visualize the flow of space in real time.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className="project-wrapper "
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                <div className="img-file por">
                                    <img className="img-fluid"
                                        src="/assets/img/Arcviz/Frame 30.jpg"
                                        style={{ height: "362px" }} alt="" />
                                    <div className="shape-overlay poa">
                                        <div className="inner Industry2">
                                            <h2>Seamless Collaboration, Enhanced Communication</h2>

                                            <div className="link d-inline-block">
                                                <p>
                                                    Whether you're an architect, designer, developer, or client, our immersive visualizations facilitate clearer communication, foster better understanding, and streamline decision-making processes. Break down barriers, bridge the gap between imagination and reality.

                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className="project-wrapper "
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                <div className="img-file por">
                                    <img className="img-fluid"
                                        src="/assets/img/Arcviz/Frame 31.jpg"
                                        style={{ height: "362px" }} alt="" />
                                    <div className="shape-overlay poa">
                                        <div className="inner Industry2">
                                            <h2>Unleash the Power of Innovation</h2>

                                            <div className="link d-inline-block">
                                                <p>
                                                    Deliver groundbreaking solutions that empower architects, designers, and developers to realize their creative visions. From augmented reality (AR) experiences to interactive walkthroughs, we offer a diverse range of tools and services tailored to your needs.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Raiden arcviz - benifit */}
            <section className="project-section three Raidenarcviz_card_main_div" style={{ padding: "80px 0", background: "#F8F9FA" }}>
                <div className="auto-container">
                    <div className="row">
                        <h2 className="raidenarcviz_card_h2" style={{ color: "black" }}>Benefits<span className="theme-color"></span></h2>
                        <p className='raidenarcviz_card_p' style={{ color: "black" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eveniet maiores ipsa, error totam non rerum, placeat fugit repellendus vitae optio sit? Ducimus, optio! Iste ipsum aliquid molestiae vitae nemo.</p>
                        <div className="arcviz_benifit_div">
                            <div className="arcviz_benifit">
                                <img src="/assets/img/arckwiz-benefits/enhanced.svg" alt="" />
                                <div style={{ color: "black" }}>Enhanced Visualization</div>
                                <p style={{ color: "black" }}>Gain a clearer understanding of architectural designs with immersive, photorealistic visualizations.</p>
                            </div>
                            <div className="arcviz_benifit">
                                <img src="/assets/img/arckwiz-benefits/improved.svg" alt="" />
                                <div style={{ color: "black" }}>Improved Decision-Making</div>
                                <p style={{ color: "black" }}>Make informed decisions with real-time insights and customizable design options.</p>
                            </div>
                            <div className="arcviz_benifit">
                                <img src="/assets/img/arckwiz-benefits/cost.svg" alt="" />
                                <div style={{ color: "black" }}>Cost and Time Savings</div>
                                <p style={{ color: "black" }}>Reduce costs and save time by eliminating the need for physical staging and in-person property viewings.</p>
                            </div>
                            <div className="arcviz_benifit">
                                <img src="/assets/img/arckwiz-benefits/wider.svg" alt="" />
                                <div style={{ color: "black" }}>Wider Reach</div>
                                <p style={{ color: "black" }}>Reach a wider audience of potential buyers and clients by offering immersive virtual experiences.</p>
                            </div>
                            <div className="arcviz_benifit">
                                <img src="/assets/img/arckwiz-benefits/streamlined.svg" alt="" />
                                <div style={{ color: "black" }}>Streamlined Transactions</div>
                                <p style={{ color: "black" }}>Simplify real estate transactions with virtual commerce, making buying and selling properties more convenient.</p>
                            </div>
                            <div className="arcviz_benifit">
                                <img src="/assets/img/arckwiz-benefits/communication.svg" alt="" />
                                <div style={{ color: "black" }}>Enhanced Communication</div>
                                <p style={{ color: "black" }}>Foster clearer communication among project stakeholders with immersive virtual tours and digital twin technology.</p>
                            </div>
                            <div className="arcviz_benifit">
                                <img src="/assets/img/arckwiz-benefits/increasedtenan.svg" alt="" />
                                <div style={{ color: "black" }}>Increased Tenant Satisfaction</div>
                                <p style={{ color: "black" }}>Provide tenants with virtual instructions and tours, improving their understanding and satisfaction with their rental property.</p>
                            </div>
                            <div className="arcviz_benifit">
                                <img src="/assets/img/arckwiz-benefits/accelarated.svg" alt="" />
                                <div style={{ color: "black" }}>Accelerated Design Process</div>
                                <p style={{ color: "black" }}>Speed up the design process with real-time analytics and collaborative architectural visualization tools.</p>
                            </div>
                            <div className="arcviz_benifit">
                                <img src="/assets/img/arckwiz-benefits/competitive.svg" alt="" />
                                <div style={{ color: "black" }}>Competitive Advantage</div>
                                <p style={{ color: "black" }}>Stay ahead of the competition by offering cutting-edge immersive experiences that set your projects apart.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Raiden arcviz - use Case */}
            <section className="service-section three" style={{ background: "white" }}>
                <div className="auto-container">
                    <div className="row">
                        <div className="col-12">
                            <div
                                className="section-title-shape-one middle black "
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                <h2>
                                    Use Cases of VR in Real Estate
                                    <span className="theme-color"> Real Estate</span>
                                </h2>
                                <p>At VR, we're experts at providing innovative solutions that use cutting-edge technology to boost creativity and revolutionize industries. Our skilled professionals have extensive experience in a variety of domains, allowing us to provide comprehensive services in:</p>
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
                                    navigation={{
                                        nextEl: '.swiper-button-next',
                                        prevEl: '.swiper-button-prev',
                                    }} breakpoints={{
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
                                                        src="/assets/img/Arcviz/Frame 23.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="text-file">
                                                    <h2 className="title">
                                                        <Link to="#">
                                                            Virtual Property Presentations
                                                        </Link>
                                                    </h2>
                                                    <p>
                                                        Real estate agents and developers can use VR to create immersive property presentations for potential buyers. Prospective clients can explore properties virtually, walking through rooms, inspecting details, and getting a feel for the space without needing to physically visit the property.                                                     </p>
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
                                                        src="/assets/img/Arcviz/Frame 24.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="text-file">
                                                    <h2 className="title">
                                                        <Link to="#">
                                                            Staging and Virtual Visualization
                                                        </Link>
                                                    </h2>
                                                    <p>
                                                        VR allows real estate professionals to virtually stage properties, presenting them in different styles and configurations to suit various preferences. Virtual staging eliminates the need for physical furniture and decor, enabling agents to showcase the potential of empty spaces with minimal cost and effort.                                                     </p>
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
                                                        src="/assets/img/Arcviz/Frame 25.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="text-file">
                                                    <h2 className="title">
                                                        <Link to="#">
                                                            V-Commerce
                                                        </Link>
                                                    </h2>
                                                    <p>
                                                        V-Commerce, or virtual commerce, revolutionizes the way real estate transactions are conducted. With VR technology, buyers can explore properties, review contracts, and even complete transactions entirely within a virtual environment.                                                     </p>
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
                                                        src="/assets/img/Arcviz/Frame 26.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="text-file">
                                                    <h2 className="title">
                                                        <Link to="#">
                                                            Virtual Instructions for Tenants
                                                        </Link>
                                                    </h2>
                                                    <p>
                                                        Landlords and property managers can use VR to provide virtual instructions and tours for tenants. Instead of traditional paper guides or in-person orientations, tenants can navigate through virtual replicas of their rental units and common areas.                                                     </p>
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
                                                        src="/assets/img/Arcviz/Frame 27.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="text-file">
                                                    <h2 className="title">
                                                        <Link to="#">
                                                            Architectural Visualization
                                                        </Link>
                                                    </h2>
                                                    <p>
                                                        VR is indispensable for architectural visualization, allowing architects, designers, and developers to showcase their projects in an immersive and interactive manner. Clients can explore architectural designs before construction begins, providing valuable feedback and insights.
                                                    </p>                                                    <div className="shape-overlay">
                                                        <img src="/assets/img/shape/15_shape.svg" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div className="swiper-button-next">
                            </div>
                            <div className="swiper-button-prev">
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Raiden arcviz - Faq */}
            <section className="faq-section one">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-6 pe-4">
                            <div
                                className="section-title-shape-one left "
                                data-aos="fade-right"
                                data-aos-delay="300"
                            >
                                <h2>
                                    FAQ
                                </h2>
                                <p style={{ marginBottom: "10px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aut cumque facere ab tempore iusto sapiente. Ex quisquam modi corporis dicta, qui, eveniet dolor amet delectus molestias incidunt suscipit neque?</p>
                            </div>
                            <div
                                className="img-file "
                                data-aos="fade-right"
                                data-aos-delay="500"
                            >
                                <img
                                    className="img-fluid"
                                    src="/assets/img/Arcviz/d14 1.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className="faq-inner "
                                data-aos="fade-left"
                                data-aos-delay="300"
                            >
                                <div className="intro">
                                    <h3>Common Question &amp; Answer</h3>
                                </div>
                                <div className="faq-list">
                                    <div
                                        className="accordion accordion-flush"
                                        id="accordionFlushExample"
                                    >
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button
                                                    className="accordion-button"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#flush-collapseOne"
                                                    aria-expanded="false"
                                                    aria-controls="flush-collapseOne"
                                                >
                                                    What services are included in your Metaverse Development package?
                                                </button>
                                            </h2>
                                            <div
                                                id="flush-collapseOne"
                                                className="accordion-collapse collapse show"
                                                data-bs-parent="#accordionFlushExample"
                                            >
                                                <div className="accordion-body">
                                                    We offer user-centered interfaces, decentralized structure, cross-platform integration, and digital space planning and development as part of our Metaverse Development services
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#flush-collapseTwo"
                                                    aria-expanded="false"
                                                    aria-controls="flush-collapseTwo"
                                                >
                                                    Which core technologies are required for the development of a metaverse?
                                                </button>
                                            </h2>
                                            <div
                                                id="flush-collapseTwo"
                                                className="accordion-collapse collapse"
                                                data-bs-parent="#accordionFlushExample"
                                            >
                                                <div className="accordion-body">
                                                    Blockchain, AR/VR,  IoT, cloud computing, and 3D modeling are the core technologies for the development of the metaverse.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#flush-collapseThree"
                                                    aria-expanded="false"
                                                    aria-controls="flush-collapseThree"
                                                >
                                                    What differentiates your Metaverse Development services from competitors?
                                                </button>
                                            </h2>
                                            <div
                                                id="flush-collapseThree"
                                                className="accordion-collapse collapse"
                                                data-bs-parent="#accordionFlushExample"
                                            >
                                                <div className="accordion-body">
                                                    We develop captivating and functional virtual worlds with our Metaverse Development strategy, which blends decentralized architecture, cross-platform interoperability, and user-centered design. Our team of professionals has a strong track record of completing projects successfully and a wealth of industry knowledge.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default RaidenArcvizComponent;

// project_hero_content
