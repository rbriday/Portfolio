import React from 'react';
import Container from '../Layout/Container';
import workOne from '../../assets/work1.png'

const MyWork = () => {
    return (
        <div className='pt-25'>
            <Container>
                <div>
                    <div className='text-center'>
                        <h2 className='font-primary font-semibold text-[38px] text-primary'>My Work</h2>
                        <p className='pt-2 font-secondary text-[16px] text-secondary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className='pt-7.5'>
                        <div className='flex space-x-5 justify-around'>
                            <div className='w-90 mb-7.5'>
                                <div >
                                    <img className='' src= {workOne} alt="" />
                                </div>
                                <div className='p-4 bg-gray-50 shadow-sm hover:bg-white hover:shadow-lg transition duration-300 rounded-2xl'>
                                    <p className='font-secondary font-semibold text-[16px] text-secondary tracking-[2px] '>UI-UX DESIGN</p>
                                    <h4 className='font-primary font-semibold text-[20px] text-primary pb-4'>HTML, CSS, J-QUERY PROTFOLIO</h4>
                                    <p className='font-secondary text-[14px] text-secondary'>Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.</p>
                                    <button className="font-primary font-semibold text-[16px] bg-btn px-3 py-1 text-white rounded-lg cursor-pointer border-btn border-2 hover:border-btn hover:bg-transparent hover:text-btn transition-all decoration-2 delay-150 mt-2.5 ">View Live</button>
                                </div>
                            </div>
                            <div className='w-90 mb-7.5'>
                                <div >
                                    <img className='' src= {workOne} alt="" />
                                </div>
                                <div className='p-4 bg-gray-50 shadow-sm hover:bg-white hover:shadow-lg transition duration-300 rounded-2xl'>
                                    <p className='font-secondary font-semibold text-[16px] text-secondary tracking-[2px] '>UI-UX DESIGN</p>
                                    <h4 className='font-primary font-semibold text-[20px] text-primary pb-4'>HTML, CSS, J-QUERY PROTFOLIO</h4>
                                    <p className='font-secondary text-[14px] text-secondary'>Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.</p>
                                    <button className="font-primary font-semibold text-[16px] bg-btn px-3 py-1 text-white rounded-lg cursor-pointer border-btn border-2 hover:border-btn hover:bg-transparent hover:text-btn transition-all decoration-2 delay-150 mt-2.5 ">View Live</button>
                                </div>
                            </div>
                            <div className='w-90 mb-7.5'>
                                <div >
                                    <img className='' src= {workOne} alt="" />
                                </div>
                                <div className='p-4 bg-gray-50 shadow-sm hover:bg-white hover:shadow-lg transition duration-300 rounded-2xl'>
                                    <p className='font-secondary font-semibold text-[16px] text-secondary tracking-[2px] '>UI-UX DESIGN</p>
                                    <h4 className='font-primary font-semibold text-[20px] text-primary pb-4'>HTML, CSS, J-QUERY PROTFOLIO</h4>
                                    <p className='font-secondary text-[14px] text-secondary'>Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.</p>
                                    <button className="font-primary font-semibold text-[16px] bg-btn px-3 py-1 text-white rounded-lg cursor-pointer border-btn border-2 hover:border-btn hover:bg-transparent hover:text-btn transition-all decoration-2 delay-150 mt-2.5 ">View Live</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default MyWork;