import React from "react";

const VrAbout = () => {
    return (
        <>
            {/* Service Details Section Start */}
            <section
                style={{ background: "white" }}
                className="service-details-section"
                data-aos="fade-up"
                data-aos-delay="300"
            >
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="left-wrapper pe-2">
                                <div className="img-file">
                                    <img
                                        className="img-fluid"
                                        src="/assets/img/service/02_service.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="right-wrapper ps-2">
                                <h2 style={{ color: "black" }} className="title">VR Development: Exploring the Boundaries of Virtual Space
                                </h2>
                                <p style={{ color: "black" }}>
                                    The cutting-edge technology of immersive virtual reality is breaking down barriers by combining the virtual and real worlds. With worldwide businesses adopting this multimedia technology, there is an enormous movement towards exciting user interaction. Being one of the best VR app development companies, we focus on offering cutting-edge workplaces innovative, competitive, and excellent Virtual, Augmented, and Mixed Reality (MR) software development services.
                                </p>
                                <p style={{ color: "black" }}>
                                    Our custom VR development services, along with powerful tools and advanced technologies, are intended to evaluate your business's specific VR requirements. Our team of experts can help you succeed whether you need a core product or to incorporate VR technologies into your current applications.
                                </p>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                </div>
            </section>
            {/* Service Details Section End */}
        </>
    );
};

export default VrAbout;
