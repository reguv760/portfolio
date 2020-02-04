import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

// import Header from './header'
import "normalize.css"
import "./../css/style.scss"

// fragment fluidImage on File:::
// this is a graphql fragment used called by <Img>'s
// in projects/*.js

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      fragment fluidImage on File {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: "description",
              content: `Reginald Galang's 2018 Portfolio website`,
            },
            {
              name: "keywords",
              content:
                "Web Developer, Graphic Designer, Hybrid Designer and Developer, Los Angeles, California, ReactJS, GatsbyJS",
            },
          ]}
        >
          <html lang="en" />
          <meta
            name="google-site-verification"
            content="uEMwi9Dm-wa-RyYWqVlbPlAd1vXDIX3WDjImWBioXQU"
          />

          <meta
            name="msvalidate.01"
            content="53209890CBAEF8B0E67BA4C362E444E5"
          />

          <meta
            name="keywords"
            content="Web Developer, Graphic Designer, Front End Web Developer, Los Angeles, California, ReactJS, GatsbyJS"
          />

          <meta
            name="description"
            content="I'm Reginald Galang and I'm a Web Developer + Graphic Designer. Feel free to browse through my projects."
          />
        </Helmet>
        <div>{children}</div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
