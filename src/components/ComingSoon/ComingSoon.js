import React, { Fragment } from "react";
import logo from "../../Images/logo.png";
import "./ComingSoon.css";
import { Link } from "@reach/router";
import NavOne from "../NavOne/NavOne"

const ComingSoon = () => {
  return (
    <Fragment>
      <NavOne />
      <div className="csbody">
        <Link to="/main">
          <img className="logo1" src={logo} alt="" />
        </Link>
        <div className="intro-text">
          <p className="intro-p">New Products Coming This Summer</p>
          <h3 className="year">2019</h3>
        </div>
      </div>
    </Fragment>
  );
};

export default ComingSoon;
