import React from "react";

const AboutItem = ({
    className = "",
    img,
    title,
    heading,
    desc_01 = "",
    desc_02 = "",
    children,
}) => {
    return (
        <div>
            <div
                className={`max-w-[1140px] mx-auto mt-[123px] flex items-center justify-between gap-[233px] px-4 ${className}`}
            >
                <div className="w-[42%] mt-6">
                    <img className=" object-cover" src={img} alt="" />
                </div>
                <div className="w-[58%]">
                    <span className="text-[#FF64AE] text-base font-semibold">
                        {title}
                    </span>
                    <h2 className="text-[#091156] mt-[10px] text-4xl font-semibold leading-[125%]">
                        {heading}
                    </h2>
                    <p className="text-[#8B8B8B] mt-[19px] max-w-[483px] text-base font-normal tracking-widest">
                        {desc_01}
                        <br></br>
                        <br></br>
                        {desc_02}
                    </p>
                    <div>{children}</div>
                </div>
            </div>
        </div>
    );
};

export default AboutItem;
