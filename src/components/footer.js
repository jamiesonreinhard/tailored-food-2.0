/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="absolute bottom-0 left-0 h-[56px] md:h-[100px] w-full bg-primary-300 flex items-center justify-between">
            <div className="flex items-center w-[90%] mx-auto justify-between">
                <div className="flex items-center gap-[24px] md:gap-[76px]">
                    <div className="flex items-center gap-[8px] md:gap-[12px]">
                        <img src="/images/icons/map-pin.svg" alt="map pin" />
                        <p className="text-[12px] md:hidden text-white">Canada</p>
                        <p className="hidden md:block md:p-body-lg text-white">Canada</p>
                    </div>
                    <p className="md:hidden text-[12px] text-white">© {new Date().getFullYear()} Tailored Food, All Rights Reserved</p>
                    <p className="hidden md:block p-body-lg text-white">© {new Date().getFullYear()} Tailored Food, All Rights Reserved</p>
                </div>
                <Link href="https://linkedin.com/company/tailored-food" target="_blank"><img src="/images/icons/linkedin.svg" alt="linkedin" className="w-[24px] h-[24px] md:hidden" /></Link>
                <Link href="https://linkedin.com/company/tailored-food" target="_blank"><img src="/images/icons/linkedin.svg" alt="linkedin" className="w-[56px] h-[56px] hidden md:block" /></Link>
            </div>

        </footer>
    )
}

export default Footer;