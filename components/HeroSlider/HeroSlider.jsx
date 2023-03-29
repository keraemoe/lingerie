import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";

const HeroSlider = () => {
    const hero_slider = [
        {
            id: 1,
            img: '/hero_slide1.png'
        },
        {
            id: 2,
            img: '/hero_slide1.png'
        },
        {
            id: 3,
            img: '/hero_slide1.png'
        },
    ]
    return (
        <>
            <Swiper
                loop={true}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={true}
                navigation={true}
                modules={[Autoplay, Pagination]}
                className="hero_slider"
            >
                {hero_slider.map((slide) => (
                    <SwiperSlide>
                        <img src={slide.img} alt="" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default HeroSlider;