import React from 'react'
import "./WhyChoose.css"
import { Link } from 'react-router-dom';

function WhyChoose() {

    return (
        <>
            {/* FAQ Section three start */}
            <section className="faq-section three whychoose_fulldiv">
                <div className="auto-container">
                    <div className="row wwhychoose_maindiv">
                        <div className="whychoose_left_div">
                            <h6 style={{ marginBottom: "25px", color:"black" }}>VRaiden: Your Ideal AI Software Development Company ?</h6>
                            <p style={{color:"black" }}>As one of the dedicated AI service providers, we use our significant domain expertise to continually expand the boundaries of what is achievable for your business. We have a fantastic group of AI specialists who thrive on challenges and are always looking for new AI possibilities to help our clients meet their goals. As the best artificial intelligence development company, we define ourselves by:</p>
                            <div className="inner-btn">
                                <div>
                                    <Link className="default-btn" to="/contact">
                                        Talk To Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="whychoose_right_div">
                            <div>
                                <div>An outstanding team of AI experts</div>
                                <p>We have a dedicated team of artificial intelligence experts who work as an individual division only on AI/ML projects. Our team has vast experience handling the intricacies of AI projects and delivering effective solutions.</p>
                            </div>
                            <div>
                                <div>Innovative with robust R&D</div>
                                <p>Our Ongoing R&D activities bring about the development of higher-level algorithms and models. We make huge investments in research and development to assist our clients in developing their own unique and strong artificial intelligence solutions.</p>
                            </div>
                            <div>
                                <div>Prioritizing Security and Compliance</div>
                                <p>We sign an NDA with each client to ensure that their data is safe with us. We even follow data security and confidentiality best practices when implementing data accessibility limitations, such as employing virtual machines (VMs), virtual private networks (VPNs), and other safeguards to protect sensitive data.</p>
                            </div>
                            <div>
                                <div>Devoted Support</div>
                                <p>Our devoted talents/teams will serve as your virtual extended team for your project. As a result, you'll have direct contact with them during mutually agreed-up working hours to ensure successful collaboration.</p>
                            </div>
                            <div>
                                <div>Transparency and Reliability</div>
                                <p>We ensure complete transparency by disclosing all changes and requesting comments to improve the project. Each piece of code we create is fully owned by our clients.</p>
                            </div>
                            <div>
                                <div>Flexible engagement models
                                </div>
                                <p>Instead of working on undesirable inflexible and stringent parameters, we provide our clients the freedom to choose engagement models and switch between them based on their changing needs, ensuring long-term, dependable relationships.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape-image">
                    <div className="shape-img-2 poa">
                        <img src="/assets/img/shape/01_shape.svg" alt="" />
                    </div>
                    <div className="shape-img-5 poa">
                        <img src="/assets/img/icon/26_icon.png" alt="" />
                    </div>
                </div>
            </section>
            {/* FAQ Section three end */}
        </>
    );
};


export default WhyChoose