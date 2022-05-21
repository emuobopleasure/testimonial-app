import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi';
import { VscClose } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import Button from './Button';

const Header = () => {

    const [showMenu, setShowMenu] = useState(false)

  return (
    <div className='header fixed top-0 w-full bg-[#ffffff]'>
        <div className='nav-wrapper px-[20px] lg:px-[100px] py-4 items-center md:flex justify-between md:py-2'>
            <div className='nav-header flex items-center justify-between'>
                <div className='logo'>
                    <Link to='/'>
                        <img src='vasiti logo.png' className='logo object-cover'/>
                    </Link>
                </div>
                <div className='menu-buttons md:hidden text-2xl'>
                  { !showMenu && <button onClick={() => setShowMenu(true)} className='open-menu'>
                        <FiMenu/>
                    </button>
                  }
                    { showMenu &&  <button onClick={() => setShowMenu(false)} className='close-menu text-2xl'>
                        <VscClose/>
                    </button>}
                </div>
            </div>
            <div className={showMenu ? 'nav-links-container mt-3 lg:mt-0 md:flex items-center justify-between md:basis-[60%]' : 'hidden md:flex items-center justify-between h-[4rem]'}>
                <ul className='nav-links-list text-[13px] flex flex-col items-start md:flex-row md:items-center gap-6 py-2'>
                    <li className='order-2'>
                        ABOUT US
                    </li>
                    <li className='order-3'>
                        <Link to='/story'>
                            STORY
                        </Link>
                    </li>
                    <li className='order-4'>
                        CONTACT
                    </li>
                    <li className='order-5'>
                        LOG IN
                    </li>
                    <li className='order-1 lg:order-5'>
                        <Button
                            text='SIGN UP' styling='py-[8.5px] px-[16px] w-[84px] h-[32px] text-[13px] font-medium'
                        />
                    </li>
                </ul>
            </div>
        </div>
        <div className='nav-bottom hidden md:block border border-[rgba(0,_0,_0,_0.08)] shadow-[1px_4px _px_rgba(0, 0, 0, 0.04)] px-[150px]'>
            <ul className='text-[13px] flex justify-around py-1'>
                <li>MARKETPLACE</li>
                <li>WHOLESALE CENTER</li>
                <li>SELLER CENTER</li>
                <li>SERVICES</li>
                <li>INTERNSHIPS</li>
                <li>EVENTS</li>
            </ul>
        </div>
    </div>
  )
}

export default Header