import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Documentation from "./Documentation";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1>Email Service</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/documentation">Documentation</NavLink></li>
          </ul>
          <div className="content">
          <Route exact path="/" component={Home}/> 
          <Route path="/documentation" component={Documentation}/> 
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;