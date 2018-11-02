import React from 'react'
//import Img from 'gatsby-image'
//import { graphql } from 'gatsby'
//import { Link } from 'gatsby'
import ravenWolfLogo from './../img/graphic/ravenwolf/ravenwolf-logo.jpg'
import ravenWolfProduct from './../img/graphic/ravenwolf/ravenwolf-bag.jpg'

const Ravenwolf = () => (
	<div className="portfolio">
		<h2>Ravenwolf: Adventure Gear</h2>

		<div className="portfolio__gallery">
			<ul className="portfolio__gallery-container">
				<li className="portfolio__gallery-container--hero">
					<div className="portfolio__overlay">
						<div className="portfolio__overlay-container">
							<p className="portfolio__overlay-text">
								Logo Designs for Adventure Gear startup
							</p>
						</div>
					</div>
					<img
						src={ravenWolfLogo}
						width="1000"
						height="291"
						alt="RavenWolf Logo"
					/>
				</li>
				<li className="portfolio__gallery-container--subcontent">
					<img
						className="portfolio__gallery--mobile"
						src={ravenWolfProduct}
						width="800"
						height="800"
						alt="Ravenwolf Patch"
					/>
				</li>
			</ul>
		</div>
	</div>
)

export default Ravenwolf

//create graphql as a const
//to search for images + thumbnails
