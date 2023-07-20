/** @format */

import React from "react";
import avatar_02 from "../assets/imgs/avatar_01.jpg";

import avatar_03 from "../assets/imgs/avatar_03.jpg";
import anh1 from "../assets/imgs/ava1.jpg";

import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
const Team = () => {
  return (
    <div className='max-w-[1140px] mx-auto px-4'>
      <div className=' text-center mt-[142px]'>
        <span className='text-base text-[#FF64AE] font-semibold leading-[125%]'>
          Professional Teams
        </span>
        <h2 className='text-[#091156] text-[36px] font-semibold leading-[125%] mt-[9px]'>
          The Professional expert
        </h2>
        <p className='text-base text-[#8B8B8B] font-normal tracking-widest mt-[21px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
        </p>
      </div>
      <div className='grid md:grid-cols-3 gap-0 mt-[87px]'>
        <div className='text-center  ease-in-out duration-300 rounded-[42px] '>
          <img
            className='w-[146px] h-[146px] rounded-full object-cover mx-auto mt-[91px]'
            src={anh1}
            alt=''
          />
          <span className='text-base text-[#FF64AE] font-semibold leading-[125%] mt-14 block'>
            Surgeon
          </span>
          <p className='text-[18px] text-[#091156] font-semibold leading-[125%] mt-[15px]'>
            Briyan Nevalli
          </p>
          <p className='text-[#8B8B8B] text-[14px] font-normal tracking-[1.4px] mt-[20px] md:max-w-[270px] mx-auto'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit
          </p>
          <div className='flex justify-center items-center gap-[34px] mt-[50px] pb-[96px]'>
            <BsTwitter className='text-[25px] text-[#091156] w-[49px] h-[49px] bg-white rounded-full flex items-center justify-center shadow-md w-12 h-12 p-2' />
            <SiLinkedin className='text-[25px] text-[#091156] w-[49px] h-[49px] bg-white rounded-full flex items-center justify-center shadow-md w-12 h-12 p-2' />
            <FaFacebookF className='text-[25px] text-[#091156] w-[49px] h-[49px] bg-white rounded-full flex items-center justify-center shadow-md w-12 h-12 p-2' />
          </div>
        </div>

        <div className='text-center  ease-in-out duration-300 rounded-[42px] '>
          <img
            className='w-[146px] h-[146px] rounded-full object-cover mx-auto mt-[91px]'
            src={avatar_02}
            alt=''
          />
          <span className='text-base text-[#FF64AE] font-semibold leading-[125%] mt-14 block'>
            Dermatologist
          </span>
          <p className='text-[18px] text-[#091156] font-semibold leading-[125%] mt-[15px]'>
            Bella sebastian
          </p>
          <p className='text-[#8B8B8B] text-[14px] font-normal tracking-[1.4px] mt-[20px] md:max-w-[270px] mx-auto'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit
          </p>
          <div className='flex justify-center items-center gap-[34px] mt-[50px] pb-[96px]'>
            <BsTwitter className='text-[25px] text-[#091156] w-[49px] h-[49px] bg-white rounded-full flex items-center justify-center shadow-md w-12 h-12 p-2' />
            <SiLinkedin className='text-[25px] text-[#091156] w-[49px] h-[49px] bg-white rounded-full flex items-center justify-center shadow-md w-12 h-12 p-2' />
            <FaFacebookF className='text-[25px] text-[#091156] w-[49px] h-[49px] bg-white rounded-full flex items-center justify-center shadow-md w-12 h-12 p-2' />
          </div>
        </div>

        <div className='text-center  ease-in-out duration-300 rounded-[42px] '>
          <img
            className='w-[146px] h-[146px] rounded-full object-cover mx-auto mt-[91px]'
            src={avatar_03}
            alt=''
          />
          <span className='text-base text-[#FF64AE] font-semibold leading-[125%] mt-14 block'>
            Stylist expert
          </span>
          <p className='text-[18px] text-[#091156] font-semibold leading-[125%] mt-[15px]'>
            Lilly Adams
          </p>
          <p className='text-[#8B8B8B] text-[14px] font-normal tracking-[1.4px] mt-[20px] md:max-w-[270px] mx-auto'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit
          </p>
          <div className='flex justify-center items-center gap-[34px] mt-[50px] pb-[96px]'>
            <BsTwitter className='text-[25px] text-[#091156] w-[49px] h-[49px] bg-white rounded-full flex items-center justify-center shadow-md w-12 h-12 p-2' />
            <SiLinkedin className='text-[25px] text-[#091156] w-[49px] h-[49px] bg-white rounded-full flex items-center justify-center shadow-md w-12 h-12 p-2' />
            <FaFacebookF className='text-[25px] text-[#091156] w-[49px] h-[49px] bg-white rounded-full flex items-center justify-center shadow-md w-12 h-12 p-2' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
