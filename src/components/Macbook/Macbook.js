import React, { Fragment } from "react";
import NavTwo from "../NavTwo/NavTwo";
import macbookpro from "../../Images/macbook.png";
import "./Macbook.css";

const Macbook = () => {
  return (
    <Fragment>
      <NavTwo />
      <div className="macbody">
        <header className="macbook-header">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="macbook-text">
                  <h3 className="macbook-blue">Macbook</h3>
                  <h1 className="macbook-main">
                    More power. <br />
                    More pro.
                  </h1>
                  <p className="macbook-p">
                  
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <img className="pro" src={macbookpro} alt="" />
              </div>
            </div>
          </div>
        </header>
      </div>
    </Fragment>
  );
};

export default Macbook;
