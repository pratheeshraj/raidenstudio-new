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
                    <h2 style={{ textAlign: "center", color: "white" }}>Our Blockchain Application <span style={{ color: "#53A6FF" }}> Development Process</span></h2>
                    <p style={{ textAlign: "center", color: "white", width: "80%", margin: "auto" }}>
                        With over 5 years of expertise developing blockchain-powered solutions, we have tailored our process to keep up with the constantly developing state of blockchain technology.
                    </p>
                    <div className="nft_timeline">
                        <div className="nft_line"></div>
                        <div className="nft_section">
                            <div className="bead"><img className='nft_whychoose_img' src='/assets/img/custom-develop-process/consulting.svg' /></div>
                            <div className="nft_content">
                                <h6>Blockchain Opportunities & Consulting</h6>
                                <p>
                                    We assist our clients in recognizing the possibilities of blockchain for their business. We conduct market research, evaluate the viability of projects, analyze different blockchain platforms, and prefer the right features.
                                </p>
                            </div>
                        </div>
                        <div className="nft_section">
                            <div className="bead"><img className='nft_whychoose_img' src='/assets/img/custom-develop-process/prototye.svg' /></div>
                            <div className="nft_content">
                                <h6>Blockchain Prototype & Use Case</h6>
                                <p>
                                    We integrate the blockchain use case and provide an excellent user experience, all while delivering unique designs. The technical design includes the specification of technical components, user journeys, and platform database design, along with a system structure design.
                                </p>
                            </div>
                        </div>
                        <div className="nft_section">
                            <div className="bead"><img className='nft_whychoose_img' src='/assets/img/custom-develop-process/blochaindevelopme.svg' /></div>
                            <div className="nft_content">
                                <h6>Blockchain Development</h6>
                                <p>
                                    Our blockchain developers create enterprise-grade applications and scalable decentralized solutions from idea to execution, helping clients to minimize time to market and boosting ROI.
                                </p>
                            </div>
                        </div>
                        <div className="nft_section">
                            <div className="bead"><img className='nft_whychoose_img' src='/assets/img/custom-develop-process/deploy.svg' /></div>
                            <div className="nft_content">
                                <h6>Deployment</h6>
                                <p>
                                    Your blockchain network will be deployed by our team in four stages: configuration, frontend and backend deployment, node validation, and blockchain network deployment. We also provide pre-launch testing on fully developed programmes like smart contracts and dApps.
                                </p>
                            </div>
                        </div>
                        <div className="nft_section">
                            <div className="bead"><img className='nft_whychoose_img' src='/assets/img/custom-develop-process/maintenan.svg' /></div>
                            <div className="nft_content">
                                <h6>Maintenance</h6>
                                <p>
                                    We handle new releases, third-party upgrades, and OS releases by keeping an eye on them, maintaining them, and offering support. Our blockchain developers are available to assist with any essential issues.
                                </p>
                            </div>
                        </div>
                        <div className="nft_section">
                            <div className="bead"><img className='nft_whychoose_img' src='/assets/img/custom-develop-process/smartcontract.svg' /></div>
                            <div className="nft_content">
                                <h6>Migration and Smart Contract Updates</h6>
                                <p>
                                    We provide the technical support required to seamlessly transform your existing apps to the blockchain or from one blockchain protocol to another, as well as keep the dApp updated to ensure no downtime.                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default BlockChainProcess;
