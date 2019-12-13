import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/layouts/Navbar";
import Search from "./components/users/Search";
import Users from "./components/users/Users";
import About from "./components/pages/About";
import User from "./components/users/User";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Alert from "./components/layouts/Alert";

import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div>
            <nav className="navbar bg-primary">
              <Navbar />
            </nav>
            <div className="container">
              <Alert />
              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => (
                    <Fragment>
                      <Search />
                      <Users />
                    </Fragment>
                  )}
                />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
