import Link from 'next/link'
import MobileNav from './mobile-navbar'
import Image from 'next/image';
import tfLogoPlain from '../../public/images/tf-logo-plain.png';
import tfLogo from '../../public/images/tf-logo.svg';
import { useRouter } from 'next/router';

const links = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/content', label: 'Content' }
];

const Navbar = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  const getNavStyle = () => {
    if(["/", "/about"].includes(currentPath)){
      return 'nav-transparent'
    } else {
      return 'nav-white'
    }
  }

  return (
    <div className={`nav ${getNavStyle()}`}>
      {/* Logo/Home Link */}
      <Link href="/">
        <Image
          src={tfLogo}
          alt="My Image"
          width={246} // Set the width of the image
          height={68} // Set the height of the image
        />
      </Link>

      {/* Page Links */}
      <div className="flex items-center gap-[22px]">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={`text-[20px] hover:text-yellow ${link.href === currentPath ? "text-primary-300" : ""}`}
            disabled={link.href === currentPath}
          >
            {link.label}
          </Link>
        ))}
        <Link href="/contact" className="btn contact-button mx-auto">Contact Us</Link>
      </div>

    </div>
  )
}

export default Navbar;