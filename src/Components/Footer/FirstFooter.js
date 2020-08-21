import React from "react"
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa"
import logo from "../../images/logo.png"
const FirstFooter = () => {
  return (
    <>
      <div className="w-full sm:w-1/2 lg:w-1/4 pt-16 pb-10 px-6">
        <img src={logo} alt="logo" className="" />
        <div className="text-gray-500 my-8 tracking-wider text-sm">
          <p>
            Proin nunc sapien, gravida ut sapien ut, ultrices faucibus sapien.
            Proin vehicula varius ex, vel feugiat massa scelerisque id. Nullam
            vulputate a lectus non molestie. Duis at lobortis neque.
          </p>
        </div>
        <div className="text-white text-lg flex ">
          <FaFacebookF className="hover:text-mainColor cursor-pointer mr-4" />
          <FaInstagram className="hover:text-mainColor cursor-pointer mx-4" />
          <FaTwitter className="hover:text-mainColor cursor-pointer mx-4" />
          <FaPinterest className="hover:text-mainColor cursor-pointer mx-4" />
        </div>
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/4 py-10 sm:pt-20 px-6">
        <h1 className="text-white text-lg font-serif tracking-widest">
          TESTIMONIALS
        </h1>
        <div className="text-gray-500 my-8 tracking-wider text-sm ">
          <p>
            "Proin nunc sapien, gravida ut sapien ut, ultrices faucibus sapien"
          </p>
          <h3 className="text-mainColor font-serif mt-4">John Smith</h3>
        </div>
        <div className="text-gray-500 mt-8 tracking-wider text-sm ">
          <p>
            "Vulputate a lectus non molestie. Duis at lobortis neque gravida
            utsapien ut, ultrices faucibus sapien"
          </p>
          <h3 className="text-mainColor font-serif mt-4">John Smith</h3>
        </div>
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/4 py-10 sm:pt-20 px-6">
        <h1 className="text-white text-lg font-serif tracking-widest">
          CLASSES
        </h1>
        <div className="text-gray-500 mt-8 tracking-wider text-sm ">
          <h2 className="my-4 tracking-widest hover:text-mainColor cursor-pointer">
            Bodybuilding Class
          </h2>
          <h2 className="my-4 tracking-widest hover:text-mainColor cursor-pointer">
            Fitness Class
          </h2>
          <h2 className="my-4 tracking-widest hover:text-mainColor cursor-pointer">
            Yoga Courses
          </h2>
          <h2 className="my-4 tracking-widest hover:text-mainColor cursor-pointer">
            Dumbell Class
          </h2>
          <h2 className="my-4 tracking-widest hover:text-mainColor cursor-pointer">
            Spinning Class{" "}
          </h2>
          <h2 className="my-4 tracking-widest hover:text-mainColor cursor-pointer">
            Kangoo Jump
          </h2>
        </div>
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/4 py-10 sm:pt-20 px-6">
        <h1 className="text-white text-lg font-serif tracking-widest">
          CONTACT
        </h1>
        <div className=" text-gray-500 my-8 tracking-wider text-sm ">
          <h3 className=" text-base text-mainColor font-serif underline mb-4">
            Address
          </h3>
          <p>481 Creekside Lane Avila Beach, CA 93424</p>
        </div>
        <div className=" text-gray-500 my-8 tracking-wider text-sm ">
          <h3 className=" text-base text-mainColor font-serif underline mb-4">
            Phone
          </h3>
          <p>(555) 555-5555</p>
        </div>
        <div className=" text-gray-500 my-8 tracking-wider text-sm ">
          <h3 className=" text-base text-mainColor font-serif underline mb-4">
            Email
          </h3>
          <p>fitnessgym@gmail.com</p>
        </div>
      </div>
    </>
  )
}

export default FirstFooter
