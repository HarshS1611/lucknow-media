"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import './styles/services.css';
import 'swiper/css';
import 'swiper/css/pagination';
export default function ServicesPage() {

    return (
        <div className='flex flex-col justify-center mt-20 mx-60 my-20 h-screen'>
            <h1 className='flex justify-center mt-20 text-white text-4xl font-bold'>OUR SERVICES </h1>
            <Swiper
                slidesPerView={3}
                centeredSlides={false}
                spaceBetween={100}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="swiper-wrapper mt-20"
            >
                <SwiperSlide>
                    <div
                        className="swiper-slide h-[200%] bg-white m-auto rounded-[1em] overflow-hidden relative group p-2 z-0"
                    >
                        <div
                            className="z-[-1]  w-80 rounded-[1em] bg-gradient-to-br from-yellow-400 via-yellow-400 to-red-200 absolute bottom-full right-0 group-hover:-rotate-90 group-hover:h-[1400%] group-hover:w-full duration-500 origin-bottom-right"
                        ></div>

                        <div className="relative rounded-2xl px-8 my-10 flex flex-col justify-start text-red-500 items-center group-hover:text-black">
                            <div className="text-start w-full text-3xl font-semibold ">CONVENTION ADVERTISING </div>
                            <div className='flex text-xl items-center justify-center my-16 w-full text-black '>TV, Print or radio commercial, we stratergise, optimize, plan than execute to provide result oriented campaigns.</div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="swiper-slide w-full h-full bg-white m-auto rounded-[1em] overflow-hidden relative group p-2 z-0"
                    >
                        <div
                            className="z-[-1] h-full w-full rounded-[1em] bg-gradient-to-br from-yellow-400 via-yellow-400 to-red-200 absolute bottom-full right-0 group-hover:-rotate-90 group-hover:h-[1400%] group-hover:w-full duration-500 origin-bottom-right"
                        ></div>

                        <div className=" rounded-2xl h-80 flex justify-center text-black items-center group-hover:text-white">
                            <span className="text-3xl font-semibold ">SOCIAL MEDIA ADVERTISING </span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="swiper-slide w-full h-full bg-white m-auto rounded-[1em] overflow-hidden relative group p-2 z-0"
                    >
                        <div
                            className="z-[-1] h-full w-full rounded-[1em] bg-gradient-to-br from-yellow-400 via-yellow-400 to-red-200 absolute bottom-full right-0 group-hover:-rotate-90 group-hover:h-[1400%] group-hover:w-full duration-500 origin-bottom-right"
                        ></div>

                        <div className=" rounded-2xl h-80 flex justify-center text-black items-center group-hover:text-white">
                            <span className="text-3xl font-semibold ">VIDEO PRODUCTION </span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="swiper-slide w-full h-full bg-white m-auto rounded-[1em] overflow-hidden relative group p-2 z-0"
                    >
                        <div
                            className="z-[-1] h-full w-full rounded-[1em] bg-gradient-to-br from-yellow-400 via-yellow-400 to-red-200 absolute bottom-full right-0 group-hover:-rotate-90 group-hover:h-[1400%] group-hover:w-full duration-500 origin-bottom-right"
                        ></div>

                        <div className=" rounded-2xl h-80 flex justify-center text-black items-center group-hover:text-white">
                            <span className="text-3xl font-semibold ">WEB/APP DEVELOPMENT </span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="swiper-slide w-full h-full bg-white m-auto rounded-[1em] overflow-hidden relative group p-2 z-0"
                    >
                        <div
                            className="z-[-1] h-full w-full rounded-[1em] bg-gradient-to-br from-yellow-400 via-yellow-400 to-red-200 absolute bottom-full right-0 group-hover:-rotate-90 group-hover:h-[1400%] group-hover:w-full duration-500 origin-bottom-right"
                        ></div>

                        <div className=" rounded-2xl h-80 flex justify-center text-black items-center group-hover:text-white">
                            <span className="text-3xl font-semibold ">PUBLIC RELATIONS </span>
                        </div>
                    </div>
                </SwiperSlide>




            </Swiper>

        </div>
    );
}
