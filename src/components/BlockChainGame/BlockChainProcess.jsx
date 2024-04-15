import React, { useEffect } from 'react';

function BlockChainProcess() {

    useEffect(() => {
        const qs = (selector, all = false) => {
            return all ? document.querySelectorAll(selector) : document.querySelector(selector);
        };

        const sections = qs('.nft_section', true);
        const nft_timeline = qs('.nft_timeline');
        const line = qs('.nft_line');

        if (line) {
            line.style.bottom = `calc(100% - 20px)`;
            let prevScrollY = window.scrollY;
            let up, down;
            let full = false;
            let set = 0;
            const targetY = window.innerHeight * 0.8;

            function scrollHandler(e) {
                const {
                    scrollY
                } = window;
                up = scrollY < prevScrollY;
                down = !up;
                const timelineRect = nft_timeline.getBoundingClientRect();
                const lineRect = line.getBoundingClientRect(); //CONST LINEHEIGHT = lineRect.bottom - lineRect.top

                const dist = targetY - timelineRect.top
                console.log(dist);

                if (down && !full) {
                    set = Math.max(set, dist);
                    line.style.bottom = `calc(100% - ${set}px)`
                }

                if (dist > nft_timeline.offsetHeight + 50 && !full) {
                    full = true;
                    line.style.bottom = `-50px`
                }

                sections.forEach(item => {
                    //console.log(items);
                    const rect = item.getBoundingClientRect();

                    if (rect.top + item.offsetHeight / 5 < targetY) {
                        item.classList.add('show-me')
                    }
                });

                prevScrollY = window.scrollY;
            }

            scrollHandler();
            line.style.display = 'block';
            window.addEventListener('scroll', scrollHandler);

            return () => {
                window.removeEventListener('scroll', scrollHandler);
            };
        }
    }, []); // Empty dependency array to run effect only once after mount

    return (
        <section className="faq-section three" style={{ background: "#00151E" }}>
            <div className="auto-container">
                <div className="row">
                    <h2 style={{ textAlign: "center", color: "white" }}>	Our Process Of <span className='theme-color'> Blockchain Game Creation</span></h2>
                    <p style={{ textAlign: "center", color: "white", width: "80%", margin: "auto" }}>
                        With over 5 years of expertise developing blockchain-powered solutions, we have tailored our process to keep up with the constantly developing state of blockchain technology.
                    </p>
                    <div className="nft_timeline">
                        <div className="nft_line"></div>
                        <div className="nft_section">
                            <div className="bead"><img className='nft_whychoose_img' src='/assets/img/metaverse-process/discovery.svg' /></div>
                            <div className="nft_content">
                                <h6>Blockchain Game Conceptualization</h6>
                                <p>
                                    We start by exploring unique gameplay mechanics and storylines that leverage the advantages of blockchain technology. This involves brainstorming sessions to conceptualize innovative game ideas that emphasize decentralization, asset ownership, and community interaction.
                                </p>
                            </div>
                        </div>
                        <div className="nft_section">
                            <div className="bead"><img className='nft_whychoose_img' src='/assets/img/metaverse-process/uiux.svg' /></div>
                            <div className="nft_content">
                                <h6>Smart Contract Design and Development</h6>
                                <p>
                                    Our team designs and develops smart contracts tailored to the specific requirements of the game. These smart contracts govern in-game transactions, asset ownership, and gameplay rules, ensuring security, transparency, and immutability on the blockchain.
                                </p>
                            </div>

                        </div>
                        <div className="nft_section">
                            <div className="bead"><img className='nft_whychoose_img' src='/assets/img/metaverse-process/prototype.svg' /></div>
                            <div className="nft_content">
                                <h6>NFT Integration and Asset Creation</h6>
                                <p>
                                    We integrate non-fungible tokens (NFTs) into the game to represent unique in-game assets, such as characters, items, and collectibles. Our artists and developers collaborate to create visually stunning and valuable NFTs that enhance the player experience and drive engagement.
                                </p>
                            </div>
                        </div>
                        <div className="nft_section">
                            <div className="bead"><img className='nft_whychoose_img' src='/assets/img/metaverse-process/ecosystem.svg' /></div>
                            <div className="nft_content">
                                <h6>Multiplayer Functionality Implementation</h6>
                                <p>
                                    Leveraging blockchain technology, we implement multiplayer functionality that enables collaborative and competitive gameplay experiences. Players can interact with each other in real-time, engage in PvP battles, or join forces to complete in-game challenges, fostering a vibrant gaming community.
                                </p>
                            </div>
                        </div>
                        <div className="nft_section">
                            <div className="bead"><img className='nft_whychoose_img' src='/assets/img/metaverse-process/development.svg' /></div>
                            <div className="nft_content">
                                <h6>Blockchain Integration and Testing</h6>
                                <p>
                                    We seamlessly integrate blockchain technology into the game mechanics and conduct thorough testing to ensure functionality, security, and scalability. This involves testing smart contracts for vulnerabilities, conducting stress tests on the blockchain network, and optimizing performance for a smooth gaming experience.
                                </p>
                            </div>
                        </div>
                        <div className="nft_section">
                            <div className="bead"><img className='nft_whychoose_img' src='/assets/img/metaverse-process/testing.svg' /></div>
                            <div className="nft_content">
                                <h6>Deployment and Community Engagement</h6>
                                <p>
                                    Upon completion, we deploy the blockchain game to various platforms and engage with the community to drive adoption and player retention. We facilitate marketing campaigns, organize events, and collaborate with influencers to create buzz around the game and attract a diverse player base.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default BlockChainProcess;
