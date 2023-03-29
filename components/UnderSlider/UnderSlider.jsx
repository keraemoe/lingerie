import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";

const UnderSlider = () => {
    const under_slider = [
        {
            id: 1,
            img: '/under_slide1.png'
        },
        {
            id: 2,
            img: '/under_slide2.png'
        },
        {
            id: 3,
            img: '/under_slide1.png'
        },
        {
            id: 4,
            img: '/under_slide2.png'
        },
        {
            id: 5,
            img: '/under_slide1.png'
        },
        {
            id: 6,
            img: '/under_slide2.png'
        },
    ]
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                slidesPerView={4}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination]}
                className="Under_slide"
            >
                {under_slider.map((under) => (
                    <SwiperSlide>
                        <img src={under.img} alt="" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default UnderSlider;