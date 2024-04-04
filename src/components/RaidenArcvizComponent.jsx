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
                </div>
            </section>
            {/* Raiden arcviz - experience */}
            <section>
                <section className="project-section three Raidenarcviz_main_div" style={{ padding: "80px 0" }}>
                    <div className="auto-container">
                        <div className="row Raidenarcviz">
                            <h2 className="raidenarcviz_h2">Experience the <span className="theme-color">Future Today :</span></h2>
                            <p>Embark on a journey into the future of architectural visualization with Raiden ARCVIZ. Whether you're envisioning a residential masterpiece, a commercial landmark, or an urban development, our immersive experiences provide the clarity, insight, and inspiration you need to bring your vision to life. Join us as we redefine the way we see, understand, and interact with architecture. Discover the power of Raiden ARCVIZ and elevate your designs to new heights.</p>
                        </div>
                    </div>
                </section>
            </section>
            {/* Raiden arcviz - cards */}
            <section>
                <section className="project-section three Raidenarcviz_card_main_div" style={{ padding: "80px 0" }}>
                    <div className="auto-container">
                        <div className="row Raidenarcviz_card">
                            <h2 className="raidenarcviz_card_h2"><span className="theme-color">Solutions</span></h2>
                            <div className="arcviz_card_div">
                                <div class="arcviz_card">
                                    <div>Discover Your Vision Come to Life:</div>
                                    <p>At Raiden ARCVIZ, we transform blueprints and designs into immersive, photorealistic environments. From towering skyscrapers to cozy residences, our team brings every architectural vision to life with stunning accuracy. With our cutting-edge technology and meticulous attention to detail, you can explore your project before it's built, gaining invaluable insights and ensuring every aspect meets your expectations.</p>
                                </div>
                                <div class="arcviz_card">
                                    <div>Immersive Experiences, Unmatched Realism:</div>
                                    <p>Our immersive experiences transport you directly into your architectural design. Equipped with state-of-the-art virtual reality (VR) headsets, you can walk through rooms, inspect materials, and experience the scale of your project firsthand. Feel the warmth of natural light streaming through windows, admire the intricacies of interior finishes, and visualize the flow of space in real time. With Raiden ARCVIZ, realism reaches new heights, allowing you to make informed decisions and refine your design with confidence.</p>
                                </div>
                                <div class="arcviz_card">
                                    <div>Seamless Collaboration, Enhanced Communication:</div>
                                    <p>
                                        Communication is key to every successful project. With Raiden ARCVIZ, you can enhance collaboration among stakeholders by providing immersive experiences that transcend traditional renderings and blueprints. Whether you're an architect, designer, developer, or client, our immersive visualizations facilitate clearer communication, foster better understanding, and streamline decision-making processes. Break down barriers, bridge the gap between imagination and reality, and turn visions into tangible experiences with Raiden ARCVIZ.
                                    </p>
                                </div>
                                <div class="arcviz_card">
                                    <div>Unleash the Power of Innovation:</div>
                                    <p>
                                        Innovation drives everything we do at Raiden ARCVIZ. We continuously push the boundaries of technology to deliver groundbreaking solutions that empower architects, designers, and developers to realize their creative visions. From augmented reality (AR) experiences to interactive walkthroughs, we offer a diverse range of tools and services tailored to your needs. Explore new possibilities, experiment with design concepts, and revolutionize the way you visualize architecture with Raiden ARCVIZ.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section >


        </>
    );
};

export default RaidenArcvizComponent;

// project_hero_content
