import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import beigeComp from '../../../../assets/images/beige computer.jpg';
import oliveComp from '../../../../assets/images/olive computer.jpg';
import { PopupButton } from 'react-calendly';
import './Booking.scss';

export default function Booking() {
    return (
        <>
            <div className='pages booking-page'>
                <Link name="booking" id="booking" style={{opacity: "0"}} to='#booking'>
                    <h1>Booking</h1>
                </Link>
                <div className="title-link">
                    <h1>Booking</h1>
                </div>
                <section className="section-five section-div">
                    <Grid container
                        spacing={3}
                        direction="row"
                        justify="center"
                        alignItems="center"
                        className="booking-row"
                    >
                        <Grid item md={6} sm={6} className='booking'>
                            <PopupButton className='booking-btn'
                                url='https://calendly.com/dashofdara'
                                pageSettings={{
                                    backgroundColor: 'b3acbc',
                                    primaryColor: '5B7478'
                                }}
                                text= 'Book a consult today!' />
                        </Grid>
                        <Grid item md={6} sm={6} className='booking-img'>
                            <img src={beigeComp} />
                        </Grid>
                    </Grid>
                </section>
            </div>
        </>
    )
}
