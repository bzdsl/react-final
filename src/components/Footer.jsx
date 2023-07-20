/** @format */

import React from "react";
import logo_footer from "../assets/imgs/logo-footer.png";
import bg_footer_01 from "../assets/imgs/bg-footer-01.png";
import bg_footer_02 from "../assets/imgs/bg-footer-02.png";

import BackToTopButton from "./BackToTopButton";

const Footer = () => {
  return (
    <div
      className='relative w-full h-full bg-cover bg-no-repeat mt-[61px] '
      style={{ backgroundImage: `url(${bg_footer_01})` }}>
      <div
        className='w-full h-[225px] object-cover absolute bottom-0 left-0 right-0 z-[-1]'
        style={{ backgroundImage: `url(${bg_footer_02})` }}></div>
      <div className='max-w-[1140px] mx-auto pt-[237px] px-4'>
        <div className='grid md:grid-cols-4 gap-[100px] '>
          <div className='col-span-2'>
            <a href='#'>
              <img className='md:ml-0 mx-auto' src={logo_footer} alt='' />
            </a>
            <div className='ml-8 md:text-left text-center'>
              <p className='mt-[33px] text-[#D7DBFF] text-base  tracking-widest '>
                <strong className='font-bold'>Beautice</strong> is a Beauty
                Clinic WordPress Theme.
              </p>
              <p className='text-[#D7DBFF] text-[14px] font-medium tracking-[1.5px] mt-[26px]'>
                Baker Steet 101, NY, United States.
              </p>
              <div className='md:flex text-center gap-7 items-center text-[#D7DBFF] text-[14px] italic mt-[3px]'>
                <a href='tel:+521 569 8966.'>+521 569 8966.</a>
                <a className='underline' href='mailto: mail@company.com.'>
                  mail@company.com.
                </a>
              </div>
            </div>
          </div>
          <div className='md:text-left  mx-auto'>
            <span className='text-white text-[18px] font-semibold tracking-[1.8px]'>
              Pages
            </span>
            <ul className='text-[#D7DBFF] text-base font-normal tracking-widest flex flex-col gap-[11px]'>
              <li className='mt-[24px] flex items-center '>
                <span className='text-[13px] mr-2'>
                  <i className='fa-solid fa-play'></i>
                </span>
                <a
                  href='#'
                  className='hover:text-gray-500 ease-in-out duration-300'>
                  Home
                </a>
              </li>
              <li className=' flex items-center '>
                <span className='text-[13px] mr-2'>
                  <i className='fa-solid fa-play'></i>
                </span>
                <a
                  href='#'
                  className='hover:text-gray-500 ease-in-out duration-300'>
                  About
                </a>
              </li>
              <li className=' flex items-center '>
                <span className='text-[13px] mr-2'>
                  <i className='fa-solid fa-play'></i>
                </span>
                <a
                  href='#'
                  className='hover:text-gray-500 ease-in-out duration-300'>
                  Services
                </a>
              </li>
              <li className=' flex items-center '>
                <span className='text-[13px] mr-2'>
                  <i className='fa-solid fa-play'></i>
                </span>
                <a
                  href='#'
                  className='hover:text-gray-500 ease-in-out duration-300'>
                  Gallery
                </a>
              </li>
              <li className=' flex items-center '>
                <span className='text-[13px] mr-2'>
                  <i className='fa-solid fa-play'></i>
                </span>
                <a
                  href='#'
                  className='hover:text-gray-500 ease-in-out duration-300'>
                  Team
                </a>
              </li>
            </ul>
          </div>

          <div className='md:text-left  mx-auto'>
            <span className='text-white text-[18px] font-semibold tracking-[1.8px]'>
              Informations
            </span>
            <ul className='text-[#D7DBFF] text-base font-normal tracking-widest flex flex-col gap-[11px]'>
              <li className='mt-[24px] flex items-center '>
                <span className='text-[13px] mr-2'>
                  <i className='fa-solid fa-play'></i>
                </span>
                <a
                  href='#'
                  className='hover:text-gray-500 ease-in-out duration-300'>
                  Terms & conditions
                </a>
              </li>
              <li className=' flex items-center '>
                <span className='text-[13px] mr-2'>
                  <i className='fa-solid fa-play'></i>
                </span>
                <a
                  href='#'
                  className='hover:text-gray-500 ease-in-out duration-300'>
                  Privacy policy
                </a>
              </li>
              <li className=' flex items-center '>
                <span className='text-[13px] mr-2'>
                  <i className='fa-solid fa-play'></i>
                </span>
                <a
                  href='#'
                  className='hover:text-gray-500 ease-in-out duration-300'>
                  Blog
                </a>
              </li>
              <li className=' flex items-center '>
                <span className='text-[13px] mr-2'>
                  <i className='fa-solid fa-play'></i>
                </span>
                <a
                  href='#'
                  className='hover:text-gray-500 ease-in-out duration-300'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='md:flex-row flex flex-col gap-4 items-center justify-between mt-[154px] pb-[90px]'>
          <div className='flex items-center justify-between gap-[45px] text-white'>
            <span className='text-[25px]'>
              <i className='fa-brands fa-facebook-f'></i>
            </span>
            <span className='text-[25px]'>
              <i className='fa-brands fa-twitter'></i>
            </span>
            <span className='text-[25px]'>
              <i className='fa-brands fa-linkedin-in'></i>
            </span>
            <span className='text-[25px]'>
              <i className='fa-brands fa-youtube'></i>
            </span>
            <span className='text-[25px]'>
              <i className='fa-brands fa-instagram'></i>
            </span>
          </div>
          <p className='text-[#D7DBFF] font-normal tracking-widest text-base'>
            © AltDesain Studio 2021 - All right reserved.
          </p>
          <BackToTopButton />
        </div>
      </div>
    </div>
  );
};

export default Footer;
