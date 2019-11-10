import React, { Fragment, Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hero from "./pages/Hero";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="main">
          <div className="container">
            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/hero/:id" component={Hero}></Route>
            </Switch>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
