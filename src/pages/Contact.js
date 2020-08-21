import React from "react"
import "../css/contact.css"
import Fade from "react-reveal/Fade"
const Contact = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="px-4 py-12 lg:px-8 w-full md:w-1/2">
        <div className="lg:mb-10">
          <h6 className="text-gradient">Fitness Gym</h6>
          <h2 className="text-3xl sm:text-4xl font-semibold">Working Hours</h2>
        </div>

        {/* This is by Tailwind CSS ..  */}
        {/* <li className="flex justify-between items-center font-semibold text-base text-textGray py-3 border-b-2 border-gray-400 duration-500 hover:text-mainColor"> */}
        <ul className="working-hours">
          <li>
            <span>Monday</span> <span>16:00 - 20:00</span>
          </li>
          <li>
            <span>Tuesday</span> <span>12:00 - 20:00</span>
          </li>
          <li>
            <span>Wednesday</span> <span>12:00 - 20:00</span>
          </li>
          <li>
            <span>Thursday</span> <span>12:00 - 20:00</span>
          </li>
          <li>
            <span>Friday</span> <span>15:00 - 21:00</span>
          </li>
          <li>
            <span>Saturday</span> <span>10:00 - 20:00</span>
          </li>
          <li>
            <span>Sunday</span> <span>Closed</span>
          </li>
        </ul>
      </div>
      <div className="px-4 py-12 lg:px-8 w-full md:w-1/2">
        <div className="lg:mb-10">
          <h6 className="text-gradient">Fitness Gym</h6>
          <h2 className="text-3xl sm:text-4xl font-semibold">Contact Us</h2>
        </div>
        <form className="">
          <div>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email address" />
            <input type="text" placeholder="Subject" />
          </div>
          <div>
            <textarea
              name="message"
              type="text"
              placeholder="Message"
            ></textarea>
          </div>
          <Fade bottom>
            <input type="submit" value="Submit" className="input-submit" />
          </Fade>
        </form>
      </div>
    </div>
  )
}

export default Contact
