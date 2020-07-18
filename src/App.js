import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Welcome from './components/Welcome/Welcome';
import Home from './components/Home/Home';
import './App.scss';

export default class App extends Component {
  componentDidMount() {
    document.title = "Yvonne Ubak's Poppin' Portfolio"

    //core firebase sdk
    const sdk = document.createElement("script");
    sdk.async = true;
    sdk.src = "/__/firebase/7.15.1/firebase-app.js";

    //analytics sdk
    const analytics = document.createElement("script");
    analytics.async = true;
    analytics.src = "/__/firebase/7.15.1/firebase-analytics.js";

    //initialize firebase
    const init = document.createElement('script');
    init.async = true;
    init.src = "/__/firebase/init.js";

    //append scripts
    document.body.appendChild(sdk);
    document.body.appendChild(analytics);
    document.body.appendChild(init);
  }

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" /*component={RecipeContainer}*/>
              <Welcome />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

