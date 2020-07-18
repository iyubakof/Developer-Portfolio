import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import profile from '../../../assets/images/grad_red.JPG';

export class About extends Component {
    render() {
        return (
            <div className="about-page pages">
                <section className="section-one">
                    <Grid container
                        spacing={3}
                        direction="row"
                        justify="center"
                        alignItems="center">
                        <Grid item xs={6}>
                            <img src={profile} title="Shot by Troy Montes" alt="Yvonne Ubak by Troy Montes" />
                        </Grid>
                        <Grid item xs={6}>
                            <div className="about-txt">
                                <Link name="about" className="title-link">
                                    <h1>Yvonne Ubak</h1>
                                </Link>
                                <p>
                                    I am former Database Developer who is now actively pursuing a career in Full Stack and Web Development.
                                    My approach to coding is out-of-the-box looking for new and creative ways to provide solutions.
                                    I provide a different perspective into tech where people like me were never offered opportunities
                                    before,
                                    and
                                    I believe this makes me a valuable asset on any team. I have strengths in UI design, front-end
                                    development, back-end developement, 
                                    and database management. For an insight into what I can do, continue below to view my projects.

                                </p>
                            </div>
                        </Grid>
                    </Grid>
                </section>
            </div>
        )
    }
}

export default About
