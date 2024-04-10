import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./HeaderTwo.css";
import logo_img from "../images/raiden-logo.png";
const HeaderTwo = () => {
  const [active, setActive] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [rightSidebar, setRightSidebar] = useState(false);
  const [search, setSearch] = useState(false);

  const [hoveredIndex, setHoveredIndex] = useState(null);
  // /gameproduct-details
  // product progress bar

  const progressValues = [0.5, 0.5, 0.5, 0.5];
  const productName = [
    "Raiden Verse",
    "Raiden SimX",
    "Raiden COGNI+",
    "Raiden ARCVIZ"
  ];
  const ProductPara = [
    "Experience limitless exploration, creation, and collaboration in a dynamic universe where the possibilities are endless.",
    "Utilize advanced technology and human guidance to enhance Simulation Training through immersive learning.",
    "Transforming lives with practical skills for real-world success, one lesson at a time.",
    "Transforming blueprints into immersive, photorealistic environments.",
  ]

  const productTo = ["/project-details", "/raidensimx", "/raiden-cogni", "/raiden-arcviz"]


  const gameValues2 = [0.5, 0.5, 0.5];
  const gameNames2 = [
    "Realm Wars: Clash of Empires",
    "Virtual Vegas",
    "MetaVerse Royale",
  ];
  const gamelink = [`/gameproduct-details`, "/metaverse-casino", "/metaverse-royal", ""]

  const gamePara = [
    "Forge your empire, rule the realm with Realm Wars: Clash of Empires.",
    "Forge your empire, rule the realm with Realm Wars: Clash of Empires.",
    "Gateway to immersive Battle Royale experiences in the Metaverse.",
    "Forge your empire, rule the realm with Realm Wars: Clash of Empires."
  ]

  // service

  // block chain
  const blockChainTo = ["", "/nft-development", "", "", "/metaverse-development", "", "", ""]
  const blockchainValues = [0.5, 0.5, 0.5, 0.5, 0.5, 0.5];
  const blockchainnames = [
    "Custom Blockchain",
    "NFT",
    "Web3",
    "DeFi",
    "Metaverse",
    "Blockchain Game",
    "Layer 1 & Layer 2",
    "Smart Contract"
  ];

  // Ai

  const generativeAIValues = [0.5, 0.5];
  const generativeAINames = [
    "Generative AI Consulting",
    "Generative AI Development",
  ];

  // xr


  const xrlink = ["", "/vr-development", ""]
  const xrValues = [0.5, 0.5, 0.5];
  const xrNames = [
    "AR Services",
    "VR Services",
    "Digital Twin",
  ];

  // game

  const gameValues = [0.5, 0.5, 0.5, 0.5, 0.5, 0.5];
  const gameNames = [
    "Mobile Game Development",
    "Unity Development",
    "Unreal Development",
    "mmorpg game development ",
    "P2E Game Development",
    "Web3 Game Development",
  ];

  //  compony

  const companyprogressValues = [0.5, 0.5, 0.5];
  const CompanyNames = ["About us", "Carrer", "Contact us"];

  const [activeMenu, setActiveMenu] = useState("Blockchain");
  const [activeMenu1, setActiveMenu1] = useState("virtual");
  const [activeMenu2, setActiveMenu2] = useState("Company");

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
          {/* <div className="header-top d-none d-lg-block">
            <div className="auto-container">
              <div className="row">
                <div className="col-lg-7">
                  <div className="left-wrapper">
                    <div className="item">
                      <span className="theme-color">
                        <i className="fa-solid fa-envelope" />
                      </span>
                      <span>info@yourdomain.com</span>
                    </div>
                    <div className="item">
                      <span className="theme-color">
                        <i className="fa-solid fa-phone-arrow-up-right" />
                      </span>
                      <span>(0215) 2658 12547</span>
                    </div>
                    <div className="item">
                      <span className="theme-color">
                        <i className="fa-sharp fa-solid fa-location-dot" />
                      </span>
                      <span>Lane Mission New York</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="right-wrapper">
                    <div className="item social">
                      <Link to="#">
                        <i className="fa-brands fa-facebook" />
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
                </div>
              </div>
            </div>
          </div> */}
          <div
            className="header-inner"
            id="header-sticky-2"
          >
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
                            <Link to="/">Home</Link>
                            {/* <ul className="sub-menu">
                              <li>
                                <NavLink
                                  to="/index"
                                  className={(navData) =>
                                    navData.isActive ? "active" : ""
                                  }
                                >
                                  Home One
                                </NavLink>
                              </li>
                              <li className="active">
                                <NavLink
                                  to="/index-2"
                                  className={(navData) =>
                                    navData.isActive ? "active" : ""
                                  }
                                >
                                  Home Two
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/index-3"
                                  className={(navData) =>
                                    navData.isActive ? "active" : ""
                                  }
                                >
                                  Home Three
                                </NavLink>
                              </li>
                            </ul> */}
                          </li>
                          {/* <li className="has-dropdown">
                            <Link className="nav_link" to="#">Product<i class="fa-solid fa-caret-down"></i></Link>
                            <ul className="sub-menu">
                              <div className="sub-menu-div">
                                <li
                                  className={`has-dropdown ${activeMenu1 === 'Product' ? 'active' : ''}`}
                                  onMouseEnter={() => handleMenuHover1('Product')}
                                // onClick={() => handleMenuClick('team')}
                                >
                                  <Link className="left_content_arrow" style={{ marginTop: "20px" }} to="#">Product <i class="fa-solid fa-right-long icon_rightarrow"></i></Link>
                                </li>
                              </div>
                              <div className="menupar-right">
                                {activeMenu1 === 'Product' && (
                                  <div className="menupar-right-div">
                                    <div className="menubar_inside_main_div">
                                      <div className="menubar_inside_div">
                                        <div className="menubar_inside_main_heading">Product</div>

                                        <div className="manubar_content_main_div">
                                          {progressValues.map((value, index) => (
                                            <Link
                                              key={index}
                                              // to={`/link${index}`}
                                              onMouseEnter={() => setHoveredIndex(index)}
                                              onMouseLeave={() => setHoveredIndex(null)}
                                              style={{ position: 'relative', display: 'block' }}
                                            >
                                              <div className="manubar_content_item">
                                                <div className="manubar_content_name">{productName[index]}</div>
                                                <div className="manubar_content_para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, culpa voluptas et.</div>
                                                <div
                                                  className="progress-bar"
                                                  style={{
                                                    width: hoveredIndex === index ? '100%' : `${value * 100}%`,
                                                    position: 'absolute',
                                                    top: '15px', // Adjust the value to position the progress bar above the link name
                                                    left: 0,
                                                    height: '4px',
                                                    backgroundColor: '#13C4A1', // Change color as needed
                                                    transition: 'width 0.3s ease-in-out',
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
                          </li> */}
                          <li className="has-dropdown">
                            <Link className="nav_link" to="#">
                              Products<i class="fa-solid fa-caret-down"></i>
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
                              Service<i class="fa-solid fa-caret-down"></i>
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
                                                    Lorem ipsum dolor sit amet
                                                    consectetur adipisicing
                                                    elit. Fugit, culpa voluptas
                                                    et.
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
                                                to={index === 0 ? "#" : "/ai-development"}
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
                                                    Lorem ipsum dolor sit amet
                                                    consectetur adipisicing
                                                    elit. Fugit, culpa voluptas
                                                    et.
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
                                                  Lorem ipsum dolor sit amet
                                                  consectetur adipisicing elit.
                                                  Fugit, culpa voluptas et.
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
                                              // to={`/link${index}`}
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
                                                  Lorem ipsum dolor sit amet
                                                  consectetur adipisicing elit.
                                                  Fugit, culpa voluptas et.
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
                            <NavLink to="/blog">Insights</NavLink>
                          </li>
                          <li className="has-dropdown">
                            <Link className="nav_link" to="#">
                              Company <i class="fa-solid fa-caret-down"></i>
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
                                                to={
                                                  index === 0
                                                    ? "/about"
                                                    : index === 2
                                                      ? "/contact"
                                                      : index === 1
                                                        ? "/career"
                                                        : ""
                                                } // Assuming index 0 is for "About us" and index 2 is for "Contact us"
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
                                                    Lorem ipsum dolor sit amet
                                                    consectetur adipisicing
                                                    elit. Fugit, culpa voluptas
                                                    et.
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
                    <span onClick={searchFun}>
                      <i className="fa-regular fa-magnifying-glass " />
                    </span>
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
          <div className="sidebar__close">
            <button
              className="sidebar__close-btn"
              id="sidebar__close-btn"
              onClick={mobileMenu}
            >
              <i className="fal fa-times" />
            </button>
          </div>
          <div className="sidebar__content">
            <div className="sidebar-logo mb-40 mt-40">
              <NavLink to="/index">
                <img src="assets/img/common/logo-white.png" alt="logo" />
              </NavLink>
            </div>
            {/* <div className="sidebar__search mb-25">
              <form action="#">
                <input type="text" placeholder="What are you searching for?" />
                <button type="submit">
                  <i className="far fa-search" />
                </button>
              </form>
            </div> */}
            <nav className="offcanvas-navigation" id="offcanvas-navigation">
              <ul>
                <li className="menu-item-has-children">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="menu-item-has-children">
                  <Link to="#">Product</Link>
                  <ul className="sub-menu">
                    <li>
                      <NavLink
                        to="/project-details"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Raiden Verse
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="#"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Raiden SimX
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="#"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Raiden COGNI+
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="#"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Raiden ARCVIZ
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <Link to="#">Service</Link>
                  <ul className="sub-menu">
                    <li className="menu-item-has-children">
                      <Link className="sub_heading_color" to="#">
                        Blockchain
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <NavLink
                            to="#"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            NFT
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="#"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            NFT MARKETPLACE
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="#"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            LAYER1 and Layer 2 Solutions
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="#"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            DEFI
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="#"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            Metaverse
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="#"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            Blockchain Games
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="sub-menu">
                    <li className="menu-item-has-children">
                      <Link className="sub_heading_color" to="#">
                        AI
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <NavLink
                            to="#"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            Generative AI Consulting
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/service-details"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            Generative AI Development
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="sub-menu">
                    <li className="menu-item-has-children">
                      <Link className="sub_heading_color" to="#">
                        XR
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <NavLink
                            to="#"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            AR Services
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="#"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            VR Services
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="#"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            Digital Twin
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="sub-menu">
                    <li className="menu-item-has-children">
                      <Link className="sub_heading_color" to="#">
                        GAME
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <NavLink
                            to="#"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            (league of legends) LOL CLONE
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="#"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            (clash of clans) COC CLONE
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="#"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            Metaverse CASINO
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <NavLink to="/">Insights</NavLink>
                </li>
                <li className="menu-item-has-children">
                  <Link to="#">Product</Link>
                  <ul className="sub-menu">
                    <li>
                      <NavLink
                        to="#"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        About us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="#"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Carrer
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="#"
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
                    1739 Kincheloe Road Portland, OR 97205
                  </li>
                  <li>
                    <i className="fa-solid fa-envelope" />
                    info@demo.com
                  </li>
                  <li>
                    <i className="fa-solid fa-phone" />
                    +88 632-528-(859)
                  </li>
                  <li>
                    <i className="fa-regular fa-globe" />
                    themesoft69.com
                  </li>
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
                  src="/assets/img/common/logo-black.png"
                  alt=""
                />
              </div>
              <p>
                Oracle Cloud Infrastructure (OCI) AI Services is a collection of
                services with prebuilt machine learning models that make it
                easier for developers to apply AI to applications and business
                operations.
              </p>
            </div>
            <div className="intro-text">
              <div className="title-text">
                <h3>Gallery</h3>
              </div>
              <div className="img-file">
                <img
                  className="img-fluid"
                  src="/assets/img/project/01_project.png"
                  alt=""
                />
                <img
                  className="img-fluid"
                  src="/assets/img/project/02_project.png"
                  alt=""
                />
                <img
                  className="img-fluid"
                  src="/assets/img/project/03_project.png"
                  alt=""
                />
                <img
                  className="img-fluid"
                  src="/assets/img/project/04_project.png"
                  alt=""
                />
                <img
                  className="img-fluid"
                  src="/assets/img/project/05_project.png"
                  alt=""
                />
                <img
                  className="img-fluid"
                  src="/assets/img/project/06_project.png"
                  alt=""
                />
              </div>
            </div>
            <div className="intro-text">
              <div className="title-text">
                <h3>About FaconTech</h3>
                <p>
                  Most people focus on the results of AI. For those of us who
                  like to look under the hood, there are four foundational
                  elements to understand: categorization, classification,
                  machine learning, and collaborative filtering.
                </p>
              </div>
            </div>
            <div className="intro-text">
              <div className="title-text">
                <h3>Need To Location</h3>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29176.030811137334!2d90.3883827!3d23.924917699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1605272373598!5m2!1sen!2sbd" />
              </div>
            </div>
            <div className="intro-text">
              <div className="title-text">
                <h3>Contact Us</h3>
                <ul>
                  <li>
                    <i className="fa-sharp fa-solid fa-location-dot pe-1" />
                    2007 Cherry Ridge Drive Victor
                  </li>
                  <li>
                    <i className="fa-solid fa-envelope pe-1" /> support@demo.com
                  </li>
                  <li>
                    <i className="fa-sharp fa-solid fa-phone-volume pe-1" /> +88
                    (102)-253620
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
