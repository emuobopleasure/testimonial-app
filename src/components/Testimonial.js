import React from 'react'

const Testimonial = () => {
  return (
    <article>
        <div className='card flex flex-col w-[341px] h-[563px] justify-evenly items-center'>
            <div className='image'>
                <img src='Ellipse 24.png' className='w-[200px] h-[200px] object-cover'/>
            </div>
            <div>
                <p className='userName text-[24px] font-semibold'>
                    Adetola Fashina
                </p>
                <p className='location/type font-medium'>
                    IN IKEJA 
                    <span className='usertype text-[13px] text-[#0D019A] p-[7px] bg-[#EEF8FF] rounded-[4px] ml-6'>
                        CUSTOMER
                    </span>
                </p>
            </div>
            <div className='user-text'>
                <p className='user-review font-normal'>
                    Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deser unt ut voluptate aute id deserunt nisi. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
            </div>
        </div>
    </article>
  )
}

export default Testimonial