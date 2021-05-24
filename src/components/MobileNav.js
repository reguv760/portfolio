import React from "react"
import { Link } from "gatsby"

import RGlogo from "./../icons/rg-logo.png"
//import WebIcon from "./../icons/web.svg"
//import PortfolioIcon from "./../icons/portfolio.svg"
//import ProfileIcon from "./../icons/profile.svg"

const activeStyle = {
  color: "#33cf33",
}

const MobileNav = () => (
  <nav className="mobileNav">
    <div className="mobileNav__logo">
      <Link to={"/"}>
        <img src={RGlogo} alt="RG: Reggie Galang mobile glyph" />
      </Link>
    </div>

    <ul className="mobileNav__links">
      <li>
        <Link to="/" activeStyle={activeStyle}>
          {/* <img src={WebIcon} alt="Web Mobile Icon" /> */}
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 500"
            enableBackground="new 0 0 500 500"
          >
            <g>
              <path
                fill="currentColor"
                className="icon"
                d="M102.375,252.762l72.925,30.136l-5.29,15.874l-88.801-37.729v-16.333l88.801-37.729l5.29,15.873L102.375,252.762z"
              />
              <path
                fill="currentColor"
                className="icon"
                d="M228.005,349.384H208.45l64.185-198.768h19.097L228.005,349.384z"
              />
              <path
                fill="currentColor"
                className="icon"
                d="M324.7,222.853l5.29-15.873l88.801,37.729v16.333l-88.801,37.729l-5.29-15.874l72.925-30.136L324.7,222.853z"
              />
            </g>
          </svg>
          <p>Web</p>
        </Link>
      </li>

      <li>
        <Link to="/graphic" activeStyle={activeStyle}>
          {/* <img src={PortfolioIcon} alt="Graphic Design Mobile Icon" /> */}
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 500 500"
            enableBackground="new 0 0 500 500"
          >
            <g>
              <g>
                <g>
                  <path
                    fill="currentColor"
                    className="icon"
                    d="M207,223v-18h85v18h158v-79H312v-21.501L296,107h-92l-16,15.499V144H50v79H207z M204,123h92v21h-92V123z"
                  />
                  <path
                    fill="currentColor"
                    className="icon"
                    d="M292,233v17h-85v-17H50v140.5c0,11.046,8.954,20.5,20,20.5h360c11.046,0,20-9.454,20-20.5V233H292z"
                  />
                </g>
                <rect
                  x="212"
                  y="210"
                  fill="currentColor"
                  className="icon"
                  width="75"
                  height="35"
                />
              </g>
            </g>
          </svg>
          <p>Graphic Design</p>
        </Link>
      </li>

      <li>
        <Link to="/about" activeStyle={activeStyle}>
          {/* <img src={ProfileIcon} alt="Profile Mobile Icon" /> */}
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 500 500"
          >
            <g>
              <g>
                <path
                  fill="currentColor"
                  className="icon"
                  d="M250,417c-92.084,0-167-74.916-167-167S157.916,83,250,83s167,74.916,167,167S342.084,417,250,417z
				 M250,91c-87.673,0-159,71.327-159,159s71.327,159,159,159s159-71.327,159-159S337.673,91,250,91z"
                />
                <path
                  fill="currentColor"
                  className="icon"
                  d="M296.067,238.099c-11.485-2.164-27.892-3.787-45.567-3.787s-34.082,1.623-45.567,3.787
				c-20.08,3.782-47.482,41.985-47.482,73.573c0,18.716,6.729,36.002,18.097,49.998C197.54,374.586,223.152,382,250.5,382
				c27.349,0,52.96-7.414,74.953-20.33c11.367-13.996,18.096-31.282,18.096-49.998C343.549,280.084,316.147,241.881,296.067,238.099z
				 M250.5,228.361c30.475,0,55.181-24.705,55.181-55.181c0-30.475-24.706-55.18-55.181-55.18s-55.18,24.705-55.18,55.18
				C195.32,203.656,220.025,228.361,250.5,228.361z"
                />
              </g>
            </g>
          </svg>
          <p>About Me</p>
        </Link>
      </li>
      {/* 
			<li>
				<a
					href={ Resume }
					className="svg"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={ ResumeIcon } alt="Resume Mobile Icon" />
					R&eacute;sum&eacute;
				</a>
			</li> */}
    </ul>
  </nav>
)

export default MobileNav
