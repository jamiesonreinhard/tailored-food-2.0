/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full bg-primary-300 py-4">
            <div className="w-[90%] max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between items-center">
                <p className="text-sm sm:text-base text-white mb-2 sm:mb-0">
                    © {new Date().getFullYear()} Tailored Food, All Rights Reserved
                </p>
                <div className="flex items-center gap-4 sm:gap-6">
                    <Link href="/contact" className="text-sm sm:text-base text-white hover:underline">
                        Contact Us
                    </Link>
                    <Link href="https://linkedin.com/company/tailored-food" target="_blank">
                        <img src="/images/icons/linkedin.svg" alt="linkedin" className="w-6 h-6" />
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;