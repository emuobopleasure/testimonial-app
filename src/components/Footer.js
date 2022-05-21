import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className='footer-container bg-[#25201D] text-[#FFFFFF] px-4 pt-[4rem] pb-[6rem] lg:px-[100px] lg:relative'>
            <div className='footer-1 lg:px-[50px] md:mb-10'>
                <div className='content-wrapper flex flex-col gap-16 items-center justify-center md:flex-row md:gap-36'>
                    <div className='call-to-action flex flex-col gap-8 md:order-2'>
                        <p className='font-bold text-[36px] lg:text-[40px]'>
                            Be a  member
                            of our community 🎉
                        </p>
                        <p className='text-[14px]'>
                            We’d make sure you’re always first to know what’s happening on Vasiti—thus, the world.
                        </p>
                        <div className='search-form bg-[rgba(255,_255,_255,_0.2)] rounded-[6px] flex justify-between py-1'>
                            <input type='text' placeholder='enter your email address' className='text-input bg-transparent w-full placeholder:text-[#ffffff] border-none'/>
                            <button className='subscription-button text-[#25201D] bg-[#FFFFFF] rounded-[4px] shadow-[1px 4px 8px rgba(239,_88,_3,_0.2)] w-[119px] h-[42px] font-medium px-[20px] py-[13.2]'>
                                SUBSCRIBE
                            </button>
                        </div>
                    </div>
                    <div className='device-image md:order-1'>
                        <img src='subscribe-banner 1.png'/>
                    </div>
                </div>
            </div>
            <div className='footer-2'>
                <div className='content-wrapper2 grid grid-cols-2 gap-7 md:flex justify-between'>
                    <div className='row-1'>
                        <p className='footer-text font-bold'>
                            Company
                        </p>
                        <p className='footer-sub-text'>
                            About us
                        </p>
                        <p className='footer-sub-text'>
                            Term of Use
                        </p>
                        <p className='footer-sub-text'>
                            Privacy Policy
                        </p>
                        <p className='footer-sub-text'>
                            Press & Media
                        </p>
                    </div>
                    <div className='row-2'>
                        <p className='footer-text font-bold'>
                            Products
                        </p>
                        <p className='footer-sub-text'>
                            Marketplace
                        </p>
                        <p className='footer-sub-text'>
                            Magazine
                        </p>
                        <p className='footer-sub-text'>
                            Seller
                        </p>
                        <p className='footer-sub-text'>
                            Wholesale
                        </p>
                        <p className='footer-sub-text'>
                            Services
                        </p>
                    </div>
                    <div className='row-3'>
                        <p className='footer-text font-bold'>
                            Careers 
                        </p>
                        <p className='footer-sub-text'>
                            Become a Campus Rep
                        </p>
                        <p className='footer-sub-text'>
                            Become a Vasiti Influencer
                        </p>
                        <p className='footer-sub-text'>
                            Become a Campus writer
                        </p>
                        <p className='footer-sub-text'>
                            Become an Affiliate
                        </p>
                    </div>
                    <div className='row-4'>
                        <p className='footer-text font-bold'>
                            Get in touch 
                        </p>
                        <p className='footer-sub-text'>
                            Contact us
                        </p>
                        <p className='footer-sub-text'>
                            Partner with us
                        </p>
                        <p className='footer-sub-text'>
                            Advertise with us
                        </p>
                        <p className='footer-sub-text'>
                            Help/FAQs
                        </p>
                    </div>
                    <div className='row-5'>
                        <p className='footer-text font-bold text-[14px]'>
                            Join our community 
                        </p>
                        <div className='social-icons flex justify-between'>
                            <img src='Ellipse 1.png'/>
                            <img src='Ellipse 2.png'/>
                            <img src='Ellipse 3 (1).png'/>
                            <img src='Ellipse 3.png'/>
                        </div>
                        <p className='newsletter footer-sub-text mt-10'>
                            Email Newsletter
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer