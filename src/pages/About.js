import React from "react"

import man from "../images/man.png"
import Fade from "react-reveal/Fade"
const About = () => {
  return (
    <div className="">
      <div className="container px-2 py-10 lg:py-16 flex flex-col lg:flex-row">
        <Fade>
          <div className=" w-full lg:w-9/12 ">
            <div className="px-2 lg:px-6 lg:mb-8">
              <h6 className="text-gradient">Fitness Gym</h6>
              <h2 className="text-3xl sm:text-4xl font-semibold">
                Why choose Fitness Gym?
              </h2>
            </div>
            <div className="text-textGray w-full flex flex-col lg:flex-row">
              <div className="my-6 px-2 md:px-4 w-full lg:w-1/2 lg:mx-3">
                <p>
                  Donec id mattis est. Proin nunc sapien, gravida ut sapien ut,
                  ultrices faucibus sapien. Proin vehicula varius ex, vel
                  feugiat massa scelerisque id. Nullam vulputate a lectus non
                  molestie. Duis at lobortis neque, in maximus leo. Donec nec
                  blandit ex, in finibus tortor. Curabitur aliquet fermentum
                  ultrices.
                </p>
              </div>
              <div className="my-6 px-2 md:px-4 w-full lg:w-1/2 lg:mx-3">
                <p>
                  Proin nunc sapien, gravida ut sapien ut, ultrices faucibus
                  sapien. Proin vehicula varius ex, vel feugiat massa
                  scelerisque id. Nullam vulputate a lectus non molestie. Duis
                  at lobortis neque, in maximus leo. Donec nec blandit ex, in
                  finibus tortor. Curabitur aliquet fermentum ultrices.
                </p>
              </div>
            </div>
            <div className="block px-2 sm:flex items-center">
              <a
                href="#"
                className="mb-4 mt-10 sm:mt-4 sm:mx-4 flex justify-center items-center h-12 w-56 bg-transparent text-mainColor border-2 border-mainColor font-bold hover:bg-mainColor hover:text-white text-sm rounded-lg transition duration-700 ease-in-out"
              >
                GET A MEMBERSHIP
              </a>

              <a
                href="#"
                className="my-4 sm:mx-4 flex justify-center items-center h-12 w-56 transition duration-500 ease-in-out cursor-pointer text-center text-white font-bold text-sm rounded-lg bg-mainColor hover:bg-black border-2 border-transparent "
              >
                FIND OUT MORE
              </a>
            </div>
          </div>
        </Fade>
        <Fade left>
          <div className="sm:hidden mt-16 lg:block  lg:w-1/3">
            <img src={man} alt="man" />
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default About
