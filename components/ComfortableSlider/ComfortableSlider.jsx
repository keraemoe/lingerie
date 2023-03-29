import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";

const ComSlider = () => {
    const com_slider = [
        {
            id: 1,
            img: '/comfort.png'
        },
        {
            id: 2,
            img: '/comfort.png'
        },
        {
            id: 3,
            img: '/comfort.png'
        },
        {
            id: 4,
            img: '/comfort.png'
        },
        {
            id: 5,
            img: '/comfort.png'
        },
        {
            id: 6,
            img: '/comfort.png'
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
                className="Com_slider"
            >
                {com_slider.map((com) => (
                    <SwiperSlide>
                        <img src={com.img} alt="" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default ComSlider;