import React, { useState } from 'react';
import "./Process.css";

function Process() {
    const [selectedLabel, setSelectedLabel] = useState("c1");

    const handleLabelClick = (labelId) => {
        if (selectedLabel === labelId) {
            setSelectedLabel(null); // Close the currently open label if clicked again
        } else {
            setSelectedLabel(labelId); // Open the clicked label
        }
    };

    return (
        <>
            <section className="faq-section one" style={{ background: "white" }}>
                <div className="auto-container">
                    <div className="row">
                        <div className="wrapper-process">
                            <div className="container-process">
                                <input className='input-process' type="radio" name="slide-process" id="c1" checked={selectedLabel === "c1"} onChange={() => handleLabelClick("c1")} />
                                <label htmlFor="c1" className="card-process">
                                    <div className="row">
                                        <div className="icon-process">1</div>
                                        <div className="description-process">
                                            <h4>Winter</h4>
                                            <p>Winter has so much to offer - creative activities</p>
                                        </div>
                                    </div>
                                </label>
                                <input className='input-process' type="radio" name="slide-process" id="c2" checked={selectedLabel === "c2"} onChange={() => handleLabelClick("c2")} />
                                <label htmlFor="c2" className="card-process">
                                    <div className="row">
                                        <div className="icon-process">2</div>
                                        <div className="description-process">
                                            <h4>Digital Technology</h4>
                                            <p>Gets better every day - stay tuned</p>
                                        </div>
                                    </div>
                                </label>
                                <input className='input-process' type="radio" name="slide-process" id="c3" checked={selectedLabel === "c3"} onChange={() => handleLabelClick("c3")} />
                                <label htmlFor="c3" className="card-process">
                                    <div className="row">
                                        <div className="icon-process">3</div>
                                        <div className="description-process">
                                            <h4>Globalization</h4>
                                            <p>Help people all over the world</p>
                                        </div>
                                    </div>
                                </label>
                                <input className='input-process' type="radio" name="slide-process" id="c4" checked={selectedLabel === "c4"} onChange={() => handleLabelClick("c4")} />
                                <label htmlFor="c4" className="card-process">
                                    <div className="row">
                                        <div className="icon-process">4</div>
                                        <div className="description-process">
                                            <h4>New technologies</h4>
                                            <p>Space engineering becomes more and more advanced</p>
                                        </div>
                                    </div>
                                </label>
                                <input className='input-process' type="radio" name="slide-process" id="c5" checked={selectedLabel === "c5"} onChange={() => handleLabelClick("c5")} />
                                <label htmlFor="c5" className="card-process">
                                    <div className="row">
                                        <div className="icon-process">5</div>
                                        <div className="description-process">
                                            <h4>New technologies</h4>
                                            <p>Space engineering becomes more and more advanced</p>
                                        </div>
                                    </div>
                                </label>
                                <input className='input-process' type="radio" name="slide-process" id="c6" checked={selectedLabel === "c6"} onChange={() => handleLabelClick("c6")} />
                                <label htmlFor="c6" className="card-process">
                                    <div className="row">
                                        <div className="icon-process">6</div>
                                        <div className="description-process">
                                            <h4>New technologies</h4>
                                            <p>Space engineering becomes more and more advanced</p>
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Process;
