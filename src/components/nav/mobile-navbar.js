/* eslint-disable @next/next/no-img-element */
import React from "react";

const MobileNav = ({ setIsMobileOpen }) => {
  const links = [
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/content', label: 'Content' },
    { href: '/contact', label: 'Contact Us' },

  ];

  return (
    <div className="fixed left-0 top-0 w-full h-full bg-primary-300 z-[200] flex items-center justify-center">
      <button className="absolute top-[64px] left-[24px]" onClick={() => setIsMobileOpen(false)}>
        <img src="/images/icons/closeWhite.svg" alt="close menu" />
      </button>
      <div className="flex flex-col items-center gap-[48px]">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="h4-bold text-white"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  )
}

export default MobileNav;