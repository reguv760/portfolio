import React from 'react'
import { Link } from 'gatsby'

import RGlogo from './../icons/rg-logo.png'
import LinkedIn from './../icons/linkedIn.png'
import GitHub from './../icons/github.png'

import Resume from './../ReginaldGalang-resume.pdf'

const Sidebar = () => (
  <aside className="sidebar">
    <div className="sidebar__logo">
      <img src={RGlogo} alt="RG:Reggie Galang glyph" />
    </div>

    <nav>
      <ul className="sidebar__nav">
        <li>
          <Link to="/" className="active_link">
            Projects
          </Link>
        </li>
        <li>
          <a href={Resume} target="_blank" rel="noopener noreferrer">
            R&eacute;sum&eacute;
          </a>
        </li>
      </ul>
    </nav>

    <div className="sidebar__header">
      <p>
        Hello, my name is Reginald Galang and I'm a Web Developer + Graphic
        Designer. Feel free to browse through my projects.
      </p>
      <p>
        <a href="mailto:reguv760@gmail.com">reguv760@gmail.com</a>
      </p>
    </div>

    <div className="sidebar__footer">
      <ul className="socialmedia">
        <li>
          <a
            href="https://www.linkedin.com/in/reggiegalang/"
            target="_blank"
            className="svg"
            rel="noopener noreferrer"
          >
            <img src={LinkedIn} alt="Linkedin Icon" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/reguv760/"
            target="_blank"
            className="svg"
            rel="noopener noreferrer"
          >
            <img src={GitHub} alt="Github Icon" />
          </a>
        </li>
      </ul>

      <div className="sidebar__footerText">
        <p>#using CSS Grid + Flexbox</p>
        <p>
          Built with{' '}
          <a
            href="http://gatsbyjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            GatsbyJS
          </a>
        </p>
        <p>Site updated: 10.26.18</p>
      </div>
    </div>
  </aside>
)

export default Sidebar
