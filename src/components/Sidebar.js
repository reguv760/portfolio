import React, { Component } from 'react'
import { Tween } from 'react-gsap'
import { Link } from 'gatsby'

import RGlogo from './../icons/rg-logo.png'
import LinkedIn from './../icons/linkedIn.png'
import GitHub from './../icons/github.png'

import Resume from './../ReginaldGalang-resume.pdf'


const Sidebar = () =>
{
  return (
   <aside className="sidebar" >
    <div className="sidebar__logo" >
        <img src={RGlogo} alt="RG:Reggie Galang glyph" />
    </div>

    <nav >
      <Tween duration={ '0.6' } to={{ left: '0px', delay:'0.25', ease:'Bounce.easeOut' }} >
      <ul className="sidebar__nav" >
        <li>
          <Link to="/" activeStyle={{color: '#33cf33'}}>
            Web
          </Link>
        </li>

        <li>
          <Link to="/graphic" activeStyle={{color: '#33cf33'}}>
            Graphic Design
          </Link>
        </li>

        <li>
          <Link to="/about" activeStyle={{color: '#33cf33'}}>
            About Me
          </Link>
        </li>
        <li>
          <a href={Resume} target="_blank" rel="noopener noreferrer">
            R&eacute;sum&eacute;
          </a>
        </li>

      </ul>
      </Tween>
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
        <p>Site updated: 3.19.19</p>
      </div>
    </div>
  </aside>
  )
 
}

export default Sidebar
