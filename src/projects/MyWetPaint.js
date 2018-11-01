import React from 'react'
//import Img from 'gatsby-image'
//import { graphql } from 'gatsby'
//import { Link } from 'gatsby'
import mwpHero from './../img/web/mywetpaint.jpg'
import mwpHeroThumb from './../img/web/mywetpaint-iPhone6.jpg'

//button
import WebLink from './../components/WebLink'

const MyWetPaint = () => (
	<div className="portfolio">
		<h2>My Wet Paint Studio</h2>
		<div className="portfolio__website">
			<ul className="portfolio__website-container">
				<li className="portfolio__website-container--fullWidth">
					{/* <Img fluid={props.data.imageOne.childImageSharp.fluid} alt="Hero"/>  */}

					<div className="portfolio__overlay">
						<div className="portfolio__overlay-container">
							<p>Portfolio for Los Angeles based fine artist.</p>
						</div>
					</div>

					<img src={mwpHero} width="1280" height="800" alt="Hero" />
				</li>

				<li className="portfolio__website-container--subcontent">
					<img
						alt="thumbnail"
						src={mwpHeroThumb}
						className="portfolio__website--mobile"
						width="800"
						height="800"
					/>
				</li>
				<li className="portfolio__website-container--link">
					<WebLink link="http://mywetpaintstudio.com" />
				</li>
			</ul>
		</div>
	</div>
)

export default MyWetPaint

//create graphql as a const
//to search for images + thumbnails
