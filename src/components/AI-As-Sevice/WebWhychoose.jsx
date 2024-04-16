import React from 'react'

function WebWhychoose() {

    return (
        <>
            <section className="faq-section three whychoose_fulldiv">
                <div className="auto-container">
                    <div className="row wwhychoose_maindiv">
                        <div className="whychoose_left_div">
                            <h2 style={{ marginBottom: "25px", color: "black", textAlign: "center" }}>Why Choose<span className='theme-color'> Raiden ?</span></h2>
                            <p style={{ color: "black", textAlign: "center", marginBottom: "50px" }}>As one of the dedicated AI service providers, we use our significant domain expertise to continually expand the boundaries of what is achievable for your business. We have a fantastic group of AI specialists who thrive on challenges and are always looking for new AI possibilities to help our clients meet their goals. As the best artificial intelligence development company, we define ourselves by:</p>
                        </div>
                        <div className="whychoose_right_div">
                            <div className='ai_whychoose_card_div' style={{ width: "46%" }}>
                                <div style={{ background: "linear-gradient(136.76deg, #F40076 0%, #DF98FA 100%)" }} className='whychoose_ai_box'>
                                    <img src='/assets/img/whychooseusai/EXPERTA.svg' />
                                </div>
                                <div className='whychoose_ai_content'>Proven Track Record</div>
                            </div>
                            <div className='ai_whychoose_card_div' style={{ width: "46%" }}>
                                <div style={{ background: "linear-gradient(136.76deg, #FCCF31 0%, #F55555 100%)" }} className='whychoose_ai_box'>
                                    <img src='/assets/img/whychooseusai/R&D.svg' />
                                </div>
                                <div className='whychoose_ai_content'>Customer-Centric Approach</div>
                            </div>
                            <div className='ai_whychoose_card_div' style={{ width: "46%", }}>
                                <div style={{ background: "linear-gradient(136.76deg, #ABDCFF 0%, #0396FF 100%)" }} className='whychoose_ai_box'>
                                    <img src='/assets/img/whychooseusai/Security.svg' />
                                </div>
                                <div className='whychoose_ai_content'>Continuous Innovation</div>
                            </div>
                            <div className='ai_whychoose_card_div' style={{ width: "46%" }}>
                                <div style={{ background: "linear-gradient(136.76deg, #90F7EC 0%, #32CCBC 100%)" }} className='whychoose_ai_box'>
                                    <img src='/assets/img/whychooseusai/aisupport.svg' />
                                </div>
                                <div className='whychoose_ai_content'>Transparent Communication</div>
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
        </>
    );
};


export default WebWhychoose