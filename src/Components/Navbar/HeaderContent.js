import React from "react"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"

const HeaderContent = () => {
  return (
    <>
      <div
        className="fixed-height flex flex-col justify-center
       items-start text-gray-400 text-4xl sm:text-5xl  lg:text-6xl tracking-wider px-6 sm:px-10 mt-4"
      >
        <Fade top>
          <p className="">
            <span className="font-bold text-white">Take Care</span> of your{" "}
            <span className="font-bold text-white">body</span>.
          </p>
        </Fade>
        <Fade bottom>
          <p className="mt-8 sm:mt-2 md:pr-20 xl:pr-0 ">
            It's the only place you
            <span className="font-bold text-white"> have to live</span>.
          </p>
        </Fade>
        <Fade left>
          <div className="mt-12 sm:mt-10 md:mt-0">
            <Link className=" py-3 px-12 bg-transparent text-mainColor border-2 border-mainColor font-bold hover:bg-mainColor hover:text-white text-sm rounded-lg transition duration-700 ease-in-out ">
              Read More
            </Link>
          </div>
        </Fade>
      </div>
    </>
  )
}

export default HeaderContent
