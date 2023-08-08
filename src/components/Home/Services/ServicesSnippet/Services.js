import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import threeCacti from '../../../../assets/images/three cacti cropped.jpg';
import cactus from '../../../../assets/images/right cactus.jpg';

export default function Services() {
    return (
        <>
            <div className="service-page pages">
                <Link name="services" style={{opacity: "0"}}>
                    <h1>Services</h1>
                </Link>
                <br />
                <br />
                <div className="title-link">
                    <h1>Services</h1>
                </div>
                <br />
                <section className="section-four section-div">
                    <div className='consult-container'>
                        <img src={threeCacti} />
                        <Grid container
                            spacing={2}
                            direction="row"
                            justify="center"
                            alignItems="center"
                            className="consult-row"
                        >
                            <Grid item md={12} sm={12} className='consult'>
                                <h3>Introductory Consultation</h3>
                                <small>$41</small>
                                <p>A 30 minute session to discuss your technology plans and needs for your business.</p>
                                <p>Consultation fee will go towards a deposit if you decide to proceed with a service.</p>
                                <p><strong><em>Consult is required before booking any other service.</em></strong></p>
                            </Grid>
                        </Grid>
                    </div>

                    <div className='srv-container' id='web-dev-pckg'>
                        <h2 className='pckg-title'>Packages</h2>
                        <h4>Increase your leads, sales, traffic and revenue!</h4>
                        <br/>
                        <Grid container
                            spacing={2}
                            direction="row"
                            justify="center"
                            alignItems="center"
                            className="service-packages"
                        >
                            <Grid item md={4} sm={6} className='package'>
                                <div className='grid-txt'>
                                    <h2>Transplant Package</h2>
                                    <h4>Website Builder starting at $770</h4>
                                    <small>Squarespace, Wordpress, Shopify, etc.</small>
                                    <p>Includes:</p>
                                    <ul>
                                        <li>2 pages</li>
                                        <li>2 forms</li>
                                        <li>Simple Design</li>
                                        <li>Website Planning and Revision Sessions</li>
                                        <li>Accessible Features</li>
                                        <br />
                                        <br />
                                    </ul>
                                </div>
                            </Grid>
                            <Grid item md={4} sm={6} className='package'>
                                <div className='grid-txt'>
                                    <h2>Seed Package</h2>
                                    <h4>Static Website from scratch starting at $2570</h4>
                                    <small>Basic fast-loading website that displays fixed, unchanging content</small>
                                    <p>Includes:</p>
                                    <ul>
                                        <li>2 pages</li>
                                        <li>2 forms</li>
                                        <li>Simple Design</li>
                                        <li>Website Planning and Revision Sessions</li>
                                        <li>Accessible Features</li>
                                        <li>Fast Loading</li>
                                        <li>Static Content</li>
                                    </ul>
                                </div>
                            </Grid>
                            <Grid item md={4} sm={6} className='package'>
                                <div className='grid-txt'>
                                    <h2>Greenhouse Package</h2>
                                    <h4>Dynamic Website from scratch starting at $5000</h4>
                                    <small>Modern-day website that displays self-managed and modifiable content</small>
                                    <p>Includes:</p>
                                    <ul>
                                        <li>2 pages</li>
                                        <li>2 forms</li>
                                        <li>Simple Design</li>
                                        <li>Website Planning and Revision Sessions</li>
                                        <li>Accessible Features</li>
                                        <li>Wordpress Content Management System</li>
                                    </ul>
                                </div>
                            </Grid>
                        </Grid>
                    </div>

                    <div className='addon-container'>
                        <br />
                        <br />
                        <img src={cactus} />
                        <Grid container
                            spacing={3}
                            direction="row"
                            justify="center"
                            alignItems="center"
                            className="addons"
                        >
                            <Grid item md={6} sm={6} className='addon-txt'>
                                <h2>Additional Features</h2>
                                <small>Package Addons</small>
                                <ul>
                                    <li>Additional pages and forms</li>
                                    <li>Standard E-commerce Integration</li>
                                    <li>Basic SEO</li>
                                    <li>Modernized Style</li>
                                    <li>Responsive Features</li>
                                    <li>Tool Integration</li>
                                </ul>
                            </Grid>
                        </Grid>
                    </div>

                    <div className='srv-container' id='automation-serv'>
                        <h2 className='improv-title'>Tech Improvements</h2>
                        <p>Let your business work for you while you sleep</p>
                        <Grid container
                            spacing={3}
                            direction="row"
                            justify="center"
                            alignItems="center"
                            className="tech-improvements"
                        >
                            <Grid item md={3} sm={3} className='improvement'>
                                <div className='grid-txt'>
                                    <h3>Workflow Automation Planning Session</h3>
                                    <small>$104</small>
                                    <p> A work session to help implement positive work flows and automated systems to take care of:</p>
                                    <ul>
                                        <li>Repetitive tasks</li>
                                        <li>Marketing</li>
                                        <li>Other business processes</li>
                                    </ul>
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                </div>
                            </Grid>
                            <Grid item md={3} sm={3} className='improvement'>
                                <div className='grid-txt'>
                                    <h3>Workflow Automation</h3>
                                    <small>starting at $500</small>
                                    <p>new systems are created to automate your current business processes, such as:</p>
                                    <ul>
                                        <li>Booking</li>
                                        <li>Email/Marketing</li>
                                        <li>Invoicing</li>
                                        <li>Customer Relationship Management</li>
                                        <li>Data Management</li>
                                        <li>Accounting and more!</li>
                                    </ul>
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                </div>
                            </Grid>
                            <Grid item md={3} sm={3} className='improvement'>
                                <div className='grid-txt'>
                                    <h3>Website Maintenance</h3>
                                    <small>$70-100/hour</small>
                                    <p>For RETURNING CLIENTS ONLY</p>
                                    <p>Any upgrades, fixes, or modifications you would like for your website.</p>
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                </div>
                            </Grid>
                            <Grid item md={3} sm={3} className='improvement'>
                                <div className='grid-txt'>
                                    <h3>DIY "Bob da Builder" Consultation Package</h3>
                                    <small>$320</small>
                                    <p>For the Tech Savvy Folks</p>
                                    <p>A package of 3 60-minute sessions to help teach and guide you through the process of
                                        creating your own website "from scratch" or with a website builder.</p>
                                    <small>*class materials included*</small>
                                    <p>A basic knowledge of CSS is required. HTML is recommended but optional.</p>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </section>
            </div>
        </>
    )
}
