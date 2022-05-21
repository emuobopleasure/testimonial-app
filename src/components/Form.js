import React from 'react'
import Button from './Button'

const Form = () => {
  return (
    <div className='form-page bg-[#FFFFFF] lg:w-[527px] mx-auto rounded-[16px] lg:my-5 mt-[4rem] lg:mt-[9rem]'>
        <div className='div-container px-[20px] pb-[40px] pt-[57px] lg:px-[32px]'>
            <p className='form-title text-[28px] font-bold mb-[43px]'>
                Share your amazing story!
            </p>
            <form className='form flex flex-col gap-6'>
                <div className='form-group flex flex-col gap-4'>
                    <label htmlFor='image' className='label'>
                        Upload your Picture
                    </label>
                    <input type='url' placeholder='choose image' className='lg:w-[463px] h-[62px] rounded-[8px] border border-[#EAEAEA]'/>
                </div>
                <div className='text-input-group md:flex justify-between'>
                    <div className='form-group mb-4 flex flex-col gap-4'>
                        <label htmlFor='firstName' className='label'>
                            Firstname
                        </label>
                        <input type='text' className='lg:w-[221px] h-[62px] rounded-[8px] bg-[rgba(254,_254,_254,_0.3)] border border-[#EAEAEA]'/>
                    </div>
                    <div className='form-group flex flex-col gap-4'>
                    <label htmlFor='lastName' className='label'>
                        Lastname
                    </label>
                    <input type='text' className='lg:w-[221px] h-[62px] rounded-[8px] bg-[rgba(254,_254,_254,_0.3)] border border-[#EAEAEA]'/>
                    </div>
                </div>
                <div className='form-group mb-4 flex flex-col gap-4'>
                    <label htmlFor='firstName' className='label'>
                        Share your story
                    </label>
                    <textarea type='text' className='md:w-full h-[111px] rounded-[8px] bg-[rgba(254,_254,_254,_0.3)] border border-[#EAEAEA]'/>
                </div>
                <div className='form-group md:flex justify-between'>
                    <p className='question text-center'>
                        What did you interact with Vasiti as?
                    </p>
                    <div className='radio-input-group flex justify-around items-center lg:gap-4'>
                        <div className='form-group flex items-center gap-3'>
                            <input type='radio' className='radio-btn checked:bg-[#FF5C00] hover:bg-[#FF5C00] focus:bg-[#FF5C00] active:bg-[#FF5C00]'/>
                            <label htmlFor='customer' className='label'>
                                Customer
                            </label>
                        </div>
                        <div className='radio group flex items-center gap-3'>
                            <input type='radio' className='radio-btn checked:bg-[#FF5C00] hover:bg-[#FF5C00] focus:bg-[#FF5C00] active:bg-[#FF5C00]'/>
                            <label htmlFor='customer' className='label'>
                                Vendor
                            </label>
                        </div>
                    </div>
                </div>
                <div className='form-group flex flex-col gap-4'>
                    <label htmlFor='lastName' className='label'>
                        City or Higher Institution (for Students)
                    </label>
                    <input type='text' className='lg:w-[221px] h-[62px] rounded-[8px] bg-[rgba(254,_254,_254,_0.3)] border border-[#EAEAEA]'/>
                </div>
                <div className='btn flex justify-end'>
                    <Button
                        text='Share your story!'
                    />
                </div>
            </form>
        </div>
    </div>
  )
}

export default Form