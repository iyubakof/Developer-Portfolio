import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import profile from '../../../assets/images/grad_red.JPG';
import { animateScroll as scroll } from 'react-scroll';

export class About extends Component {
    render() {
        const emailAddress = 'dashofdara@gmail.com';
        const subject = 'Booking a Consultation';
        const bookingUrl = 'https://calendly.com/dashofdara';

        const scrollToLink= (section) => {
            console.log(`Scrolling to ${section}`);
            scroll.scrollTo(`${section}`, {
                smooth: true,
                duration: 500
            })
        }

        return (
            <div className="about-page pages">
                <Link name="about" style={{ opacity: "0" }} to='#about'>
                    <h2>Tech & Web Development Agency</h2>
                </Link>
                <section className="section-initial section-div">
                    <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center">
                        <Grid item md={6}>
                            <h1 className='' style={{ fontSize: '3.5em' }}>Dash of Dara</h1>
                        </Grid>
                        <Grid item md={6}>
                            <div className="about-txt">
                                <div className="title-link">
                                    <h2>A Tech & Web Development Agency</h2>
                                </div>
                                <p style={{ fontSize: '1.3em' }}>
                                    Many small businesses are ran by one or a few, and sometimes struggle with being able to meet their demand.
                                    With how far the internet and technology has come, there are many tools that can help market, organize,
                                    and operate your business. From automating your emails to helping your entire organization operate through
                                    your own website, our agency can meet and satisfy those needs.
                                </p>
                                <p style={{ fontSize: '1.3em' }}>
                                    We include you in the entire journey from planning and design, into development, and to the final product!
                                    Your vision no longer has to be a dream. <a className="body-link" href="#booking">Book a Consult</a> or <a className="body-link" href={`mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`}>Email us today!</a>
                                </p>
                            </div>
                        </Grid>
                    </Grid>
                </section>
                < br />
                <section className="section-one section-div">
                    <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center">
                        <Grid item md={6} sm={6} className='portrait'>
                            <img src={profile} title="Portrait Shot by Troy Montes" alt="Portrait of Yvonne Ubak in a red jumpsuit shot by Troy Montes" />
                        </Grid>
                        <Grid item md={6} sm={6} className="personal-about">
                            <div className="about-txt">
                                <Link className="title-link">
                                    <h1 style={{ fontSize: "2em" }}>Yvonne Ubak</h1>
                                    <h2>Founder</h2>
                                </Link>
                                <p style={{ fontSize: '1.3em' }}>
                                    I am a former Database Developer who now has an active career in Full Stack, Test Automation and Web Development.
                                    My approach to coding is out-of-the-box and looking for new and creative ways to provide efficient solutions.
                                    I provide a different perspective into tech where people like me were never offered opportunities
                                    before,
                                    and
                                    I believe this makes me a valuable asset in bringing your visions into reality. I have strengths in UI design, front-end
                                    development, back-end developement, test automation development
                                    and database management. For an insight into what I can do, check out my <a name="skills-link" className="body-link" href="#skills">skills</a> and <Link name="portfolio-link" className="body-link" to="/portfolio">portfolio</Link> below.
                                </p>
                            </div>
                        </Grid>
                    </Grid>
                </section>
                <br />
            </div>
        )
    }
}

export default About
