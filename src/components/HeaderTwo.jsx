import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./HeaderTwo.css";
import logo_img from "../images/raiden-logo.png";
import CaseStudies from './CaseStudies';
import { useSelector } from "react-redux";
const HeaderTwo = () => {
  const [active, setActive] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [rightSidebar, setRightSidebar] = useState(false);
  const [search, setSearch] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const [raidenXr, setRaidenXr] = useState(false);
  const [raidenGame, setRaidenGame] = useState(false);

  const handleRaidenXr = () => {
    setRaidenXr(true)
    setRaidenGame(false)
  }

  const handleRaidenGame = () => {
    setRaidenXr(false)
    setRaidenGame(true)
  }


  const [blockchain, setBlockchain] = useState(false);
  const [ai, setAi] = useState(false);
  const [xr, setXr] = useState(false);
  const [game, setGame] = useState(false);

  const handleBlockchain = () => {
    setBlockchain(true)
    setXr(false)
    setAi(false)
    setGame(false)
  }

  const handleXr = () => {
    setBlockchain(false)
    setXr(true)
    setAi(false)
    setGame(false)
  }

  const handleAi = () => {
    setBlockchain(false)
    setXr(false)
    setAi(true)
    setGame(false)
  }

  const handleGame = () => {
    setBlockchain(false)
    setXr(false)
    setAi(false)
    setGame(true)
  }


  const { allBlogs, } = useSelector(
    (state) => state.blogState
  );
  useEffect(() => {
    console.log(allBlogs);
    console.log(allcaseStudy);
  }, [])

  const { allcaseStudy, loading } = useSelector(
    (state) => state.caseStudyState
  );

  // /gameproduct-details
  // product progress bar

  const progressValues = [0.5, 0.5, 0.5, 0.5];
  const productName = [
    "RaidenVerse",
    "RaidenSimX",
    "RaidenCogni+",
    "RaidenArcviz",
  ];
  const ProductPara = [
    "Collaboration in a dynamic universe where the possibilities are endless.",
    "Human guidance to enhance simulation training through immersive learning.",
    "Transforming lives with practical skills for real-world success, one lesson at a time.",
    "Transforming blueprints into immersive, photorealistic environments.",
  ];

  const productTo = [
    "/raiden-verse",
    "/raiden-simx",
    "/raiden-cogni",
    "/raiden-arcviz",
  ];

  const gameValues2 = [0.5, 0.5, 0.5];
  const gameNames2 = [
    "Clash of Empires",
    "Virtual Vegas",
    "Metaverse Royale",
  ];
  const gamelink = [
    `/clash-of-empires`,
    "/virtual-vegas",
    "/metaverse-royale",
  ];

  const gamePara = [
    "Forge your empire, rule the realm with Realm Wars: Clash of Empires.",
    "Dive into Virtual Vegas: your metaverse casino adventure awaits!",
    "Gateway to immersive Battle Royale experiences in the Metaverse.",
  ];

  // service

  // block chain
  const blockChainTo = [
    "/blockchain-development-company",
    "/nft-development-company",
    "/web3-development-company",
    "/defi-development-company",
    "/metaverse-development-company",
    "/blockchain-game-development-company",
  ];
  const blockchainValues = [0.5, 0.5, 0.5, 0.5, 0.5, 0.5];
  const blockchainnames = [
    "Custom Blockchain",
    "NFT",
    "Web3",
    "DeFi",
    "Metaverse",
    "Blockchain Game",
    "Layer 1 & Layer 2",
    "Smart Contract",
  ];

  const blockChainPara = [
    "Tailored solutions for unique digital ledger needs.",
    "Unique digital assets with blockchain-backed authenticity.",
    "Next-gen immersive web experiences for tomorrow's internet.",
    "Decentralized finance solutions empowering global financial inclusion.",
    "Explore limitless digital worlds beyond imagination.",
    "Gaming experiences revolutionized with blockchain integration."
  ]

  // Ai

  const generativeAIValues = [0.5, 0.5];
  const generativeAINames = [
    "AI As A Service",
    "Generative AI Development",
  ];

  const generativeAIpara = [
    "Access AI capabilities effortlessly for diverse applications.",
    "AI-driven content creation for innovative digital outputs."
  ]

  const generativeAIUrl = ["/AI-as-a-Service(AIaaS)-Artificial-Intelligence", "/generative-ai-development-company"]
  // xr

  const xrlink = ["/augmented-reality-ar-development-company", "/virtual-reality-vr-development-company",];
  const xrValues = [0.5, 0.5];
  const xrNames = ["AR Services", "VR Services",];
  const xrpara = [
    "Augmented reality enhancements for immersive real-world experiences.",
    "Virtual reality solutions delivering immersive digital environments."

  ]

  // game

  const gameValues = [0.5, 0.5, 0.5, 0.5, 0.5, 0.5];
  // /mobile-game-development
  const gameNames = [
    "Mobile Game Development",
    "Unity Game Development",
    "Unreal Game Development",
    "MMORPG Game Development ",
    "P2E Game Development",
    "Web3 Game Development",
  ];
  const gameNamesLink = ["/mobile-game-development", "/unity-development", "/unreal-development", "/mmorpg-game-development", "/p2e-game-develpment", "/web3-game-develpment"];
  const gameservicePara = [
    "Crafting engaging games optimized for mobile platforms.",
    "Innovative projects developed using the powerful Unity engine.",
    "Create stunning digital experiences with Unreal Engine.",
    "Crafting vast multiplayer online role-playing game adventures.",
    "Gaming experiences that offer play-to-earn opportunities.",
    "Games designed to leverage the potential of Web3 technologies."
  ]

  //  compony

  const companyprogressValues = [0.5, 0.5, 0.5];
  const CompanyNames = ["About us", "Career", "Contact us"];
  const companyurl = ["/about-us", "/carrer", "/contact-us"]
  const companyPara = [
    "Learn Our Story, Mission, Values.",
    "Join Our Team, Grow Career.",
    "Connect, Reach Out, Inquire."
  ]

  const [activeMenu, setActiveMenu] = useState("Blockchain");
  const [activeMenu1, setActiveMenu1] = useState("virtual");
  const [activeMenu2, setActiveMenu2] = useState("Company");

  const resourseprogressValues = [0.5, 0.5];
  const resourseNames = ["Blog", "Case Studies",];
  const resoursePara = [
    "Explore Insights & Inspiration Read Our Blog",
    "Learn from Success: Dive into Case Studies"
  ]
  const resourseurl = ["/blog", "/case-studies"]

  const handleMenuHover2 = (menu2) => {
    setActiveMenu2(menu2);
  };

  const handleMenuHover = (menu) => {
    setActiveMenu(menu);
  };

  const handleMenuHover1 = (menu1) => {
    setActiveMenu1(menu1);
  };

  useEffect(() => {
    var offCanvasNav = document.getElementById("offcanvas-navigation");
    var offCanvasNavSubMenu = offCanvasNav.querySelectorAll(".sub-menu");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        "<span class='menu-expand'><i></i></span>"
      );
    }

    var menuExpand = offCanvasNav.querySelectorAll(".menu-expand");
    var numMenuExpand = menuExpand.length;

    function sideMenuExpand() {
      if (this.parentElement.classList.contains("active") === true) {
        this.parentElement.classList.remove("active");
      } else {
        for (let i = 0; i < numMenuExpand; i++) {
          menuExpand[i].parentElement.classList.remove("active");
        }
        this.parentElement.classList.add("active");
      }
    }

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", sideMenuExpand);
    }

    window.onscroll = () => {
      if (window.pageYOffset < 150) {
        setScroll(false);
      } else if (window.pageYOffset > 150) {
        setScroll(true);
      }
      return () => (window.onscroll = null);
    };
  }, []);

  const mobileMenu = () => {
    setActive(!active);
  };
  const rightSide = () => {
    setRightSidebar(!rightSidebar);
  };
  const searchFun = () => {
    setSearch(!search);
  };

  // const [activeSubMenu, setActiveSubMenu] = useState(null);

  // const handleSubMenuHover = (submenu) => {
  //   setActiveSubMenu(submenu);
  // }

  return (
    <>
      <>
        {/* header-area-start */}
        <header className="header-intro-version-one-area header-area-2">
          <div className="header-inner" id="header-sticky-2">
            <div className="auto-container">
              <div className="row align-items-center">
                <div className=" col-lg-3 col-md-6 col-6">
                  <div className="logo-area">
                    <div className="logo">
                      <NavLink to="/">
                        <img className="img-fluid" src={logo_img} alt="" />
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className=" col-lg-7 col-md-6 col-6">
                  <div className="  menu-area menu-padding d-none d-lg-block">
                    <div className="main-menu">
                      <nav>
                        <ul>
                          <li className="has-dropdown">
                            <Link to="/">HOME</Link>
                          </li>
                          <li className="has-dropdown">
                            <Link className="nav_link" to="#">
                              PRODUCTS<i class="fa-solid fa-caret-down"></i>
                            </Link>
                            <ul className="sub-menu">
                              <div className="sub-menu-div">
                                <li
                                  style={{ marginTop: "20px" }}
                                  className={`has-dropdown ${activeMenu1 === "virtual" ? "active" : ""
                                    }`}
                                  onMouseEnter={() =>
                                    handleMenuHover1("virtual")
                                  }
                                >
                                  <Link className="left_content_arrow" to="#">
                                    XR
                                    <i class="fa-solid fa-right-long icon_rightarrow"></i>
                                  </Link>
                                </li>
                                <li
                                  className={`has-dropdown ${activeMenu1 === "Game2" ? "active" : ""
                                    }`}
                                  onMouseEnter={() => handleMenuHover1("Game2")}
                                >
                                  <Link
                                    className="left_content_arrow"
                                    style={{ marginBottom: "20px" }}
                                    to="#"
                                  >
                                    GAME
                                    <i class="fa-solid fa-right-long icon_rightarrow"></i>
                                  </Link>
                                </li>
                              </div>
                              <div className="menupar-right">
                                {activeMenu1 === "virtual" && (
                                  <div className="menupar-right-div">
                                    <div className="menubar_inside_main_div">
                                      <div className="menubar_inside_div">
                                        <div className="menubar_inside_main_heading">
                                          XR
                                        </div>

                                        <div className="manubar_content_main_div">
                                          {progressValues.map(
                                            (value, index) => (
                                              <Link
                                                key={index}
                                                to={productTo[index]}
                                                onMouseEnter={() =>
                                                  setHoveredIndex(index)
                                                }
                                                onMouseLeave={() =>
                                                  setHoveredIndex(null)
                                                }
                                                style={{
                                                  position: "relative",
                                                  display: "block",
                                                }}
                                              >
                                                <div className="manubar_content_item">
                                                  <div className="manubar_content_name">
                                                    {productName[index]}
                                                  </div>
                                                  <div className="manubar_content_para">
                                                    {ProductPara[index]}
                                                  </div>
                                                  <div
                                                    className="progress-bar"
                                                    style={{
                                                      width:
                                                        hoveredIndex === index
                                                          ? "100%"
                                                          : `${value * 100}%`,
                                                      position: "absolute",
                                                      top: "15px", // Adjust the value to position the progress bar above the link name
                                                      left: 0,
                                                      height: "4px",
                                                      backgroundColor:
                                                        "#13C4A1", // Change color as needed
                                                      transition:
                                                        "width 0.3s ease-in-out",
                                                    }}
                                                  />
                                                </div>
                                              </Link>
                                            )
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}
                                {activeMenu1 === "Game2" && (
                                  <div className="menupar-right-div">
                                    <div className="menubar_inside_main_div">
                                      <div className="menubar_inside_div">
                                        <div className="menubar_inside_main_heading">
                                          Game
                                        </div>
                                        <div className="manubar_content_main_div">
                                          {gameValues2.map((value, index) => (
                                            <Link
                                              key={index}
                                              to={gamelink[index]}
                                              onMouseEnter={() =>
                                                setHoveredIndex(index)
                                              }
                                              onMouseLeave={() =>
                                                setHoveredIndex(null)
                                              }
                                              style={{
                                                position: "relative",
                                                display: "block",
                                              }}
                                            >
                                              <div className="manubar_content_item">
                                                <div className="manubar_content_name">
                                                  {gameNames2[index]}
                                                </div>
                                                <div className="manubar_content_para">
                                                  {gamePara[index]}
                                                </div>
                                                <div
                                                  className="progress-bar"
                                                  style={{
                                                    width:
                                                      hoveredIndex === index
                                                        ? "100%"
                                                        : `${value * 100}%`,
                                                    position: "absolute",
                                                    top: "15px", // Adjust the value to position the progress bar above the link name
                                                    left: 0,
                                                    height: "4px",
                                                    backgroundColor: "#13C4A1", // Change color as needed
                                                    transition:
                                                      "width 0.3s ease-in-out",
                                                  }}
                                                />
                                              </div>
                                            </Link>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </ul>
                          </li>
                          <li className="has-dropdown">
                            <Link className="nav_link" to="#">
                              SERVICES<i class="fa-solid fa-caret-down"></i>
                            </Link>
                            <ul className="sub-menu">
                              <div className="sub-menu-div">
                                <li
                                  className={`has-dropdown ${activeMenu === "Blockchain" ? "active" : ""
                                    }`}
                                  onMouseEnter={() =>
                                    handleMenuHover("Blockchain")
                                  }
                                // onClick={() => handleMenuClick('team')}
                                >
                                  <Link
                                    className="left_content_arrow"
                                    style={{ marginTop: "20px" }}
                                    to="#"
                                  >
                                    BLOCKCHAIN
                                    <i class="fa-solid fa-right-long icon_rightarrow"></i>
                                  </Link>
                                </li>
                                <li
                                  className={`has-dropdown ${activeMenu === "AI" ? "active" : ""
                                    }`}
                                  onMouseEnter={() => handleMenuHover("AI")}
                                // onClick={() => handleMenuClick('project1')}
                                >
                                  <Link className="left_content_arrow" to="#">
                                    AI{" "}
                                    <i class="fa-solid fa-right-long icon_rightarrow"></i>
                                  </Link>
                                </li>
                                <li
                                  className={`has-dropdown ${activeMenu === "XR" ? "active" : ""
                                    }`}
                                  onMouseEnter={() => handleMenuHover("XR")}
                                >
                                  <Link className="left_content_arrow" to="#">
                                    XR{" "}
                                    <i class="fa-solid fa-right-long icon_rightarrow"></i>
                                  </Link>
                                </li>
                                <li
                                  className={`has-dropdown ${activeMenu === "Game" ? "active" : ""
                                    }`}
                                  onMouseEnter={() => handleMenuHover("Game")}
                                >
                                  <Link
                                    className="left_content_arrow"
                                    style={{ marginBottom: "20px" }}
                                    to="#"
                                  >
                                    GAME{" "}
                                    <i class="fa-solid fa-right-long icon_rightarrow"></i>
                                  </Link>
                                </li>
                              </div>
                              <div className="menupar-right">
                                {activeMenu === "Blockchain" && (
                                  <div className="menupar-right-div">
                                    <div className="menubar_inside_main_div">
                                      <div className="menubar_inside_div">
                                        <div className="menubar_inside_main_heading">
                                          Block Chain
                                        </div>
                                        <div className="manubar_content_main_div">
                                          {blockchainValues.map(
                                            (value, index) => (
                                              <Link
                                                key={index}
                                                to={blockChainTo[index]}
                                                onMouseEnter={() =>
                                                  setHoveredIndex(index)
                                                }
                                                onMouseLeave={() =>
                                                  setHoveredIndex(null)
                                                }
                                                style={{
                                                  position: "relative",
                                                  display: "block",
                                                }}
                                              >
                                                <div className="manubar_content_item">
                                                  <div className="manubar_content_name">
                                                    {blockchainnames[index]}
                                                  </div>
                                                  <div className="manubar_content_para">
                                                    {blockChainPara[index]}
                                                  </div>
                                                  <div
                                                    className="progress-bar"
                                                    style={{
                                                      width:
                                                        hoveredIndex === index
                                                          ? "100%"
                                                          : `${value * 100}%`,
                                                      position: "absolute",
                                                      top: "15px", // Adjust the value to position the progress bar above the link name
                                                      left: 0,
                                                      height: "4px",
                                                      backgroundColor:
                                                        "#13C4A1", // Change color as needed
                                                      transition:
                                                        "width 0.3s ease-in-out",
                                                    }}
                                                  />
                                                </div>
                                              </Link>
                                            )
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}
                                {activeMenu === "AI" && (
                                  <div className="menupar-right-div">
                                    <div className="menubar_inside_main_div">
                                      <div className="menubar_inside_div">
                                        <div className="menubar_inside_main_heading">
                                          AI
                                        </div>

                                        <div
                                          style={{ justifyContent: "normal" }}
                                          className="manubar_content_main_div"
                                        >
                                          {generativeAIValues.map(
                                            (value, index) => (
                                              <Link
                                                key={index}
                                                to={generativeAIUrl[index]}
                                                onMouseEnter={() =>
                                                  setHoveredIndex(index)
                                                }
                                                onMouseLeave={() =>
                                                  setHoveredIndex(null)
                                                }
                                                style={{
                                                  position: "relative",
                                                  display: "block",
                                                }}
                                              >
                                                <div className="manubar_content_item">
                                                  <div className="manubar_content_name">
                                                    {generativeAINames[index]}
                                                  </div>
                                                  <div className="manubar_content_para">
                                                    {generativeAIpara[index]}
                                                  </div>
                                                  <div
                                                    className="progress-bar"
                                                    style={{
                                                      width:
                                                        hoveredIndex === index
                                                          ? "100%"
                                                          : `${value * 100}%`,
                                                      position: "absolute",
                                                      top: "15px", // Adjust the value to position the progress bar above the link name
                                                      left: 0,
                                                      height: "4px",
                                                      backgroundColor:
                                                        "#13C4A1", // Change color as needed
                                                      transition:
                                                        "width 0.3s ease-in-out",
                                                    }}
                                                  />
                                                </div>
                                              </Link>
                                            )
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}
                                {activeMenu === "XR" && (
                                  <div className="menupar-right-div">
                                    <div className="menubar_inside_main_div">
                                      <div className="menubar_inside_div">
                                        <div className="menubar_inside_main_heading">
                                          XR
                                        </div>

                                        <div className="manubar_content_main_div">
                                          {xrValues.map((value, index) => (
                                            <Link
                                              key={index}
                                              to={xrlink[index]}
                                              onMouseEnter={() =>
                                                setHoveredIndex(index)
                                              }
                                              onMouseLeave={() =>
                                                setHoveredIndex(null)
                                              }
                                              style={{
                                                position: "relative",
                                                display: "block",
                                              }}
                                            >
                                              <div className="manubar_content_item">
                                                <div className="manubar_content_name">
                                                  {xrNames[index]}
                                                </div>
                                                <div className="manubar_content_para">
                                                  {xrpara[index]}
                                                </div>
                                                <div
                                                  className="progress-bar"
                                                  style={{
                                                    width:
                                                      hoveredIndex === index
                                                        ? "100%"
                                                        : `${value * 100}%`,
                                                    position: "absolute",
                                                    top: "15px", // Adjust the value to position the progress bar above the link name
                                                    left: 0,
                                                    height: "4px",
                                                    backgroundColor: "#13C4A1", // Change color as needed
                                                    transition:
                                                      "width 0.3s ease-in-out",
                                                  }}
                                                />
                                              </div>
                                            </Link>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}
                                {activeMenu === "Game" && (
                                  <div className="menupar-right-div">
                                    <div className="menubar_inside_main_div">
                                      <div className="menubar_inside_div">
                                        <div className="menubar_inside_main_heading">
                                          Game
                                        </div>
                                        <div className="manubar_content_main_div">
                                          {gameValues.map((value, index) => (
                                            <Link
                                              key={index}
                                              to={gameNamesLink[index]}
                                              onMouseEnter={() =>
                                                setHoveredIndex(index)
                                              }
                                              onMouseLeave={() =>
                                                setHoveredIndex(null)
                                              }
                                              style={{
                                                position: "relative",
                                                display: "block",
                                              }}
                                            >
                                              <div className="manubar_content_item">
                                                <div className="manubar_content_name">
                                                  {gameNames[index]}
                                                </div>
                                                <div className="manubar_content_para">
                                                  {gameservicePara[index]}
                                                </div>
                                                <div
                                                  className="progress-bar"
                                                  style={{
                                                    width:
                                                      hoveredIndex === index
                                                        ? "100%"
                                                        : `${value * 100}%`,
                                                    position: "absolute",
                                                    top: "15px", // Adjust the value to position the progress bar above the link name
                                                    left: 0,
                                                    height: "4px",
                                                    backgroundColor: "#13C4A1", // Change color as needed
                                                    transition:
                                                      "width 0.3s ease-in-out",
                                                  }}
                                                />
                                              </div>
                                            </Link>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </ul>
                          </li>
                          <li className="has-dropdown">
                            <Link className="nav_link" to="#">
                              RESOURSES <i class="fa-solid fa-caret-down"></i>
                            </Link>
                            <ul className="sub-menu">
                              <div className="sub-menu-div">
                                <li
                                  className={`has-dropdown ${activeMenu2 === "Company" ? "active" : ""
                                    }`}
                                  onMouseEnter={() =>
                                    handleMenuHover2("Company")
                                  }
                                // onClick={() => handleMenuClick('team')}
                                >
                                  <Link
                                    className="left_content_arrow"
                                    style={{ marginTop: "20px" }}
                                    to="#"
                                  >
                                    RESOURSES
                                    <i class="fa-solid fa-right-long icon_rightarrow"></i>
                                  </Link>
                                </li>
                              </div>
                              <div className="menupar-right">
                                {activeMenu2 === "Company" && (
                                  <div className="menupar-right-div">
                                    <div className="menubar_inside_main_div">
                                      <div className="menubar_inside_div">
                                        <div className="menubar_inside_main_heading">
                                          Resourses
                                        </div>
                                        <div className="manubar_content_main_div">
                                          {resourseprogressValues.map(
                                            (value, index) => (
                                              <Link
                                                key={index}
                                                to={resourseurl[index]} // Assuming index 0 is for "About us" and index 2 is for "Contact us"
                                                onMouseEnter={() =>
                                                  setHoveredIndex(index)
                                                }
                                                onMouseLeave={() =>
                                                  setHoveredIndex(null)
                                                }
                                                style={{
                                                  position: "relative",
                                                  display: "block",
                                                }}
                                              >
                                                <div className="manubar_content_item">
                                                  <div className="manubar_content_name">
                                                    {resourseNames[index]}
                                                  </div>
                                                  <div className="manubar_content_para">
                                                    {resoursePara[index]}
                                                  </div>
                                                  <div
                                                    className="progress-bar"
                                                    style={{
                                                      width:
                                                        hoveredIndex === index
                                                          ? "100%"
                                                          : `${value * 100}%`,
                                                      position: "absolute",
                                                      top: "15px", // Adjust the value to position the progress bar above the link name
                                                      left: 0,
                                                      height: "4px",
                                                      backgroundColor:
                                                        "#13C4A1", // Change color as needed
                                                      transition:
                                                        "width 0.3s ease-in-out",
                                                    }}
                                                  />
                                                </div>
                                              </Link>
                                            )
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </ul>
                          </li>
                          <li className="has-dropdown">
                            <Link className="nav_link" to="#">
                              COMPANY <i class="fa-solid fa-caret-down"></i>
                            </Link>
                            <ul className="sub-menu">
                              <div className="sub-menu-div">
                                <li
                                  className={`has-dropdown ${activeMenu2 === "Company" ? "active" : ""
                                    }`}
                                  onMouseEnter={() =>
                                    handleMenuHover2("Company")
                                  }
                                // onClick={() => handleMenuClick('team')}
                                >
                                  <Link
                                    className="left_content_arrow"
                                    style={{ marginTop: "20px" }}
                                    to="#"
                                  >
                                    COMPANY{" "}
                                    <i class="fa-solid fa-right-long icon_rightarrow"></i>
                                  </Link>
                                </li>
                              </div>
                              <div className="menupar-right">
                                {activeMenu2 === "Company" && (
                                  <div className="menupar-right-div">
                                    <div className="menubar_inside_main_div">
                                      <div className="menubar_inside_div">
                                        <div className="menubar_inside_main_heading">
                                          Company
                                        </div>
                                        <div className="manubar_content_main_div">
                                          {companyprogressValues.map(
                                            (value, index) => (
                                              <Link
                                                key={index}
                                                to={companyurl[index]} // Assuming index 0 is for "About us" and index 2 is for "Contact us"
                                                onMouseEnter={() =>
                                                  setHoveredIndex(index)
                                                }
                                                onMouseLeave={() =>
                                                  setHoveredIndex(null)
                                                }
                                                style={{
                                                  position: "relative",
                                                  display: "block",
                                                }}
                                              >
                                                <div className="manubar_content_item">
                                                  <div className="manubar_content_name">
                                                    {CompanyNames[index]}
                                                  </div>
                                                  <div className="manubar_content_para">
                                                    {companyPara[index]}
                                                  </div>
                                                  <div
                                                    className="progress-bar"
                                                    style={{
                                                      width:
                                                        hoveredIndex === index
                                                          ? "100%"
                                                          : `${value * 100}%`,
                                                      position: "absolute",
                                                      top: "15px", // Adjust the value to position the progress bar above the link name
                                                      left: 0,
                                                      height: "4px",
                                                      backgroundColor:
                                                        "#13C4A1", // Change color as needed
                                                      transition:
                                                        "width 0.3s ease-in-out",
                                                    }}
                                                  />
                                                </div>
                                              </Link>
                                            )
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </ul>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="side-menu-icon d-lg-none text-end">
                    <Link
                      to="#"
                      className="info-toggle-btn f-right sidebar-toggle-btn"
                      onClick={mobileMenu}
                    >
                      <i className="fal fa-bars" />
                    </Link>
                  </div>
                </div>
                <div className=" col-lg-2 d-none d-lg-block">
                  <div className="trigger">
                    {/* <span onClick={searchFun}>
                      <i className="fa-regular fa-magnifying-glass " />
                    </span> */}
                    <span className="sidebar-toggle" onClick={rightSide}>
                      <i className="fa-solid fa-bars-sort " />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* header-area-end */}
      </>

      <>
        {/* modal-search-start */}
        <div
          className={
            search === true ? " fade search-box show" : " fade search-box"
          }
        >
          <button className="close" onClick={searchFun}>
            <span aria-hidden="true">
              <i className="fa-sharp fa-regular fa-xmark" />
            </span>
          </button>
          <div className="modal-dialog">
            <div className="modal-content">
              <form>
                <input type="text" placeholder="Search here..." />
                <button>
                  <i className="fa fa-search" />
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* modal-search-end */}
      </>

      {/* sidebar area start */}
      <div
        className={`sidebar__area ${active === true ? "sidebar-opened" : ""} `}
      >
        <div className="sidebar__wrapper">
          <div className="sidebar__content">
            <div className="sidebar-logo mb-40 mt-40">
              <NavLink to="/index">
                <img src={logo_img} alt="logo" />
              </NavLink>
            </div>
            <nav className="offcanvas-navigation" id="offcanvas-navigation">
              <ul>
                <li className="menu-item-has-children">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="menu-item-has-children">
                  <Link to="#">products</Link>
                  <ul className="sub-menu">
                    <li className="menu-item-has-children">
                      <Link style={{ display: "flex", justifyContent: "end", alignItems: "center", justifyContent: "space-between" }} onClick={handleRaidenXr} className="sub_heading_color" to="#">
                        XR
                        <span><i style={{ position: "relative", right: "65px" }} class="fa-solid fa-plus"></i></span>
                      </Link>
                      {
                        raidenXr ? <ul className="sub-menu">
                          <li>
                            <NavLink
                              to="/raiden-verse"
                              className={(navData) =>
                                navData.isActive ? "active" : ""
                              }
                            >
                              Raiden Verse
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/raiden-simx"
                              className={(navData) =>
                                navData.isActive ? "active" : ""
                              }
                            >
                              Raiden SimX
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/raiden-cogni"
                              className={(navData) =>
                                navData.isActive ? "active" : ""
                              }
                            >
                              Raiden COGNI+
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/raiden-arcviz"
                              className={(navData) =>
                                navData.isActive ? "active" : ""
                              }
                            >
                              Raiden ARCVIZ
                            </NavLink>
                          </li>
                        </ul> : ""
                      }
                    </li>
                  </ul>
                  <ul className="sub-menu">
                    <li className="menu-item-has-children">
                      <Link style={{ display: "flex", justifyContent: "end", alignItems: "center", justifyContent: "space-between" }} onClick={handleRaidenGame} className="sub_heading_color" to="#">
                        game
                        <span><i style={{ position: "relative", right: "65px" }} class="fa-solid fa-plus"></i></span>
                      </Link>
                      {
                        raidenGame ? <ul className="sub-menu">
                          <li>
                            <NavLink
                              to="/clash-of-empires"
                              className={(navData) =>
                                navData.isActive ? "active" : ""
                              }
                            >
                              Realm Wars: Clash of Empires
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/virtual-vegas"
                              className={(navData) =>
                                navData.isActive ? "active" : ""
                              }
                            >
                              Virtual Vegas
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/metaverse-royale"
                              className={(navData) =>
                                navData.isActive ? "active" : ""
                              }
                            >
                              Metaverse Royale
                            </NavLink>
                          </li>
                        </ul> : ""
                      }
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <Link to="#">Services</Link>
                  <ul className="sub-menu">
                    <li className="menu-item-has-children">
                      <Link style={{ display: "flex", justifyContent: "end", alignItems: "center", justifyContent: "space-between" }} onClick={handleBlockchain} className="sub_heading_color" to="#">
                        Blockchain
                        <span><i style={{ position: "relative", right: "65px" }} class="fa-solid fa-plus"></i></span>
                      </Link>
                      {
                        blockchain ? <ul className="sub-menu">
                          <li>
                            <NavLink
                              to="/blockchain-development-company"
                              className={(navData) =>
                                navData.isActive ? "active" : ""
                              }
                            >
                              Custom Blockchain
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/nft-development-company"
                              className={(navData) =>
                                navData.isActive ? "active" : ""
                              }
                            >
                              NFT
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/web3-development-company"
                              className={(navData) =>
                                navData.isActive ? "active" : ""
                              }
                            >
                              WEB3
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/defi-development-company"
                              className={(navData) =>
                                navData.isActive ? "active" : ""
                              }
                            >
                              DEFI
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/metaverse-development-company"
                              className={(navData) =>
                                navData.isActive ? "active" : ""
                              }
                            >
                              Metaverse
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/blockchain-game-development-company"
                              className={(navData) =>
                                navData.isActive ? "active" : ""
                              }
                            >
                              Blockchain Game
                            </NavLink>
                          </li>
                        </ul> : ""
                      }
                    </li>
                  </ul>
                  <ul className="sub-menu">
                    <li className="menu-item-has-children">
                      <Link style={{ display: "flex", justifyContent: "end", alignItems: "center", justifyContent: "space-between" }} onClick={handleAi} className="sub_heading_color" to="#">
                        AI
                        <span><i style={{ position: "relative", right: "65px" }} class="fa-solid fa-plus"></i></span>
                      </Link>
                      {
                        ai ? <ul className="sub-menu">
                          <li>
                            <NavLink
                              to="/AI-as-a-Service(AIaaS)-Artificial-Intelligence"
                              className={(navData) =>
                                navData.isActive ? "active" : ""
                              }
                            >
                              AI as a Service
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/generative-ai-development-company"
                              className={(navData) =>
                                navData.isActive ? "active" : ""
                              }
                            >
                              Generative AI Development
                            </NavLink>
                          </li>
                        </ul> : ""
                      }
                    </li>
                  </ul>
                  <ul className="sub-menu">
                    <li className="menu-item-has-children">
                      <Link style={{ display: "flex", justifyContent: "end", alignItems: "center", justifyContent: "space-between" }} onClick={handleXr} className="sub_heading_color" to="#">
                        XR
                        <span><i style={{ position: "relative", right: "65px" }} class="fa-solid fa-plus"></i></span>
                      </Link>
                      {
                        xr ? <ul className="sub-menu">
                          <li>
                            <NavLink
                              to="/augmented-reality-ar-development-company"
                              className={(navData) =>
                                navData.isActive ? "active" : ""
                              }
                            >
                              AR Services
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/virtual-reality-vr-development-company"
                              className={(navData) =>
                                navData.isActive ? "active" : ""
                              }
                            >
                              VR Services
                            </NavLink>
                          </li>
                        </ul> : ""
                      }
                    </li>
                  </ul>
                  <ul className="sub-menu">
                    <li className="menu-item-has-children">
                      <Link style={{ display: "flex", justifyContent: "end", alignItems: "center", justifyContent: "space-between" }} onClick={handleGame} className="sub_heading_color" to="#">
                        GAME
                        <span><i style={{ position: "relative", right: "65px" }} class="fa-solid fa-plus"></i></span>
                      </Link>
                      {
                        game ? <ul className="sub-menu">
                          <li>
                            <NavLink
                              to="/mobile-game-development"
                              className={(navData) =>
                                navData.isActive ? "active" : ""
                              }
                            >
                              Mobile Game Development
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/unity-development"
                              className={(navData) =>
                                navData.isActive ? "active" : ""
                              }
                            >
                              Unity Development
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/unreal-development"
                              className={(navData) =>
                                navData.isActive ? "active" : ""
                              }
                            >
                              Unreal Development
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/mmorpg-game-development"
                              className={(navData) =>
                                navData.isActive ? "active" : ""
                              }
                            >
                              mmorpg game development
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/p2e-game-develpment"
                              className={(navData) =>
                                navData.isActive ? "active" : ""
                              }
                            >
                              P2E Game Development
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/web3-game-develpment"
                              className={(navData) =>
                                navData.isActive ? "active" : ""
                              }
                            >
                              Web3 Game Development
                            </NavLink>
                          </li>
                        </ul> : " "
                      }
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <Link to="#">Resources</Link>
                  <ul className="sub-menu">
                    <li>
                      <NavLink
                        to="/blog"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Blogs
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/case-studies"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Case studies
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <Link to="#">company</Link>
                  <ul className="sub-menu">
                    <li>
                      <NavLink
                        to="/about-us"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        About us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/carrer"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Career
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/contact-us"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Contact us
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>

            <div className="mobile-footer">
              <div className="follow">
                <div className="title">
                  <h3>Follow Us:</h3>
                </div>
                <div className="social one">
                  <Link to="#">
                    <i className="fa-brands fa-facebook-f" />
                  </Link>
                  <Link to="#">
                    <i className="fa-brands fa-twitter" />
                  </Link>
                  <Link to="#">
                    <i className="fa-brands fa-linkedin-in" />
                  </Link>
                  <Link to="#">
                    <i className="fa-brands fa-instagram" />
                  </Link>
                </div>
              </div>
              <div className="contact">
                <div className="title">
                  <h3>Contact Us:</h3>
                </div>
                <ul>
                  <li>
                    <i className="fa-sharp fa-solid fa-location-dot" />
                    No: 5 Namachivaya Nagar, Opp KGISL Tech park, Saravanampatti, Coimbatore, TamilNadu - 641035
                  </li>
                  <li>
                    <i className="fa-solid fa-envelope" />
                    info@raiden.studio
                  </li>
                  <li>
                    <i className="fa-solid fa-phone" />
                    +91 98840 36062
                  </li>
                  {/* <li>
                    <i className="fa-regular fa-globe" />
                    themesoft69.com
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <>
        {/* Right Sidebar start */}
        <section
          className={
            rightSidebar === true
              ? "sidebar-right sidebar-opened"
              : "sidebar-right"
          }
        >
          <div className="wrapper">
            <div className="title">
              <div className="logo">
                <img
                  className="img-fluid"
                  src="\assets\img\Language\raiden new black-min.png" alt="" />
              </div>
              <p>
                Raiden Studios: Innovating the future of gaming, VR, AR, and blockchain. Your go-to consultancy for cutting-edge solutions tailored to your needs. Let's redefine possibilities together!
              </p>
            </div>
            <div className="intro-text">
              <div className="title-text">
                <h3>Blogs</h3>
              </div>
              <div className="img-file">
                {
                  allBlogs?.slice(-6).map((item, index) => {
                    return (
                      <Link to={`/blogdetails/${item.url}`}>
                        <img
                          className="img-fluid"
                          style={{ height: "65px" }}
                          src={item.imageurl}
                          alt=""
                        />
                      </Link>
                    )
                  })
                }
              </div>
            </div>
            <div className="intro-text">
              <div className="title-text">
                <h3>Case Studies</h3>
              </div>
              <div className="img-file">
                {
                  allcaseStudy?.slice(-6).map((item, index) => {
                    return (
                      <Link to={`/case-study-detail/${item.url}`}>
                        <img
                          className="img-fluid"
                          style={{ height: "65px" }}
                          src={item.imageurl}
                          alt=""
                        />
                      </Link>
                    )
                  })
                }
              </div>
            </div>
            <div className="intro-text">
              <div className="title-text">
                <h3>About Raiden</h3>
                <p>
                  At Raiden Studios, we blend innovation with expertise to navigate the ever-evolving landscapes of gaming, virtual reality (VR), augmented reality (AR), and blockchain technology. As a premier consulting and solutions provider, we offer comprehensive services tailored to meet the unique needs of our clients in these dynamic industries.
                </p>
              </div>
            </div>
            <div className="intro-text">
              <div className="title-text">
                <h3>Head Office</h3>
                <ul>
                  <li>
                    <i className="fa-sharp fa-solid fa-location-dot pe-1" />
                    No: 5 Namachivaya Nagar, Opp KGISL Tech park, Saravanampatti, Coimbatore,
                  </li>
                  <li>TamilNadu - 641035 </li>
                  <li>
                    <i className="fa-solid fa-envelope pe-1" /> info@raiden.studio
                  </li>
                  <li>
                    <i className="fa-sharp fa-solid fa-phone-volume pe-1" />
                    +91 98840 36062
                  </li>
                  <li />
                </ul>
              </div>
            </div>
            <div className="close-icon sidebar-close" onClick={rightSide}>
              <i className="fa-solid fa-xmark" />
            </div>
          </div>
        </section>
        {/* Right Sidebar end */}
      </>

      {/* sidebar area end */}
      <div className={active ? "body-overlay active" : "body-overlay"} />
    </>
  );
};

export default HeaderTwo;
