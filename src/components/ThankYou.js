import React from 'react'
import Button from './Button'

const ThankYou = () => {
  return (
    <div className='success-page lg:w-[527px] h-[627px] bg-[#ffffff] mx-auto rounded-[16px]'>
        <div className='content pt-[65px] pb-[101] flex flex-col gap-12 items-center justify-center px-[20px] lg:px-[86px]'>
            <div>
                <img src='confetti.png' className='confetti object-cover'/>
            </div>
            <div>
                <p className='text-[28px] font-bold'>
                    Thank you for sharing your story!
                </p>
            </div>
            <div>
                <p className='text-[#4A4A4A] text-center'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <div>
                <Button
                    text='Close'
                />
            </div>
        </div>
    </div>
  )
}

export default ThankYou