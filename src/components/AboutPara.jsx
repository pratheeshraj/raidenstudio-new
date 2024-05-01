import React from "react";

const AboutPara = () => {
    return (
        <>
            {/* About Section three Start */}
            <section className="about-section three">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div
                                className="right-wrapper pl-40 "
                                data-aos="fade-left"
                                data-aos-delay="300"
                            >
                                <div className="section-title-shape-one black" style={{ position: "relative" }}>
                                    <img className="about_section_img_1" src="/assets/img/Language/kisspng-virtual-reality-headset-microsoft-hololens-samsung-5ae825690637d1.0972398215251633690255-removebg-preview.png" />
                                    <img className="about_section_img_2" src="/assets/img/Language/kisspng-virtual-reality-headset-microsoft-hololens-samsung-5ae825690637d1.0972398215251633690255-removebg-preview.png" />

                                    <h2 style={{ marginTop: "0", textAlign: "center" }}>
                                        Our Mission
                                    </h2>
                                    <p className="our_mission_about_para" style={{ textAlign: "center", width: "60%", margin: "0 auto" }}>
                                        Empowerment through technology lies at the heart of our mission. We strive to revolutionize the gaming, VR, AR, and blockchain sectors by offering cutting-edge solutions that enhance user experiences, drive efficiency, and unlock new possibilities for businesses worldwide.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape-img">
                    <img
                        className="shape-1 poa"
                        src="/assets/img/shape/14_shape.png"
                        alt=""
                    />
                </div>
            </section>
            {/* About Section one End */}
        </>
    );
};

export default AboutPara;
