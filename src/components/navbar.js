import Link from 'next/link'
import MobileNav from './mobile-navbar'

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-white shadow-lg p-4 fixed top-0 left-0 w-full z-[100]">
        <Link href="/" className="font-semibold hidden lg:block cursive text-[30px]">
          Boda de Leslie y Jamieson
        </Link>
        <Link href="/" className="font-semibold block lg:hidden cursive text-[30px]">
          L & J
        </Link>
        <div className='block lg:hidden'>
          <MobileNav />
        </div>
        <div className="hidden lg:flex space-x-4">
          <Link
            href="/"
            className="text-white font-bold hover:text-gray-900 transition duration-150 ease-in-out
            bg-[#ffaa6b] px-[8px] py-[4px] rounded-[8px] flex items-center"
          >
            Home
          </Link>
          <Link
            href="/rsvp"
            className="text-white font-bold hover:text-gray-900 transition duration-150 ease-in-out
            bg-[#ffaa6b] px-[8px] py-[4px] rounded-[8px] flex items-center"
          >
            RSVP
          </Link>
          <Link
            href="/schedule"
            className="text-white font-bold hover:text-gray-900 transition duration-150 ease-in-out
            bg-[#ffaa6b] px-[8px] py-[4px] rounded-[8px] flex items-center"
          >
            Schedule
          </Link>
          <Link
            href="/registry"
            className="text-white font-bold hover:text-gray-900 transition duration-150 ease-in-out
            bg-[#ffaa6b] px-[8px] py-[4px] rounded-[8px] flex items-center"
          >
            Registry
          </Link>
          <Link
            href="/accommodations"
            className="text-white font-bold hover:text-gray-900 transition duration-150 ease-in-out
            bg-[#ffaa6b] px-[8px] py-[4px] rounded-[8px] flex items-center"
          >
            Accommodations
          </Link>
        </div>
    </nav>
  )
}

export default Navbar;