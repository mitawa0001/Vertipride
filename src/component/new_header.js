import { Outlet, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import companyLogo from "../image/Vertipride Solutions Pvt. Ltd copy.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

import React, { useState, useEffect } from "react";
import Preloader from "./Preloader";
// import { DiReact } from 'react-icons/di';

import deve from "../image/development.png";
import App from "../image/app-development.png";

// import HoverMenuButton from "./HoverMenuButton";
import "@reach/menu-button/styles.css";
import "@reach/combobox/styles.css";

function NewHeader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an async operation, e.g., fetching data
    setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Replace this with your actual data fetching logic
  }, []);

  return (
    <>
      {/* mobile navber */}
      <Navbar
        collapseOnSelect
        expand="lg"
        className="main-navigation sticky for-block"
        variant="dark"
      >
        <Container>
          <Navbar.Brand>
            <div class="logo-area">
              <Link class="current" to="/">
                <img src={companyLogo} alt="BigCo Inc. logo" />
              </Link>
            </div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">
                <li>
                  <NavLink exect to="/" activeClassName="active">
                    Home
                  </NavLink>
                </li>
              </Nav.Link>
              <NavDropdown title="Who We Are" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  <Link class="current" to="/Aboutus">
                    About us
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.2">
                  <Link class="current" to="/Aboutteam">
                    About Team
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.2">
                  <Link class="current" to="/lifeVertipride">
                    Life at Vertipride
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.2">
                  <Link class="current" to="/career">
                    Join our Team
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="What We Do" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  <Link class="current" to="/android_dev">
                    Android Development
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.2">
                  <Link class="current" to="/ios_dev">
                    IOS Development
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.2">
                  <Link class="current" to="/flutter">
                    flutter Development
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.2">
                  <Link class="current" to="/working">
                    WordPress Development
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Soluction" id="collasible-nav-dropdown">
                <NavDropdown.Item>
                  <Link class="current" to="/working">
                    ERP Software Product
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link class="current" to="/working">
                    Nidhi Software Product
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link class="current" to="/hospital_erp">
                    Hospital ERP Product
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link class="current" to="/working">
                    CRM Software Product
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>

              {/* <Nav.Link>
                <Link class="current" to="blog">
                  Blogs
                </Link>
              </Nav.Link> */}

              
              <NavDropdown title="Portfolio" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  <Link class="current" to="/Ui_Ux_portfolio">
                  UI / uX
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link>
                <Link class="current" to="/contact">
                  Get in touch
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* desktop navbar */}

      <header id="home">
        <div class="main-navigation sticky ">
          <Navbar className="container">
            <Navbar.Brand href="#">
              <div class="logo-area">
                <Link class="" to="/">
                  <img src={companyLogo} alt="BigCo Inc. logo" />
                </Link>
              </div>
            </Navbar.Brand>
            <div class="col-xl-10 col-lg-9 col-md-9">
              <div class="main-menu f-right">
                <nav id="mobile-menu">
                  <ul class="d-flex">
                    <NavLink
                      className="navlink-item"
                      exect
                      to="/"
                      activeClassName="active"
                    >
                      Home
                    </NavLink>
                    <li className="nav-list-categary">
                      who we are
                      <ul class="dropdown">
                        <div class="d-flex">
                          <div class="col-lg-6 border-right">
                            <li>
                              <h5 class="dropdown-heading">About vertipride</h5>
                            </li>
                            <li>
                              <Link class="current" to="/aboutus">
                                About us<i class="fas fa-arrow-right"></i>
                              </Link>
                            </li>
                            <li>
                              <Link class="current" to="/aboutteam">
                                About Team
                              </Link>
                            </li>
                            <li>
                              <Link class="current" to="/lifeVertipride">
                                Life at Vertipride
                              </Link>
                            </li>
                          </div>
                          <div class="col-lg-6">
                            <li>
                              <h5 class="dropdown-heading">
                                <i class="fas fa-user-graduate"></i>Career
                              </h5>
                            </li>
                            <li>
                              <Link class="current" to="/career">
                                Join our Team
                              </Link>
                            </li>
                          </div>
                        </div>
                      </ul>
                    </li>
                    <li className="nav-list-categary">
                      what we do <i class="fas fa-angle-down"></i>
                      <ul class="dropdown">
                        <div class="d-flex flex-wrap pb-2">
                          <div className="d-flex ">
                            <div class="col-lg-4">
                              <h5 class="dropdown-heading">
                                <img
                                  src={App}
                                  alt="icon"
                                  className="mr-2"
                                ></img>
                                Mobile App Development
                              </h5>
                              <div class="border-right">
                                <li>
                                  <Link class="current" to="/android_dev">
                                    Android Development
                                  </Link>
                                </li>
                                <li>
                                  <Link class="current" to="/ios_dev">
                                    IOS Development
                                  </Link>
                                </li>
                                <li>
                                  <Link class="current" to="/flutter">
                                    Flutter Development
                                  </Link>
                                </li>
                              </div>
                            </div>
                            <div class="d-flex col-lg-9 flex-wrap">
                              <div>
                                <h5 class="dropdown-heading">
                                  <img
                                    src={deve}
                                    alt="icon"
                                    className="mr-2"
                                  ></img>
                                  Web Development
                                </h5>
                              </div>
                              <div className="d-flex w-100">
                                <div class="col-lg-4">
                                  <li>
                                    <Link class="current" to="/working">
                                      Web Application Development
                                    </Link>
                                  </li>
                                  <li>
                                    <Link class="current" to="/working">
                                      Web Design & Development
                                    </Link>
                                  </li>
                                  <li>
                                    <Link class="current" to="/working">
                                      E-Commerce Development
                                    </Link>
                                  </li>
                                </div>
                                <div class="col-lg-4">
                                  {/* <li>
                                    <Link class="current" to="working">
                                      Magento Development
                                    </Link>
                                  </li> */}
                                  {/* <li>
                                    <Link class="current" to="working">
                                      Shopify Development
                                    </Link>
                                  </li> */}
                                  <li>
                                    <Link class="current" to="/working">
                                      CRM Development
                                    </Link>
                                  </li>
                                  <li>
                                    <Link class="current" to="/working">
                                      WordPress Development
                                    </Link>
                                  </li>
                                  <li>
                                    <Link class="current" to="/working">
                                      ERP Development
                                    </Link>
                                  </li>
                                </div>
                                <div class="col-lg-4">
                                  {/* <li>
                                      <Link class="current" to="working">
                                        Magento 2 Migration
                                      </Link>
                                    </li> */}
                                  {/* <li>
                                    <Link class="current" to="working">
                                      Software Development
                                    </Link>
                                  </li> */}
                                  <li>
                                    <Link class="current" to="/working">
                                      Software Testing
                                    </Link>
                                  </li>
                                  <li>
                                    <Link class="current" to="/working">
                                      Website Maintenance
                                    </Link>
                                  </li>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <div class="d-flex pt-2 flex-wrap">
                          <div class="col-lg-5 border-right">
                            <div>
                              <h5 class="dropdown-heading ">
                                <img src={deve} alt="icon" className="mr-2"></img>Hire Developer
                              </h5>
                            </div>
                            <div className="d-flex">
                              <div class="col-lg-3 ">
                                <li>
                                  <Link class="current" to="php">
                                    Php
                                  </Link>
                                </li>
                                <li>
                                  <Link class="current" to="php">
                                    Android
                                  </Link>
                                </li>
                              </div>
                              <div class="col-lg-3 ">
                                <li>
                                  <Link class="current" to="php">
                                    IT Outsourcing
                                  </Link>
                                </li>
                                <li>
                                  <Link class="current" to="php">
                                    Node JS
                                  </Link>
                                </li>
                              </div>
                              <div class="col-lg-3">
                                <li>
                                  <Link class="current" to="php">
                                    UI/UX
                                  </Link>
                                </li>
                                <li>
                                  <Link class="current" to="php">
                                    IOS
                                  </Link>
                                </li>
                              </div>
                              <div class="col-lg-3">
                                <li>
                                  <Link class="current" to="php">
                                    Flutter
                                  </Link>
                                </li>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-7">
                            <div>
                              <h5 class="dropdown-heading ">
                                <img src={deve} alt="icon" className="mr-2"></img>Branding
                              </h5>
                            </div>
                            <div className="d-flex">
                              <div class="col-lg-3 ">
                                <li>
                                  <Link class="current" to="php">
                                    Logo Design
                                  </Link>
                                </li>
                                <li>
                                  <Link class="current" to="php">
                                    UI/UX Design
                                  </Link>
                                </li>
                                <li>
                                  <Link class="current" to="php">
                                    ID Card
                                  </Link>
                                </li>
                              </div>
                              <div class="col-lg-3 ">
                                <li>
                                  <Link class="current" to="php">
                                    Brochure Design
                                  </Link>
                                </li>
                                <li>
                                  <Link class="current" to="php">
                                    Business Cards
                                  </Link>
                                </li>
                                <li>
                                  <Link class="current" to="php">
                                    Letterhead
                                  </Link>
                                </li>
                              </div>
                              <div class="col-lg-3">
                                <li>
                                  <Link class="current" to="php">
                                    Flyers / Poster Design
                                  </Link>
                                </li>
                                <li>
                                  <Link class="current" to="php">
                                    Product Packaging
                                  </Link>
                                </li>
                                <li>
                                  <Link class="current" to="php">
                                    Promotional video
                                  </Link>
                                </li>
                              </div>
                              <div class="col-lg-3">
                                <li>
                                  <Link class="current" to="php">
                                    Email signature
                                  </Link>
                                </li>
                                <li>
                                  <Link class="current" to="php">
                                    Social Media Post
                                  </Link>
                                </li>
                                <li>
                                  <Link class="current" to="php">
                                    GIF Animation
                                  </Link>
                                </li>
                              </div>
                            </div>
                          </div>
                        </div> */}
                      </ul>
                    </li>
                    <li className="nav-list-categary">
                      solutions
                      <ul class="dropdown our-work">
                        <div class="d-flex flex-wrap">
                          <li>
                            <Link class="our-work" to="/working">
                              ERP Software Product
                            </Link>
                          </li>
                          <li>
                            <Link class="our-work" to="/working">
                              Nidhi Software Product
                            </Link>
                          </li>
                          <li>
                            <Link class="our-work" to="/hospital_erp">
                              Hospital ERP Product
                            </Link>
                          </li>
                          <li>
                            <Link class="our-work" to="/working">
                              CRM Software Product
                            </Link>
                          </li>
                        </div>
                      </ul>
                    </li>

                    {/* <li>
                      <Link class="" to="gallery ">
                        Gallery<i class="fas fa-arrow-right"></i>
                      </Link>
                    </li> */}

                    {/* <NavLink className="navlink-item"
                      exect to="blog"
                      activeClassName="active"
                    >
                      Blogs
                    </NavLink> */}

                    <li className="nav-list-categary">
                      Portfolio
                      <ul class="dropdown our-work">
                        <div class="">
                          <li>
                            <Link class="our-work" to="/Ui_Ux_portfolio">
                              UI / UX
                            </Link>
                          </li>
                          {/* <li>
                            <Link class="our-work" to="/web_android">
                              Android & Wev development
                            </Link>
                          </li> */}
                        </div>
                      </ul>
                    </li>

                    <NavLink
                      className="navlink-item"
                      exect
                      to="/contact"
                      activeClassName="active"
                    >
                      Get in touch
                    </NavLink>
                    {/* login */}
                    {/* <NavLink className="navlink-item"
                      exect to="login"
                      activeClassName="active"
                    >
                      Login
                    </NavLink> */}

                    {/* <li className="spcbtn">
                      <div class="section-button">
                        <Link class="current" to="contact">
                          Get in touch<i class="fas fa-arrow-right"></i>
                        </Link>
                      </div>
                    </li> */}
                  </ul>
                </nav>
              </div>
            </div>
          </Navbar>
        </div>
      </header>

      <Outlet />
    </>
  );
}

export default NewHeader;
