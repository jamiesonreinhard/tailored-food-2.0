/* eslint-disable @next/next/no-img-element */
import React from "react";

const Footer = () => {
    return (
        <footer className="h-[56px] md:h-[100px] w-full bg-primary-300 px-[20px] md:px-[62px] flex items-center justify-between">
            <div className="flex items-center gap-[24px] md:gap-[76px]">
                <div className="flex items-center gap-[8px] md:gap-[12px]">
                    <img src="/images/icons/map-pin.svg" alt="map pin" />
                    <p className="text-[12px] md:hidden text-white">Canada</p>
                    <p className="hidden md:block md:p-body-lg text-white">Canada</p>
                </div>
                <p className="md:hidden text-[12px] text-white">© {new Date().getFullYear()} Tailored Food, All Rights Reserved</p>
                <p className="hidden md:block p-body-lg text-white">© {new Date().getFullYear()} Tailored Food, All Rights Reserved</p>
            </div>
            <img src="/images/icons/linkedin.svg" alt="linkedin" className="w-[24px] h-[24px] md:hidden" />
            <img src="/images/icons/linkedin.svg" alt="linkedin" className="w-[56px] h-[56px] hidden md:block" />
        </footer>
    )
}

export default Footer;