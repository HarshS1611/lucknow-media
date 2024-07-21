import Image from 'next/image';

export default function Main() {

    return (
        <div>
            <div className='-mt-10 ml-20'>
                <Image src='/logoW.png' alt="LogoWhite" width={300} height={300} />
            </div>

            <div className='flex items-center mx-20 justify-around '>
                <div className='flex flex-col text-white border-white font-bold border-l-2 pl-20 py-28 gap-4'>
                    <h1 className='text-5xl text-white'>YOUR <span className='text-red-600'> VISION</span></h1>
                    <p className='text-5xl text-red-600'> OUR  <span className='text-white'>CRAFT</span></p>
                    <p className='text-red-600 text-5xl'>INNOVATE  <span className='text-white'>DIGITALLY</span></p>
                    <p className='text-gray-50 mt-6'>
                        We are a team of enthusiastic individuals who help brands <br /> grow by unleashing the potential of social media
                    </p>
                    <div className='flex gap-10 items-center'>
                        <button
                            className="mt-10 relative px-8 py-4 rounded-full  isolation-auto z-10 border-2 border-purple-700 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:text-white before:-right-full before:hover:right-0 before:rounded-full before:bg-purple-500 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center text-sm font-semibold text-black bg-white shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                        >
                            Contact Us
                        </button>
                        <button
                            className="mt-10 relative px-8 py-4 rounded-full  isolation-auto z-10 border-2 border-red-700 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:text-white before:-right-full before:hover:right-0 before:rounded-full before:bg-[#A12347] before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center text-sm font-semibold text-black bg-white shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                        >
                            View Brochure
                        </button>
                    </div>



                </div>
                <div className=' rounded-full p-4 px-12'>
                    <Image className='' src='/rocket2.png' alt="Profile" width={500} height={500} />
                </div>
            </div>
        </div>
    );
}