import React from 'react'
import { Link } from 'gatsby'

import RGlogo from './../icons/rg-logo.png'
import PortfolioIcon from './../icons/portfolio.svg'
import ProfileIcon from './../icons/profile.svg'
import ResumeIcon from './../icons/resume.svg'

import Resume from './../ReginaldGalang-resume.pdf'

const MobileNav = () => (
	<nav className="mobileNav">
		<div className="mobileNav__logo">
			<img src={RGlogo} alt="RG: Reggie Galang mobile glyph" />
		</div>

		<ul className="mobileNav__links">
			<li>
				<Link to="/" activeStyle={{color: '#33cf33'}}>
					<img src={PortfolioIcon} alt="Portfolio Mobile Icon" />
					<p>Projects</p>
				</Link>
			</li>

			<li>
				<Link to="/about" activeStyle={{color: '#33cf33'}}>
					<img src={ProfileIcon} alt="Profile Mobile Icon" />
					<p>About Me</p>
				</Link>
			</li>
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
