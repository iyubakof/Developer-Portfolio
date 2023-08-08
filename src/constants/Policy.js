import React from 'react';
import { Link } from '@mui/material';
import centerSucc from '../assets/images/center succ cropped.jpg';

export default function Policy() {
    return (
        <>
            <div className='pages policy-page'>
                <div className='title-container'>
                    <img src={centerSucc} />
                    <h1>Policies</h1>
                </div>
                <section className="section-six section-div">
                    <div className='booking-policy'>
                        <h2>Booking Policy</h2>
                    </div>
                    <div className='booking-policy'>
                        <h2>Privacy Policy</h2>
                    </div>
                </section>
            </div>
        </>
    )
}
