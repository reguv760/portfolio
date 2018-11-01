import React from 'react'
//import { Link } from 'gatsby'

import Pagination from './Pagination'
import PageFooter from './PageFooter'

//projects
import MyWetPaint from './../projects/MyWetPaint'
import Doahu from './../projects/Doahu'

const PageContainer = ({name, children}) => (
  <div className={name}>
    {children}

    <Pagination />

    <section>
      <MyWetPaint />
      <Doahu />

      <div className="portfolio">
        <h2>Retail Apocalpyse</h2>

        <div className="portfolio__website">
          <ul className="portfolio__website-container">
            <li className="portfolio__website-container--hero">
              <div className="portfolio__overlay">
                <div className="portfolio__overlay-container">
                  <p>Showcase and listings of past and present retail store closures.</p>                   
                </div>
              </div>
              <img className="lazyload" data-src="./assets/img/web/rapocalypse-final.jpg" width="1200" height="625" alt="Hero"/>
              
            </li>
            <li className="portfolio__website-container--subcontent-tablet">
              <img className="portfolio__website--mobile lazyload" data-src="./assets/img/web/rapocalypse-iPadPro.jpg" width="900" height="600" alt="thumbnail"/>
            </li>
            <li className="portfolio__website-container--link">
              <span className="portfolio__link"><a href="https://reguv760.github.io/team-03/" target="blank" rel="noopener noreferrer">Visit Website =></a></span>
            </li>
          </ul>
        </div>
      </div>

      <div className="portfolio">
        <h2>FauxRealNews</h2>

        <div className="portfolio__website">
          <ul className="portfolio__website-container">
            <li className="portfolio__website-container--hero">
              <div className="portfolio__overlay">
                <div className="portfolio__overlay-container">
                  <p>Mockup website for a fictional News organization to counter "fake news". Built with Bootstrap.</p>                   
                </div>
              </div>
              <img className="lazyload" data-src="./assets/img/web/frn-final.jpg" width="1200" height="625" alt="Hero"/>
              
            </li>
            <li className="portfolio__website-container--subcontent-tablet">
              <img alt="thumbnail" className="portfolio__website--mobile lazyload" data-src="./assets/img/web/frn-galaxyTab4-mockup.jpg" width="800" height="600"/>
            </li>
            <li className="portfolio__website-container--link">
              <span className="portfolio__link"><a href="http://tessellationdesign.com/GWDA273/frn/" target="blank" rel="noopener noreferrer">Visit Website =></a></span>
            </li>
          </ul>
        </div>
      </div>            

      <div className="portfolio">
        <h2>HIGH GROUND</h2>
        <div className="portfolio__website">
          <ul className="portfolio__website-container">
            <li className="portfolio__website-container--fullWidth">
              <div className="portfolio__overlay">
                <div className="portfolio__overlay-container">
                  <p>Website for award winning Independent documentary.</p> 
                </div>
              </div>
              <img className="lazyload" data-src="./assets/img/web/highgroundmovie.jpg" width="1200" height="625" alt="Hero"/>
            </li>
            <li className="portfolio__website-container--link">
              <span className="portfolio__link"><a href="http://highgroundmovie.com" target="blank" rel="noopener noreferrer">Visit Website =></a></span>
            </li>
          </ul>
        </div>
      </div>
      
    </section>

    <Pagination />

    <PageFooter />

    </div>
)

export default PageContainer
