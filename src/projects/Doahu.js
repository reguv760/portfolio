import React from 'react'
//import Img from 'gatsby-image'
//import { graphql } from 'gatsby'
//import { Link } from 'gatsby'
import doahuFinal from './../img/web/doahu-final.jpg'
import doahuMobile from './../img/web/doahu-galaxyS7_mockup.jpg'

//button
import WebLink from './../components/WebLink'

const Doahu = () => (
	<div className="portfolio">
		<h2>Destination: Oahu</h2>
		<div className="portfolio__website">
			<ul className="portfolio__website-container">
				<li className="portfolio__website-container--fullWidth">
					{/* <Img fluid={props.data.imageOne.childImageSharp.fluid} alt="Hero"/>   */}

					<div className="portfolio__overlay">
						<div className="portfolio__overlay-container">
							<p className="portfolio__overlay-text">
								Travel website promoting both the modern and the natural scenery
								of Oahu, Hawaii.
							</p>
						</div>
					</div>
					<img src={doahuFinal} width="1200" height="624" alt="Hero" />
				</li>

				<li className="portfolio__website-container--subcontent">
					<img
						alt="thumbnail"
						src={doahuMobile}
						className="portfolio__website--mobile"
						width="800"
						height="800"
					/>
				</li>
				<li className="portfolio__website-container--link">
					<WebLink link="http://tessellationdesign.com/IMD211/doahu/" />
				</li>
			</ul>
		</div>
	</div>
)

export default Doahu

//create graphql as a const
//to search for images + thumbnails
