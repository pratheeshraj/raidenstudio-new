import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb2 = ({ data, img }) => {
    return (
        <>
            {/* Breadcrumb Section Start */}
            <section
                className="breadcrumb"
                style={{
                    backgroundImage: `${img}`,
                    height: "80vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <div className="auto-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb-inner">
                                <h6 style={{ textAlign: "center", color: "#13C4A1" }} data-aos="fade-up" data-aos-delay="300">
                                    {data}
                                </h6>
                                <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
                                    Powering The Future Of Gaming, VR, AR, And Blockchain
                                </h2>
                                <p className="about_para" style={{ textAlign: "center", width: "80%", margin: "0 auto" }}>
                                    the ever-evolving landscapes of gaming, virtual reality (VR), augmented reality (AR), and blockchain technology. As a premier consulting and solutions provider, we offer comprehensive services tailored to meet the unique needs of our clients in these dynamic industries.
                                </p>
                                <div
                                    className="link-shape"
                                    data-aos="fade-up"
                                    data-aos-delay="400"
                                >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Breadcrumb Section End */}
        </>
    );
};

export default Breadcrumb2;
