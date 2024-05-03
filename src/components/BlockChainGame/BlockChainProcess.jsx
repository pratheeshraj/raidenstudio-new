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
        <section className="faq-section three" style={{ background: "#F8F9FA" }}>
            <div className="auto-container">
                <div className="row">
                    <h2 style={{ textAlign: "center", color: "black" }}>	Our Process Of <span style={{ color: "#00ECE5" }}> Blockchain Game Creation</span></h2>
                    <p style={{ textAlign: "center", color: "black", width: "80%", margin: "auto" }}>
                        With over 5 years of expertise developing blockchain-powered solutions, we have tailored our process to keep up with the constantly developing state of blockchain technology.
                    </p>
                    <div className="nft_timeline">
                        <div style={{ background: "black" }} className="nft_line nft_line_white"></div>
                        <div className="nft_section">
                            <div style={{ background: "black" }} className="bead"><img src="\assets\img\blockchain_game\block game process\blockchainarchitec.svg" /></div>
                            <div className="nft_content">
                                <h6 style={{ color: "black", marginTop: "-80px" }}>Blockchain Architecture Design</h6>
                                <p style={{ color: "black" }}>
                                    Establishing foundational blockchain architecture, including smart contracts, token standards, and consensus mechanisms.
                                </p>
                            </div>
                        </div>
                        <div className="nft_section">
                            <div style={{ background: "black" }} className="bead"><img src="\assets\img\blockchain_game\block game process\protocal.svg" /></div>
                            <div className="nft_content">
                                <h6 style={{ color: "black", marginTop: "-80px" }}>Protocol Implementation</h6>
                                <p style={{ color: "black" }}>Deploying custom protocols for seamless integration of game and blockchain interactions.
                                </p>
                            </div>

                        </div>
                        <div className="nft_section">
                            <div style={{ background: "black" }} className="bead"><img src="\assets\img\blockchain_game\block game process\assettoken.svg" /></div>
                            <div className="nft_content">
                                <h6 style={{ color: "black", marginTop: "-80px" }}>Asset Tokenization</h6>
                                <p style={{ color: "black" }}>Tokenizing in-game assets as NFTs or fungible tokens, ensuring secure ownership and transferability.
                                </p>
                            </div>
                        </div>
                        <div className="nft_section">
                            <div style={{ background: "black" }} className="bead"><img src="\assets\img\blockchain_game\block game process\decentrgameplay.svg" /></div>
                            <div className="nft_content">
                                <h6 style={{ color: "black", marginTop: "-80px" }}>Decentralized Gameplay Logic</h6>
                                <p style={{ color: "black" }}>
                                    Developing smart contracts to enforce game rules transparently and immutably.
                                </p>
                            </div>
                        </div>
                        <div className="nft_section">
                            <div style={{ background: "black" }} className="bead"><img src="\assets\img\blockchain_game\block game process\offchainintegrate.svg" /></div>
                            <div className="nft_content">
                                <h6 style={{ color: "black", marginTop: "-80px" }}>Off-Chain Solutions Integration</h6>
                                <p style={{ color: "black" }}>Integrating off-chain solutions like state channels for efficient real-time interactions.
                                </p>
                            </div>
                        </div>
                        <div className="nft_section">
                            <div style={{ background: "black" }} className="bead"><img src="\assets\img\blockchain_game\block game process\interabo.svg" /></div>
                            <div className="nft_content">
                                <h6 style={{ color: "black", marginTop: "-80px" }}>Interoperability Implementation</h6>
                                <p style={{ color: "black" }}>Enabling cross-game asset transfers through interoperability standards.
                                </p>
                            </div>
                        </div>
                        {/* <div className="nft_section">
                            <div style={{ background: "black" }} className="bead"><img src="/assets/img/whychooseusai/EXPERTA.svg" /></div>
                            <div className="nft_content">
                                <h6 style={{ color: "black", marginTop: "-80px" }}>Security Auditing and Testing</h6>
                                <p style={{ color: "black" }}> Conducting thorough security audits to ensure resilience against attacks.
                                </p>
                            </div>
                        </div>
                        <div className="nft_section">
                            <div style={{ background: "black" }} className="bead"><img src="/assets/img/whychooseusai/EXPERTA.svg" /></div>
                            <div className="nft_content">
                                <h6 style={{ color: "black", marginTop: "-80px" }}>Scalability Optimization</h6>
                                <p style={{ color: "black" }}>Optimizing game architecture to handle large player bases without compromising performance.
                                </p>
                            </div>
                        </div>
                        <div className="nft_section">
                            <div style={{ background: "black" }} className="bead"><img src="/assets/img/whychooseusai/EXPERTA.svg" /></div>
                            <div className="nft_content">
                                <h6 style={{ color: "black", marginTop: "-80px" }}>Continuous Monitoring and Maintenance</h6>
                                <p style={{ color: "black" }}>Implementing monitoring tools for ongoing health, performance, and security maintenance
                                </p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section >
    );
}

export default BlockChainProcess;
