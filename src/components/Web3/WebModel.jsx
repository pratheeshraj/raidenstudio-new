import React from 'react'

function WebModel() {
    return (
        <section className="faq-section three" style={{ background: "white" }}>
            <div className="auto-container">
                <div className="row">
                    <h2 style={{ textAlign: "center", color: "black" }}>Our  <span className="theme-color">Engagement Models</span>
                    </h2>
                    {/* <p style={{ textAlign: "center", color: "black", marginBottom: "80px" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam qui dolorum explicabo praesentium, possimus optio id necessitatibus fugiat pariatur ea in esse est, reiciendis veniam et aliquam facilis temporibus nihil.
                    </p> */}
                    <div className='blockgame_benifit_main_div'>
                        <div className='blockgame_benifit_div'>
                            <div className='blockgame_benifit_card'>
                                <img class="img-fluid" src="/assets/img/web-3-images/handshake-people-with-new-employee-deal-contract-with-much-money-ai-generated-image_629524-1520-transformed 1.jpg" alt="" />
                                <div >Fixed Price</div>
                                <p>Ideal for projects with well-defined scope and requirements. We provide a fixed price and timeline for the entire project, ensuring cost predictability and clarity.</p>
                            </div>
                            <div className='blockgame_benifit_card'>
                                <img class="img-fluid" src="/assets/img/web-3-images/operational-excellence-concept-productivity-with-excellence-process-industrial-management_662214-317647-transformed 1.jpg" alt="" />
                                <div >Time & Material</div>
                                <p>Perfect for projects with evolving requirements or uncertain scope. Pay as you go based on the actual time and resources consumed, allowing for greater flexibility and control.</p>
                            </div>
                            <div className='blockgame_benifit_card'>
                                <img class="img-fluid" src="/assets/img/web-3-images/business-people-working-together_926199-2226009-transformed 1.jpg" alt="" />
                                <div >Dedicated Team</div>
                                <p>For long-term projects requiring dedicated resources, we provide a dedicated team of skilled professionals who work exclusively on your project, offering full transparency and collaboration.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>



    )
}
export default WebModel