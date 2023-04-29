// components/Layout.jsx

import Navbar from './navbar';
import Footer from './footer';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      
      <About />
      <Skills />
      <main>{children}</main>
      <Hero />
      <Footer />
    </>
  )
}

export default Layout;