import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Button, MenuItem, MenuList, AppBar,
    Toolbar, Typography, IconButton
} from '@material-ui/core';

export class Navigation extends Component {
    render() {
        return (
            <>
                <AppBar className="navbar">
                    <Toolbar className="nav">
                        <Typography variant="h6" className="nav-item">
                            <a href="#about" className="navlink">About</a>
                        </Typography>
                        <Typography variant="h6" className="nav-item">
                            <a href="#skills" className="navlink">Skills</a>
                        </Typography>
                        <Typography variant="h6" className="nav-item">
                            <a href="#projects" className="navlink">Projects</a>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </>
        )
    }
}

export default Navigation
