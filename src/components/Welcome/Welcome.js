import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './Welcome.scss';

export class Welcome extends Component {
    render() {
        return (
            <div className="App Welcome">
                <div className='title-section'>
                    {/* LOGO GOES HERE */}
                    <h1 className="fancy"><span>Welcome to Our World</span></h1>
                    <h1 style={{fontSize: '1.5em'}}>Dash of Dara</h1>
                    <h2>Let us guide you through your journey to help your business work FOR you and grow.</h2>
                </div>
                <section className="spacer"></section>
                <Button variant="contained" className="btn-primary">
                    <Link to="/home" className="link explore-link">Explore</Link>
                </Button>
            </div>
        )
    }
}

{/* <div className="welcome-msg">
                    <p>
                        With a Bachelor of Science in Computer Information Systems, intensive trainings in Full Stack
                        Development, and some professional developement experience,
                        my passion and talents for coding and user-friendly aesthetics grows deeper and deeper. As an avid learner,
                        I am always seeking new knowledge and ways to improve each day.
                </p>
                    <p style={{ fontWeight: 'bold' }}>Click below to view my work!</p>
                </div> */}

export default Welcome
