"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import './styles/services.css';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonials() {
    return (
        <div className='flex flex-col justify-center mt-20 mx-20 h-screen'>
        <h1 className='flex justify-center mt-20 text-white text-4xl font-bold'>TESTIMONIALS</h1>
        <h2 className='flex justify-center mt-10 text-gray-300 text-xl font-semibold'>What our customers say about us</h2>
        <Swiper
            slidesPerView={3}
            centeredSlides={false}
            spaceBetween={30}
            grabCursor={true}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="swiper-wrapper mt-20"
        >
            <SwiperSlide><div className="swiper-slide ">
                <div className=" bg-[#1d222a] rounded-2xl h-96 flex justify-center items-center">
                    <span className="text-3xl font-semibold text-white">Slide 2 </span>
                </div>
            </div></SwiperSlide>
            <SwiperSlide><div className="swiper-slide">
                <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
                    <span className="text-3xl font-semibold text-indigo-600">Slide 1 </span>
                </div>
            </div></SwiperSlide>
            <SwiperSlide><div className="swiper-slide">
                <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
                    <span className="text-3xl font-semibold text-indigo-600">Slide 1 </span>
                </div>
            </div></SwiperSlide>
            <SwiperSlide><div className="swiper-slide">
                <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
                    <span className="text-3xl font-semibold text-indigo-600">Slide 1 </span>
                </div>
            </div></SwiperSlide>
            <SwiperSlide><div className="swiper-slide">
                <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
                    <span className="text-3xl font-semibold text-indigo-600">Slide 1 </span>
                </div>
            </div></SwiperSlide>
            <SwiperSlide><div className="swiper-slide">
                <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
                    <span className="text-3xl font-semibold text-indigo-600">Slide 1 </span>
                </div>
            </div></SwiperSlide>

        </Swiper>

    </div>
    )
}