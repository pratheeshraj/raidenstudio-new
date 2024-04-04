import React from "react";
import demo from "../images/Metaverse.mp4";
import "./RaidenArcvizComponent.css"

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
                            <div className="row">
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
            <section className="project-section three Raidenarcviz_card_main_div" style={{ padding: "80px 0" }}>
                <div className="auto-container">
                    <div className="row Raidenarcviz_card">
                        <h2 className="raidenarcviz_card_h2"><span className="theme-color">Solutions</span></h2>
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
            </section>
            {/* Raiden arcviz - benifit */}
            <section className="project-section three Raidenarcviz_card_main_div" style={{ padding: "80px 0", background: "black" }}>
                <div className="auto-container">
                    <div className="row">
                        <h2 className="raidenarcviz_card_h2"><span className="theme-color">Benefits</span></h2>
                        <div className="arcviz_benifit_div">
                            <div className="arcviz_benifit">
                                <img src="/assets/img/nftdevfeatu/nftwallet.svg" alt="" />
                                <div>Enhanced Visualization</div>
                                <p>Gain a clearer understanding of architectural designs with immersive, photorealistic visualizations.</p>
                            </div>
                            <div className="arcviz_benifit">
                                <img src="/assets/img/nftdevfeatu/nftwallet.svg" alt="" />
                                <div>Improved Decision-Making</div>
                                <p>Make informed decisions with real-time insights and customizable design options.</p>
                            </div>
                            <div className="arcviz_benifit">
                                <img src="/assets/img/nftdevfeatu/nftwallet.svg" alt="" />
                                <div>Cost and Time Savings</div>
                                <p>Reduce costs and save time by eliminating the need for physical staging and in-person property viewings.</p>
                            </div>
                            <div className="arcviz_benifit">
                                <img src="/assets/img/nftdevfeatu/nftwallet.svg" alt="" />
                                <div>Wider Reach</div>
                                <p>Reach a wider audience of potential buyers and clients by offering immersive virtual experiences.</p>
                            </div>
                            <div className="arcviz_benifit">
                                <img src="/assets/img/nftdevfeatu/nftwallet.svg" alt="" />
                                <div>Streamlined Transactions</div>
                                <p>Simplify real estate transactions with virtual commerce, making buying and selling properties more convenient.</p>
                            </div>
                            <div className="arcviz_benifit">
                                <img src="/assets/img/nftdevfeatu/nftwallet.svg" alt="" />
                                <div>Enhanced Communication</div>
                                <p>Foster clearer communication among project stakeholders with immersive virtual tours and digital twin technology.</p>
                            </div>
                            <div className="arcviz_benifit">
                                <img src="/assets/img/nftdevfeatu/nftwallet.svg" alt="" />
                                <div>Increased Tenant Satisfaction</div>
                                <p>Provide tenants with virtual instructions and tours, improving their understanding and satisfaction with their rental property.</p>
                            </div>
                            <div className="arcviz_benifit">
                                <img src="/assets/img/nftdevfeatu/nftwallet.svg" alt="" />
                                <div>Accelerated Design Process</div>
                                <p>Speed up the design process with real-time analytics and collaborative architectural visualization tools.</p>
                            </div>
                            <div className="arcviz_benifit">
                                <img src="/assets/img/nftdevfeatu/nftwallet.svg" alt="" />
                                <div>Competitive Advantage</div>
                                <p>Stay ahead of the competition by offering cutting-edge immersive experiences that set your projects apart.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Raiden arcviz - use Case */}
            <section className="project-section three Raidenarcviz_card_main_div" style={{ padding: "80px 0" }}>
                <div className="auto-container">
                    <div className="row Raidenarcviz_card">
                        <h2 className="raidenarcviz_card_h2"><span className="theme-color">Use Cases of VR in Real Estate</span></h2>
                        <div className="arcviz_use_card_div">
                            <div class="arcviz_use_card">
                                <div class="arcviz_use_card-header">
                                    <img class="arcviz_use_card_image" src="/assets/img/about/_e17fb051-856f-4968-a2c0-150430fd0b61 2.png" />

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
