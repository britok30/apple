import React, { Fragment } from "react";
import { Router } from "@reach/router";
import Main from "../Main/Main";
import Iphone from "../Iphone/Iphone";
import Watch from "../Watch/Watch";
import Macbook from "../Macbook/Macbook";

const App = () => {
  return (
    <Fragment>
      <div>
        <Router>
          <Main path="/" />
          <Iphone path="/iphone" />
          <Watch path="/watch" />
          <Macbook path="/macbook" />
        </Router>
      </div>
    </Fragment>
  );
};

export default App;
