import React, { useState, useContext } from 'react';

import Socials from './Socials';
import Logo from '../img/header/logo.svg';
import MobileNav from './MobileNav';

import { Link } from 'react-router-dom';
import { CursorContext } from '../context/CursorContext';

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const [isDropdownVisible, setDropdownVisible] = useState(false)

  return (
    <header className='fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
      <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
        {/* logo */}
        <Link to={'/portfolio'} className='text-[#696c6d] hover:text-primary transition font-primary'>
          Emma Tysinger Photography
        </Link>
        {/* nav - initially hidden - show on desktop mode */}
        <nav onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className='hidden xl:flex gap-x-9 text-primary font-primary font-semibold'>
          <Link to={'/about'} className='text-[#696c6d] hover:text-primary transition'>
            About Me
          </Link>

          <div className='relative inline-block'>
            <button 
              onMouseEnter={() => setDropdownVisible(true)}
              onMouseLeave={() => setDropdownVisible(false)}
              className="text-[#696c6d] hover:text-primary transition" 
              type="button"
              >
              Portfolio 
            </button>

            {isDropdownVisible && (
              <div 
                onMouseEnter={() => setDropdownVisible(true)}
                onMouseLeave={() => setDropdownVisible(false)}
                className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-100% dark:bg-gray-700"
                style={{ top: '100%', left: 0 }}
              >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <Link to={'/portfolio/travel'} className='block px-4 py-2 text-[#696c6d] hover:text-primary transition'>
                      Travel
                    </Link>
                  </li>
                  <li>
                    <Link to={'/portfolio/people'} className='block px-4 py-2 text-[#696c6d] hover:text-primary transition'>
                      People
                    </Link>
                  </li>
                  <li>
                    <Link to={'/portfolio/other'} className='block px-4 py-2 text-[#696c6d] hover:text-primary transition'>
                      Other
                    </Link>
                  </li>
                  {/* ... other list items ... */}
                </ul>
              </div>
            )}
          </div>

          <Link to={'/contact'} className='text-[#696c6d] hover:text-primary transition'>
            Contact
          </Link>
        </nav>
      </div>
      {/* socials */}
      <Socials />
      {/* mobile nav */}
      <MobileNav />
    </header>
  );
};

export default Header;
