import React from "react";

const NftAboutSection = () => {
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
                                        src="/assets/img/nft/about.jpg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="right-wrapper ps-2">
                                <h2 style={{ color: "black" }} className="title">Our Expertise In NFT Development
                                </h2>
                                <p style={{ color: "black" }}>
                                    Employ our specific NFT consulting to create and execute your blockchain-driven NFT projects with ease. Our tried-and-true development process combines niche knowledge with flexibility.
                                </p>
                                <p style={{ color: "black" }}>
                                    As a trustworthy NFT development company, we provide comprehensive solutions that are customized to meet the demands of any size organization or startup. We specialize in using smart contracts to secure and validate ownership of NFTs and blockchain networks.
                                </p>
                                <p style={{ color: "black" }}>
                                    Working with a seasoned team of NFT developers, we make use of the DNFT protocol to create non-fungible tokens that are customized to your business's needs and enable you to gain future benefits. We are able to fulfill all of your NFT development requirements, including tokenizing your artwork, NFT marketplace, and NFT lending platform.
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

export default NftAboutSection;
