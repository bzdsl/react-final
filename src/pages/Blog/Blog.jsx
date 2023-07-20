import React from "react";
import Slogan from "../../components/Slogan";
import slogan_mask from "../../assets/imgs/bg_mask_small.png";
import BlogItem from "../../components/BlogItem";

import blog_slogan from "../../assets/imgs/blog-slogan.png";
import blog_img_01 from "../../assets/imgs/gallery-01.jpg";
import blog_img_02 from "../../assets/imgs/gallery-02.jpg";
import blog_img_03 from "../../assets/imgs/gallery-03.jpg";
import blog_img_04 from "../../assets/imgs/gallery-04.jpg";
import blog_img_05 from "../../assets/imgs/gallery-05.jpg";
import blog_img_06 from "../../assets/imgs/gallery-06.jpg";

const Blog = () => {
    const container = "max-w-[1140px] mx-auto px-4";
    const title = "text-primary text-base font-semibold leading-[125%]";
    const heading = "text-subPrimary text-4xl font-semibold leading-[125%]";
    const desc = "text-desc text-base font-normal tracking-widest";
    const flexCenter = "flex justify-center items-center";

    return (
        <div>
            <div className="mt-[72px]">
                <Slogan
                    backgroundImage={blog_slogan}
                    imgMask={slogan_mask}
                    className={`${flexCenter} h-[258px] text-white`}
                >
                    <div className="flex items-center gap-[910px]">
                        <div>
                            <h2 className="text-4xl font-semibold leading-[125%]">
                                Blog
                            </h2>
                        </div>
                        <span className="text-base text-[#D9D9D9] font-medium tracking-widest">
                            Home • Blog
                        </span>
                    </div>
                </Slogan>
            </div>

            <div className={`${container} mt-[108px]`}>
                <div className="flex gap-[60px]">
                    <div>
                        {/* Block Consultation */}
                        <BlogItem
                            img={blog_img_01}
                            title="Consultation"
                            heading="How much does a consultation cost at our clinic?"
                            desc="A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…"
                        ></BlogItem>

                        {/* Beauty */}
                        <BlogItem
                            img={blog_img_02}
                            title="Beauty"
                            heading="Watch out! don't choose the wrong beauty product"
                            desc="A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…"
                            className="mt-[133px]"
                        ></BlogItem>

                        {/* Treatments */}
                        <BlogItem
                            img={blog_img_03}
                            title="Treatments"
                            heading="About skin care you need to know"
                            desc="A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…"
                            className="mt-[133px]"
                        ></BlogItem>
                    </div>
                    <div>
                        {/* Search */}
                        <div className="w-[350px] h-[65px] rounded-[50px] bg-white shadow-[-2px_4px_31px_9px_#F2F4FF] flex items-center ">
                            <input
                                type="text"
                                placeholder="Search here ..."
                                className="py-[20px] pl-[24px] bg-transparent outline-none"
                            />
                            <button className="w-[76px] h-[65px] rounded-r-[50px] bg-subPrimary ml-12">
                                <div>
                                    <i className="fa-solid fa-magnifying-glass text-white"></i>
                                </div>
                            </button>
                        </div>

                        {/* Posts */}
                        <div className="max-w-[350px] rounded-[25px] shadow-[-2px_4px_31px_9px_#F2F4FF] mt-[76px] py-[60px] pl-[49px]">
                            <h3 className="text-base text-subPrimary font-semibold leading-[125%]">
                                Recent Posts
                            </h3>
                            <div className="mt-[28px] flex gap-[26px] items-center">
                                <img
                                    className="w-[82px] h-[82px] rounded-[10px] object-cover "
                                    src={blog_img_04}
                                    alt=""
                                />
                                <div>
                                    <span className="text-primary text-[14px] font-semibold">
                                        01 jan 2021
                                    </span>
                                    <p className="text-desc text-[12px] font-normal tracking-[1.2px]">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-[26px] flex gap-[26px] items-center">
                                <img
                                    className="w-[82px] h-[82px] rounded-[10px] object-cover "
                                    src={blog_img_05}
                                    alt=""
                                />
                                <div>
                                    <span className="text-primary text-[14px] font-semibold">
                                        01 jan 2021
                                    </span>
                                    <p className="text-desc text-[12px] font-normal tracking-[1.2px]">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-[26px] flex gap-[26px] items-center">
                                <img
                                    className="w-[82px] h-[82px] rounded-[10px] object-cover "
                                    src={blog_img_06}
                                    alt=""
                                />
                                <div>
                                    <span className="text-primary text-[14px] font-semibold">
                                        01 jan 2021
                                    </span>
                                    <p className="text-desc text-[12px] font-normal tracking-[1.2px]">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Categories */}
                        <div className="max-w-[350px] mt-[83px] rounded-[25px] bg-white shadow-[-2px_4px_31px_9px_#F2F4FF] pt-[58px] pb-[49px] pl-[49px]">
                            <span className="text-subPrimary text-base font-semibold leading-[125%]">
                                Categories
                            </span>
                            <ul className="mt-[22px] text-desc font-normal tracking-[1.4px]">
                                <li className="mt-[3px]">
                                    <a href="">Consultation</a>
                                </li>
                                <li className="mt-[3px]">
                                    <a href="">Beauty</a>
                                </li>
                                <li className="mt-[3px]">
                                    <a href="">Treatments</a>
                                </li>
                                <li className="mt-[3px]">
                                    <a href="">News</a>
                                </li>
                            </ul>
                        </div>

                        {/* Tags */}
                        <div className="max-w-[350px] h-[274px] mt-[83px]  rounded-[25px] bg-white shadow-[-2px_4px_31px_9px_#F2F4FF]">
                            <div className="w-full h-full flex flex-col items-center justify-center">
                                <span className="mr-auto ml-[49px] text-subPrimary text-base font-semibold leading-[125%]">
                                    Cloud Tags
                                </span>
                                <div className="grid grid-cols-3 gap-[8px] mt-[25px]">
                                    <button className="w-[82px] h-[26px] text-[14px] tracking-[1.4px] text-center text-[#8B8B8B] rounded-[50px] shadow-[-2px_4px_31px_9px_#F2F4FF]">
                                        beauty
                                    </button>
                                    <button className="w-[82px] h-[26px] text-[14px] tracking-[1.4px] text-center text-[#8B8B8B] rounded-[50px] shadow-[-2px_4px_31px_9px_#F2F4FF]">
                                        cute
                                    </button>
                                    <button className="w-[82px] h-[26px] text-[14px] tracking-[1.4px] text-center text-[#8B8B8B] rounded-[50px] shadow-[-2px_4px_31px_9px_#F2F4FF]">
                                        skin
                                    </button>
                                    <button className="w-[82px] h-[26px] text-[14px] tracking-[1.4px] text-center text-[#8B8B8B] rounded-[50px] shadow-[-2px_4px_31px_9px_#F2F4FF]">
                                        glow
                                    </button>
                                    <button className="w-[82px] h-[26px] text-[14px] tracking-[1.4px] text-center text-[#8B8B8B] rounded-[50px] shadow-[-2px_4px_31px_9px_#F2F4FF]">
                                        style
                                    </button>
                                    <button className="w-[82px] h-[26px] text-[14px] tracking-[1.4px] text-center text-[#8B8B8B] rounded-[50px] shadow-[-2px_4px_31px_9px_#F2F4FF]">
                                        clinic
                                    </button>
                                    <button className="w-[82px] h-[26px] text-[14px] tracking-[1.4px] text-center text-[#8B8B8B] rounded-[50px] shadow-[-2px_4px_31px_9px_#F2F4FF]">
                                        style
                                    </button>
                                    <button className="w-[82px] h-[26px] text-[14px] tracking-[1.4px] text-center text-[#8B8B8B] rounded-[50px] shadow-[-2px_4px_31px_9px_#F2F4FF]">
                                        great
                                    </button>
                                    <button className="w-[82px] h-[26px] text-[14px] tracking-[1.4px] text-center text-[#8B8B8B] rounded-[50px] shadow-[-2px_4px_31px_9px_#F2F4FF]">
                                        cute
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Social */}
                        <div className="flex flex-col justify-center pl-[49px] max-w-[350px] h-[213px] mt-[83px] rounded-[25px] bg-white shadow-[-2px_4px_31px_9px_#F2F4FF]">
                            <span className="text-subPrimary text-base font-semibold leading-[125%]">
                                Social Connect
                            </span>
                            <div className="flex mt-[30px] gap-[21px]">
                                <span className="w-[43px] h-[43px] rounded-[50%] flex items-center justify-center bg-white shadow-[0px_4px_19px_#F6F7FF]">
                                    <i class="fa-brands fa-facebook-f text-[25px]"></i>
                                </span>
                                <span className="w-[43px] h-[43px] rounded-[50%] flex items-center justify-center bg-white shadow-[0px_4px_19px_#F6F7FF]">
                                    <i class="fa-brands fa-twitter text-[25px]"></i>
                                </span>
                                <span className="w-[43px] h-[43px] rounded-[50%] flex items-center justify-center bg-white shadow-[0px_4px_19px_#F6F7FF]">
                                    <i class="fa-brands fa-instagram text-[25px]"></i>
                                </span>
                                <span className="w-[43px] h-[43px] rounded-[50%] flex items-center justify-center bg-white shadow-[0px_4px_19px_#F6F7FF]">
                                    <i class="fa-brands fa-linkedin-in text-[25px]"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
