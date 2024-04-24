import React, { useRef, useState } from 'react'
import Slider from 'react-slick';
import bg_image1 from "../../images/2151007782.jpg"
import bg_image2 from "../../images/2150926681.jpg"
import bg_image3 from "../../images/2151007764.jpg"
import bg_image4 from "../../images/2151007741.jpg"

import { Link } from 'react-router-dom';

function ChoiceOfGames() {

    const [classic, setClassic] = useState(true)
    const [slots, setSlots] = useState(false)
    const [table, setTable] = useState(false)
    const [specialty, setSpecialty] = useState(false)

    const ClassicHandle = () => {
        setClassic(true)
        setSlots(false)
        setSpecialty(false)
        setTable(false)
    }


    const SlotHandle = () => {
        setClassic(false)
        setSlots(true)
        setSpecialty(false)
        setTable(false)
    }

    const specHandle = () => {
        setClassic(false)
        setSlots(false)
        setSpecialty(true)
        setTable(false)
    }

    const TableHandle = () => {
        setClassic(false)
        setSlots(false)
        setSpecialty(false)
        setTable(true)
    }


    const sliderRef = useRef();
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 576, // Screen width up to 600px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480, // Screen width up to 480px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            // You can add more breakpoints here
        ],
    };



    return (
        <section>
            <div className="cogni_benefits_section choicegame_main_div">
                <h2 className="auto-container">Choice of <span style={{color:"#57E400"}}>Games</span></h2>
                <p className='choicegame_main_p'>Discover a diverse array of thrilling games awaiting you at VirtualVegas. From classic casino favorites to innovative virtual reality experiences, our platform offers something for every type of player. </p>
                <div className="coice-link-div">
                    <h6 className={classic ? "Choice_active" : "Choice_active_div"} onClick={ClassicHandle}>CLASSIC</h6>
                    <h6 className={slots ? "Choice_active" : "Choice_active_div"} onClick={SlotHandle}>SLOTS</h6>
                    <h6 className={table ? "Choice_active" : "Choice_active_div"} onClick={TableHandle}>TABLE</h6>
                    <h6 className={specialty ? "Choice_active" : "Choice_active_div"} onClick={specHandle}>SPECIALTY</h6>
                </div>
                {
                    classic ? <div className="auto-container cogini_slider">
                        <img src={bg_image1} alt="" className="sideimage choice_sideimage" />
                        <Slider
                            {...settings}
                            className="cogini_slider_main"
                            ref={sliderRef}
                        >
                            <div className="new new_img">
                                <img src="/assets/img/classic-casino/blackjack.svg" alt="" />
                                <h6>Blackjack</h6>
                                <p>
                                    Experience the excitement of this timeless card game where your goal is to beat the dealer's hand without going over 21.
                                </p>
                            </div>
                            <div className="new new_img">
                                <img src="/assets/img/classic-casino/roulette.svg" alt="" />
                                <h6>Roulette</h6>
                                <p>
                                    Place your bets and watch the wheel spin in this iconic casino game of chance. Will you bet on red or black, odds or evens?
                                </p>
                            </div>
                            <div className="new new_img">
                                <img src="/assets/img/classic-casino/poker.svg" alt="" />
                                <h6>Poker</h6>
                                <p>
                                    Test your skills and strategy in various poker variants, including Texas Hold'em, Omaha, and Seven Card Stud. Compete against other players for the ultimate prize.
                                </p>
                            </div>
                            <div className="new new_img">
                                <img src="/assets/img/classic-casino/baccarat.svg" alt="" />
                                <h6>Baccarat</h6>
                                <p>
                                    Known for its simplicity and elegance, baccarat is a favorite among casino enthusiasts. Bet on the player, banker, or tie and see who comes out on top.
                                </p>
                            </div>{" "}
                            <div className="new new_img">
                                <img src="/assets/img/classic-casino/craps.svg" alt="" />
                                <h6>Craps</h6>
                                <p>
                                    Roll the dice and try your luck in this fast-paced game of chance. Place your bets on the outcome of the dice roll and watch the excitement unfold.
                                </p>
                            </div>
                        </Slider>
                        <div className="cogini_slider_arrow">
                            <i
                                class="fa-regular fa-circle-left"
                                onClick={() => sliderRef.current.slickNext()}
                            ></i>
                            <i
                                class="fa-regular fa-circle-right"
                                onClick={() => sliderRef.current.slickPrev()}
                            ></i>
                        </div>
                    </div> : slots ? <div className="auto-container cogini_slider">
                        <img src={bg_image2} alt="" className="sideimage choice_sideimage" />
                        <Slider
                            {...settings}
                            className="cogini_slider_main"
                            ref={sliderRef}
                        >
                            <div className="new new_img">
                                <img src="/assets/img/slots/classic.svg" alt="" />
                                <h6>Classic Slots</h6>
                                <p>
                                    Step back in time with our collection of classic slot machine games featuring nostalgic symbols like fruits, bells, and lucky sevens.
                                </p>
                            </div>
                            <div className="new new_img">
                                <img src="/assets/img/slots/video.svg" alt="" />
                                <h6>Video Slots</h6>
                                <p>
                                    Immerse yourself in a world of vivid graphics and exciting themes with our selection of video slots. From ancient civilizations to outer space adventures, there's something for everyone.
                                </p>
                            </div>
                            <div className="new new_img">
                                <img src="/assets/img/slots/jackpots.svg" alt="" />
                                <h6>Progressive Jackpots</h6>
                                <p>
                                    Dream big and chase the ultimate prize with our progressive jackpot slots. With prizes that grow with every spin, you could be the next big winner!
                                </p>
                            </div>
                        </Slider>
                        <div className="cogini_slider_arrow">
                            <i
                                class="fa-regular fa-circle-left"
                                onClick={() => sliderRef.current.slickNext()}
                            ></i>
                            <i
                                class="fa-regular fa-circle-right"
                                onClick={() => sliderRef.current.slickPrev()}
                            ></i>
                        </div>
                    </div> : specialty ? <div className="auto-container cogini_slider">
                        <img src={bg_image4} alt="" className="sideimage choice_sideimage" />
                        <Slider
                            {...settings}
                            className="cogini_slider_main"
                            ref={sliderRef}
                        >
                            <div className="new new_img">
                                <img src="/assets/img/speciality/sic.svg" alt="" />
                                <h6>Sic Bo</h6>
                                <p>
                                    Roll the dice and bet on the outcome of the roll in this ancient Chinese game of chance. With multiple betting options and fast-paced gameplay, Sic Bo offers excitement at every turn.
                                </p>
                            </div>
                            <div className="new new_img">
                                <img src="/assets/img/speciality/pai.svg" alt="" />
                                <h6>Pai Gow Poker</h6>
                                <p>
                                    Combine elements of traditional Chinese dominoes with classic poker gameplay in this unique and engaging card game. Split your seven cards into a five-card hand and a two-card hand to beat the dealer and win big.
                                </p>
                            </div>
                        </Slider>
                        <div className="cogini_slider_arrow">
                            <i
                                class="fa-regular fa-circle-left"
                                onClick={() => sliderRef.current.slickNext()}
                            ></i>
                            <i
                                class="fa-regular fa-circle-right"
                                onClick={() => sliderRef.current.slickPrev()}
                            ></i>
                        </div>
                    </div> : table ? <div className="auto-container cogini_slider">
                        <img src={bg_image3} alt="" className="sideimage choice_sideimage" />
                        <Slider
                            {...settings}
                            className="cogini_slider_main"
                            ref={sliderRef}
                        >
                            <div className="new new_img">
                                <img src="/assets/img/table/keno.svg" alt="" />
                                <h6>Keno</h6>
                                <p>
                                    Pick your lucky numbers and watch as the balls are drawn in this classic lottery-style game. With the chance to win big prizes with just a single bet, Keno offers excitement and suspense with every draw.
                                </p>
                            </div>
                            <div className="new new_img">
                                <img src="/assets/img/table/scratch.svg" alt="" />
                                <h6>Scratch Cards</h6>
                                <p>
                                    Scratch and win instant prizes with our collection of virtual scratch card games. Uncover matching symbols or prize amounts to reveal your winnings and experience the thrill of instant gratification.
                                </p>
                            </div>
                        </Slider>
                        <div className="cogini_slider_arrow">
                            <i
                                class="fa-regular fa-circle-left"
                                onClick={() => sliderRef.current.slickNext()}
                            ></i>
                            <i
                                class="fa-regular fa-circle-right"
                                onClick={() => sliderRef.current.slickPrev()}
                            ></i>
                        </div>
                    </div> : ""
                }
            </div>
        </section>)
}

export default ChoiceOfGames