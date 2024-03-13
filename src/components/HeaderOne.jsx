import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const HeaderOne = () => {
  const [active, setActive] = useState(false);
  const [scroll, setScroll] = useState(false);

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
  return (
    <>
      {/* header-area-start */}
      <header
        id="header-sticky"
        className={
          scroll
            ? "header-intro-version-one-area header-area-1 header__sticky"
            : "header-intro-version-one-area header-area-1"
        }
      >
        <div className="auto-container">
          <div className="row align-items-center">
            <div className="col-xl-3 col-lg-2 col-md-6 col-6">
              <div className="logo-area">
                <div className="logo">
                  <NavLink to="/index">
                    <img
                      className="img-fluid"
                      src="assets/img/common/logo-white.png"
                      alt=""
                    />
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-md-6 col-6">
              <div className="menu-area menu-padding d-none d-lg-block">
                <div className="main-menu">
                  <nav>
                    <ul>
                      <li className="has-dropdown">
                        <Link to="#">Home</Link>
                        <ul className="sub-menu">
                          <li>
                            <NavLink
                              to="/"
                              className={(navData) =>
                                navData.isActive ? "active" : ""
                              }
                            >
                              Demo
                            </NavLink>
                          </li>
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
                          <li>
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
                        </ul>
                      </li>
                      <li>
                        <NavLink
                          to="/about"
                          className={(navData) =>
                            navData.isActive ? "active" : ""
                          }
                        >
                          About Us
                        </NavLink>
                      </li>
                      <li className="has-dropdown">
                        <Link to="#">Pages</Link>
                        <ul className="sub-menu">
                          <li>
                            <NavLink
                              to="/team"
                              className={(navData) =>
                                navData.isActive ? "active" : ""
                              }
                            >
                              Team
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/project"
                              className={(navData) =>
                                navData.isActive ? "active" : ""
                              }
                            >
                              Project
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/project-details"
                              className={(navData) =>
                                navData.isActive ? "active" : ""
                              }
                            >
                              Project Details
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/service"
                              className={(navData) =>
                                navData.isActive ? "active" : ""
                              }
                            >
                              Service
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/service-details"
                              className={(navData) =>
                                navData.isActive ? "active" : ""
                              }
                            >
                              Service Details
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/pricing"
                              className={(navData) =>
                                navData.isActive ? "active" : ""
                              }
                            >
                              Pricing
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/review"
                              className={(navData) =>
                                navData.isActive ? "active" : ""
                              }
                            >
                              Review
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/faq"
                              className={(navData) =>
                                navData.isActive ? "active" : ""
                              }
                            >
                              FAQ
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/error"
                              className={(navData) =>
                                navData.isActive ? "active" : ""
                              }
                            >
                              404 Page
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                      <li className="has-dropdown">
                        <Link to="blog-grid">Blog</Link>
                        <ul className="sub-menu">
                          <li>
                            <NavLink
                              to="/blog-grid"
                              className={(navData) =>
                                navData.isActive ? "active" : ""
                              }
                            >
                              Blog-Grid
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/blog-grid-sidebar"
                              className={(navData) =>
                                navData.isActive ? "active" : ""
                              }
                            >
                              Blog-Grid Sidebar
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/blog-list"
                              className={(navData) =>
                                navData.isActive ? "active" : ""
                              }
                            >
                              Blog-List
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/blog-details"
                              className={(navData) =>
                                navData.isActive ? "active" : ""
                              }
                            >
                              Blog Details
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <NavLink
                          to="/contact"
                          className={(navData) =>
                            navData.isActive ? "active" : ""
                          }
                        >
                          Contact
                        </NavLink>
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
            <div className="col-xl-2 col-lg-3 d-none d-lg-block">
              <div className="d-adjust">
                <Link className="default-btn" to="/contact">
                  Try It Free Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* header-area-end */}
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
            <div className="sidebar__search mb-25">
              <form action="#">
                <input type="text" placeholder="What are you searching for?" />
                <button type="submit">
                  <i className="far fa-search" />
                </button>
              </form>
            </div>
            <nav className="offcanvas-navigation" id="offcanvas-navigation">
              <ul>
                <li className="menu-item-has-children">
                  <NavLink
                    to="/index"
                    className={(navData) => (navData.isActive ? "active" : "")}
                  >
                    Home
                  </NavLink>
                  <ul className="sub-menu">
                    <li className="active">
                      <NavLink
                        to="/index"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Home One
                      </NavLink>
                    </li>
                    <li>
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
                  </ul>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={(navData) => (navData.isActive ? "active" : "")}
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="menu-item-has-children">
                  <Link to="#">Pages</Link>
                  <ul className="sub-menu">
                    <li>
                      <NavLink
                        to="/team"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Team
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/project"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Project
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/project-details"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Project Details
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/service"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Service
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/service-details"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Service Details
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/pricing"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Pricing
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/review"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Review
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/faq"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        FAQ
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/error"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        404 Page
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="has-dropdown">
                  <Link to="#">Blog</Link>
                  <ul className="sub-menu">
                    <li>
                      <NavLink
                        to="/blog-grid"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Blog-Grid
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/blog-grid-sidebar"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Blog-Grid Sidebar
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/blog-list"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Blog-List
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/blog-details"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Blog Details
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={(navData) => (navData.isActive ? "active" : "")}
                  >
                    Contact
                  </NavLink>
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

      {/* sidebar area end */}
      <div className={active ? "body-overlay active" : "body-overlay"} />
    </>
  );
};

export default HeaderOne;
