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
            <div className="skill-page pages">
                <Link name="skills" className="title-link">
                    <h1>Skills</h1>
                </Link>
                <section className="section-two">
                    <Grid container
                        spacing={3}
                        direction="row"
                        justify="center"
                        alignItems="center"
                        className="row-one">
                        <Grid item className="grid-item" xs={4}>
                            <img src={java} alt="java" width="100" height="100" />
                            <p>Java - 2 years</p>
                        </Grid>
                        <Grid item className="grid-item" xs={4}>
                            <img src={spring} alt="spring boot" width="100" height="100" />
                            <p>Spring Boot - 1 year</p>
                        </Grid>
                        <Grid item className="grid-item" xs={4}>
                            <img src={mysql} alt="mysql" width="120" height="100" />
                            <p>MySQL - 1 year</p>
                        </Grid>
                    </Grid>
                    <Grid container
                        spacing={3}
                        direction="row"
                        justify="center"
                        alignItems="center"
                        className="row-two">
                        <Grid item className="grid-item" xs={4}>
                            <img src={sqlServer} alt="sql server" width="100" height="100" />
                            <p>SQL Server - 2 years</p>
                        </Grid>
                        <Grid item className="grid-item" xs={4}>
                            <img src={hcj} alt="html, css, javascript" width="100" height="100" />
                            <p>HTML/CSS - 5 years</p>
                            <p>Javascript - 2 years</p>
                            <p>Sass - 1 year</p>
                        </Grid>
                        <Grid item className="grid-item" xs={4}>
                            <img src={angular} alt="angular" width="100" height="100" />
                            <p>Angular - 1 year</p>
                        </Grid>
                    </Grid>
                    <Grid container
                        spacing={3}
                        direction="row"
                        justify="center"
                        alignItems="center"
                        className="row-three">
                        <Grid item className="grid-item" xs={4}>
                            <img src={react} alt="react" width="100" height="100" />
                            <p>React - 1 year</p>
                        </Grid>
                        <Grid item className="grid-item" xs={4}>
                            <img src={node} alt="node" width="100" height="100" />
                            <p>NodeJS - 6 months</p>
                        </Grid>
                    </Grid>
                </section>
            </div >
        )
    }
}

export default Skills
