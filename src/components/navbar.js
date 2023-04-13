import Link from 'next/link'
import MobileNav from './mobile-navbar'

const links = [
    { href: '/', label: 'Home' },
    { href: '/rsvp', label: 'RSVP' },
    { href: '/schedule', label: 'Schedule' },
    { href: '/registry', label: 'Registry' },
    { href: '/transportation', label: 'Transportation' },
    { href: '/accommodations', label: 'Accommodations' },
    { href: '/tepoztlan', label: 'Tepoztlan Tips' },
    { href: '/gallery', label: 'Gallery' }
];

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-white shadow-lg p-4 fixed top-0 left-0 w-full z-[100]">
        <Link href="/" className="font-semibold hidden xl:block cursive text-[30px]">
          Boda de Leslie y Jamieson
        </Link>
        <Link href="/" className="font-semibold block xl:hidden cursive text-[30px]">
          L & J
        </Link>
        <div className='block lg:hidden'>
          <MobileNav />
        </div>
        <div className="hidden lg:flex space-x-4">
            {links?.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className="text-white font-bold hover:text-gray-900 transition duration-150 ease-in-out
                    bg-[#7baac8] px-[8px] py-[4px] rounded-[8px] flex items-center"
                >
                    {link.label}
                </Link>
            ))}
        </div>
    </nav>
  )
}

export default Navbar;