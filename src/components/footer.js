/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="absolute bottom-0 left-0 h-[64px] md:h-[80px] w-full bg-primary-300 flex items-center justify-between">
            <div className="flex items-center w-[95%] md:w-[90%] mx-auto justify-between">
                <div className="flex flex-col md:flex-row md:items-center md:gap-[40px]">
                    <div className="flex items-center gap-[8px] md:gap-[12px]">
                        <img src="/images/icons/map-pin.svg" alt="map pin" className="w-[16px] h-[16px] md:w-[20px] md:h-[20px]" />
                        <p className="text-[12px] md:text-[14px] text-white">Canada</p>
                    </div>
                    <p className="text-[10px] md:text-[14px] text-white mt-1 md:mt-0">© {new Date().getFullYear()} Tailored Food, All Rights Reserved</p>
                </div>
                <div className="flex items-center gap-[16px] md:gap-[24px]">
                    <Link href="/contact" className="text-[12px] md:text-[14px] text-white hover:underline">Contact Us</Link>
                    <Link href="https://linkedin.com/company/tailored-food" target="_blank">
                        <img src="/images/icons/linkedin.svg" alt="linkedin" className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]" />
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;