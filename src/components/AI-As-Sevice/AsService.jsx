import React from "react";

const AsService = () => {

    return (
        <>
            <section>
                <div
                    className="container-fulid key_features"
                    style={{ background: "#F8F9FA" }}
                >
                    <h2 className="auto-container" style={{ color: "black" }}>AIaaS/PaaS Offerings:<span className="theme-color"> Empowering <br />Your Business</span></h2>
                    <p style={{ color: "black", textAlign: "center", width: "70%", margin: "auto auto auto auto" }}>
                        Discover the comprehensive capabilities of our AI-as-a-Service (AIaaS) and Platform-as-a-Service (PaaS) offerings, designed to equip your business with the tools needed to thrive in the AI landscape.
                    </p>
                    <div className="auto-container row key_features_section_container" style={{ rowGap: "29px" }}>
                        <div style={{ background: "white", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", borderRadius: "8px", width: "340px", height: "320px" }} className="key_features_card">
                            <img src="/assets/img/ai-as-empowering/scalable.svg" alt="" />
                            <h6 style={{ color: "black" }}>Scalable AI Infrastructure</h6>
                            <p style={{ color: "black", marginBottom: "0" }}>
                                Access to scalable computing resources tailored to your AI workload, ensuring optimal performance and cost-effectiveness.
                            </p>
                        </div>
                        <div style={{ background: "white", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", borderRadius: "8px", width: "340px", height: "320px" }} className="key_features_card">
                            <img src="/assets/img/ai-as-empowering/aimodels.svg" alt="" />
                            <h6 style={{ color: "black" }}>Pre-built AI Models</h6>
                            <p style={{ color: "black", marginBottom: "0" }}>
                                Choose from a range of pre-trained AI models spanning various domains, accelerating your time-to-market for AI-powered solutions.
                            </p>
                        </div>
                        <div style={{ background: "white", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", borderRadius: "8px", width: "340px", height: "320px" }} className="key_features_card">
                            <img src="/assets/img/ai-as-empowering/aimodeldev.svg" alt="" />
                            <h6 style={{ color: "black" }}>Custom Model Development</h6>
                            <p style={{ color: "black", marginBottom: "0" }}>
                                Tailor-made AI model development services to address your specific business needs, from data preprocessing to model deployment.
                            </p>
                        </div>
                        <div style={{ background: "white", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", borderRadius: "8px", width: "340px", height: "320px" }} className="key_features_card">
                            <img src="/assets/img/ai-as-empowering/api.svg" alt="" />
                            <h6 style={{ color: "black" }}>Robust APIs</h6>
                            <p style={{ color: "black", marginBottom: "0" }}>
                                Seamless integration with your existing systems through robust APIs, enabling effortless incorporation of AI capabilities into your applications.
                            </p>
                        </div>
                        <div style={{ background: "white", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", borderRadius: "8px", width: "340px", height: "320px" }} className="key_features_card">
                            <img src="/assets/img/ai-as-empowering/support.svg" alt="" />
                            <h6 style={{ color: "black" }}>Ongoing Support</h6>
                            <p style={{ color: "black", marginBottom: "0" }}>
                                Dedicated support and maintenance services to ensure the smooth operation of your AI solutions, with regular updates and enhancements.
                            </p>
                        </div>
                        <div style={{ background: "white", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", borderRadius: "8px", width: "340px", height: "320px" }} className="key_features_card">
                            <img src="/assets/img/ai-as-empowering/immersive.svg" alt="" />
                            <h6 style={{ color: "black" }}>Industry-specific solution</h6>
                            <p style={{ color: "black", marginBottom: "0" }}>
                                Meticulously crafted to address the unique needs and challenges of its respective sector, empowering businesses to unlock new opportunities and stay ahead in today's competitive market landscape.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AsService;
