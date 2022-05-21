import React from 'react'

export const Experience = ({styling, userName, storyImg, userType, mainImg, expImgStyling, userTypeStyle}) => {
  return (
    <article>
        <div className={`hero-content-2 bg-[#222222] text-[#FFFFFF] md:grid grid-cols-2 items-center lg:px-[100px] lg:pt-[64px] ${styling}`}>
            <div className='hero-text1 px-[25px] py-[55px] order-2'>
                <p className='hero-title text-[24px] font-semibold md:text-[32px] md:font-bold'>
                    {userName}
                </p>
                <p className={`customer inline-block rounded-[4px] p-[7px] my-3 border border-[rgba(255,_255,_255,_0.4)]${userTypeStyle}`}>
                    {userType}
                </p>
                <p className='her0-desc text-[16px] font-normal md:text-[18px]'>
                    I had the best experience shopping
                    with vasiti. Usability of the website 
                    was great, very good customer 
                    service, an all round great experience. 
                    I would definately be coming back! I 
                    had the best experience shopping 
                    with vasiti. Usability of the website 
                    was great, very good customer 
                    service, an all round great experience. 
                    I would definately be coming back!
                </p>
                <div>
                    <img src={storyImg} className='share-story-image w-[295px] h-[37px] mt-10 mx-auto lg:mx-0'/>
                </div>
            </div>
            <div className={`experience-image2 order-1 ${expImgStyling}`}>
                <img src={mainImg} className='black-image object-cover'/>
            </div>
        </div>
    </article>
  )
}
