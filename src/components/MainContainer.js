import React from 'react'
import { Link } from 'gatsby'

/* images */ 
import LinkedIn from './../icons/linkedIn.png'
import GitHub from './../icons/github.png'

const MainContainer = () => (
  <div className="container">
    <header>
        <div className="container__header">
            <p>Hello, my name is Reginald Galang and I'm a Web Developer + Graphic Designer. Feel free to browse through my projects.</p>
      <p>Email: <a href="mailto:reguv760@gmail.com">reguv760@gmail.com</a></p>
        </div>
    </header>

    <section>
      <div className="pagination">
        <ul className="pagination__container">
          <li><a href="#" class="active_link">Web</a></li>
          <li><a href="graphic.html">Graphic</a></li>
        </ul>
      </div>
    </section>

    <section>
      <div className="portfolio">
        <h2>My Wet Paint Studio</h2>
        <div className="portfolio__website">
          <ul className="portfolio__website-container">
            <li className="portfolio__website-container--fullWidth">
              <div className="portfolio__overlay">
                <div className="portfolio__overlay-container">
                  { /* <h3>This is my title</h3> */ }
                  <p>Portfolio for Los Angeles based fine artist.</p>
                </div>
              </div>
              <img className="lazyload" data-src="./assets/img/web/mywetpaint.jpg" width="1280" height="800"/>
            </li>

            <li className="portfolio__website-container--subcontent">
              <img className="portfolio__website--mobile lazyload" data-src="./assets/img/web/mywetpaint-iPhone6.jpg" width="800" height="800"/>
            </li>
            <li className="portfolio__website-container--link">
              <span className="portfolio__link"><a href="http://mywetpaintstudio.com" target="_blank">Visit Website =></a></span>
            </li>
            
          </ul>
        </div>
      </div>

      <div className="portfolio">
        <h2>Destination: Oahu</h2>

        <div className="portfolio__website">
          <ul className="portfolio__website-container">
            <li className="portfolio__website-container--hero">
              <div className="portfolio__overlay">
                <div className="portfolio__overlay-container">
                  { /* <!-- <h3>This is my title</h3> --> */ }
                  <p>Travel website promoting both the modern and the natural scenery of Oahu, Hawaii.</p>                    
                </div>
              </div>
              <img className="lazyload" data-src="./assets/img/web/doahu-final.jpg" width="1200" height="624"/>
            
            </li>

            <li className="portfolio__website-container--subcontent">
              <img className="portfolio__website--mobile lazyload" data-src="./assets/img/web/doahu-galaxyS7_mockup.jpg" width="800" height="800"/>
            </li>

            <li className="portfolio__website-container--link">
              <span className="portfolio__link"><a href="http://tessellationdesign.com/IMD211/doahu/" target="_blank">Visit Website =></a></span>
            </li>
          </ul>
        </div>
      </div>        

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
              <img className="lazyload" data-src="./assets/img/web/rapocalypse-final.jpg" width="1200" height="625"/>
              
            </li>
            <li className="portfolio__website-container--subcontent-tablet">
              <img className="portfolio__website--mobile lazyload" data-src="./assets/img/web/rapocalypse-iPadPro.jpg" width="900" height="600"/>
            </li>
            <li className="portfolio__website-container--link">
              <span className="portfolio__link"><a href="https://reguv760.github.io/team-03/" target="_blank">Visit Website =></a></span>
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
              <img className="lazyload" data-src="./assets/img/web/frn-final.jpg" width="1200" height="625"/>
              
            </li>
            <li className="portfolio__website-container--subcontent-tablet">
              <img className="portfolio__website--mobile lazyload" data-src="./assets/img/web/frn-galaxyTab4-mockup.jpg" width="800" height="600"/>
            </li>
            <li className="portfolio__website-container--link">
              <span className="portfolio__link"><a href="http://tessellationdesign.com/GWDA273/frn/" target="_blank">Visit Website =></a></span>
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
              <img className="lazyload" data-src="./assets/img/web/highgroundmovie.jpg" width="1200" height="625"/>
            </li>
            <li className="portfolio__website-container--link">
              <span className="portfolio__link"><a href="http://highgroundmovie.com" target="_blank">Visit Website =></a></span>
            </li>
          </ul>
        </div>
      </div>
      
    </section>

    <section>
      <div className="pagination">
        <ul className="pagination__container">
          <li><a href="#" className="active_link">Web</a></li>
          <li><a href="graphic.html">Graphic</a></li>
        </ul>
      </div>
    </section>

    <footer className="pagefooter">
      { /* This is a footer area */ }
      <ul className="pagefooter__socialmedia">
        <li>
          <a href="http://www.linkedin.com/in/reggiegalang/" target="_blank" className="svg">
            <object type="image/svg+xml" data="./assets/icons/linkedIn.svg" >
              <img className="icon--linkedIn" src="./assets/icons/linkedIn.png"/>  
            </object>
          </a>
        </li>
        <li>
          <a href="https://github.com/reguv760/" target="_blank" class="svg">
            <img className="icon--github" src="./assets/icons/github.png"/> 
          </a>
        </li>
          </ul>

        <p>#using CSS Grid + Flexbox</p>
        <p>Site updated: 10.20.18</p>

    </footer>

    </div>
)

export default MainContainer
