import React from 'react';
import HeroSlider from '../HeroSlider/HeroSlider';
import s from './Hero.module.scss'

const Hero = () => {
    return (
        <>
            <div className={s.hero_container}>
                <HeroSlider />
                <div className={s.tag}>
                    <h1>Our new <br /> summer 2021 <br /> Collection</h1>
                    <p>Free Luxury Gift Wrap on orders over £400</p>
                    <div className={s.btns}>
                        <button>Shop Now</button>
                        <button>Fitting Room</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;