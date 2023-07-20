import React from "react";
import Slogan from "../../components/Slogan";
import slogan_gallery from "../../assets/imgs/slogan-gallery.png";
import slogan_mask_big from "../../assets/imgs/bg_mask_big.png";

import gallery_01 from "../../assets/imgs/gallery-01.jpg";
import gallery_02 from "../../assets/imgs/gallery-02.jpg";
import gallery_03 from "../../assets/imgs/gallery-03.jpg";
import gallery_04 from "../../assets/imgs/gallery-04.jpg";
import gallery_05 from "../../assets/imgs/gallery-05.jpg";
import gallery_06 from "../../assets/imgs/gallery-06.jpg";
import play_btn from "../../assets/imgs/play_btn.svg";

const Gallery = () => {
    return (
        <div>
            <div className="max-w-[1140px] mx-auto px-4 mt-[125px]">
                <span className="text-primary text-base font-semibold leading-[125%]">
                    Our Gallery
                </span>
                <div className="flex gap-[98px] ">
                    <h2 className="max-w-[615px] text-subPrimary text-4xl leading-[125%] font-semibold">
                        Check out the collection pictures from our clinic
                    </h2>
                    <p className="max-w-[407px] text-desc text-base font-normal tracking-widest">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        ut aliquam, purus sit amet luctus venenatis
                    </p>
                </div>

                <div className="grid grid-cols-3 grid-flow-row gap-9 mt-[75px]">
                    <img
                        className="w-[356px] h-[210px] object-cover rounded-[20px]"
                        src={gallery_01}
                        alt="Gallery"
                    />
                    <img
                        className="w-[356px] h-[210px] object-cover rounded-[20px]"
                        src={gallery_02}
                        alt="Gallery"
                    />
                    <img
                        className="w-[356px] h-[210px] object-cover rounded-[20px]"
                        src={gallery_03}
                        alt="Gallery"
                    />
                    <img
                        className="w-[356px] h-[210px] object-cover rounded-[20px]"
                        src={gallery_04}
                        alt="Gallery"
                    />
                    <img
                        className="w-[356px] h-[210px] object-cover rounded-[20px]"
                        src={gallery_05}
                        alt="Gallery"
                    />
                    <img
                        className="w-[356px] h-[210px] object-cover rounded-[20px]"
                        src={gallery_06}
                        alt="Gallery"
                    />
                    <img
                        className="w-[356px] h-[210px] object-cover rounded-[20px]"
                        src={gallery_05}
                        alt="Gallery"
                    />
                    <img
                        className="w-[356px] h-[210px] object-cover rounded-[20px]"
                        src={gallery_03}
                        alt="Gallery"
                    />
                    <img
                        className="w-[356px] h-[210px] object-cover rounded-[20px]"
                        src={gallery_01}
                        alt="Gallery"
                    />
                </div>
                <p className="max-w-[660px] mt-[66px] text-base text-desc tracking-widest font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis, lectus magna
                    fringilla urna, porttitor rhoncus dolor purus non enim,
                    <strong className="text-subPrimary font-semibold">
                        {" "}
                        our teams
                    </strong>
                    .
                </p>
            </div>

            <Slogan
                backgroundImage={slogan_gallery}
                imgMask={slogan_mask_big}
                className="flex items-center justify-center text-center text-white mt-[126px] h-[628px]"
            >
                <h2 className="text-4xl font-semibold leading-[125%]">
                    Watch the video tour
                </h2>
                <p className="text-[#CACACA] font-normal tracking-widest text-base max-w-[555px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis
                </p>
                <span className="mt-[40px] flex justify-center ">
                    <img src={play_btn} alt="Play" />
                </span>
            </Slogan>

            <div className="mt-[120px] max-w-[1140px] mx-auto px-4">
                <span className="text-primary font-semibold leading-[125%]">
                    Get The Quota
                </span>
                <div className="flex gap-[125px] items-end">
                    <h2 className="max-w-[642px] text-subPrimary text-4xl font-semibold leading-[125%]">
                        Want to be handled by our professional team immediately?
                    </h2>
                    <button className="w-[316px] h-[58px] rounded-[50px] text-white text-center text-base font-semibold bg-primary">
                        Make an Appointment
                    </button>
                </div>
                <p className="text-desc text-base tracking-widest font-normal mt-[18px] max-w-[561px]">
                    Id dui erat sed quam tellus in purus. Pellentesque congue
                    fringilla cras tellus enim.
                </p>
            </div>
        </div>
    );
};

export default Gallery;
