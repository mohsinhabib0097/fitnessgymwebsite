import React, { useState, useEffect } from "react"
import "../css/navDrawer.css"
import logo from "../images/logo.png"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import About from "./About"
import Navbar from "../Components/Navbar/Navbar"
import Drawer from "../Components/Navbar/Drawer"
import HeaderContent from "../Components/Navbar/HeaderContent"
import Footer from "../Components/Footer/Footer"
import FirstFooter from "../Components/Footer/FirstFooter"
import Pricing from "./Pricing"
import Contact from "./Contact"

const getData = graphql`
  {
    image1: file(relativePath: { eq: "hero-bg.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "footer.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
const svg1 = (
  <path
    fillRule="evenodd"
    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
  />
)
const svg2 = (
  <path
    fillRule="evenodd"
    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
  />
)
const Home = () => {
  const data = useStaticQuery(getData)
  const bg = data.image1.childImageSharp.fluid
  const bgFooter = data.image2.childImageSharp.fluid
  const [isOpen, setisOpen] = useState(false)
  const [scrolled, setscrolled] = useState(false)

  const toogleNav = () => {
    setisOpen(isOpen => !isOpen)
  }
  const backdropClickHandler = () => {
    setisOpen(false)
  }
  const navOnScroll = () => {
    if (window.scrollY > 20) {
      setscrolled(true)
    } else {
      setscrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", navOnScroll)

    return () => window.removeEventListener("scroll", navOnScroll)
  }, [scrolled])

  return (
    <>
      <BackgroundImage
        className="bg-no-repeat bg-cover bg-center relative z-50 fixed-height"
        fluid={bg}
      >
        <nav className="bg-imageRgba h-full">
          <div
            className={`w-full fixed top-0 left-0 z-10 ${
              scrolled ? "bg-black py-5 nav-scroll-transition" : "py-10"
            }`}
          >
            <div className="container overflow-hidden lg:flex lg:items-center lg:justify-between ">
              <div className="flex items-center justify-between px-4 sm:px-6 xl:px-12">
                <div>
                  <img src={logo} alt="logo" className="" />
                </div>

                <div className="lg:hidden">
                  <button
                    type="button"
                    className="text-white hover:white focus:text-white focus:outline-none focus:border-white border border-white block"
                    onClick={toogleNav}
                  >
                    <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                      {isOpen ? svg1 : svg2}
                    </svg>
                  </button>
                </div>
              </div>
              <div className={`lg:flex ${isOpen ? "" : "hidden"}`}>
                <div className="lg:hidden">
                  <nav
                    className={`lg:hidden ${isOpen ? "side-drawer open" : ""}`}
                  >
                    <Drawer />
                  </nav>
                  {isOpen ? (
                    <div className="backdrop" onClick={backdropClickHandler} />
                  ) : (
                    ""
                  )}
                </div>
                <div className="hidden lg:flex lg:items-center md:mr-4">
                  <Navbar />
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <HeaderContent />
          </div>
        </nav>

        {/* Section About */}
      </BackgroundImage>
      <div className="about bg-gray-200">
        <About />
      </div>

      {/* Section Pricing  */}
      <div className="pricing">
        <Pricing />
      </div>
      {/* Section Contact + Hours */}
      <div className="bg-gray-200 py-6 contact">
        <div className="container overflow-hidden">
          <Contact />
        </div>
      </div>

      {/* Section Footer */}
      <BackgroundImage
        className="bg-no-repeat bg-cover bg-center"
        fluid={bgFooter}
      >
        <div className="bg-footer h-full">
          <div className="container">
            <div className="flex flex-wrap">
              <FirstFooter />
            </div>
            <Footer />
          </div>
        </div>
      </BackgroundImage>
    </>
  )
}

export default Home
