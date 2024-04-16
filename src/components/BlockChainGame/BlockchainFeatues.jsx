import React from "react";
import bg_image from "../../images/raidenSimx/w1.jpg";
import bg_image2 from "../../images/raidenSimx/w2.jpg";
import bg_image3 from "../../images/raidenSimx/w3.jpg";
import bg_image4 from "../../images/raidenSimx/w4.jpg";
import bg_image5 from "../../images/raidenSimx/w5.jpg";
import bg_image6 from "../../images/raidenSimx/w6.jpg";
import bg_image7 from "../../images/raidenSimx/w7.jpg";
import bg_image8 from "../../images/raidenSimx/w8.jpg";
const BlockchainFeatues = () => {



    return (
        <>
            <section>
                <div
                    className="container-fulid industry_wide_section"
                    style={{ backgroundColor: "white" }}
                >
                    <h2 className="auto-container" style={{ marginBottom: "10px", }}>Benefits In Blockchain Game Development</h2>
                    <p style={{ color: "black", width: "70%", margin: "auto", marginBottom: "80px", textAlign: "center" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet veniam nihil nam, temporibus quaerat adipisci rem nisi praesentium iure corrupti non id obcaecati laborum dolor totam inventore dolores ipsum libero.</p>
                    <div className="auto-container row industry_wide_section_container blockchain_game_card_maindiv ">
                        <div className="industry_wide_card_blockchain">
                            <div className="classy_simx_bg"></div>
                            <img src={bg_image} alt="" />
                            <h6>Decentralization</h6>
                            <p>Empowering players with true ownership of in-game assets and economies.</p>
                        </div>
                        <div className="industry_wide_card_blockchain">
                            <div className="classy_simx_bg"></div>
                            <img src={bg_image2} alt="" />
                            <h6>Transparency</h6>
                            <p>Ensuring fairness and transparency through immutable blockchain <br />records.</p>
                        </div>
                        <div className="industry_wide_card_blockchain">
                            <div className="classy_simx_bg"></div>
                            <img src={bg_image3} alt="" />
                            <h6>Interoperability</h6>
                            <p>Facilitating interoperability between different games and platforms, enhancing user experiences.</p>
                        </div>
                        <div className="industry_wide_card_blockchain">
                            <div className="classy_simx_bg"></div>
                            <img src={bg_image4} alt="" />
                            <h6>Security</h6>
                            <p>Implementing robust security measures to safeguard against fraud and unauthorized access.</p>
                        </div>
                        <div className="industry_wide_card_blockchain">
                            <div className="classy_simx_bg"></div>
                            <img src={bg_image5} alt="" />
                            <h6>Monetization Opportunities</h6>
                            <p>
                                Unlocking new revenue streams through tokenization and in-game economies.
                            </p>
                        </div>
                        <div className="industry_wide_card_blockchain">
                            <div className="classy_simx_bg"></div>
                            <img src={bg_image6} alt="" />
                            <h6>Community Engagement</h6>
                            <p>
                                Fostering vibrant gaming communities through participatory governance and incentivized gameplay.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlockchainFeatues;
