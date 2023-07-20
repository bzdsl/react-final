/** @format */

import React from "react";
import hero from "../assets/imgs/hero.png";
import bg_header from "../assets/imgs/bg-header.png";

const Hero = () => {
  return (
    <div>
      <div className='absolute top-0 left-0 z-[-5]'>
        <img className='' src={bg_header} alt='' />
      </div>
      <div className='px-4'>
        {/* Hero */}
        <div className='flex justify-between items-center gap-[22px]  w-full max-w-[1140px] mx-auto mt-[159px]'>
          <div className='ml-[39px]'>
            <h1 className='text-3xl md:text-5xl sm:text-4xl text-[#091156] font-semibold leading-[125%]'>
              Clinic & beauty consultant
            </h1>
            <p className='text-base text-[#091156] font-medium max-w-[474px] tracking-widest'>
              It is a long established fact that a reader will be by the
              readable content of a page.
            </p>
            <button className='mt-7 px-[41px] py-[16px] bg-[#FF64AE] rounded-[50px] text-white text-base font-semibold tracking-widest hover:text-[#fffff] hover:opacity-90 ease-in-out duration-500  '>
              More Details
            </button>
          </div>
          <div>
            <img src={hero} alt='Clinic & beauty consultant' />
          </div>
        </div>
        {/* button */}
        <div className='flex items-center justify-center gap-2 mt-[136px]'>
          <span className='w-[15px] h-[3px] bg-[#EEEEEE] rounded-[50px]'></span>
          <span className='w-[25.3px] h-2 bg-[#414880] rounded-[50px]'></span>
          <span className='w-[15px] h-[3px] bg-[#EEEEEE] rounded-[50px]'></span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
