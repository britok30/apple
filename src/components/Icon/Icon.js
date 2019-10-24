import React from 'react'
import { Link } from "@reach/router"
import iphone from "../../Images/iphone.jpg";
import macbook from "../../Images/macbook.svg";
import watch from "../../Images/iwatch.png";
import "./Icon.css"

const Icon = () => {
    return (
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
    )
}

export default Icon
