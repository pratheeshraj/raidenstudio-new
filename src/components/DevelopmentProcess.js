import React, { useState } from 'react'
import "./DevelopmentProcess.css"
import { Link } from 'react-router-dom';

function DevelopmentProcess() {


  return (
    <>
      <section className="faq-section three Deve_process_fulldiv">
        <div className="auto-container">
          <div className="row ">
            <h2 style={{ color: "black" }}>Development Process</h2>
            <div className='right_devo_card_div'>
              <div className='realtive_devo_div'>
                <img className='devo_round_div' src='/assets/img/devo/Group 34518.png' />
                <img className='devo_img_icon' src='/assets/img/icon/34_icon.png' alt=''/> 
                <div className='devo_process_content_div'>
                  <div style={{ color: "black" }} className='devo_conten_h'>option 1</div>
                  <div style={{ color: "black" }} className='devo_conten_p'>Spanish company and image bank with its own production company that offers more than 10 million graphic resources</div>
                </div>
              </div>
            </div>
            <div className='right_devo_card_div'>
              <div className='realtive_devo_div2'>
                <img className='devo_round_div' src='/assets/img/devo/Group 34519.png' />
                <img className='devo_img_icon2' src='/assets/img/icon/34_icon.png' alt=''/> 
                <div className='devo_process_content_div2'>
                  <div style={{ color: "black",textAlign:"right" }} className='devo_conten_h'>option 2</div>
                  <div style={{ color: "black",textAlign:"right" }} className='devo_conten_p'>Spanish company and image bank with its own production company that offers more than 10 million graphic resources</div>
                </div>
              </div>
            </div>
            <div className='right_devo_card_div'>
              <div className='realtive_devo_div'>
                <img className='devo_round_div' src='/assets/img/devo/Group 34520.png' />
                <img className='devo_img_icon' src='/assets/img/icon/34_icon.png' alt=''/> 
                <div className='devo_process_content_div'>
                  <div style={{ color: "black" }} className='devo_conten_h'>option 3</div>
                  <div style={{ color: "black" }} className='devo_conten_p'>Spanish company and image bank with its own production company that offers more than 10 million graphic resources</div>
                </div>
              </div>
            </div>
            <div className='right_devo_card_div'>
              <div className='realtive_devo_div2'>
                <img className='devo_round_div' src='/assets/img/devo/Group 34521.png' />
                <img className='devo_img_icon2' src='/assets/img/icon/34_icon.png' alt=''/> 
                <div className='devo_process_content_div2'>
                  <div style={{ color: "black",textAlign:"right" }} className='devo_conten_h'>option 4</div>
                  <div style={{ color: "black",textAlign:"right" }} className='devo_conten_p'>Spanish company and image bank with its own production company that offers more than 10 million graphic resources</div>
                </div>
              </div>
            </div>
            <div className='right_devo_card_div'>
              <div className='realtive_devo_div'>
                <img className='devo_round_div' src='/assets/img/devo/Group 34522.png' />
                <img className='devo_img_icon' src='/assets/img/icon/34_icon.png' alt=''/> 
                <div className='devo_process_content_div'>
                  <div style={{ color: "black" }} className='devo_conten_h'>option 5</div>
                  <div style={{ color: "black" }} className='devo_conten_p'>Spanish company and image bank with its own production company that offers more than 10 million graphic resources</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};



export default DevelopmentProcess