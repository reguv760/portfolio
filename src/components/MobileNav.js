import React from 'react'
import { Link } from 'gatsby'

import RGlogo from './../icons/rg-logo.png'
import PortfolioIcon from './../icons/portfolio.png'
import ResumeIcon from './../icons/resume.png'

const MobileNav = () => 
(
	<nav className="mobileNav">
		<div className="mobileNav__logo">
			<img src={RGlogo} alt="RG: Reggie Galang mobile glyph"/>  
		</div>

		<ul className="mobileNav__links">
			<li>
				<Link to="/" className="svg active_link">
					<img src={PortfolioIcon} alt="Portfolio Mobile Icon" />
					<p>Projects</p>
				</Link>
			</li>
			<li>
				<a href="reggiegalang-resume18.pdf" className="svg" target="_blank">
					<img src={ResumeIcon} alt="Resume Mobile Icon"/>
					<p>R&eacute;sum&eacute;</p>
				</a>
			</li>
		</ul>
	</nav>
)

export default MobileNav
