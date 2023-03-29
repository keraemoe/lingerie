import React from 'react';
import ComSlider from '../ComfortableSlider/ComfortableSlider';
import s from './Comfortable.module.scss'

const Comfortable = () => {
    return (
        <>
            <div className={s.com}>
                <img src="/footer_logo.png" alt="" />
                <h1>Almerna – we make things <br /> comfortable</h1>
                <ComSlider />
            </div>
        </>
    );
};

export default Comfortable;