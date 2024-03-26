import React, { useState } from 'react';
import './DevelopmentProcess.css';
import { Link } from 'react-router-dom';
import VisibilitySensor from 'react-visibility-sensor';

function DevelopmentProcess() {
  const [isVisible, setIsVisible] = useState(false);

  const onAnimationVisible = (visible) => {
    if (visible) {
      setIsVisible(true);
    }
  };

  return (
    <>
      <section className="faq-section three Deve_process_fulldiv">
        <div className="auto-container">
          <div className="row">
            <h2 style={{ color: 'black', textAlign: 'center' }}>
              Development <span className='theme-color'>Cutting-edge AI Development Process for Your Unique Needs</span>
            </h2>
            <p style={{ color: "black", marginBottom: '80px', textAlign: "center" }}>Experience an unparalleled journey with our complete end-to-end AI development process. From idea to deployment, we deliberately create solutions that are unique to your requirements. </p>
            <VisibilitySensor onChange={onAnimationVisible}>

              <div className={`timeline  ${isVisible ? 'visible' : ''}`}>
                <VisibilitySensor onChange={onAnimationVisible}>
                  <div className={`container_devo left-container ${isVisible ? 'visible' : ''}`}>
                    <div className='devo_round_div'><img src='/assets/img/icon/34_icon.png' alt='' />
                    </div>
                    <div className='text-box'>
                      <h2>Discovery</h2>
                      <p>
                        Work together with our team to understand your goals and figure out your specific requirements.
                      </p>
                      <span className='left-container-arrow'></span>
                    </div>
                  </div>
                </VisibilitySensor>
                <VisibilitySensor onChange={onAnimationVisible}>
                  <div className={`container_devo right-container ${isVisible ? 'visible' : ''}`}>
                    <div className='devo_round_div'><img src='/assets/img/icon/34_icon.png' alt='' />
                    </div>
                    <div className='text-box'>
                      <h2>Data Collection & Preparation</h2>
                      <p>
                        We collect and prepare the required data, assuring its accuracy and importance for preparation.
                      </p>
                      <span className='right-container-arrow'></span>
                    </div>
                  </div>


                </VisibilitySensor>
                <VisibilitySensor onChange={onAnimationVisible}>
                  <div className={`container_devo left-container ${isVisible ? 'visible' : ''}`}>
                    <div className='devo_round_div'><img src='/assets/img/icon/34_icon.png' alt='' />
                    </div>                    <div className='text-box'>
                      <h2>Model Development</h2>
                      <p>
                        Select the most suitable algorithms and create unique AI models based on your specific application.
                      </p>
                      <span className='left-container-arrow'></span>
                    </div>
                  </div>
                </VisibilitySensor>
                <VisibilitySensor onChange={onAnimationVisible}>
                  <div className={`container_devo right-container ${isVisible ? 'visible' : ''}`}>
                    <div className='devo_round_div'><img src='/assets/img/icon/34_icon.png' alt='' />
                    </div>                    <div className='text-box'>
                      <h2>Testing and evaluation</h2>
                      <p>
                        Thoroughly test the models to ensure reliability, security, and performance in a wide range of configurations.
                      </p>
                      <span className='right-container-arrow'></span>
                    </div>
                  </div>
                </VisibilitySensor>
                <VisibilitySensor onChange={onAnimationVisible}>
                  <div className={`container_devo left-container ${isVisible ? 'visible' : ''}`}>
                    <div className='devo_round_div'><img src='/assets/img/icon/34_icon.png' alt='' />
                    </div>                    <div className='text-box'>
                      <h2>Deployment</h2>
                      <p>
                        Easily incorporate the AI solution into the current structure so that it can power your business workflows.
                      </p>
                      <span className='left-container-arrow'></span>
                    </div>
                  </div>
                </VisibilitySensor>
                <VisibilitySensor onChange={onAnimationVisible}>
                  <div className={`container_devo right-container ${isVisible ? 'visible' : ''}`}>
                    <div className='devo_round_div'><img src='/assets/img/icon/34_icon.png' alt='' />
                    </div>                    <div className='text-box'>
                      <h2>Tracking and Tuning</h2>
                      <p>
                        Track the AI system's performance continuously and make required changes and adaptations
                      </p>
                      <span className='right-container-arrow'></span>
                    </div>
                  </div>
                </VisibilitySensor>
                <VisibilitySensor onChange={onAnimationVisible}>
                  <div className={`container_devo left-container ${isVisible ? 'visible' : ''}`}>
                    <div className='devo_round_div'><img src='/assets/img/icon/34_icon.png' alt='' />
                    </div>                    <div className='text-box'>
                      <h2>Maintenance and Support</h2>
                      <p>
                        Take advantage of our ongoing maintenance and support to guarantee that your AI solution stays cutting edge.
                      </p>
                      <span className='left-container-arrow'></span>
                    </div>
                  </div>
                </VisibilitySensor>
              </div>
            </VisibilitySensor>
          </div>
        </div>
      </section>
    </>
  );
}

export default DevelopmentProcess;
