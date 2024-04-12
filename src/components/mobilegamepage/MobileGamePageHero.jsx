import React from "react";

const MobileGamePageHero = () => {
  return (
    <section>
      <div className="container-fluid metaverseroyal_hero" style={{ backgroundImage:"none",backgroundColor:"#a2a89d" }}>
        <div className="auto-container metaverseroyal_hero_container">
          <div className="left" data-aos="fade-right" data-aos-delay="300">
            <h2>
              Mobile  <br /> <span style={{color:"#fdb441"}}>Game Development</span>
            </h2>
            <p>
              MetaVerse Royale revolutionizes gaming with a customizable,
              immersive Battle Royale experience in the Metaverse. It's a
              game-changer for developers and gamers alike.
            </p>
            <button className="default-btn" style={{backgroundColor:"#fdb441"}}>Explore Now</button>
          </div>
          <div className="right" data-aos="fade-left" data-aos-delay="300">
            <img src="\assets\img\mobail-game-page\hero.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileGamePageHero;
