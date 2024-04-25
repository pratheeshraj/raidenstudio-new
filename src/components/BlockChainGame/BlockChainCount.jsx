import React from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";

const BlockChainCount = () => {
    return (
        <>
            {/* counter-section three start */}
            <section
                className="counter-section two white"
                data-background="/assets/img/shape/03_shape.svg"
            >
                <div className="auto-container">
                    <div className="row" style={{ justifyContent: "space-between" }}>
                        <div className="col-lg-2 col-md-6">
                            <div className="wrapper " data-aos="fade-up" data-aos-delay="200">
                                <div className="d-adjust gap-2 justify-content-center">
                                    <h2 className="counter">
                                        <ReactVisibilitySensor>
                                            {({ isVisible }) => (
                                                <div> {isVisible ? <CountUp end={4} /> : 0}</div>
                                            )}
                                        </ReactVisibilitySensor>
                                    </h2>
                                    <h3>w</h3>
                                </div>
                                <h4>Planning</h4>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div
                                className="wrapper mt-md-0 mt-4 "
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                <div className="d-adjust gap-2 justify-content-center">
                                    <h2 className="counter">
                                        <ReactVisibilitySensor>
                                            {({ isVisible }) => (
                                                <div> {isVisible ? <CountUp end={5} /> : 0}</div>
                                            )}
                                        </ReactVisibilitySensor>
                                    </h2>
                                    <h3>w</h3>
                                </div>
                                <h4>Smart Contract</h4>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div
                                className="wrapper mt-lg-0 mt-4 "
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                <div className="d-adjust gap-2 justify-content-center">
                                    <h2 className="counter">
                                        <ReactVisibilitySensor>
                                            {({ isVisible }) => (
                                                <div> {isVisible ? <CountUp end={5} /> : 0}</div>
                                            )}
                                        </ReactVisibilitySensor>
                                    </h2>
                                    <h3>w</h3>
                                </div>
                                <h4>Asset Creation</h4>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div
                                className="wrapper mt-lg-0 mt-4 "
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                <div className="d-adjust gap-2 justify-content-center">
                                    <h2 className="counter">
                                        <ReactVisibilitySensor>
                                            {({ isVisible }) => (
                                                <div> {isVisible ? <CountUp end={2} /> : 0}</div>
                                            )}
                                        </ReactVisibilitySensor>
                                    </h2>
                                    <h3>w</h3>
                                </div>
                                <h4>NFT Integration</h4>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div
                                className="wrapper mt-lg-0 mt-4 "
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                <div className="d-adjust gap-2 justify-content-center">
                                    <h2 className="counter">
                                        <ReactVisibilitySensor>
                                            {({ isVisible }) => (
                                                <div> {isVisible ? <CountUp end={6} /> : 0}</div>
                                            )}
                                        </ReactVisibilitySensor>
                                    </h2>
                                    <h3>w</h3>
                                </div>
                                <h4>Testing /<br /> Deployment</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* counter-section two end */}
        </>
    );
};

export default BlockChainCount;
