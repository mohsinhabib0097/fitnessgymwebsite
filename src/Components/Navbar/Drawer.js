import React from "react"
import { Link } from "gatsby"
const Drawer = () => {
  return (
    <div className="bg-bgDrawer h-full">
      <div className="pt-24">
        <Link
          to="/"
          className="text-white font-bold hover:text-mainColor text-sm block p-3 border-b border-white"
        >
          HOME
        </Link>
        <Link
          to="/about us"
          className="text-white font-bold hover:text-mainColor text-sm block p-3 border-b border-white"
        >
          ABOUT US
        </Link>
        <Link
          to="/blog"
          className="text-white font-bold hover:text-mainColor text-sm block p-3 border-b border-white"
        >
          NEWS
        </Link>
        <Link
          to="/contact"
          className="text-white font-bold hover:text-mainColor text-sm block p-3 border-b border-white"
        >
          CONTACT
        </Link>
        <Link className="mt-8 mx-auto h-10 w-48 flex justify-center items-center text-black font-bold hover:text-white text-sm btn-grdient rounded-lg block">
          CALL: (555) 555-5555
        </Link>
      </div>
    </div>
  )
}

export default Drawer
