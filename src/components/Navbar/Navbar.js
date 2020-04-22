import React from "react";
import logo from "../../Images/logo.png";
import { Link } from "@reach/router";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <Link
                    className="navbar-brand brand2"
                    to="/"
                >
                    <img
                        className="logo2 wow fadeInUp"
                        data-wow-delay=".7s"
                        src={logo}
                        alt=""
                    />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li
                            className="nav-item active wow fadeInUp"
                            data-wow-delay=".7s"
                        >
                            <Link className="nav-link navlink" to="/">
                                Home <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li
                            className="nav-item wow fadeInUp"
                            data-wow-delay=".9s"
                        >
                            <Link
                                className="nav-link navlink"
                                to="/iphone"
                                style={{ color: "#fff" }}
                            >
                                Iphone
                            </Link>
                        </li>
                        <li
                            className="nav-item wow fadeInUp"
                            data-wow-delay="1.1s"
                        >
                            <Link
                                className="nav-link navlink"
                                to="/macbook"
                                style={{ color: "#fff" }}
                            >
                                Macbook
                            </Link>
                        </li>
                        <li
                            className="nav-item wow fadeInUp"
                            data-wow-delay="1.3s"
                        >
                            <Link
                                className="nav-link navlink"
                                to="/watch"
                                style={{ color: "#fff" }}
                            >
                                Watch
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
