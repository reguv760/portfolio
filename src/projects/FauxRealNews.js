import React from 'react'
//import Img from 'gatsby-image'
//import { graphql } from 'gatsby'
//import { Link } from 'gatsby'
import FauxRealFinal from './../img/web/frn-final.jpg'
import FauxRealThumb from './../img/web/frn-galaxyTab4-mockup.jpg'

//button
import WebLink from './../components/WebLink'

const FauxRealNews = () => (
	<div className="portfolio">
		<h2>Destination: Oahu</h2>
		<div className="portfolio__website">
			<ul className="portfolio__website-container">
				<li className="portfolio__website-container--fullWidth">
					{/* <Img fluid={props.data.imageOne.childImageSharp.fluid} alt="Hero"/>   */}

					<div className="portfolio__overlay">
						<div className="portfolio__overlay-container">
							<p className="portfolio__overlay-text">
								Mockup website for a fictional News organization
								to counter "fake news". Built with Bootstrap.
							</p>
						</div>
					</div>
					<img
						src={FauxRealFinal}
						width="1200"
						height="624"
						alt="Hero"
					/>
				</li>

				<li className="portfolio__website-container--subcontent">
					<img
						alt="thumbnail"
						src={FauxRealThumb}
						width="800"
						height="600"
					/>
				</li>
				<li className="portfolio__website-container--link">
					<WebLink link="http://tessellationdesign.com/GWDA273/frn/" />
				</li>
			</ul>
		</div>
	</div>
)

export default FauxRealNews

//create graphql as a const
//to search for images + thumbnails
