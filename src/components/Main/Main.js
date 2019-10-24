import React, { Fragment } from "react";
import NavTwo from "../NavTwo/NavTwo";
import logogrey from "../../Images/logogrey.svg";
import iphone from "../../Images/iphone.jpg";
import macbook from "../../Images/macbook.svg";
import watch from "../../Images/iwatch.png";
import { Link } from "@reach/router";
import "./Main.css";

const Main = () => {
  return (
    <Fragment>
      <NavTwo />
      <div className="mainbody">
        <div className="container">
          <img className="logogrey" src={logogrey} alt="logo" />
          <div className="main-text">
            <p className="welcome">Welcome to Apple</p>
            <a className="product-link" href="">
              See our products
            </a>
          </div>
          <div className="icon">
            <ul>
              <li>
                <Link to="/iphone">
                  <img className="iphone" src={iphone} alt="" />
                </Link>
              </li>
              <li>
                <Link to="/macbook">
                  <img className="macbook" src={macbook} alt="" />
                </Link>
              </li>
              <li>
                <Link to="/watch">
                  <img className="watch" src={watch} alt="" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
