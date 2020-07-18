import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './Welcome.scss';

export class Welcome extends Component {
    render() {
        return (
            <div className="App Welcome">
                <h1 className="fancy"><span>Welcome to My World</span></h1>
                <h2>Hello there! I am Yvonne Ubak.</h2>
                <h3>I am a Junior Web Developer, Software Developer, and Front-End and UI Designer.</h3>
                <div className="welcome-msg">
                    <p>
                        With a Bachelor of Science in Computer Information Systems, intensive trainings in Full Stack
                        Development, and some professional developement experience,
                        my passion and talents for coding and user-friendly aesthetics grows deeper and deeper. As an avid learner,
                        I am always seeking new knowledge and ways to improve each day.
                </p>
                    <p>Click below to view my work!</p>
                </div>
                <Button variant="contained" className="btn-primary">
                    <Link to="/home" className="link">Explore</Link>
                </Button>
            </div>
        )
    }
}

export default Welcome
