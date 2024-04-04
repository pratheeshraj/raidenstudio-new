import React from "react";
import { Link } from "react-router-dom";
import demo from "../images/Metaverse.mp4";
import ProductDetailCard from "./ProductDetailCard";
const RaidenArcvizComponent = ({ vidio }) => {
    return (
        <>
            {/* Project Details Section Start */}
            <section className=" project-details">
                <div className=" auto-containercontainer-fulid">
                    <div className="col-12 project_hero_section">
                        <video autoPlay muted loop>
                            <source src={vidio ? vidio : demo} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </section>
            {/* Raiden arcviz */}
            <section>
                <section className="project-section three">
                    <div className="auto-container">
                        <div className="row">

                        </div>
                    </div>
                </section>
            </section>
            {/* Project Details Section End */}
        </>
    );
};

export default RaidenArcvizComponent;

// project_hero_content
