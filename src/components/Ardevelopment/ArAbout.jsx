import React from "react";

const ArAbout = () => {
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
                                        src="/assets/img/ar/about.jpg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="right-wrapper ps-2">
                                <h2 style={{ color: "black" }} className="title">Boost User Experiences and Grow Enterprises with Highly skilled AR Development Company
                                </h2>
                                <p style={{ color: "black" }}>
                                    Raiden is a prominent customer-focused Augmented Reality development company that assists businesses with immersive modernization journeys. We help businesses implement the Industry 4.0 suite of VR, AR, MR, and DT technologies. We also collaborate with various partners to help the interactive Metaverse reach its maximum potential.
                                </p>
                                <p style={{ color: "black" }}>
                                    Our team of developers has extensive technical experience in Augmented Reality and understands the needs of both business and customer applications. Our team is focused on providing leading-edge services in the development of augmented reality apps.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Service Details Section End */}
        </>
    );
};

export default ArAbout;
