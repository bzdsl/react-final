import React from "react";
import Contact from "../../components/Contact";
import map from "../../assets/imgs/map.png";

import map_marker from "../../assets/imgs/map-marker.svg";
import map_phone from "../../assets/imgs/map-phone.svg";
import map_mail from "../../assets/imgs/map-mail.svg";
import Footer from "../../components/Footer";
const Contacts = () => {
    return (
        <div>
            <Contact />

            <img
                className="w-full h-[418px] object-cover mt-[112px]"
                src={map}
                alt=""
            />

            <div className="max-w-[1140px] mx-auto px-4 mt-[112px]">
                <div className="text-center">
                    <span className="text-primary text-base font-semibold leading-[125%]">
                        Get in Touch
                    </span>
                    <h2 className="text-subPrimary text-4xl font-semibold leading-[125%]">
                        Get direct handling by us
                    </h2>
                    <p className="text-desc text-base tracking-widest font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        ut aliquam.
                    </p>

                    <div className="grid md:grid-cols-3 gap-0 mt-[93px] ">
                        <div className="flex flex-col justify-center items-center w-[424px] h-[402px] hover:bg-white text-center hover:shadow-[0px_25px_50px_25px_#F6F7FF] ease-in-out duration-300 rounded-[42px]">
                            <img
                                className="w-[65px] h-[65px] mx-auto"
                                src={map_marker}
                                alt=""
                            />

                            <span className="text-primary text-base font-semibold leading-[125%] mt-[46px]">
                                Address
                            </span>
                            <h4 className="text-subPrimary text-2xl font-semibold leading-[125%] mt-[15px]">
                                101 Baker Street, NY
                            </h4>
                            <p className="text-desc mx-auto text-base tracking-widest font-normal max-w-[270px] mt-[6px]">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit ut aliquam, purus sit
                            </p>
                        </div>

                        <div className="flex flex-col justify-center items-center w-[424px] h-[402px] hover:bg-white text-center hover:shadow-[0px_25px_50px_25px_#F6F7FF] ease-in-out duration-300 rounded-[42px]">
                            <img
                                className="w-[65px] h-[65px] mx-auto"
                                src={map_phone}
                                alt=""
                            />

                            <span className="text-primary text-base font-semibold leading-[125%] mt-[46px]">
                                Phone
                            </span>
                            <h4 className="text-subPrimary text-2xl font-semibold leading-[125%] mt-[15px]">
                                +896 120 5889
                            </h4>
                            <p className="text-desc mx-auto text-base tracking-widest font-normal max-w-[270px] mt-[6px]">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit ut aliquam, purus sit
                            </p>
                        </div>

                        <div className="flex flex-col justify-center items-center w-[424px] h-[402px] hover:bg-white text-center hover:shadow-[0px_25px_50px_25px_#F6F7FF] ease-in-out duration-300 rounded-[42px]">
                            <img
                                className="w-[65px] h-[65px] mx-auto"
                                src={map_mail}
                                alt=""
                            />

                            <span className="text-primary text-base font-semibold leading-[125%] mt-[46px]">
                                Mail
                            </span>
                            <h4 className="text-subPrimary text-2xl font-semibold leading-[125%] mt-[15px]">
                                mail@company.com
                            </h4>
                            <p className="text-desc mx-auto text-base tracking-widest font-normal max-w-[270px] mt-[6px]">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit ut aliquam, purus sit
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
