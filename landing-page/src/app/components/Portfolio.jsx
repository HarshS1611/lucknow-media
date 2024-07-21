"use client";
import { useState } from 'react';
import './styles/portfolio.css'

export default function PortfolioPage() {
    const [tab, setTab] = useState('1');
    return (
        <div className='flex flex-col justify-center items-center my-40'>
            <h1 className='flex justify-center    text-white text-4xl font-bold'> SERVED CLIENTS </h1>

            <div className="flex justify-center items-center w-full my-20">
                <div className="tab-container ">
                    <input onClick={() => setTab('1')} type="radio" name="tab" id="tab1" className="tab tab--1" />
                    <label className="tab_label border-b-purple-500 border-b-[1px] font-bold" for="tab1">TOP</label>

                    <input onClick={() => setTab('2')} type="radio" name="tab" id="tab2" className="tab tab--2" />
                    <label className="tab_label border-b-purple-500 border-b-[1px] font-bold" for="tab2">MORE</label>

                    <input onClick={() => setTab('3')} type="radio" name="tab" id="tab3" className="tab tab--3" />
                    <label className="tab_label border-b-purple-500 border-b-[1px] font-bold" for="tab3">Notifications</label>

                    <div className="indicator border-b-purple-500 border-b-[2px]  mt-2"></div>
                </div>

            </div>
            <div className='overflow-auto'>
                {tab === '1' &&
                    <div className='grid grid-cols-4 gap-20'>
                        <div
                            className="relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-gray-50"
                        >
                            <div className="z-10 absolute w-full h-full peer"></div>
                            <div
                                className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-red-500 transition-all duration-500"
                            ></div>
                            <div
                                className="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-red-500 transition-all duration-500"
                            >
                                Contact us now
                            </div>
                            <div className="w-full h-full items-center justify-center flex uppercase">
                                <img src='https://epicred.in/images/epicred-logo.png' width={200} height={200} />
                            </div>
                        </div>
                        <div
                            className="relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-gray-50"
                        >
                            <div className="z-10 absolute w-full h-full peer"></div>
                            <div
                                className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-red-500 transition-all duration-500"
                            ></div>
                            <div
                                className="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-red-500 transition-all duration-500"
                            >
                                Contact us now
                            </div>
                            <div className="w-full h-full items-center justify-center flex uppercase">
                               <img src='https://www.gailonline.com/images/gaill.png' width={200} height={200} />
                            </div>
                        </div>
                        <div
                            className="relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-gray-50"
                        >
                            <div className="z-10 absolute w-full h-full peer"></div>
                            <div
                                className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-red-500 transition-all duration-500"
                            ></div>
                            <div
                                className="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-red-500 transition-all duration-500"
                            >
                                Contact us now
                            </div>
                            <div className="w-full h-full items-center justify-center flex uppercase">
                                <img src='https://blueplanet.asia/wp-content/uploads/blueplanet-logo-2024.svg' width={200} height={200} />
                            </div>
                        </div>
                        <div
                            className="relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-gray-50"
                        >
                            <div className="z-10 absolute w-full h-full peer"></div>
                            <div
                                className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-red-500 transition-all duration-500"
                            ></div>
                            <div
                                className="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-red-500 transition-all duration-500"
                            >
                                Contact us now
                            </div>
                            <div className="w-full h-full items-center justify-center flex uppercase">
                                <img src='https://appadmin.redfmindia.in/cms/images/logo.png' width={200} height={200} />
                            </div>
                        </div>
                        <div
                            className="relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-gray-50"
                        >
                            <div className="z-10 absolute w-full h-full peer"></div>
                            <div
                                className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-red-500 transition-all duration-500"
                            ></div>
                            <div
                                className="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-red-500 transition-all duration-500"
                            >
                                Contact us now
                            </div>
                            <div className="w-full h-full items-center justify-center flex uppercase">
                                <img src='https://www.thegoattrust.org/assets/images/logo1.gif' width={200} height={200} />
                            </div>
                        </div>
                        <div
                            className="relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-gray-50"
                        >
                            <div className="z-10 absolute w-full h-full peer"></div>
                            <div
                                className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-red-500 transition-all duration-500"
                            ></div>
                            <div
                                className="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-red-500 transition-all duration-500"
                            >
                                Contact us now
                            </div>
                            <div className="w-full h-full items-center justify-center flex uppercase">
                                <img src='https://www.step2growthh.com/assets/images/logo.png' width={200} height={200} />
                            </div>
                        </div>
                        <div
                            className="relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-gray-50"
                        >
                            <div className="z-10 absolute w-full h-full peer"></div>
                            <div
                                className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-red-500 transition-all duration-500"
                            ></div>
                            <div
                                className="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-red-500 transition-all duration-500"
                            >
                                Contact us now
                            </div>
                            <div className="w-full h-full items-center justify-center flex uppercase">
                                <img src='https://ongcindia.com/documents/77751/2132071/ongcLogo.jpg' width={200} height={200} />
                            </div>
                        </div>
                        <div
                            className="relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-gray-50"
                        >
                            <div className="z-10 absolute w-full h-full peer"></div>
                            <div
                                className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-red-500 transition-all duration-500"
                            ></div>
                            <div
                                className="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-red-500 transition-all duration-500"
                            >
                                Contact us now
                            </div>
                            <div className="w-full h-full items-center justify-center flex uppercase">
                                <img src='https://www.tenderpalm.com/wp-content/uploads/2015/08/logo-2.png' width={200} height={200} />
                            </div>
                        </div>
                    </div>
                }
                {tab === '2' &&
                    <div className='grid grid-cols-3 gap-20'>
                        <div
                            className="relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-red-500"
                        >
                            <div className="z-10 absolute w-full h-full peer"></div>
                            <div
                                className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-red-500 transition-all duration-500"
                            ></div>
                            <div
                                className="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-red-500 transition-all duration-500"
                            >
                                Contact us now
                            </div>
                            <div className="w-full h-full items-center justify-center flex uppercase">
                                hover me 2
                            </div>
                        </div></div>}
                {tab === '3' &&
                    <div className='grid grid-cols-3 gap-20'>
                        <div
                            className="relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-red-500"
                        >
                            <div className="z-10 absolute w-full h-full peer"></div>
                            <div
                                className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-red-500 transition-all duration-500"
                            ></div>
                            <div
                                className="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-red-500 transition-all duration-500"
                            >
                                Contact us now
                            </div>
                            <div className="w-full h-full items-center justify-center flex uppercase">
                                hover me 3
                            </div>
                        </div>
                    </div>}

            </div>
        </div>
    )
}