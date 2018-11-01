import React from 'react'
//import Img from 'gatsby-image'
//import { graphql } from 'gatsby'
//import { Link } from 'gatsby'
import doahuFinal from './../img/web/doahu-final.jpg'
import doahuMobile from './../img/web/doahu-galaxyS7_mockup.jpg'

const Doahu = () => (
	<div className="portfolio">
		<h2>Destination: Oahu</h2>
		<div className="portfolio__website">
		  <ul className="portfolio__website-container">
		    <li className="portfolio__website-container--fullWidth">
		     { /*  <div className="portfolio__overlay">
		        <div className="portfolio__overlay-container">
		           <h3>This is my title</h3> 
		          <p>Portfolio for Los Angeles based fine artist.</p>
		        </div>
		      </div>  
		      <Img fluid={props.data.imageOne.childImageSharp.fluid} alt="Hero"/> 

		      <div className="portfolio__overlay">
            <div className="portfolio__overlay-container">
              <p>Travel website promoting both the modern and the natural scenery of Oahu, Hawaii.</p>                    
            </div>
          </div>  */ }
		      <img src={doahuFinal} width="1200" height="624" alt="Hero"/> 
		    </li>

		    <li className="portfolio__website-container--subcontent">
		      <img alt="thumbnail" src={doahuMobile} className="portfolio__website--mobile" width="800" height="800"/>
		    </li>
				<li className="portfolio__website-container--link">
					<span className="portfolio__link"><a href="http://tessellationdesign.com/IMD211/doahu/" target="blank" rel="noopener noreferrer">Visit Website =></a></span>
				</li>
		    
		  </ul>
		</div>
	</div>
)

export default Doahu

//create graphql as a const
//to search for images + thumbnails