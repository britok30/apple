import React, { Fragment } from "react";
import ComingSoon from "../ComingSoon/ComingSoon";
import { Router } from "@reach/router";
import Main from "../Main/Main";
import Iphone from "../Iphone/Iphone";
import Watch from "../Watch/Watch";
import Form from "../Form/Form"

const App = () => {
  return (
    <Fragment>
      <div>
        <Router>
          <Form path="/"/>
          <ComingSoon path="/home" />
          <Main path="/main" />
          <Iphone path="/iphone" />
          <Watch path="/watch" />
        </Router>
      </div>
    </Fragment>
  );
};

export default App;
