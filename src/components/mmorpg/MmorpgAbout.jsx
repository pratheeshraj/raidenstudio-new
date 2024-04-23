import React from "react";

const MmorpgAbout = () => {
  return (
    <section
      style={{ background: "white" }}
      className="service-details-section"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <div className="auto-container">
        <div className="row" style={{display:"flex",alignItems:"center"}}>
          <div className="col-lg-6">
            <div className="left-wrapper pe-2">
              <div className="img-file"
              style={{display:"flex" ,justifyContent:"center",alignItems:"center"}}
              >
                <img
                  className="img-fluid"
                  src="/assets/img/mmorpg-img/about.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="right-wrapper ps-2">
              <h2 style={{ color: "black" }} className="title">
                Our Mastery in MMORPG Development
              </h2>
              <p style={{ color: "black" }}>
                Explore our prowess in crafting immersive worlds, dynamic
                gameplay, and engaging experiences in
              </p>
              <p style={{ color: "black" }}>
               <strong>World-building:</strong> Crafting intricate and immersive virtual
                environments that captivate players. Gameplay Mechanics:
                Implementing dynamic and engaging gameplay systems tailored to
                the MMORPG genre.
              </p>
              <p>
                <strong>Quest and Storyline Design:</strong> Creating compelling narratives and
                quests that drive player engagement and progression.
              </p>
              <p>
               <strong> Multiplayer Integration:</strong> Developing robust multiplayer
                functionality to facilitate seamless interaction among players.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MmorpgAbout;
