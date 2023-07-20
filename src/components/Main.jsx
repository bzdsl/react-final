import React from "react";
import main_01 from "../assets/imgs/main-01.png";
import main_02 from "../assets/imgs/main-02.png";
import main_03 from "../assets/imgs/main-03.png";

const Main = () => {
    return (
        <div className="mt-[131px] max-w-[1140px] mx-auto px-2">
            <div className="text-center">
                <span className="text-[#FF64AE] text-base font-semibold leading-[125%]">
                    Main Services
                </span>
                <h2 className="text-[#091156] text-4xl font-semibold leading-[125%] max-w-[450px] mx-auto mt-[11px]">
                    Learn services to focus on your beauty
                </h2>
                <p className="text-[#8B8B8B] text-base font-normal tracking-widest max-w-[848px] mx-auto mt-[18px]">
                    Porta rhoncus orci condimentum vitae lobortis eu dignissim
                    non massa. Non parturient amet, feugiat tellus sagittis,
                    scelerisque eget nulla turpis.
                </p>
            </div>
            <div className="mt-[82px] grid gap-14 w-full px-4 md:grid-cols-3">
                <div className="mx-auto w-full flex flex-col items-center rounded-[42px] bg-white shadow-[0px_25px_50px_25px_#F6F7FF]">
                    <div className="px-4 text-center">
                        <img
                            className="mt-[59px] w-[166px] h-[166px] object-cover rounded-full mx-auto"
                            src={main_01}
                            alt=""
                        />
                        <p className="mt-[58px] text-[#091156] font-semibold text-[18px] leading-[125%]">
                            Beauty consultation
                        </p>
                        <p className="mt-[23px] pb-[52px] w-full text-center text-[#8B8B8B] text-sm tracking-[1.4px] font-normal">
                            Non parturient amet, feugiat tellus sagittis,
                            scelerisque eget nulla turpis.
                        </p>
                    </div>
                </div>

                <div className="mx-auto w-full flex flex-col items-center rounded-[42px] bg-white shadow-[0px_25px_50px_25px_#F6F7FF]">
                    <div className="px-4 text-center">
                        <img
                            className="mt-[59px] w-[166px] h-[166px] object-cover rounded-full mx-auto"
                            src={main_02}
                            alt=""
                        />
                        <p className="mt-[58px] text-[#091156] font-semibold text-[18px] leading-[125%]">
                            Skin treatments
                        </p>
                        <p className="mt-[23px] pb-[52px] w-full text-center text-[#8B8B8B] text-sm tracking-[1.4px] font-normal">
                            Non parturient amet, feugiat tellus sagittis,
                            scelerisque eget nulla turpis.
                        </p>
                    </div>
                </div>

                <div className="mx-auto w-full flex flex-col items-center rounded-[42px] bg-white shadow-[0px_25px_50px_25px_#F6F7FF]">
                    <div className="px-4 text-center">
                        <img
                            className="mt-[59px] w-[166px] h-[166px] object-cover rounded-full mx-auto"
                            src={main_03}
                            alt=""
                        />
                        <p className="mt-[58px] text-[#091156] font-semibold text-[18px] leading-[125%]">
                            Beauty product
                        </p>
                        <p className="mt-[23px] pb-[52px] w-full text-center text-[#8B8B8B] text-sm tracking-[1.4px] font-normal">
                            Non parturient amet, feugiat tellus sagittis,
                            scelerisque eget nulla turpis.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
