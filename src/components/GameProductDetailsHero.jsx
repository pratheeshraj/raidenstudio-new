import React, { Fragment, useEffect, useRef } from "react";
import hero from "../images/game_detail_hero.png";
import section2img from "../images/gameproduct-detailimg/section2.png";
import { Link } from "react-router-dom";
import VanillaTilt from "vanilla-tilt";
import icon1 from "../images/gameproduct-detailimg/icon1.png";
import TiltCard from "./TiltCard";
import GameFeaturesCards from "./GameFeaturesCards";
import section4 from "../images/gameproduct-detailimg/section4.png"
const GameProductDetailsHero = () => {
  const heroImageRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { pageX, pageY } = e;

      const X = pageX;
      const Y = pageY;

      if (heroImageRef.current) {
        heroImageRef.current.style.transform = `translate(${X / 30}px, ${
          Y / 30
        }px)`;
      }
    };
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const tiltRef = useRef(null); // Create a ref for the element

  useEffect(() => {
    // Initialize vanilla-tilt on the element with the ref
    VanillaTilt.init(tiltRef.current, {
      max: 10, // Maximum tilt rotation (degrees)
      speed: 100, // Speed of the tilt effect // Enables glare effect
      "max-glare": 0.5, // Maximum glare opacity
    });

    // Cleanup on component unmount
    return () => tiltRef.current && tiltRef.current.vanillaTilt.destroy();
  }, []);

  const data = [1, 2, 2, 3, 4, 5];
  return (
    <Fragment>
      <section>
        <div className="container-fluid gameproduct_hero">
          <div className="container gameproduct_hero_container">
            <div className="left">
              <h2>Game Product Details</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Recusandae doloremque, ipsa eligendi rerum, distinctio, nisi
                cupiditate{" "}
              </p>
            </div>
            <div className="right">
              <img src={hero} alt="" className="hero" ref={heroImageRef} />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid game_product_section2">
          <div className="container">
            <div className="row game_product_content">
              <h2>
                Unlock the Potential of NFT Gaming With Our NFT Gaming
                Development Services
              </h2>
              <div className="col-md-12 detail">
                <div className=" gameproduct_about">
                  <div className="col-5 left">
                    <img src={section2img} alt="" />
                  </div>
                  <div className="right">
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Dolorem quaerat perferendis illum sapiente magnam illo,
                      quas ad corporis. Maxime obcaecati corrupti amet possimus
                      alias porro labore odio ullam ad tenetur! Temporibus
                      obcaecati soluta itaque, magnam, minus rem exercitationem
                      aliquam explicabo, suscipit ea nemo at. Exercitationem
                      odio commodi vel id! Aut.
                    </p>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Dolorem quaerat perferendis illum sapiente magnam illo,
                      quas ad corporis. Maxime obcaecati corrupti amet possimus
                      alias porro labore odio ullam ad tenetur! Temporibus
                      obcaecati soluta itaque, magnam, minus rem exercitationem
                      aliquam explicabo, suscipit ea nemo at. Exercitationem
                      odio commodi vel id! Aut.
                    </p>
                    <ul>
                      <li>
                        <i class="fa-regular fa-circle-dot"></i> Lorem ipsum
                        dolor, sit amet{" "}
                      </li>
                      <li>
                        <i class="fa-regular fa-circle-dot"></i> Lorem ipsum
                        dolor, sit amet{" "}
                      </li>
                      <li>
                        <i class="fa-regular fa-circle-dot"></i> Lorem ipsum
                        dolor, sit amet{" "}
                      </li>
                      <li>
                        <i class="fa-regular fa-circle-dot"></i> Lorem ipsum
                        dolor, sit amet{" "}
                      </li>
                    </ul>
                  </div>
                </div>
                <Link className="default-btn">Get Free Consulation</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid section-3">
          <div className="container game-details-Services">
            <h2>Our NFT Game Development Services</h2>
            <div className="all_card">
              {data.map(() => {
                return (
               <TiltCard/>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid section_4">
            <div className="container game_features">
                <h2>Features of NFT Gaming Development</h2>
                <div className="Gamefeature_all_card">
                    <GameFeaturesCards/>
                    <GameFeaturesCards/>
                    <GameFeaturesCards/>
                    <GameFeaturesCards/>
                    <GameFeaturesCards/>
                    <GameFeaturesCards/>
                </div>
            </div>
        </div>
      </section>
      <section>
        <div className="container-fluid game_product_section2">
          <div className="container">
            <div className="row game_product_content">
              <h2>
              Our Popular NFT Game Clone Scripts
              </h2>
              <div className="col-md-12 detail">
                <div className=" gameproduct_about " style={{flexDirection:"row-reverse",alignItems:"flex-start "}}>
                  <div className="col-5 left" style={{textAlign:"end"}}>
                    <img src={section4} alt="" />
                  </div>
                  <div className="right d-flex flex-column align-items-start  " style={{marginTop:"50px"}} >
                    <p >
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Dolorem quaerat perferendis illum sapiente magnam illo,
                      quas ad corporis. Maxime obcaecati corrupti amet possimus
                      alias porro labore odio ullam ad tenetur! Temporibus
                      obcaecati soluta itaque, magnam, minus rem exercitationem
                      aliquam explicabo, suscipit ea nemo at. Exercitationem
                      odio commodi vel id! Aut.
                    </p>
                 
                    <ul>
                      <li>
                        <i class="fa-regular fa-circle-dot"></i> Lorem ipsum
                        dolor, sit amet{" "}
                      </li>
                      <li>
                        <i class="fa-regular fa-circle-dot"></i> Lorem ipsum
                        dolor, sit amet{" "}
                      </li>
                      <li>
                        <i class="fa-regular fa-circle-dot"></i> Lorem ipsum
                        dolor, sit amet{" "}
                      </li>
                      <li>
                        <i class="fa-regular fa-circle-dot"></i> Lorem ipsum
                        dolor, sit amet{" "}
                      </li>
                    </ul>
                    <Link className="default-btn mt-4">Get Free Consulation</Link>
                  </div>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className=""></div>
      </section>
    </Fragment>
  );
};

export default GameProductDetailsHero;
