/** @format */

import React from "react";
import vidAbout from "../../assets/video/about.mp4";
import Team from "../../components/Team";
import Slogan from "../../components/Slogan";
import AboutItem from "../../components/AboutItem";

import about_01 from "../../assets/imgs/about-01.png";
import about_02 from "../../assets/imgs/about-02.png";
import about_bg from "../../assets/imgs/about-bg.png";
import about_slogan from "../../assets/imgs/bg-item-about.png";
import about_slogan_mask from "../../assets/imgs/bg_mask.png";

import logo_about_01 from "../../assets/imgs/logo-about-01.png";
import logo_about_02 from "../../assets/imgs/logo-about-02.png";
import logo_about_03 from "../../assets/imgs/logo-about-03.png";
import logo_about_04 from "../../assets/imgs/logo-about-04.png";
import logo_about_05 from "../../assets/imgs/logo-about-05.png";

const About = () => {
  return (
    <>
      <div className='max-w-[1140px] mx-auto px-4 mt-[125px]'>
        <div>
          <span className='text-[#ff64ae] text-base font-semibold '>About</span>
          <h2 className='text-sub-primary text-[#091156] text-3xl md:text-4xl max-w-[732px] font-semibold'>
            We are a leading beauty clinic that has been around since 2002
          </h2>
          <p className='text-desc text-[#8b8b8b] text-base font-normal tracking-widest'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </p>
          <div>
            <video
              src={vidAbout}
              controls
              className='rounded-[50px] mt-[58px]'></video>
          </div>
        </div>

        <Team />
      </div>

      <Slogan
        backgroundImage={about_slogan}
        imgMask={about_slogan_mask}
        className='flex items-center justify-center text-center mt-[150px] h-[529px] w-full'>
        <span className='text-[#ABB4FF] font-semibold'>Business Slogan</span>
        <h2 className='max-w-[732px] text-white text-4xl leading-[125%] font-semibold'>
          Best responsibility and service for our customers
        </h2>
        <p className='max-w-[680px] text-[#CACACA] text-base tracking-widest font-normal'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis
        </p>
      </Slogan>

      {/* About */}
      <div className='relative'>
        <div className='absolute top-[20%] left-0 z-[-5]'>
          <img src={about_bg} alt='' />
        </div>
        <AboutItem
          img={about_01}
          title='Our Vision'
          heading='Be the best and go international'
          desc_01='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Elit, quam suscipit purus donec amet. Egestas volutpat
                                facilisi eu libero.'
          desc_02='Nunc, ipsum ornare mauris sit quam quis enim. Varius
                                tellus in suspendisse placerat."'
        />
        <AboutItem
          img={about_02}
          className='flex-row-reverse'
          title='Our Mission'
          heading='Special & premium service
                    to any clients'
          desc_01='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.'
          desc_02='Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.'
        />
      </div>
      {/* Out Clear */}
      <div>
        <div className='max-w-[1140px] mx-auto px-4 '>
          <div className='text-center mt-[134px]'>
            <span className='text-[#FF64AE] text-base font-semibold'>
              Our Clients
            </span>
            <h2 className='text-subPrimary text-[#091156] mt-[10px] text-4xl font-semibold leading-[125%]'>
              Well-known agencies
            </h2>
            <p className='text-desc text-[#8b8b8b] mt-[19px] text-base font-normal tracking-widest'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>

          <div className='flex justify-center items-center gap-[60px] mt-[94px]'>
            <img src={logo_about_01} alt='Logo 1' />
            <img src={logo_about_02} alt='Logo 2' />
            <img src={logo_about_03} alt='Logo 3' />
            <img src={logo_about_04} alt='Logo 4' />
            <img src={logo_about_05} alt='Logo 5' />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
