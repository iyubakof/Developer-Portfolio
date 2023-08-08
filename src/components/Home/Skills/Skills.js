import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import java from "../../../assets/images/java.png";
import spring from '../../../assets/images/spring_boot.png';
import mysql from '../../../assets/images/mysql.png';
import sqlServer from '../../../assets/images/microsoft-sql-server.svg';
import hcj from '../../../assets/images/hcj.png';
import angular from '../../../assets/images/angular.png';
import react from '../../../assets/images/react.svg';
import node from '../../../assets/images/nodejs.jpg';


export class Skills extends Component {
    render() {
        return (
            <div className='skill-container'>
                <div className="skill-page pages">
                    <Link name="skills" style={{opacity: "0"}} to='#skills'>
                        <h1>Skills</h1>
                    </Link>
                    <div className="title-link">
                        <h1>Skills</h1>
                    </div>
                    <section className="section-two section-div">
                        <div className='skill-container'>
                            <Grid container
                                spacing={3}
                                direction="row"
                                justify="center"
                                alignItems="center"
                                className="row-one">
                                <Grid item className="grid-item" sm={4}>
                                    <img src={java} alt="java" />
                                    <p>Java - 8 years</p>
                                </Grid>
                                <Grid item className="grid-item" sm={4}>
                                    <img src={spring} alt="spring boot" />
                                    <p>Spring Boot - 3 years</p>
                                </Grid>
                                <Grid item className="grid-item" sm={4}>
                                    <img src={mysql} alt="mysql" width="120" height="100" />
                                    <p>MySQL - 6 years</p>
                                </Grid>
                            </Grid>
                            <Grid container
                                spacing={3}
                                direction="row"
                                justify="center"
                                alignItems="center"
                                className="row-two">
                                <Grid item className="grid-item" sm={4}>
                                    <img src={sqlServer} alt="sql server" />
                                    <p>SQL Server - 6.5 years</p>
                                </Grid>
                                <Grid item className="grid-item" sm={4}>
                                    <img src={hcj} alt="html, css, javascript" />
                                    <p>HTML/CSS - 8.5 years</p>
                                    <p>Javascript - 6.5 years</p>
                                    <p>Sass - 7.5 years</p>
                                </Grid>
                                <Grid item className="grid-item" sm={4}>
                                    <img src={angular} alt="angular" />
                                    <p>Angular - 4 years</p>
                                </Grid>
                            </Grid>
                            <Grid container
                                spacing={3}
                                direction="row"
                                justify="center"
                                alignItems="center"
                                className="row-three">
                                <Grid item className="grid-item" sm={4}>
                                    <img src={react} alt="react" />
                                    <p>ReactJS - 5 years</p>
                                </Grid>
                                <Grid item className="grid-item" sm={4}>
                                    <img src={node} alt="node" />
                                    <p>NodeJS - 6 years</p>
                                </Grid>
                                <Grid item className="grid-item" sm={4}>
                                    {/* <img src={node} alt="node" /> */}
                                    <p>Test Automation - 3 years</p>
                                </Grid>
                            </Grid>
                        </div>
                    </section>
                </div >
            </div>
        )
    }
}

export default Skills
