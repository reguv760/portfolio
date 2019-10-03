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
                "Web Developer, Web Designer, Graphic Designer, ReactJS, Gatsby, Los Angeles",
            },
          ]}
        >
          <html lang="en" />
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
