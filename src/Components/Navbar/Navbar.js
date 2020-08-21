import React from "react"
import "../../css/navScroll.css"
// import { Link } from "gatsby"
import { Link, animateScroll as scroll } from "react-scroll"
const scrollToTop = () => {
  scroll.scrollToTop()
}
const Navbar = () => {
  return (
    <>
      <Link
        onClick={scrollToTop}
        to="/"
        activeClass="nav-active"
        spy={true}
        smooth={true}
        duration={700}
        className="hover:text-mainColor transition duration-500 ease-in-out cursor-pointer sm:px-2 sm:py-1 text-white font-bold text-sm"
      >
        HOME
      </Link>
      <Link
        onClick={scrollToTop}
        activeClass="nav-active"
        spy={true}
        smooth={true}
        duration={700}
        to="about"
        className="hover:text-mainColor transition duration-500 ease-in-out cursor-pointer sm:px-2 sm:py-1 text-white font-bold  sm:ml-6 text-sm"
      >
        ABOUT US
      </Link>
      <Link
        onClick={scrollToTop}
        activeClass="nav-active"
        spy={true}
        smooth={true}
        duration={700}
        to="pricing"
        className="hover:text-mainColor transition duration-500 ease-in-out cursor-pointer sm:px-2 sm:py-1 text-white font-bold  sm:ml-6 text-sm"
      >
        PRICING
      </Link>
      <Link
        onClick={scrollToTop}
        activeClass="nav-active"
        spy={true}
        smooth={true}
        duration={700}
        to="contact"
        className="hover:text-mainColor transition duration-500 ease-in-out  cursor-pointer sm:px-2 sm:py-1 text-white font-bold  sm:ml-6 text-sm"
      >
        CONTACT
      </Link>
      <Link className="hover:text-white transition duration-500 ease-in-out cursor-pointer text-center py-3 px-8 text-black font-bold hover:text-white sm:ml-6 text-sm btn-grdient rounded-lg">
        CALL: (555) 555-5555
      </Link>
    </>
  )
}

export default Navbar
