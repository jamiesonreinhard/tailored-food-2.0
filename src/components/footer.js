/* eslint-disable @next/next/no-img-element */
import React from "react";

const Footer = () => {
    return (
        <footer className="h-[100px] w-full bg-primary-300 px-[62px] flex items-center justify-between">
            <div className="flex items-center gap-[76px]">
                <div className="flex items-center gap-[12px]">
                    <img src="/images/icons/map-pin.svg" alt="map pin" />
                    <p className="p-body-lg text-white">Canada</p>
                </div>
                <p className="p-body-lg text-white">© {new Date().getFullYear()} Tailored Food, All Rights Reserved</p>
            </div>
            <img src="/images/icons/linkedin.svg" alt="linkedin" />
        </footer>
    )
}

export default Footer;