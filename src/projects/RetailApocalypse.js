import React from 'react'
//import Img from 'gatsby-image'
//import { graphql } from 'gatsby'
//import { Link } from 'gatsby'
import RAFinal from './../img/web/rapocalypse-final.jpg'
import RAThumb from './../img/web/rapocalypse-iPadPro.jpg'

//button
import WebLink from './../components/WebLink'

const RetailApocalypse = () => (
	<div className="portfolio">
		<h2>Destination: Oahu</h2>
		<div className="portfolio__website">
			<ul className="portfolio__website-container">
				<li className="portfolio__website-container--fullWidth">
					{/* <Img fluid={props.data.imageOne.childImageSharp.fluid} alt="Hero"/>   */}

					<div className="portfolio__overlay">
						<div className="portfolio__overlay-container">
							<p>
								Showcase and listings of past and present retail
								store closures.
							</p>
						</div>
					</div>
					<img src={RAFinal} width="1200" height="624" alt="Hero" />
				</li>

				<li className="portfolio__website-container--subcontent">
					<img
						alt="thumbnail"
						src={RAThumb}
						width="900"
						height="600"
					/>
				</li>
				<li className="portfolio__website-container--link">
					<WebLink link="https://reguv760.github.io/team-03/" />
				</li>
			</ul>
		</div>
	</div>
)

export default RetailApocalypse

//create graphql as a const
//to search for images + thumbnails
