import React from "react";

const Slogan = ({ backgroundImage, imgMask, children, className }) => {
    return (
        <div className={`${className}`}>
            <div className="relative w-full left-0 right-0 ">
                <img
                    src={imgMask}
                    alt="Background"
                    className="w-full object-cover"
                />
                <div>
                    <img
                        className="absolute -z-50 top-0 w-full "
                        src={backgroundImage}
                        alt=""
                    />
                </div>
            </div>
            <div className="absolute">{children}</div>
        </div>
    );
};

export default Slogan;
