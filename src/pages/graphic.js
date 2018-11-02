import React from 'react'
import styled from 'styled-components'
//import { Link } from 'gatsby'
//import Image from '../components/image'

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
	<Layout>
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
)

export default GraphicPage
