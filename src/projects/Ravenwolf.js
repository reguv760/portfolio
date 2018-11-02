import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

//import ravenWolfLogo from './../img/graphic/ravenwolf/ravenwolf-logo.jpg'
//import ravenWolfProduct from './../img/graphic/ravenwolf/ravenwolf-bag.jpg'

const Ravenwolf = () => (
	<StaticQuery
		query={graphql`
			query {
				heroImage: file(
					relativePath: { eq: "graphic/ravenwolf/ravenwolf-logo.jpg" }
				) {
					...fluidImage
				}
				mobileThumbnail: file(
					relativePath: { eq: "graphic/ravenwolf/ravenwolf-bag.jpg" }
				) {
					...fluidImage
				}
			}
		`}
		render={data => (
			<div className="portfolio">
				<h2>Ravenwolf: Adventure Gear</h2>

				<div className="portfolio__gallery">
					<ul className="portfolio__gallery-container">
						<li className="portfolio__gallery-container--hero">
							<div className="portfolio__overlay">
								<div className="portfolio__overlay-container">
									<p className="portfolio__overlay-text">
										Logo Design for Adventure Gear startup
									</p>
								</div>
							</div>
							<Img
								fluid={data.heroImage.childImageSharp.fluid}
								alt="RavenWolf Logo"
							/>
						</li>
						<li className="portfolio__gallery-container--subcontent">
							<Img
								fluid={data.mobileThumbnail.childImageSharp.fluid}
								alt="Ravenwolf Patch"
							/>
						</li>
					</ul>
				</div>
			</div>
		)}
	/>
)

export default Ravenwolf

//create graphql as a const
//to search for images + thumbnails
