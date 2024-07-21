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
                            className="z-[-1]  w-full rounded-[1em] bg-gradient-to-br from-red-400 via-red-200 to-red-500 absolute bottom-full right-0 group-hover:-rotate-90 group-hover:h-[1400%] group-hover:w-full duration-500 origin-bottom-right"
                        ></div>

                        <div className="relative rounded-2xl px-8 my-8 flex flex-col justify-start text-red-500 items-center group-hover:text-white">
                            <div className="text-start w-full text-3xl font-semibold ">CONVENTION ADVERTISING </div>
                            <div className='flex text-xl items-center justify-center my-10 w-full text-black '>TV, Print or radio commercial, we stratergise, optimize, plan than execute to provide result oriented campaigns.</div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="swiper-slide w-full h-full bg-white m-auto rounded-[1em] overflow-hidden relative group p-2 z-0"
                    >
                        <div
                            className="z-[-1] h-full w-full rounded-[1em] bg-gradient-to-br from-yellow-400 via-yellow-200 to-yellow-500 absolute bottom-full right-0 group-hover:-rotate-90 group-hover:h-[1400%] group-hover:w-full duration-500 origin-bottom-right"
                        ></div>

                        <div className="relative rounded-2xl px-8 my-8 flex flex-col justify-start text-red-500 items-center group-hover:text-black">
                            <div className="text-start w-full text-3xl font-semibold ">SOCIAL MEDIA ADVERTISING </div>
                            <div className='flex text-xl items-center justify-center my-10 w-full text-black '>Facebook, Twitter, Instagram, Youtube whatever your business needs we perfect blend to consumers taste.</div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="swiper-slide w-full h-full bg-white m-auto rounded-[1em] overflow-hidden relative group p-2 z-0"
                    >
                        <div
                            className="z-[-1] h-full w-full rounded-[1em] bg-gradient-to-br from-red-400 via-red-200 to-red-500 absolute bottom-full right-0 group-hover:-rotate-90 group-hover:h-[1400%] group-hover:w-full duration-500 origin-bottom-right"
                        ></div>

                        <div className="relative rounded-2xl px-8 my-8 flex flex-col justify-start text-red-500 items-center group-hover:text-white">
                            <div className="text-start w-full text-3xl font-semibold ">VIDEO PRODUCTION </div>
                            <div className='flex text-xl items-center justify-center my-6 w-full text-black '>
                                Vidoes AD constitutes of 72% of ADs today, as we offer you our specialization in motion graphics & audio/visual production.</div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="swiper-slide w-full h-full bg-white m-auto rounded-[1em] overflow-hidden relative group p-2 z-0"
                    >
                        <div
                            className="z-[-1] h-full w-full rounded-[1em] bg-gradient-to-br from-yellow-400 via-yellow-200 to-yellow-500 absolute bottom-full right-0 group-hover:-rotate-90 group-hover:h-[1400%] group-hover:w-full duration-500 origin-bottom-right"
                        ></div>

                        <div className="relative rounded-2xl px-8 my-8 flex flex-col justify-start text-red-500 items-center group-hover:text-black">
                            <div className="text-start w-full text-3xl font-semibold ">WEB/APP DEVELOPMENT </div>
                            <div className='flex text-xl items-center justify-center my-6 w-full text-black '>
                            Mobile apps and websites are integral part of marketing and hence we have the hands and heads to make to unleash the real business potential.
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="swiper-slide w-full h-full bg-white m-auto rounded-[1em] overflow-hidden relative group p-2 z-0"
                    >
                        <div
                            className="z-[-1] h-full w-full rounded-[1em] bg-gradient-to-br from-red-400 via-red-200 to-red-500 absolute bottom-full right-0 group-hover:-rotate-90 group-hover:h-[1400%] group-hover:w-full duration-500 origin-bottom-right"
                        ></div>

                        <div className="relative rounded-2xl px-8 my-8 flex flex-col justify-start text-red-500 items-center group-hover:text-black">
                            <div className="text-start w-full text-3xl font-semibold ">PUBLIC RELATIONS </div>
                            <div className='flex text-xl items-center justify-center my-6 w-full text-black '>
                                With our PR experts we filter, foresee and process information to strategies best practices so as to keep the brand at the top.
                            </div>
                        </div>
                    </div>
                </SwiperSlide>




            </Swiper>

        </div>
    );
}
