import React, { useEffect } from 'react';

function WebProcess() {

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
                    <h2 style={{ textAlign: "center", color: "white" }}>Our <span className='theme-color'> Process</span></h2>
                    <p style={{ textAlign: "center", color: "white", width: "80%", margin: "auto" }}>
                        At Raiden, we follow a systematic approach to ensure the successful execution of your Web 3.0 projects.
                    </p>
                    <div className="nft_timeline">
                        <div className="nft_line"></div>
                        <div className="nft_section">
                            <div className="bead"><img className='nft_whychoose_img' src='/assets/img/metaverse-process/discovery.svg' /></div>
                            <div className="nft_content">
                                <h6>Discovery & Planning</h6>
                                <p>
                                    We begin by understanding your business requirements, defining project goals, and formulating a strategic roadmap.
                                </p>
                            </div>
                        </div>
                        <div className="nft_section">
                            <div className="bead"><img className='nft_whychoose_img' src='/assets/img/metaverse-process/uiux.svg' /></div>
                            <div className="nft_content">
                                <h6>Design & Development</h6>
                                <p>
                                    Our team of experienced developers and designers work collaboratively to bring your vision to life, focusing on usability, functionality, and scalability.
                                </p>
                            </div>

                        </div>
                        <div className="nft_section">
                            <div className="bead"><img className='nft_whychoose_img' src='/assets/img/metaverse-process/prototype.svg' /></div>
                            <div className="nft_content">
                                <h6>Testing & Quality Assurance</h6>
                                <p>
                                    Rigorous testing procedures are implemented to ensure the reliability, security, and performance of the developed solutions.
                                </p>
                            </div>
                        </div>
                        <div className="nft_section">
                            <div className="bead"><img className='nft_whychoose_img' src='/assets/img/metaverse-process/ecosystem.svg' /></div>
                            <div className="nft_content">
                                <h6>Blockchain Development</h6>
                                <p>
                                    Our blockchain developers create enterprise-grade applications and scalable decentralized solutions from idea to execution, helping clients to minimize time to market and boosting ROI.
                                </p>
                            </div>
                        </div>
                        <div className="nft_section">
                            <div className="bead"><img className='nft_whychoose_img' src='/assets/img/metaverse-process/development.svg' /></div>
                            <div className="nft_content">
                                <h6>Deployment & Optimization</h6>
                                <p>
                                    We deploy the finalized solutions and continuously optimize them to adapt to evolving market trends and user feedback.
                                </p>
                            </div>
                        </div>
                        <div className="nft_section">
                            <div className="bead"><img className='nft_whychoose_img' src='/assets/img/metaverse-process/testing.svg' /></div>
                            <div className="nft_content">
                                <h6>Support & Maintenance</h6>
                                <p>
                                    Our commitment doesn’t end with deployment. We provide ongoing support and maintenance services to ensure the long-term success of your Web 3.0 initiatives.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default WebProcess;
