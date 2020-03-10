import React from "react"
import { StaticQuery, graphql } from "gatsby"
//import Img from 'gatsby-image'

// import ravenWolfLogo from './../img/graphic/ravenwolf/ravenwolf-logo.jpg'
// import ravenWolfProduct from './../img/graphic/ravenwolf/ravenwolf-bag.jpg'

const Ravenwolf = () => (
  <StaticQuery
    query={graphql`
      query {
        heroImage: file(
          relativePath: { eq: "graphic/ravenwolf/ravenwolf-logo.jpg" }
        ) {
          ...fluidImage
        }
      }
    `}
    render={data => (
      <div className="portfolio">
        <ul className="portfolio__headerTitle">
          <li className="aboutMe">
            <h2>About Me</h2>
          </li>
        </ul>

        <div className="portfolio__aboutMe">
          <div className="row">
            <div className="col img">
              <div className="svg">
                <svg version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000">
                  <g>
                    <path
                      fill="currentColor"
                      d="M941.1,80.2l31.9,0.2l17,31.6l-145.6,47.1L476.5,527.6l0,0c7,12.9,17.5,26.6,33,40.8c69.8,63.8,163.6-68.1,147.7,5c-23.4,107.4-162.1,99.2-176.5,170.4c-8.4,41.8-59.6,151.4-132.6,183.8c-73.6,32.7-177-20-245.1-90.5c-67.3-69.7-113.6-174.8-84-250.2c31.1-79.2,151.7-116.2,188.1-126.4c85-23.9,90.7-178,209.2-223.8c100.6-38.8-29.8,72.6,7.3,160.1c10.5,24.7,28.6,28.1,38.5,39.2l341.9-318.5c0,0,10.2-9.6,12.1-17s-5.3-21-5.3-21l32.5,0.2l0,0c-0.2-0.2-0.4-0.3-0.5-0.5c-3.8-3.9-3.7-10.1,0.2-13.9c3.9-3.8,10.1-3.7,13.9,0.2c3.8,3.9,3.7,10.1-0.2,13.9c-0.1,0.1-0.2,0.2-0.4,0.3l14.5,0.1c-0.1-0.1-0.1-0.1-0.2-0.2c-3.8-3.9-3.7-10.1,0.2-13.9S881.2,62,885,66c3.8,3.9,3.7,10.1-0.2,13.9c0,0,0,0,0,0l0,0l13.8,0.1l0,0c-3.6-3.9-3.5-10,0.4-13.8c3.9-3.8,10.1-3.7,13.9,0.2c3.7,3.8,3.7,9.8,0.1,13.6l13.1,0.1c-3.3-3.9-3-9.8,0.7-13.4c3.9-3.8,10.1-3.7,13.9,0.2C944.3,70.6,944.4,76.4,941.1,80.2L941.1,80.2z M452.5,551.6c8.8,15.6,21.6,31,40.3,44.1c72.2,50.4,114.7-5.1,100.8,16c-13.9,21.1-123.9,51.7-139.1,103.5c-12.4,42.6-55.4,149.7-117.4,177.6c-62.5,28.2-150.3-24.7-207.5-84C73.1,750.3,26.5,669.6,52,605.5c26.9-67.2,152.4-108.4,183.3-117.3C307.5,467.4,316,358.9,376,307c60-51.8-16.7,9.6,7.6,87.2c11.6,36.9,40,47.4,47.5,59.3c0.9,1.5,1.3,5,1.5,10l-49.8,46.4l-27.4-28.4l-56.7,54.7l109.4,113.3l56.7-54.7l-27.3-28.3L452.5,551.6L452.5,551.6z M355,509.4l-28.3,27.4l82.1,85l28.3-27.4L355,509.4z M270.5,563.6l-56.7,54.7l109.4,113.3l56.7-54.7L270.5,563.6z M270,591.4l-28.3,27.4l82.1,85l28.3-27.4L270,591.4z M185.5,645.7l-14.2,13.7l109.4,113.3l14.2-13.7L185.5,645.7z M265.1,869.9c7.6,7.8,29.5-1.1,49.1-20c19.6-18.9,29.3-40.5,21.7-48.4s-29.5,1.1-49.1,20C267.3,840.4,257.6,862.1,265.1,869.9z M516.8,421.7c-3.8-3.9-10.2-4-14-0.3c-3.9,3.8-4.2,9.9-0.2,14l13.6,14c3.8,3.9,10.2,4,14,0.3c3.9-3.8,4.2-9.9,0.2-14L516.8,421.7z M445.9,490.1c-3.8-3.9-10.2-4-14-0.3c-3.9,3.8-4.2,9.9-0.2,14l13.6,14c3.8,3.9,10.2,4,14,0.3c3.9-3.8,4.2-9.9,0.2-14L445.9,490.1z M587.6,353.3c-3.8-3.9-10.2-4-14-0.3c-3.9,3.8-4.2,9.9-0.2,14l13.6,14c3.8,3.9,10.2,4,14,0.3c3.9-3.8,4.2-9.9,0.2-14L587.6,353.3z M658.4,284.9c-3.8-3.9-10.2-4-14-0.3c-3.9,3.8-4.2,9.9-0.2,14l13.6,14c3.8,3.9,10.2,4,14,0.3c3.9-3.8,4.2-9.9,0.2-14L658.4,284.9z M715.1,230.2c-3.8-3.9-10.2-4-14-0.3c-3.9,3.8-4.2,9.9-0.2,14l13.6,14c3.8,3.9,10.2,4,14,0.3c3.9-3.8,4.2-9.9,0.2-14L715.1,230.2z M757.6,189.1c-3.8-3.9-10.2-4-14-0.3c-3.9,3.8-4.2,9.9-0.2,14l13.6,14c3.8,3.9,10.2,4,14,0.3c3.9-3.8,4.2-9.9,0.2-14L757.6,189.1z M800.1,148.1c-3.8-3.9-10.2-4-14-0.3c-3.9,3.8-4.2,9.9-0.2,14l13.6,14c3.8,3.9,10.2,4,14,0.3c3.9-3.8,4.2-9.9,0.2-14L800.1,148.1z M312.7,477.7c5.4,0,9.8-4.4,9.8-9.8c0-5.4-4.4-9.8-9.8-9.8c-5.4,0-9.8,4.4-9.8,9.8C302.8,473.3,307.2,477.7,312.7,477.7z M352.1,438.3c5.4,0,9.8-4.4,9.8-9.8s-4.4-9.8-9.8-9.8s-9.8,4.4-9.8,9.8S346.6,438.3,352.1,438.3z"
                      className="icon"
                    />
                  </g>
                </svg>
              </div>

              <div className="svg">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 460 460"
                >
                  <g>
                    <path
                      fill="currentColor"
                      className="icon"
                      d="M209.195,326.458l-91.46-38.359c-2.957-1.241-6.329-0.987-9.067,0.68c-2.739,1.667-4.512,4.546-4.769,7.742
		c-2.154,26.854,13.093,51.897,37.941,62.319c7.675,3.219,15.756,4.851,24.02,4.851c18.062,0,35.201-7.822,47.024-21.461
		c2.1-2.423,2.911-5.706,2.181-8.827C214.334,330.281,212.151,327.698,209.195,326.458z M165.859,343.691
		c-5.593,0-11.071-1.109-16.284-3.295c-12.136-5.09-20.896-15.321-24.306-27.45l60.906,25.544
		C180.02,341.866,173.047,343.691,165.859,343.691z"
                    />
                    <path
                      fill="currentColor"
                      className="icon"
                      d="M394.87,0.131c-4.841-0.789-9.535,2.045-11.091,6.693l-55.704,166.286c-28.719-19.709-63.039-30.432-98.075-30.432
		s-69.355,10.724-98.075,30.432L76.222,6.825c-1.557-4.648-6.251-7.482-11.091-6.693c-4.837,0.789-8.391,4.968-8.391,9.87v359.52
		c0,3.808,2.163,7.286,5.579,8.969l163.26,80.48c1.394,0.687,2.908,1.031,4.421,1.031s3.028-0.344,4.421-1.031l163.26-80.48
		c3.416-1.684,5.579-5.161,5.579-8.969V10.001C403.261,5.099,399.708,0.92,394.87,0.131z M383.261,363.301l-153.26,75.551
		L76.74,363.301V71.335l40.616,121.247c1.043,3.114,3.549,5.518,6.704,6.43c3.155,0.913,6.558,0.217,9.102-1.86
		c27.234-22.231,61.625-34.475,96.838-34.475s69.604,12.243,96.838,34.475c2.545,2.077,5.947,2.771,9.102,1.86
		c3.155-0.912,5.661-3.316,6.704-6.43l40.616-121.247V363.301z"
                    />
                    <path
                      fill="currentColor"
                      className="icon"
                      d="M250.806,326.458c-2.957,1.24-5.14,3.823-5.87,6.945c-0.73,3.122,0.081,6.405,2.181,8.827
		c11.823,13.639,28.962,21.461,47.024,21.461c8.263,0,16.344-1.632,24.02-4.851c24.848-10.421,40.095-35.465,37.941-62.319
		c-0.257-3.196-2.03-6.075-4.769-7.742c-2.739-1.667-6.111-1.92-9.067-0.68L250.806,326.458z M310.426,340.396
		c-5.213,2.186-10.691,3.295-16.284,3.295c-7.188,0-14.16-1.825-20.315-5.2l60.906-25.544
		C331.322,325.075,322.562,335.306,310.426,340.396z"
                    />
                  </g>
                </svg>
              </div>

              <div className="svg">
                <svg
                  viewBox="0 0 722.14282 618.04224"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g transform="translate(-306.26351,190.84496)">
                    <g fill="#7f00ff">
                      <g
                        fill="#000"
                        transform="matrix(5.34921,0,0,5.34921,-1332.0035,-1857.9695)"
                      >
                        <path
                          d="m-180.9753,535.70752h73.94383v73.94382h-73.94383z"
                          fill="currentColor"
                          fill-rule="evenodd"
                          transform="matrix(.87274,-.48819,.87274,.48819,0,0)"
                          className="icon"
                        />
                        <path
                          d="m-637.27216,431.13074h36.35996v74.47839h-36.35996z"
                          fill="currentColor"
                          fill-rule="evenodd"
                          transform="matrix(0,-1,.87274,-.48819,0,0)"
                          className="icon"
                        />
                        <path
                          d="m-219.51965-425.40167h36.35996v74.47839h-36.35996z"
                          fill="currentColor"
                          fill-rule="evenodd"
                          transform="matrix(0,-1,-.87274,-.48819,0,0)"
                          className="icon"
                        />
                        <path
                          d="m40.71429-106.42757c0,8.08703-6.55583,14.64286-14.64286,14.64286s-14.64286-6.55583-14.64286-14.64286 6.55583-14.64285 14.64286-14.64285 14.64286,6.55583 14.64286,14.64285z"
                          fill="#009900"
                          fill-rule="evenodd"
                          transform="matrix(1.2439,0,0,-.69582,305.94032,273.71926)"
                          className="icon"
                        />
                        <path
                          d="m40.71429-106.42757c0,8.08703-6.55583,14.64286-14.64286,14.64286s-14.64286-6.55583-14.64286-14.64286 6.55583-14.64285 14.64286-14.64285 14.64286,6.55583 14.64286,14.64285z"
                          fill="currentColor"
                          fill-rule="evenodd"
                          transform="matrix(1.2439,0,0,-.69582,305.94032,266.40121)"
                          className="icon"
                        />
                        <path
                          d="m40.71429-106.42757a14.64286,14.64286 0 1,1 -29.28572,0 14.64286,14.64286 0 1,1 29.28572,0z"
                          fill="#009900"
                          fill-rule="evenodd"
                          transform="matrix(1.2439,0,0,-.69582,339.9046,291.47069)"
                        />
                        <path
                          d="m40.71429-106.42757a14.64286,14.64286 0 1,1 -29.28572,0 14.64286,14.64286 0 1,1 29.28572,0z"
                          fill="currentColor"
                          fill-rule="evenodd"
                          transform="matrix(1.2439,0,0,-.69582,339.9046,284.15264)"
                          className="icon"
                        />
                        <path
                          d="m40.71429-106.42757c0,8.08703-6.55583,14.64286-14.64286,14.64286s-14.64286-6.55583-14.64286-14.64286 6.55583-14.64285 14.64286-14.64285 14.64286,6.55583 14.64286,14.64285z"
                          fill="#009900"
                          fill-rule="evenodd"
                          transform="matrix(1.2439,0,0,-.69582,374.90461,273.71925)"
                        />
                        <path
                          d="m40.71429-106.42757c0,8.08703-6.55583,14.64286-14.64286,14.64286s-14.64286-6.55583-14.64286-14.64286 6.55583-14.64285 14.64286-14.64285 14.64286,6.55583 14.64286,14.64285z"
                          fill="currentColor"
                          fill-rule="evenodd"
                          transform="matrix(1.2439,0,0,-.69582,374.90461,266.40121)"
                          className="icon"
                        />
                        <path
                          d="m40.71429-106.42757a14.64286,14.64286 0 1,1 -29.28572,0 14.64286,14.64286 0 1,1 29.28572,0z"
                          fill="#009900"
                          fill-rule="evenodd"
                          transform="matrix(1.2439,0,0,-.69582,339.9046,255.11072)"
                        />
                        <path
                          d="m40.71429-106.42757a14.64286,14.64286 0 1,1 -29.28572,0 14.64286,14.64286 0 1,1 29.28572,0z"
                          fill="currentColor"
                          fill-rule="evenodd"
                          transform="matrix(1.2439,0,0,-.69582,339.9046,247.79268)"
                          className="icon"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <div className="col">
              <p>
                Depending on your point of view, I'm a designer who can code or
                I'm a coder with an eye for design...
              </p>
              <p>
                My specialty is designing and building websites using Adobe CC,
                React JS and Gatsby JS.
              </p>

              <p>
                In my spare time, I listen to music with heavy distortion at a
                pace of 160bpm, shredding on the guitar, keeping up with DC
                Comics continuity and building models using Lego.
              </p>
            </div>
          </div>
        </div>
      </div>
    )}
  />
)

export default Ravenwolf

// create graphql as a const
// to search for images + thumbnails
