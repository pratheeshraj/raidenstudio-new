import React from "react";
import Immersive_img from "../images/product_detail_img/vr-glasses_6841303.png"
import AIpowered from "../images/raidenverse/AIpowered.svg"
import businesssolution from "../images/raidenverse/businesssolution.svg"
import compatibilityy from "../images/raidenverse/compatibilityy.svg"
import educational from "../images/raidenverse/educational.svg"
import healthcare from "../images/raidenverse/healthcare.svg"
import immersive from "../images/raidenverse/immersive.svg"
import security from "../images/raidenverse/security and privacy.svg"
import social from "../images/raidenverse/social.svg"
const ProductDemokit = () => {
  const data = [
    {
      icon: immersive,
      name: "Immersive Environments",
      value: "Dive into captivating virtual worlds with stunning visuals and dynamic landscapes."
    },
    {
      icon: AIpowered,
      name: "AI-Powered Personalization",
      value: "Tailored experiences driven by advanced artificial intelligence algorithms."
    },
    {
      icon: social,
      name: "Social Interaction",
      value: "Connect with friends, colleagues, and communities in virtual spaces designed for social interaction."
    },
    {
      icon: businesssolution,
      name: "Business Solutions",
      value: "Collaborative workspaces, virtual events, and enterprise-grade tools for enhanced productivity."
    },
    {
      icon: educational,
      name: "Educational Tools",
      value: "Interactive learning modules, virtual classrooms, and educational simulations for immersive learning experiences."
    },
    {
      icon: healthcare,
      name: "Healthcare Solutions",
      value: "Medical training simulations, telemedicine capabilities, and virtual healthcare services."
    },
    {
      icon: security,
      name: "Security and Privacy",
      value: "Robust security measures and privacy controls to ensure a safe and secure virtual environment."
    },
    {
      icon: compatibilityy,
      name: "Cross-Platform Compatibility",
      value: "Seamless integration across devices, including VR headsets, desktops, and mobile devices."
    },

  ];
  ;
  return (
    <div className="container-fluid product_demo_kit">
      <h2 style={{ color: "#1BA2D7" }}>Feature</h2>
      <div className="auto-container product_demo">

        {
          data.map((data, index) => {
            return (
              <div className="product_detail_f_Card_co" key={index}>
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img src={data.icon} alt="" />
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
