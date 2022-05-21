import React from 'react'
import { Experience } from './Experience'
import Testimonial from './Testimonial'

const TestimonialsGrid = () => {
  return (
    <section>
      <div className='grid-container'>
        <Experience
          userName={'Oby’s Experience'}
          userType={'CUSTOMER'}
          storyImg={'share-story.png'}
          mainImg={'black-beautiful.png'}
        />
        <div className='reviews-container mt-[4rem] grid grid-flow-row justify-center md:flex flex-wrap md:justify-between lg:px-[100px]'>
            <Testimonial/>
            <Testimonial/>
            <Testimonial/>
            <Testimonial/>
            <Testimonial/>
            <Testimonial/>
        </div>
        <Experience
        styling={'bg-[#FFF8F5] text-[#242120]'}
        userName={'Josiah’s Experience'}
        userType={'CUSTOMER'}
        storyImg={'share-story2.png'}
        mainImg={'woman-shopping.png'}
        expImgStyling={'order-3'}
        userTypeStyle={'text-[#FF5C00] border border-[rgba(255,_92,_0,_0.4)]'}
      />
      <div className='reviews-container mt-[4rem] grid grid-flow-row justify-center md:flex flex-wrap md:justify-between lg:px-[100px]'>
            <Testimonial/>
            <Testimonial/>
            <Testimonial/>
            <Testimonial/>
            <Testimonial/>
            <Testimonial/>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsGrid