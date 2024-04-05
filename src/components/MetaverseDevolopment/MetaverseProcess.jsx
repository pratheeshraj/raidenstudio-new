import React, { useEffect } from 'react';

function MetaverseProcess() {

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
                    <h2 style={{ textAlign: "center", color: "white" }}>Our Comprehensive Metaverse<span className='theme-color'> Development Process</span></h2>
                    <p style={{ textAlign: "center", color: "white" }}>Dive into the world of NFTs with our end-to-end development process
                        Detailed market research along with comprehensive analysis of the NFT project idea ensures your success by outlining its goal, target audience, and unique selling factors.
                    </p>
                    <div className="nft_timeline">
                        <div className="nft_line"></div>
                        <div className="nft_section">
                            <div className="bead"><img src=''/></div>
                            <div className="nft_content">
                                <h6>Discovery</h6>
                                <p>
                                    Before we start developing the Metaverse platform, we understand the needs of our clients, research the industry, and specify the parameters of the project.                                </p>
                            </div>
                        </div>
                        <div className="nft_section">
                            <div className="bead">2</div>
                            <div className="nft_content">
                                <h6>Design of UI/UX</h6>
                                <p>
                                    Our proficient designers design user-friendly user interfaces and immersive user experiences that take users to the next level.                                </p>
                            </div>

                        </div>
                        <div className="nft_section">
                            <div className="bead">3</div>
                            <div className="nft_content">
                                <h6>Prototype</h6>
                                <p>
                                    Our pool of Metaverse professionals create real-world prototypes to illustrate the platform's major features and collect early feedback on the project.                                </p>
                            </div>
                        </div>
                        <div className="nft_section">
                            <div className="bead">4</div>
                            <div className="nft_content">
                                <h6>Develop Ecosystem</h6>
                                <p>
                                    We are happy to create a Metaverse platform with NFT integration, token systems, and engaging 3D environments so that users may trade effectively.                          </p>
                            </div>
                        </div>
                        <div className="nft_section">
                            <div className="bead">5</div>
                            <div className="nft_content">
                                <h6>Development</h6>
                                <p>
                                    Our pool of experts who Implement strong coding and programming to bring the metaverse platform development to life and accomplish your company objectives.                                </p>
                            </div>
                        </div>
                        <div className="nft_section">
                            <div className="bead">6</div>
                            <div className="nft_content">
                                <h6>Testing and Deployment</h6>
                                <p>
                                    Before launching the Metaverse project for users on your chosen platforms, we thoroughly test safety, performance, and functionality.                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default MetaverseProcess;
