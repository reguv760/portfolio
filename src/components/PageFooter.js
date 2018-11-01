import React from 'react'

/* images */
import LinkedIn from './../icons/linkedIn.png'
import GitHub from './../icons/github.png'

//animation:::
//import portfolioAnim from './portfolioAnim'

const PageFooter = () => (
  <footer className="pagefooter">
    {/* This is a footer area */}
    <ul className="pagefooter__socialmedia">
      <li>
        <a
          href="http://www.linkedin.com/in/reggiegalang/"
          target="blank"
          rel="noopener noreferrer"
          className="svg"
        >
          <img src={LinkedIn} alt="LinkedIn Icon" />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/reguv760/"
          target="blank"
          rel="noopener noreferrer"
          className="svg"
        >
          <img src={GitHub} alt="GitHub Icon" />
        </a>
      </li>
    </ul>

    <p>#using CSS Grid + Flexbox</p>
    <p>
      Built with{' '}
      <a href="http://gatsbyjs.org" target="_blank" rel="noopener noreferrer">
        GatsbyJS
      </a>
    </p>
    <p>Site updated: 10.26.18</p>
  </footer>
)

export default PageFooter
