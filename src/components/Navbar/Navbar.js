import React from "react";
import logoblack from "../../Images/logoblack.png";
import "./Navbar.css";
import { Link } from "@reach/router";

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link
                    class="navbar-brand brand2"
                    to="/"
                    style={{ color: "#000" }}
                >
                    <img
                        className="logo2 wow fadeInUp"
                        data-wow-delay=".7s"
                        src={logoblack}
                        alt=""
                    />
                </Link>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li
                            class="nav-item active wow fadeInUp"
                            data-wow-delay=".7s"
                        >
                            <Link class="nav-link" to="/">
                                Home <span class="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li
                            className="nav-item wow fadeInUp"
                            data-wow-delay=".9s"
                        >
                            <Link
                                className="nav-link"
                                to="/iphone"
                                style={{ color: "#000" }}
                            >
                                Iphone
                            </Link>
                        </li>
                        <li
                            className="nav-item wow fadeInUp"
                            data-wow-delay="1.1s"
                        >
                            <Link
                                class="nav-link"
                                to="/macbook"
                                style={{ color: "#000" }}
                            >
                                Macbook
                            </Link>
                        </li>
                        <li
                            className="nav-item wow fadeInUp"
                            data-wow-delay="1.3s"
                        >
                            <Link
                                className="nav-link"
                                to="/watch"
                                style={{ color: "#000" }}
                            >
                                Watch
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

        // <Navbar className="navtwo" expand="lg">
        //   <Navbar.Brand className="brand2" href="#home">
        //     <Link to="/" style={{ color: "#000" }}>
        //       <img
        //         className="logo2 wow fadeInUp"
        //         data-wow-delay=".7s"
        //         src={logoblack}
        //         alt=""
        //       />
        //     </Link>
        //   </Navbar.Brand>
        //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //   <Navbar.Collapse id="basic-navbar-nav">
        //     <Nav className="ml-auto">
        //       <Nav.Link
        //         className="navlink wow fadeInUp"
        //         data-wow-delay=".7s"
        //         active
        //       >
        //         <Link to="/iphone" style={{ color: "#000" }}>
        //           iPhone
        //         </Link>
        //       </Nav.Link>
        //       <Nav.Link className="navlink wow fadeInUp" data-wow-delay=".9s">
        //         <Link to="/macbook" style={{ color: "#000" }}>
        //           MacBook
        //         </Link>
        //       </Nav.Link>
        //       <Nav.Link className="navlink wow fadeInUp" data-wow-delay="1.1s">
        //         <Link to="/watch" style={{ color: "#000" }}>
        //           Watch
        //         </Link>
        //       </Nav.Link>
        //       <Nav.Link href="#">
        //         <button
        //           className="btn btn-primary btn-prime wow fadeInUp"
        //           data-wow-delay="1.3s"
        //         >
        //           Notify Me
        //         </button>
        //       </Nav.Link>
        //     </Nav>
        //   </Navbar.Collapse>
        // </Navbar>
    );
};

export default Navbar;
