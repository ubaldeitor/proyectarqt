import React, { Component, Fragment } from "react";
import "./App.css";
import Header from "./header/Header";
import FrontPage from "./front-page/FrontPage";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <FrontPage />
      </Fragment>
    );
  }
}

export default App;
