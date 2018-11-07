import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const ProjectQuery = children => (
  <StaticQuery
    query={graphql`
			query {
				heroImage: file(relativePath: { eq: "web/mywetpaint.jpg" }) {
					...fluidImage
				}
				mobileThumbnail: file(
					relativePath: { eq: "web/mywetpaint-iPhone6.jpg" }
				) {
					...fluidImage
				}
			}
		`}
    render={data => (
      { children }
    )}
  />
)

export default ProjectQuery

// create graphql as a const
// to search for images + thumbnails
