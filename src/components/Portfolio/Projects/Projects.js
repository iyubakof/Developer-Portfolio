import React, { Component } from 'react';
import { projects } from '../../../projectData/data';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import ProjectCard from './ProjectCard';

export class Projects extends Component {
    render() {
        return (
            <>
                <div className="project-page pages">
                    <Link name="projects" className="title-link">
                        <h1>Projects</h1>
                    </Link>
                    <section className="section-three section-div">
                        <Grid container
                            spacing={3}
                            direction="row"
                            justify="center"
                            alignItems="center"
                            className="row-one">
                                <ProjectCard projects={projects}/>
                        </Grid>
                    </section>
                </div>
            </>
        )
    }
}

export default Projects
