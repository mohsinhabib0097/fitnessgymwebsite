import React from "react"
// import "../css/footer.css"
import { Link } from "gatsby"
const Footer = () => {
  return (
    <>
      <footer>
        <div className="pb-6 flex flex-col items-center justify-center px-8">
          <div className="border-b-2  border-gray-700 inline-block opacity-25 text-transparent">
            ----------------------------------------------------------------
          </div>
          <div className="text-gray-700 font-semibold sm:text-sm text-center mt-2">
            Copyright © {new Date().getFullYear()} All rights reserved | This
            template is made with &#9825; by <Link to="https://mohsin-habib.com">Mohsin Habib</Link>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
