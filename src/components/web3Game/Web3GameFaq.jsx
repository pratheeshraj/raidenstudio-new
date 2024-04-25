import React from 'react'

const Web3GameFaq = () => {
  return (
    <section className="faq-section one" style={{ backgroundColor: "#f8f9fa" }}>
    <div className="auto-container">
      <div className="row">
        <div className="col-lg-6 pe-4">
          <div
            className="section-title-shape-one left "
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <h3 style={{ color: "black" }}>
              FAQ For Web3 Game Development {" "}
            </h3>
            <h2 style={{ color: "black" }}>
              Answers at a <br />
              <span className="theme-color" style={{ color: "#fdb441" }}>
                Glance
              </span>
            </h2>
            <p style={{ color: "black" }}>
              Find quick solutions and insights to common queries and concerns
              about our game with our comprehensive FAQ section
            </p>
          </div>
          <div
            className="img-file "
            data-aos="fade-right"
            data-aos-delay="500"
            CaseStudydetailHero
            style={{display:"flex",justifyContent: "center"}}
          >
            <img
              className="img-fluid"
              src="/assets/img/web3game-img/faq.png"
              alt=""
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div
            className="faq-inner "
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="intro">
              <h3 style={{ color: "black" }}>Common Question &amp; Answer</h3>
            </div>
            <div className="faq-list">
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >What is Web3 Game Development?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                  	Web3 Game Development refers to the creation of games that leverage blockchain technology, decentralized systems, and cryptographic assets to enable player ownership, transparent transactions, and innovative gameplay mechanics.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
           Why should I integrate blockchain into my game?
                      {"}"}
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                    Blockchain integration enhances security, enables true ownership of in-game assets, unlocks new monetization opportunities, and fosters trust and transparency among players.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
         What are NFTs, and how are they used in gaming?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                    Non-Fungible Tokens (NFTs) are unique digital assets that represent ownership of specific items or collectibles within games. They can be traded, bought, and sold, creating new revenue streams for developers and fostering player engagement.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFour"
                      aria-expanded="false"
                      aria-controls="flush-collapseFour"
                    >
                  How can decentralized economies benefit my game?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFour"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                  	Decentralized economies empower players to trade, sell, and create value within game ecosystems, leading to increased engagement, community building, and monetization opportunities.
                    </div>
                  </div>
                </div>
     
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="shape-image">
      <div className="shape-img-2 poa">
        <img src="/assets/img/icon/64_icon.png" alt="" />
      </div>
      <div className="shape-img-3 poa">
        <img src="/assets/img/icon/22_icon.png" alt="" />
      </div>
      <div className="shape-img-4 poa">
        <img src="/assets/img/icon/08_icon.png" alt="" />
      </div>
      <div className="shape-img-5 poa">
        <img src="/assets/img/icon/26_icon.png" alt="" />
      </div>
      <div className="shape-img-6 poa">
        <img src="/assets/img/icon/43_icon.png" alt="" />
      </div>
      <div className="shape-img-7 poa">
        <img src="/assets/img/icon/68_icon.png" alt="" />
      </div>
      <div className="shape-img-8 poa">
        <img src="/assets/img/icon/71_icon.png" alt="" />
      </div>
    </div>
  </section>
  )
}

export default Web3GameFaq
