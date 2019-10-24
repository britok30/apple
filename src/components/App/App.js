import React, { Fragment } from "react";
import ComingSoon from "../ComingSoon/ComingSoon";
import { Router } from "@reach/router";
import Main from "../Main/Main";

const App = () => {
  return (
    <Fragment>
      <div>
        <Router>
          <ComingSoon path="/" />
          <Main path="/main" />
        </Router>
      </div>
    </Fragment>
  );
};

export default App;
