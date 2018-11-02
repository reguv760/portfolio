import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

//import RAFinal from './../img/web/rapocalypse-final.jpg'
//import RAThumb from './../img/web/rapocalypse-iPadPro.jpg'

//button
import WebLink from './../components/WebLink'

const RetailApocalypse = () => (
	<StaticQuery
		query={graphql`
			query {
				heroImage: file(relativePath: { eq: "web/rapocalypse-final.jpg" }) {
					...fluidImage
				}
				mobileThumbnail: file(
					relativePath: { eq: "web/rapocalypse-iPadPro.jpg" }
				) {
					...fluidImage
				}
			}
		`}
		render={data => (
			<div className="portfolio">
				<h2>Retail Apocalypse</h2>
				<div className="portfolio__website">
					<ul className="portfolio__website-container">
						<li className="portfolio__website-container--fullWidth">
							{/* <Img fluid={props.data.imageOne.childImageSharp.fluid} alt="Hero"/>   */}

							<div className="portfolio__overlay">
								<div className="portfolio__overlay-container">
									<p className="portfolio__overlay-text">
										Showcase and listings of past and present retail store
										closures.
									</p>
								</div>
							</div>
							<Img
								fluid={data.heroImage.childImageSharp.fluid}
								alt="Retail Apocalypse"
							/>
						</li>

						<li className="portfolio__website-container--subcontent">
							<Img
								fluid={data.mobileThumbnail.childImageSharp.fluid}
								alt="thumbnail"
							/>
						</li>
						<li className="portfolio__website-container--link">
							<WebLink link="https://reguv760.github.io/team-03/" />
						</li>
					</ul>
				</div>
			</div>
		)}
	/>
)

export default RetailApocalypse

//create graphql as a const
//to search for images + thumbnails
