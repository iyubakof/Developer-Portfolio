import React, { Component } from 'react';
import About from './About/About';
import Skills from './Skills/Skills';
import Services from './Services/ServicesSnippet/Services';
import Booking from './Services/Booking/Booking';
import Intro from '../../constants/Intro';
import './Home.scss';

export class Home extends Component {
    render() {
        return (
            <>
                <div className="homepage">
                    <Intro />
                    <br/>
                    <br/>
                    <About />
                    <Skills />
                    <Services />
                    <Booking />
                </div>
            </>
        )
    }
}

export default Home
