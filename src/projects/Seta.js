import React from 'react'
//import Img from 'gatsby-image'
//import { graphql } from 'gatsby'
//import { Link } from 'gatsby'
import setaLogo from './../img/graphic/seta/seta-logo.jpg'
import setaSignage from './../img/graphic/seta/seta-logo3.jpg'
import setaSignage2 from './../img/graphic/seta/seta-logo1.jpg'

const Seta = () => (
	<div className="portfolio">
		<h2>Seta: Restaurant</h2>

		<div className="portfolio__gallery">
			<ul className="portfolio__gallery-container">
				<li className="portfolio__gallery-container--hero">
					<div className="portfolio__overlay">
						<div className="portfolio__overlay-container">
							<p className="portfolio__overlay-text">
								Final logo design for upscale restaurant in
								Whittier, CA
							</p>
						</div>
					</div>
					<img
						src={setaLogo}
						width="1200"
						height="800"
						alt="Seta Final logo"
					/>
				</li>
				<li className="portfolio__gallery-container--subcontent">
					<img
						className="portfolio__gallery--mobile"
						src={setaSignage}
						width="800"
						height="800"
						alt="Seta signage"
					/>
				</li>

				<li className="portfolio__gallery-container--subcontent">
					<img
						className="portfolio__gallery--mobile"
						src={setaSignage2}
						width="800"
						height="800"
						alt="Seta Mat"
					/>
				</li>
			</ul>
		</div>
	</div>
)

export default Seta

//create graphql as a const
//to search for images + thumbnails
