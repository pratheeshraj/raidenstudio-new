import React from 'react'
import "./Features.css"

function Features() {
    return (
        <section className="faq-section three" style={{ background: "white" }}>
            <div className="auto-container">
                <div className="row">
                    <h2 style={{ textAlign: "center", color: "black" }}>Our Incredible Generative AI <br />Development<span className="theme-color"> Solutions</span>
                    </h2>
                    <p style={{ textAlign: "center", color: "black" }}>Our AI development team is up to date on the newest technology trends, and they continue to experiment with new AI PoCs (Proof of Concepts) to provide cutting-edge AI development solutions with novel ideas.</p>
                    <div className='feature_div'>
                        <div className='feature_card'>
                            <img src='/assets/img/icon/34_icon.png' />
                            <div>Generative AI Solutions</div>
                        </div>
                        <div className='feature_card'>
                            <img src='/assets/img/icon/34_icon.png' />
                            <div>Computer System Development</div>
                        </div>
                        <div className='feature_card'>
                            <img src='/assets/img/icon/34_icon.png' />
                            <div>Deep Learning Solutions</div>
                        </div>
                        <div className='feature_card'>
                            <img src='/assets/img/icon/34_icon.png' />
                            <div>Data Capture/OCR Solutions</div>
                        </div>
                        <div className='feature_card'>
                            <img src='/assets/img/icon/34_icon.png' />
                            <div>Robotics Process Automation</div>
                        </div>
                        <div className='feature_card'>
                            <img src='/assets/img/icon/34_icon.png' />
                            <div>NLP <br />Solutions</div>
                        </div>
                        <div className='feature_card'>
                            <img src='/assets/img/icon/34_icon.png' />
                            <div>Customized Role-Playing Bot</div>
                        </div>
                        <div className='feature_card'>
                            <img src='/assets/img/icon/34_icon.png' />
                            <div>AI Monitoring Solutions</div>
                        </div>
                        <div className='feature_card'>
                            <img src='/assets/img/icon/34_icon.png' />
                            <div>Customer Service Chatbot</div>
                        </div>
                        <div className='feature_card'>
                            <img src='/assets/img/icon/34_icon.png' />
                            <div>Machine Learning Solutions</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



    )
}
export default Features