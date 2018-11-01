import React from 'react'
import styled from 'styled-components'
//import { Link } from 'gatsby'

const WebLinkStyle = styled.span`
	cursor: pointer;
	position: relative;
	top: 0.75rem;
`

const WebLink = ({ link }) => (
	<div>
		<WebLinkStyle className="portfolio__link">
			<a href={link} target="blank" rel="noopener noreferrer">
				Visit Website =>
			</a>
		</WebLinkStyle>
	</div>
)

export default WebLink
