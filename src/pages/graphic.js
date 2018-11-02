import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import Layout from './../components/layout'
import Sidebar from './../components/Sidebar'
import MobileNav from './../components/MobileNav'
import PageContainer from './../components/PageContainer'
import ContainerHeader from './../components/ContainerHeader'

//page structure:::
import Pagination from './../components/Pagination'
import PageFooter from './../components/PageFooter'

//projects
import RavenwolfLogo from './../projects/Ravenwolf'
import SetaLogo from './../projects/Seta'

//styled component for page structure
//used once
const MainSection = styled.section`
	width: 100%;
	background-color: #0f0f0f;
`

//this is the structure for /graphic
const GraphicPage = () => (
	<StaticQuery
		query={graphql`
			query gdTitleQuery {
				site {
					siteMetadata {
						title
					}
				}
			}
		`}
		render={data => (
			<Layout>
				<Helmet title={data.site.siteMetadata.title + ' : graphic design'} />
				<div className="mainContainer">
					<Sidebar />
					<MobileNav />
					<PageContainer name="container">
						<ContainerHeader />

						<MainSection>
							<Pagination />
						</MainSection>

						{/* below is the meat of the structure */}
						<MainSection>
							<RavenwolfLogo />
							<SetaLogo />
						</MainSection>

						<MainSection>
							<Pagination />
						</MainSection>
						{/* only visible < Tablet res */}
						<PageFooter />
					</PageContainer>
					{/*  <Link to="/page-2/">Go to page 2</Link> */}
				</div>
			</Layout>
		)}
	/>
)

export default GraphicPage
