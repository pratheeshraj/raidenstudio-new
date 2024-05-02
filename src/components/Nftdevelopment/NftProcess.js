import React, { useEffect } from 'react';
import "./NftProcess.css";

function NftProcess() {
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
                    <h2 style={{ textAlign: "center", color: "white" }}>Our NFT Development<span style={{ color: "#38FFFF" }}> Process</span></h2>
                    <p style={{ textAlign: "center", color: "white" }}>Dive into the world of NFTs with our end-to-end development process

                        Detailed market research along with comprehensive analysis of the NFT project idea ensures your success by outlining its goal, target audience, and unique selling factors.
                    </p>
                    <div className="nft_timeline">
                        <div className="nft_line"></div>
                        <div className="nft_section">
                            <div className="bead"><img src='/assets/img/nftprocess/planningg.svg' />
                            </div>
                            <div className="nft_content">
                                <h6>Planning</h6>
                                <p>
                                    We take you through all of the processes involved in designing and developing digital assets for your NFT project's process.
                                </p>
                            </div>
                        </div>
                        <div className="nft_section">
                            <div className="bead">
                                <img src='/assets/img/nftprocess/wire.svg' />
                            </div>
                            <div className="nft_content">
                                <h6>Wireframing</h6>
                                <p>
                                    We create a solid framework to map out the vision, which covers blockchain, token minting, marketplace integration, and other elements. Additionally, we sketch up the entire NFT project strategy.
                                </p>
                            </div>
                        </div>
                        <div className="nft_section">
                            <div className="bead"><img src='/assets/img/nftprocess/uiux.svg' /></div>
                            <div className="nft_content">
                                <h6>UI/UX</h6>
                                <p>
                                    We prioritize the success of the NFT project by focusing on the user interface and experience.
                                </p>
                            </div>
                        </div>
                        <div className="nft_section">
                            <div className="bead"><img src='/assets/img/nftprocess/code.svg' /></div>
                            <div className="nft_content">

                                <h6>Development</h6>
                                <p>
                                    By working with the technical team, we can speed up the NFT project's development and assure the best outcomes.
                                </p>
                            </div>
                        </div>
                        <div className="nft_section">
                            <div className="bead"><img src='/assets/img/nftprocess/qa.svg' /></div>
                            <div className="nft_content">

                                <h6>QA</h6>
                                <p>
                                    We guarantee an in-depth quality analysis and testing of a bug-free NFT application with no coding errors.
                                </p>
                            </div>
                        </div>
                        <div className="nft_section">
                            <div className="bead"><img src='/assets/img/nftprocess/launch.svg' /></div>
                            <div className="nft_content">

                                <h6>Launch</h6>
                                <p>
                                    We launch your brand-new NFT project on all platforms, making it available to users and allowing your business to start generating revenue.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NftProcess;
