/** @format */

import React from "react";
import "./style.css";
import about from "../assets/imgs/about.jpg";
import bg_about from "../assets/imgs/bg-about.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import about1 from "../assets/imgs/aboutthang.png";

const AboutUs = () => {
  return (
    <div className='relative'>
      <div className='absolute top-[-100%] right-0 z-[-5]'>
        <img src={bg_about} alt='' />
      </div>
      <div className='max-w-[1140px] mx-auto mt-[135px] flex flex-col md:flex-row items-center justify-between gap-[30px] px-4'>
        <div className='w-[58%]'>
          <span className='text-[#FF64AE] text-base font-semibold'>
            About Us
          </span>
          <h2 className='text-[#091156] mt-[10px] text-4xl font-semibold leading-[125%]'>
            We are the best beauty clinic
          </h2>
          <p className='text-[#8B8B8B] mt-[19px] max-w-[483px] text-base font-normal tracking-widest'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam
            suscipit purus donec amet. Egestas volutpat facilisi eu libero.
            Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in
            suspendisse placerat.
            <br />
            <br />
            Id dui erat sed quam tellus in purus. Pellentesque congue fringilla
            cras tellus enim.
          </p>

          <div className='flex gap-[44px] mt-[49px] items-center'>
            <div className='w-[200px] h-[58.361px] rounded-[50px] bg-[#FF64AE] shadow-[0px_17px_22px_0px_#FFEDF6] text-center'>
              <a
                className='p-4 leading-[58.361px] text-white text-base font-semibold tracking-widest hover:text-[#091156] hover:opacity-90 ease-in-out duration-500'
                href='#'>
                Learn More
              </a>
            </div>
            <div className='md:hidden'>
              <button className='watch-video-button'>
                <span>
                  {" "}
                  <BsFillPlayCircleFill />
                </span>{" "}
                Watch Video
              </button>
            </div>
          </div>
        </div>
        <div className='w-[42%] mt-6 md:mt-0'>
          <img
            className='w-[560px] h-[450px] object-cover rounded-[50px] shadow-[0px_0px_50px_25px_#FFF]'
            src={about1}
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
