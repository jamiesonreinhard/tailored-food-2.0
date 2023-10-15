import Navbar from './nav/navbar'
import Footer from './footer'

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen relative max-w-screen">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout;