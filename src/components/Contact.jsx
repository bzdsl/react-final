import React from "react";
import contact from "../assets/imgs/contact.png";
import bg_contact from "../assets/imgs/bg-contact.png";

const Contact = () => {
    return (
        <div className="relative">
            <div className="absolute top-[-33%] left-0 z-[-5]">
                <img src={bg_contact} alt="" />
            </div>
            <div className=" max-w-[1140px] mx-auto md:flex items-center justify-between mt-[144px] px-4">
                <div className="hidden md:flex">
                    <img src={contact} alt="" />
                </div>
                <div>
                    <span className="text-base text-[#FF64AE] font-semibold leading-[125%]">
                        Contact Us
                    </span>
                    <h3 className="text-[#091156] text-[36px] font-semibold leading-[125%] max-w-[404px] mt-[10px]">
                        Send your inquiry to our expert team
                    </h3>
                    <p className="text-[#8B8B8B] text-base font-normal tracking-widest mt-[20px]">
                        Lorem ipsum dolor sit amet nulla turapis tellus.
                    </p>
                    <div className="mt-[44px] w-full flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:gap-9 gap-4 justify-between items-center ">
                            <input
                                className="w-full bg-white border-solid border border-[#D9DDFE] py-[17px] pl-[24px] rounded-[15px] text-[#C5C5C5] text-base font-normal tracking-widest"
                                type="text"
                                placeholder="First name"
                            />
                            <input
                                className="w-full bg-white border-solid border border-[#D9DDFE] py-[17px] pl-[24px] rounded-[15px] text-[#C5C5C5] text-base font-normal tracking-widest"
                                type="text"
                                placeholder="Last name"
                            />
                        </div>
                        <input
                            className="w-full bg-white border-solid border border-[#D9DDFE] py-[17px] pl-[24px] rounded-[15px] text-[#C5C5C5] text-base font-normal tracking-widest"
                            type="text"
                            placeholder="Email address"
                        />
                        <input
                            className="w-full bg-white border-solid border border-[#D9DDFE] py-[17px] pl-[24px] rounded-[15px] text-[#C5C5C5] text-base font-normal tracking-widest"
                            type="text"
                            placeholder="Subject message"
                        />
                        <textarea
                            className="bg-white w-full md:h-[239.474px] h-40 rounded-[15px] border-solid border border-[#D9DDFE] py-[17px] pl-[24px]"
                            placeholder="Your inquiry here"
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                        ></textarea>
                    </div>
                    <button className="min-w-[248px] h-[58px] bg-[#FF64AE] shadow-[0px_17px_22px_0px_#FFEDF6] rounded-[50px] mt-[55px] hover:text-[#091156]">
                        <a
                            className="px-7 py-4 text-white font-semibold tracking-widest text-center hover:text-[#091156] ease-in-out duration-500"
                            href="#"
                        >
                            Send Message
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Contact;
