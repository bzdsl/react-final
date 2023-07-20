import React from "react";

const Blog = ({ img, title, heading, desc, className }) => {
    const container = "max-w-[1140px] mx-auto px-4";
    const folder = "text-primary text-base font-semibold leading-[125%]";
    const header = "text-subPrimary text-4xl font-semibold leading-[125%]";
    const description = "text-desc text-base font-normal tracking-widest";
    const flexCenter = "flex justify-center items-center";
    return (
        <div>
            <div className={`${className}`}>
                <img
                    src={img}
                    alt=""
                    className="w-[750px] h-[453px] object-cover rounded-t-[50px]"
                />
            </div>
            <div className="max-w-[730px] rounded-b-[50px] bg-white shadow-[10px_13px_80px_14px_#F2F4FF] pl-[76px] pt-[59px] pb-[100px]">
                <div className="flex items-center ">
                    <div>
                        <i class="fa-solid fa-folder text-primary w-[25px] h-[25px]"></i>
                    </div>
                    <span className={`${folder} mb-[2px]`}>{title}</span>
                </div>
                <h2 className={`${header} max-w-[612px] mt-[20px]`}>
                    {heading}
                </h2>
                <p className={`${description} max-w-[592px] mt-[12px]`}>
                    {desc}
                </p>
                <button className="w-[226px] h-[58px] rounded-[50px] bg-primary shadow-[0px_17px_22px_0px_#FFEDF6] text-white font-semibold tracking-widest flex items-center justify-center mt-[13px]">
                    <span>Read More</span>
                    <div className="w-[25px] h-[25px] mt-[2px]">
                        <i class="fa-solid fa-caret-right"></i>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Blog;
