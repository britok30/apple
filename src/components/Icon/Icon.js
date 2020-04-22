import React from "react";
import { Link } from "@reach/router";
import iphone from "../../Images/iphone.jpg";
import macbook from "../../Images/macbook.svg";
import watch from "../../Images/iwatch.png";

const Icon = () => {
    return (
        <div className="icon">
            <ul>
                <li className="icon-item">
                    <Link to="/iphone">
                        <img
                            className="iphone wow fadeInUp"
                            data-wow-delay=".9s"
                            src={iphone}
                            alt=""
                        />
                    </Link>
                </li>
                <li className="icon-item">
                    <Link to="/macbook">
                        <img
                            className="macbook wow fadeInUp"
                            data-wow-delay="1.1s"
                            src={macbook}
                            alt=""
                        />
                    </Link>
                </li>
                <li className="icon-item">
                    <Link to="/watch">
                        <img
                            className="watch wow fadeInUp"
                            data-wow-delay="1.3s"
                            src={watch}
                            alt=""
                        />
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Icon;
