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
              Development Cutting-edge AI Development Process for <span className='theme-color'> Your Unique Needs</span>
            </h2>
            <p style={{ color: "black", marginBottom: '80px', textAlign: "center" }}>Experience an unparalleled journey with our complete end-to-end AI development process. From idea to deployment, we deliberately create solutions that are unique to your requirements. </p>
            <VisibilitySensor onChange={onAnimationVisible}>

              <div className={`timeline  ${isVisible ? 'visible' : ''}`}>
                <VisibilitySensor onChange={onAnimationVisible}>
                  <div className={`container_devo left-container ${isVisible ? 'visible' : ''}`}>
                    <div className='devo_round_div'><img src='/assets/img/aiprocessdevelopment/data-prep.svg' alt='' />
                    </div>
                    <div className='text-box'>
                      <h2>Data Preparation</h2>
                      <p>
                        <ul className='ai_process_li'>
                          <li>Clean and format data.</li>
                          <li>Conduct exploratory analysis.</li>
                        </ul>
                      </p>
                      <span className='left-container-arrow'></span>
                    </div>
                  </div>
                </VisibilitySensor>
                <VisibilitySensor onChange={onAnimationVisible}>
                  <div className={`container_devo right-container ${isVisible ? 'visible' : ''}`}>
                    <div className='devo_round_div'><img src='/assets/img/aiprocessdevelopment/design.svg' alt='' />
                    </div>
                    <div className='text-box'>
                      <h2>Model Selection and Design</h2>
                      <p>
                        <ul className='ai_process_li'>
                          <li>Choose suitable models.</li>
                          <li>Design custom architectures.</li>
                        </ul>
                      </p>
                      <span className='right-container-arrow'></span>
                    </div>
                  </div>


                </VisibilitySensor>
                <VisibilitySensor onChange={onAnimationVisible}>
                  <div className={`container_devo left-container ${isVisible ? 'visible' : ''}`}>
                    <div className='devo_round_div'><img src='/assets/img/aiprocessdevelopment/optimization.svg' alt='' />
                    </div>
                    <div className='text-box'>
                      <h2>Training and Optimization</h2>
                      <p>
                        <ul className='ai_process_li'>
                          <li>Train models with prepared data.</li>
                          <li>Optimize parameters.</li>
                        </ul>
                      </p>
                      <span className='left-container-arrow'></span>
                    </div>
                  </div>
                </VisibilitySensor>
                <VisibilitySensor onChange={onAnimationVisible}>
                  <div className={`container_devo right-container ${isVisible ? 'visible' : ''}`}>
                    <div className='devo_round_div'><img src='/assets/img/aiprocessdevelopment/deployment.svg' alt='' />
                    </div>
                    <div className='text-box'>
                      <h2>Deployment and Integration</h2>
                      <p>
                        <ul className='ai_process_li'>
                          <li>Deploy models in production.</li>
                          <li>Integrate with existing systems.</li>
                        </ul>
                      </p>
                      <span className='right-container-arrow'></span>
                    </div>
                  </div>
                </VisibilitySensor>
                <VisibilitySensor onChange={onAnimationVisible}>
                  <div className={`container_devo left-container ${isVisible ? 'visible' : ''}`}>
                    <div className='devo_round_div'><img src='/assets/img/aiprocessdevelopment/maintenance.svg' alt='' />
                    </div>
                    <div className='text-box'>
                      <h2>Monitoring and Maintenance</h2>
                      <p>
                        <ul className='ai_process_li'>
                          <li>Implement monitoring tools.</li>
                          <li>Maintain and update models.</li>
                        </ul>
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
