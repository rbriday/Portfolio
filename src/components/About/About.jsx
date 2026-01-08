import React from 'react';
import Container from '../Layout/Container';
// import about from '../../assets/banner.png'
import about2 from '../../assets/about.jpg'

const About = () => {
    return (
        <div className='pt-25'>
            <Container>
                <div className='flex justify-around items-center'>
                    <div className='w-134'>
                        <img src= {about2} alt="" className='h-140 rounded-xl shadow-sm' />
                    </div>
                    <div className='w-134'>
                        <h2 className='font-primary font-semibold text-[38px] leading-12.5 text-primary mb-8'>I am Professional User Experience Designer</h2>
                        <p className='font-secondary text-[16px] text-secondary mb-5'>I design and develop services for customers specializing creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences.</p>
                        <button className="font-primary font-semibold text-[20px] bg-btn px-7 py-2 text-white rounded-lg cursor-pointer border-btn border-2 hover:border-btn hover:bg-transparent hover:text-btn transition-all decoration-2 delay-150 ">Download CV</button>
                    </div>
                </div>
            </Container>
            
        </div>
    );
};

export default About;