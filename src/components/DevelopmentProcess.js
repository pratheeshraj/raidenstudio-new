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
              Development <span className='theme-color'> Process</span>
            </h2>
            <p style={{ color: "black", marginBottom: '80px', textAlign: "center" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta blanditiis modi tempora adipisci! Dolore, corporis eum. Iste accusamus accusantium autem sequi, earum corporis itaque distinctio dignissimos optio maxime ipsa deleniti?</p>
            <VisibilitySensor onChange={onAnimationVisible}>

              <div className={`timeline  ${isVisible ? 'visible' : ''}`}>
                <VisibilitySensor onChange={onAnimationVisible}>
                  <div className={`container_devo left-container ${isVisible ? 'visible' : ''}`}>
                    <div className='devo_round_div'><img src='/assets/img/icon/34_icon.png' alt='' />
                    </div>
                    <div className='text-box'>
                      <h2>Nowsath</h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, enim.
                        Dolore natus
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
                      <h2>Nowsath</h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, enim.
                        Dolore natus
                      </p>
                      <span className='right-container-arrow'></span>
                    </div>
                  </div>
                </VisibilitySensor>
                <VisibilitySensor onChange={onAnimationVisible}>
                  <div className={`container_devo left-container ${isVisible ? 'visible' : ''}`}>
                    <div className='devo_round_div'><img src='/assets/img/icon/34_icon.png' alt='' />
                    </div>                    <div className='text-box'>
                      <h2>Nowsath</h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, enim.
                        Dolore natus
                      </p>
                      <span className='left-container-arrow'></span>
                    </div>
                  </div>
                </VisibilitySensor>
                <VisibilitySensor onChange={onAnimationVisible}>
                  <div className={`container_devo right-container ${isVisible ? 'visible' : ''}`}>
                    <div className='devo_round_div'><img src='/assets/img/icon/34_icon.png' alt='' />
                    </div>                    <div className='text-box'>
                      <h2>Nowsath</h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, enim.
                        Dolore natus
                      </p>
                      <span className='right-container-arrow'></span>
                    </div>
                  </div>
                </VisibilitySensor>
                <VisibilitySensor onChange={onAnimationVisible}>
                  <div className={`container_devo left-container ${isVisible ? 'visible' : ''}`}>
                    <div className='devo_round_div'><img src='/assets/img/icon/34_icon.png' alt='' />
                    </div>                    <div className='text-box'>
                      <h2>Nowsath</h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, enim.
                        Dolore natus
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
