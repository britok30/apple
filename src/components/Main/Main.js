import React, { Fragment } from "react";
import Icon from "../Icon/Icon";
import { Link } from "@reach/router";

const Main = () => {
    return (
        <Fragment>
            <div className="mainbody">
                <div className="container hero">
                    <div className="main-text">
                        <p
                            className="welcome wow fadeInUp"
                            data-wow-delay=".7s"
                        >
                            Welcome to Apple
                        </p>
                        <Link to="/iphone" className="product-link">
                            <p className="wow fadeInUp" data-wow-delay=".8s">
                                See our new products
                            </p>
                        </Link>
                    </div>
                    <Icon />
                </div>
                <div className="container">
                  
                </div>
            </div>
        </Fragment>
    );
};

export default Main;
