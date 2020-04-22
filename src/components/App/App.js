import React, { Fragment } from "react";
import { Router } from "@reach/router";
import Main from "../Main/Main";
import Iphone from "../Iphone/Iphone";
import Watch from "../Watch/Watch";
import Macbook from "../Macbook/Macbook";
import Navbar from "../Navbar/Navbar";
import AppleTV from "../TV/AppleTV";
import "./App.css";

const App = () => {
    return (
        <Fragment>
            <Navbar />
            <div>
                <Router>
                    <Main path="/" />
                    <Iphone path="/iphone" />
                    <Watch path="/watch" />
                    <Macbook path="/macbook" />
                    <AppleTV path="/tv" />
                </Router>
            </div>
        </Fragment>
    );
};

export default App;
