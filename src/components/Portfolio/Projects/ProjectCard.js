import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

export class ProjectCard extends Component {
    render() {
        return (
            <>
                {this.props.projects.map(project => (
                    <Grid item className="grid-item" sm={4}>
                        <Card id={project.id} className="cards">
                            {/* <CardActionArea> */}
                                <img src={project.pic} alt={project.description} title={project.title} className='cardmedia' width={project.width ? project.width : "100%"} style={{maxHeight: project.height ? project.height : "400px"}}/>
                                <CardContent>
                                    <Typography className='projectHeader'>
                                        <h3>{project.title}</h3>
                                    </Typography>
                                    <Typography varient="body2" component="p">{project.description}</Typography>
                                </CardContent>
                            {/* </CardActionArea> */}
                            <CardActions>
                                {project.link ?
                                    <Button href={project.link} target="_blank" varient="contained" className="view-btn">
                                        VIEW
                                </Button>
                                    :
                                    <></>}
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </>
        )
    }
}

export default ProjectCard
