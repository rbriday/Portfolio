import React, { useState } from 'react';
import Container from '../Layout/Container';
import bannerImg from '../../assets/about.png'

const Banner = () => {
    const [say, setSay] = useState(false);

    const handleSayHlw = () => {
        setSay(!say)
    }
    return (
        <div className='pt-12.5'>
            <Container>
                <div className='flex justify-between items-center'>
                    <div className='w-155'>
                        <h2 className='font-primary font-semibold text-[62px] text-primary leading-21 pb-6'>Hello, I’m <span className='block'>Riday Rajbongshi</span></h2>
                        <p className='font-secondary text-secondary text-[18px] leading-6'>I'm a Freelance UI/UX Designer and Developer based in London, England. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.</p>
                        <button onClick={handleSayHlw} className="font-primary font-semibold text-[20px] bg-btn px-7 py-2 text-white rounded-lg cursor-pointer border-btn border-2 hover:border-btn hover:bg-transparent hover:text-btn transition-all decoration-2 delay-150 mt-7.5">Say hlw</button>
                    </div>
                    <div>
                        <img src= {bannerImg} alt="#banner" />
                    </div>
                </div>
                 {
                    say ? 
                    <div className='absolute top-[200px] left-[50%] translate-[-50%] w-175 bg-[#ddd] px-12.5 py-12.5 flex flex-col justify-center items-center rounded-lg'>
                    <h3 className='text-center font-primary font-semibold text-[30px] text-primary mb-5'>Say Hlw</h3>
                    <div className='w-125 mb-5'>
                        <input type="text" placeholder='Enter your name..' className='w-full border-2 border-btn px-5 py-2 outline-0 rounded-lg' />
                    </div>
                    <div className='w-125 mb-5'>
                        <input type="email" placeholder='Enter your email..' className='w-full border-2 border-btn px-5 py-2 outline-0 rounded-lg' />
                    </div>
                    <div className='w-125 mb-5'>
                        <textarea type="email" placeholder='Enter your email..' className='w-full border-2 border-btn px-5 py-2 outline-0 rounded-lg' />
                    </div>
                    <div>
                        <button onClick={handleSayHlw} className="font-primary font-semibold text-[20px] bg-btn px-7 py-2 text-white rounded-lg cursor-pointer border-btn border-2 hover:border-btn hover:bg-transparent hover:text-btn transition-all decoration-2 delay-150 ">Send...</button>
                    </div>
                </div> 
                : 
                <div className='absolute top-[-400px] left-[50%] translate-[-50%] w-175 bg-[#ddd] px-12.5 py-12.5 flex flex-col justify-center items-center rounded-lg'>
                    <h3 className='text-center font-primary font-semibold text-[30px] text-primary mb-5'>Say Hlw</h3>
                    <div className='w-125 mb-5'>
                        <input type="text" placeholder='Enter your name..' className='w-full border-2 border-btn px-5 py-2 outline-0 rounded-lg' />
                    </div>
                    <div className='w-125 mb-5'>
                        <input type="email" placeholder='Enter your email..' className='w-full border-2 border-btn px-5 py-2 outline-0 rounded-lg' />
                    </div>
                    <div className='w-125 mb-5'>
                        <textarea type="email" placeholder='Enter your email..' className='w-full border-2 border-btn px-5 py-2 outline-0 rounded-lg' />
                    </div>
                    <div>
                        <button onClick={handleSayHlw} className="font-primary font-semibold text-[20px] bg-btn px-7 py-2 text-white rounded-lg cursor-pointer border-btn border-2 hover:border-btn hover:bg-transparent hover:text-btn transition-all decoration-2 delay-150 ">Send...</button>
                    </div>

                </div>
                }
            </Container>  
        </div>
    );
};

export default Banner;