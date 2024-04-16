import React from 'react'

function WebModel() {
    return (
        <section className="faq-section three" style={{ background: "white" }}>
            <div className="auto-container">
                <div className="row">
                    <h2 style={{ textAlign: "center", color: "black" }}>Flexible Solutions to Suit  <span className="theme-color"> Your Requirements</span>
                    </h2>
                    <p style={{ textAlign: "center", color: "black", marginBottom: "80px" }}>
                        Choose from a variety of engagement models tailored to your business needs, including on-demand access, project-based collaboration, and dedicated team arrangements, providing flexibility and scalability
                    </p>
                    <div className='blockgame_benifit_main_div'>
                        <div className='blockgame_benifit_div'>
                            <div className='blockgame_benifit_card' style={{ height: "400px" }}>
                                <img class="img-fluid" src="/assets/img/service/02_service.png" alt="" />
                                <div >On-Demand</div>
                                <p>
                                    Pay-as-you-go model, allowing you to access AI resources and services as needed, with flexible pricing based on usage.
                                </p>
                            </div>
                            <div className='blockgame_benifit_card' style={{ height: "400px" }}>
                                <img class="img-fluid" src="/assets/img/service/02_service.png" alt="" />
                                <div >Project-Based</div>
                                <p>
                                    Engage us for specific AI projects, with clearly defined deliverables, timelines, and budgetary estimates.
                                </p>
                            </div>
                            <div className='blockgame_benifit_card' style={{ height: "400px" }}>
                                <img class="img-fluid" src="/assets/img/service/02_service.png" alt="" />
                                <div >Dedicated Team</div>
                                <p>
                                    Extend your team with dedicated AI specialists from Raiden, working exclusively on your projects under your guidance and supervision.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>



    )
}
export default WebModel