import React, { Fragment } from "react";
import NavTwo from "../NavTwo/NavTwo";
import logogrey from "../../Images/logogrey.svg";
import Icon from "../Icon/Icon";
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
          <Icon />
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
