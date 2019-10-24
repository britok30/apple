import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logoblack from "../../Images/logoblack.png";
import "./NavTwo.css";
import { Link } from "@reach/router";

const NavTwo = () => {
  return (
    <Navbar className="navtwo" expand="lg">
      <Navbar.Brand className="brand2" href="#home">
        <Link to="/main">
          <img className="logo2 wow fadeInUp" data-wow-delay=".7s" src={logoblack} alt="" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className="navlink wow fadeInUp" data-wow-delay=".7s" href="/iphone" active>
            iPhone
          </Nav.Link>
          <Nav.Link className="navlink wow fadeInUp" data-wow-delay=".9s" href="/macbook">
            MacBook Pro
          </Nav.Link>
          <Nav.Link className="navlink wow fadeInUp" data-wow-delay="1.1s" href="/watch">
            Watch
          </Nav.Link>
          <Nav.Link href="#">
            <button className="btn btn-primary btn-prime wow fadeInUp" data-wow-delay="1.3s">Notify Me</button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavTwo;
