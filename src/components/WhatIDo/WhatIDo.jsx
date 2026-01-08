import React from 'react';
import Container from '../Layout/Container'

const WhatIDo = () => {
    return (
        <div className='pt-17.5'>
            <Container>
               <div className='flex items-center justify-between'>
                <div className='w-125'>
                    <h3 className='font-primary font-semibold text-[38px] text-primary pb-6'>What I do?</h3>
                    <p className='font-secondary text-[18px] text-secondary leading-6 pb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,</p>
                    <p className='font-secondary text-[18px] text-secondary leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non.</p>
                    <button className="mt-16 font-primary font-semibold text-[20px] bg-btn px-7 py-2 text-white rounded-lg cursor-pointer border-btn border-2 hover:border-btn hover:bg-transparent hover:text-btn transition-all decoration-2 delay-150 ">Say Hello</button>
                </div>
                <div className='w-150'>
                    <div className='w-full bg-gray-50 p-8.75 rounded-2xl shadow-sm hover:bg-white hover:shadow-lg transition duration-300 mb-7.5'>
                        <h4 className='font-primary font-semibold text-[24px] text-primary tracking-[2px] pb-4 '>User Experience (UX)</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.</p>
                    </div>
                    <div className='w-full bg-gray-50 p-8.75 rounded-2xl shadow-sm hover:bg-white hover:shadow-lg transition duration-300 mb-7.5'>
                        <h4 className='font-primary font-semibold text-[24px] text-primary tracking-[2px] pb-4 '>User Interface (UI)</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.</p>
                    </div>
                    <div className='w-full bg-gray-50 p-8.75 rounded-2xl shadow-sm hover:bg-white hover:shadow-lg transition duration-300 mb-7.5'>
                        <h4 className='font-primary font-semibold text-[24px] text-primary tracking-[2px] pb-4 '>Web Development</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.</p>
                    </div>
                </div>
               </div>
            </Container>
        </div>
    );
};

export default WhatIDo;