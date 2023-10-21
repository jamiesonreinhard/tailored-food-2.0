/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import MobileNav from './mobile-navbar';
import Image from 'next/image';
import tfLogo from '../../../public/images/tf-logo.svg';
import { useRouter } from 'next/router';
import { useState } from 'react';

const links = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/content', label: 'Content' }
];

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const router = useRouter();
  const currentPath = router.pathname;

  const getNavStyle = () => {
    if (["/", "/about"].includes(currentPath)) {
      return 'nav-transparent'
    } else {
      return 'nav-white'
    }
  }

  const openMobileMenu = () => {
    setIsMobileOpen(true);
  }

  return (
    <>
      <div className={`nav ${getNavStyle()}`}>
        <div className="w-[90%] h-full flex items-center justify-between mx-auto max-w-[1920px]">
          {/* Logo/Home Link */}
          <Link href="/">
            <div className="hidden md:block">
              <Image
                src={tfLogo}
                alt="My Image"
                width={246} // Set the width of the image
                height={68} // Set the height of the image
              />
            </div>
            <div className="md:hidden">
              <Image
                src={tfLogo}
                alt="My Image"
                width={128} // Set the width of the image
                height={36} // Set the height of the image
              />
            </div>
          </Link>

          <div className="block md:hidden">
            <button
              type="button"
              onClick={openMobileMenu}
            >
              {["/", "/about"].includes(currentPath) ? (
                <img src={'/images/icons/menu.svg'} alt="menu" className="w-[24px]" />
              ) : (
                <img src={'/images/icons/menuBlack.svg'} alt="menu" className="w-[24px]" />
              )}

            </button>
          </div>

          {/* Page Links */}
          <div className="hidden md:flex items-center gap-[22px]">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-[20px] ${link.href === currentPath ? "text-primary-300" : "hover:text-yellow"}`}
                disabled={link.href === currentPath}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn contact-button mx-auto">Contact Us</Link>
          </div>
        </div>
      </div>
      {isMobileOpen && (
        <MobileNav setIsMobileOpen={setIsMobileOpen} />
      )}
    </>
  )
}

export default Navbar;