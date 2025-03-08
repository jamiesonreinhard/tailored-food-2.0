import Navbar from './nav/navbar'
import Footer from './footer'
import SegmentInitializer from './SegmentInitializer'
import { useEffect } from 'react'
import { trackPageView } from '@/lib/segment'

const Layout = ({ children }) => {
  useEffect(() => {
    trackPageView();
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative max-w-screen">
      <SegmentInitializer />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout;