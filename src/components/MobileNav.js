import React from 'react'
import { Link } from 'gatsby'

import RGlogo from './../icons/rg-logo.png'
import WebIcon from './../icons/web.svg'
import PortfolioIcon from './../icons/portfolio.svg'
import ProfileIcon from './../icons/profile.svg'
import ResumeIcon from './../icons/resume.svg'

import Resume from './../ReginaldGalang-resume.pdf'

const activeStyle = {
  color: '33cf33',
}

const MobileNav = () => (
	<nav className="mobileNav">
		<div className="mobileNav__logo">
			<img src={RGlogo} alt="RG: Reggie Galang mobile glyph" />
		</div>

		<ul className="mobileNav__links">
			<li>
				<Link to="/" activeStyle={activeStyle}>
					<img src={WebIcon} alt="Web Mobile Icon" />
					<p>Web</p>
				</Link>
			</li>


			<li>
				<Link to="/graphic" activeStyle={activeStyle}>
					<img src={PortfolioIcon} alt="Graphic Design Mobile Icon" />
					<p>Graphic Design</p>
				</Link>
			</li>

			{ /* <li>
				<Link to="/about" activeStyle={activeStyle}>
					<img src={ProfileIcon} alt="Profile Mobile Icon" />
					<p>About Me</p>
				</Link>
			</li> */ }
			<li>
				<a
					href={Resume}
					className="svg"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={ResumeIcon} alt="Resume Mobile Icon" />
					<p>R&eacute;sum&eacute;</p>
				</a>
			</li>
		</ul>
	</nav>
)

export default MobileNav
