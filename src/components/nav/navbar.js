/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import MobileNav from './mobile-navbar';
import Image from 'next/image';
import tfLogo from '../../../public/images/tf-logo.svg';
import { useRouter } from 'next/router';
import { useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/partners', label: 'Entrepreneur Partners' },
  { href: '/projects', label: 'Consulting Projects' },
  { href: '/media', label: 'Media' },
  { href: '/contact', label: 'Contact' }
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
          <Link href="/" className="flex-shrink-0">
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

          <div className="block lg:hidden">
            <button
              type="button"
              onClick={openMobileMenu}
              className="duration-200"
            >
              {["/", "/about"].includes(currentPath) ? (
                <img src={'/images/icons/menu.svg'} alt="menu" className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px]" />
              ) : (
                <img src={'/images/icons/menuBlack.svg'} alt="menu" className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px]" />
              )}
            </button>
          </div>

          {/* Page Links */}
          <div className="hidden lg:flex items-center gap-[22px] flex-wrap justify-end">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-[18px] xl:text-[20px] ${link.href === currentPath ? "text-primary-300" : "hover:text-yellow"}`}
                disabled={link.href === currentPath}
              >
                {link.label}
              </Link>
            ))}
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