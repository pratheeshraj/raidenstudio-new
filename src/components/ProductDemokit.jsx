import React from "react";
import Immersive_img from "../images/product_detail_img/vr-glasses_6841303.png"
const ProductDemokit = () => {
  const data = [
    {
      name: "Immersive Environments",
      value: "Dive into captivating virtual worlds with stunning visuals and dynamic landscapes."
    },
    {
      name: "AI-Powered Personalization",
      value: "Tailored experiences driven by advanced artificial intelligence algorithms."
    },
    {
      name: "Social Interaction",
      value: "Connect with friends, colleagues, and communities in virtual spaces designed for social interaction."
    },
    {
      name: "Business Solutions",
      value: "Collaborative workspaces, virtual events, and enterprise-grade tools for enhanced productivity."
    },
    {
      name: "Educational Tools",
      value: "Interactive learning modules, virtual classrooms, and educational simulations for immersive learning experiences."
    },
    {
      name: "Healthcare Solutions",
      value: "Medical training simulations, telemedicine capabilities, and virtual healthcare services."
    },
    {
      name: "Security and Privacy",
      value: "Robust security measures and privacy controls to ensure a safe and secure virtual environment."
    },
    {
      name: "Cross-Platform Compatibility",
      value: "Seamless integration across devices, including VR headsets, desktops, and mobile devices."
    },
    
  ];
  ;
  return (
    <div className="container-fluid product_demo_kit">
      <h2>Feature</h2>
      <div className="auto-container product_demo">
        
       {
        data.map((data,index)=>{
          return(
            <div className="product_detail_f_Card_co" key={index}>
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src={Immersive_img} alt="" />
                  <p>{data.name}</p>
                </div>
                <div class="flip-card-back">
                  <p>{data.value}</p>
                </div>
              </div>
            </div>
          </div>
          )
        })
       }
      </div>
    </div>
  );
};

export default ProductDemokit;
