import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Welcome from './components/Welcome/Welcome';
import Home from './components/Home/Home';
import './App.scss';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Navigation from './constants/Navigation';
import Policy from './constants/Policy';
import Projects from './components/Portfolio/Projects/Projects';

export default class App extends Component {
  componentDidMount() {
    document.title = "Dash of Dara"

    //calendly
    const calendly = document.createElement("script");
    calendly.async = true;
    calendly.src = "https://assets.calendly.com/assets/external/widget.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJq726TwJRoLKiWpSdmSGqgnSXBiDFCC0",
  authDomain: "dashofdara.firebaseapp.com",
  databaseURL: "https://dashofdara.firebaseio.com",
  projectId: "dashofdara",
  storageBucket: "dashofdara.appspot.com",
  messagingSenderId: "34459672198",
  appId: "1:34459672198:web:56868db7598ca3f5483b07",
  measurementId: "G-XP6GMCQP0V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
    
    // //core firebase sdk
    // const sdk = document.createElement("script");
    // sdk.async = true;
    // sdk.src = "/__/firebase/7.15.1/firebase-app.js";

    // //analytics sdk
    // const analytics = document.createElement("script");
    // analytics.async = true;
    // analytics.src = "/__/firebase/7.15.1/firebase-analytics.js";

    // //initialize firebase
    // const init = document.createElement('script');
    // init.async = true;
    // init.src = "/__/firebase/init.js";

    //append scripts
    document.body.appendChild(calendly);
    // document.body.appendChild(sdk);
    // document.body.appendChild(app);
    // document.body.appendChild(analytics);
    // document.body.appendChild(init);
  }

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <Welcome />
            </Route>
            <Route exact path="/home">
              <Navigation />
              <Home />
            </Route>
            <Route exact path="/policy">
              <Navigation />
              <Policy />
            </Route>
            <Route exact path="/portfolio">
              <Navigation />
              <Projects />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

