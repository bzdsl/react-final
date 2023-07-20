/** @format */

import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/imgs/logo-header.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navbarRef = useRef(null);

  const handleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsNavOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={navbarRef} className='relative'>
      <div className='w-full max-w-[1140px] mx-auto pt-10 px-4 flex justify-between items-center'>
        <h1 className='text-[#091156] text-[24px] font-bold'>
          <a href='#'>
            <img className='' src={logo} alt='Beauty' />
          </a>
        </h1>

        <ul className='md:flex items-center text-[#8B8B8B] text-base hidden'>
          <li className='text-[#091156] px-0 md:px-3 lg:px-[23px] '>
            <Link
              to='/'
              className='hover:text-[#8B8B8B] ease-in-out duration-500 font-medium'>
              Home+
            </Link>
          </li>
          <li className=' px-0 md:px-3 lg:px-[23px]'>
            <Link
              to='/about'
              className='hover:text-[#091156] ease-in-out duration-500 font-medium'>
              About
            </Link>
          </li>
          <li className='px-0 md:px-3 lg:px-[23px]'>
            <Link
              to='/service'
              className='hover:text-[#091156] ease-in-out duration-500 font-medium'>
              Service
            </Link>
          </li>
          <li className='px-0 md:px-3 lg:px-[23px]'>
            <Link
              to='/gallery'
              className='hover:text-[#091156] ease-in-out duration-500 font-medium'>
              Gallery
            </Link>
          </li>
          <li className='px-0 md:px-3 lg:px-[23px]'>
            <Link
              to='/blog'
              className='hover:text-[#091156] ease-in-out duration-500 font-medium'>
              Blog
            </Link>
          </li>
          <li className='px-0 md:px-3 lg:px-[23px] w-[158px] h-[52px] leading-[52px] text-center ml-[29px] rounded-[50px] bg-[#FF64AE] text-white font-semibold hover:bg-[#cc508b ] text-[#fffff]  ease-in-out duration-500'>
            <Link to='/contact' className=' text-center'>
              Contact
            </Link>
          </li>
        </ul>

        <div
          onClick={handleNav}
          className='md:hidden fixed top-15 right-7 z-50 cursor-pointer'>
          {!isNavOpen ? (
            <i className='fa-solid fa-bars text-[30px]'></i>
          ) : (
            <i className='fa-solid fa-xmark text-[30px]'></i>
          )}
        </div>

        <ul
          className={
            isNavOpen
              ? "z-50 md:hidden fixed right-0 top-0 w-[60%] h-full pt-10 uppercase font-semibold text-white bg-indigo-600 p-4 ease-in-out duration-500"
              : "fixed right-[-100%]"
          }>
          <li>
            <img className='' src={logo} alt='' />
          </li>
          <li className='p-4 mt-12 border-b border-b-gray-400 hover:text-[#091156] ease-in-out duration-500'>
            <Link to='/'>Home</Link>
          </li>
          <li className='p-4 border-b border-b-gray-400 hover:text-[#091156] ease-in-out duration-500'>
            <Link to='/about'>About</Link>
          </li>
          <li className='p-4 border-b border-b-gray-400 hover:text-[#091156] ease-in-out duration-500'>
            <Link to='/service'>Service</Link>
          </li>
          <li className='p-4 border-b border-b-gray-400 hover:text-[#091156] ease-in-out duration-500'>
            <Link to='/gallery'>Gallery</Link>
          </li>
          <li className='p-4 border-b border-b-gray-400 hover:text-[#091156] ease-in-out duration-500'>
            <Link to='/blog'>Blog</Link>
          </li>
          <li className='pt-4 ease-in-out duration-500 mt-3'>
            <Link
              to='/contact'
              className='bg-pink-500 px-6 py-4 rounded-3xl hover:text-[#fffff] hover:opacity-90 ease-in-out duration-500'>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
