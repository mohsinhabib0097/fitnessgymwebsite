import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import IMG from "gatsby-image"
import Fade from "react-reveal/Fade"
import BackgroundImage from "gatsby-background-image"

const getData = graphql`
  {
    image1: file(relativePath: { eq: "bg-price.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    card1: file(relativePath: { eq: "card-1.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    card2: file(relativePath: { eq: "card-2.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    card3: file(relativePath: { eq: "card-3.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Pricing = () => {
  const data = useStaticQuery(getData)
  const bg = data.image1.childImageSharp.fluid
  const card1 = data.card1.childImageSharp.fluid
  const card2 = data.card2.childImageSharp.fluid
  const card3 = data.card3.childImageSharp.fluid
  return (
    <BackgroundImage className="bg-no-repeat bg-cover bg-center" fluid={bg}>
      <div className="bg-footer h-full">
        <div className="container overflow-hidden py-20">
          <h1 className="text-white text-center mb-12 font-serif font-semibold text-5xl lg:text-6xl tracking-widest">
            Our Plans
          </h1>
          <div className="flex flex-wrap justify-start items-center">
            {/* CARD 1 */}
            <Fade>
              <div className="w-full sm:w-1/2 lg:w-1/3">
                <div className="mx-auto rounded-lg shadow card-pricing">
                  <IMG fluid={card1} className="bg-cover" />
                  <div className="p-4 bg-white">
                    <p className="font-semibold text-mainColor text-5xl ml-2">
                      $90
                      <span className="italic text-textGray text-base">
                        /Month
                      </span>
                    </p>
                    <h1 className="font-semibold text-2xl mt-2 ml-2">
                      Men Fitness Class
                    </h1>
                    <div className="mt-6 ml-2">
                      <div>
                        <span className="text-mainColor">~</span>
                        <spa className="ml-2 text-textGray text-lg">
                          Donec molestie tincidunt tellus
                        </spa>
                      </div>
                      <div className="my-4">
                        <span className="text-mainColor">~</span>
                        <spa className="ml-2 text-textGray text-lg">
                          Sit amet aliquet auctor nisi
                        </spa>
                      </div>
                      <div>
                        <span className="text-mainColor">~</span>
                        <spa className="ml-2 text-textGray text-lg">
                          Dut purus eleifentincid
                        </spa>
                      </div>
                    </div>
                    <div>
                      <a
                        href="#"
                        className="mt-8 ml-2 flex justify-center items-center h-12 w-56 bg-transparent text-mainColor border-2 border-mainColor font-bold hover:bg-mainColor hover:text-white text-sm rounded-lg transition duration-700 ease-in-out"
                      >
                        ENROLL NOW
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>

            {/* CARD 2 */}
            <Fade>
              <div className="w-full sm:w-1/2 lg:w-1/3">
                <div className="mx-auto my-8 sm:my-0 rounded-lg shadow card-pricing">
                  <IMG fluid={card2} className="bg-cover" />
                  <div className="p-4 bg-white">
                    <p className="font-semibold text-mainColor text-5xl ml-2">
                      $50
                      <span className="italic text-textGray text-base">
                        /Month
                      </span>
                    </p>
                    <h1 className="font-semibold text-2xl mt-2 ml-2">
                      Women Class + BONUS
                    </h1>
                    <div className="mt-6 ml-2">
                      <div>
                        <span className="text-mainColor">~</span>
                        <spa className="ml-2 text-textGray text-lg">
                          Donec molestie tincidunt tellus
                        </spa>
                      </div>
                      <div className="my-4">
                        <span className="text-mainColor">~</span>
                        <spa className="ml-2 text-textGray text-lg">
                          Sit amet aliquet auctor nisi
                        </spa>
                      </div>
                      <div>
                        <span className="text-mainColor">~</span>
                        <spa className="ml-2 text-textGray text-lg">
                          Dut purus eleifentincid
                        </spa>
                      </div>
                    </div>
                    <div>
                      <a
                        href="#"
                        className="mt-8 ml-2 flex justify-center items-center h-12 w-56 bg-transparent text-mainColor border-2 border-mainColor font-bold hover:bg-mainColor hover:text-white text-sm rounded-lg transition duration-700 ease-in-out"
                      >
                        ENROLL NOW
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>

            {/* CARD 3 */}
            <Fade>
              <div className="w-full sm:w-1/2 lg:w-1/3">
                <div className="mx-auto sm:mt-8 lg:mt-0 rounded-lg shadow card-pricing">
                  <IMG fluid={card3} className="bg-cover" />
                  <div className="p-4 bg-white">
                    <p className="font-semibold text-mainColor text-5xl ml-2">
                      $90
                      <span className="italic text-textGray text-base">
                        /Month
                      </span>
                    </p>
                    <h1 className="font-semibold text-2xl mt-2 ml-2">
                      All Inclusive GYM
                    </h1>
                    <div className="mt-6 ml-2">
                      <div>
                        <span className="text-mainColor">~</span>
                        <spa className="ml-2 text-textGray text-lg">
                          Donec molestie tincidunt tellus
                        </spa>
                      </div>
                      <div className="my-4">
                        <span className="text-mainColor">~</span>
                        <spa className="ml-2 text-textGray text-lg">
                          Sit amet aliquet auctor nisi
                        </spa>
                      </div>
                      <div>
                        <span className="text-mainColor">~</span>
                        <spa className="ml-2 text-textGray text-lg">
                          Dut purus eleifentincid
                        </spa>
                      </div>
                    </div>
                    <div>
                      <a
                        href="#"
                        className="mt-8 ml-2 flex justify-center items-center h-12 w-56 bg-transparent text-mainColor border-2 border-mainColor font-bold hover:bg-mainColor hover:text-white text-sm rounded-lg transition duration-700 ease-in-out"
                      >
                        ENROLL NOW
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default Pricing
