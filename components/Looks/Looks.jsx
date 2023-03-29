import React from 'react';
import UnderSlider from '../UnderSlider/UnderSlider';
import s from './Looks.module.scss'

const Looks = () => {
    return (
        <>
            <div className={s.look}>
                <h1>Almerna looks <b>good</b> at you</h1>
                <UnderSlider />
            </div>
        </>
    );
};

export default Looks;