import React, { Component } from 'react';
import About from './About/About';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Navigation from '../../constants/Navigation';
import './Home.scss';

export class Home extends Component {
    render() {
        return (
            <>
                <Navigation />
                <div className="homepage">
                    <About />
                    <Skills />
                    <Projects />
                </div>
            </>
        )
    }
}

export default Home
