import React from 'react'

const HeroSection = () => {
  return (
    <section>
        <div className='hero-container mt-[5rem] lg:mt-[9rem]'>
            <div className='hero-content-1 md:grid grid-cols-2 gap-[100px] items-center lg:px-[100px]'>
                <div className='hero-text mb-[20px] px-[20px]'>
                    <p className='hero-title font-bold text-[#000000] text-[32px] md:text-[48px] mb-[21px]'>
                        Amazing Experiences from Our Wonderful Customers
                    </p>
                    <p className='desc text-[18px] font-normal'>
                        Here is what customers and vendors are saying about us, you can share your stories with us too.
                    </p>
                </div>
                <div className='hero-image'>
                    <img src='testimonial image 1.png' className='w-[536px] h-auto object-cover'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection