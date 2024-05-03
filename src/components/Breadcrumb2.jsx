import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb2 = ({ data, img ,content }) => {
    return (
        <>
            {/* Breadcrumb Section Start */}
            <section
                className="breadcrumb"
                style={{
                    backgroundImage: `${img}`,
                    height: "50vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <div className="auto-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb-inner">
                                <h2 style={{ textAlign: "center", color: "#13C4A1" }} data-aos="fade-up" data-aos-delay="300">
                                    {data}
                                </h2>
                           
                                <p className="about_para" style={{ textAlign: "center", width: "80%", margin: "0 auto" }}>
                               {content}
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
