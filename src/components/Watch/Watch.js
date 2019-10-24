import React, { Fragment } from "react";
import NavTwo from "../NavTwo/NavTwo";
import "./Watch.css";
import logogrey from "../../Images/logogrey.svg";
import watchblack from "../../Images/Black Watch-1@2x.png";
import watchwhite from "../../Images/White Watch-2@2x.png";

// import

const Watch = () => {
  return (
    <Fragment>
      <NavTwo />
      <div className="watchbody">
        <header className="watch-header">
          <img className="logogrey2" src={logogrey} alt="" />
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="watch-text">
                  <h3 className="watch-red">Apple Watch</h3>
                  <h1 className="watch-main">
                    Change starts <br />
                    within.
                  </h1>
                  <p className="watch-p">
                    Apple Watch Series 4. Fundamentally redesigned and <br />
                    re-engineered to help you be even more active, <br />{" "}
                    healthy, and connected.
                  </p>
                </div>
                <div className="watch-price">
                  <h3 className="price">From $699</h3>
                  <p className="buy-red">Buy Now ></p>
                </div>
                {/* <div className="frontback">
                  <img src="" alt="" />
                  <img src="" alt="" />
                </div> */}
              </div>
              <div className="col-md-6">
                <img className="watchblack" src={watchblack} alt="" />
              </div>
            </div>
          </div>
        </header>
      </div>
    </Fragment>
  );
};

export default Watch;
