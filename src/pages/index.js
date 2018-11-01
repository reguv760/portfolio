import React from 'react'
import styled from 'styled-components'
//import { Link } from 'gatsby'

import Layout from './../components/layout'
//import Image from '../components/image'

//import Header from '../components/header'
import Sidebar from './../components/Sidebar'
import MobileNav from './../components/MobileNav'
import PageContainer from './../components/PageContainer'
import ContainerHeader from './../components/ContainerHeader'

//page structure:::
import Pagination from './../components/Pagination'
import PageFooter from './../components/PageFooter'

//projects
import MyWetPaint from './../projects/MyWetPaint'
import Doahu from './../projects/Doahu'
import RetailApocalypse from './../projects/RetailApocalypse'
import FauxRealNews from './../projects/FauxRealNews'
import Highground from './../projects/Highground'

const MainSection = styled.section`
	width: 100%;
	background-color: #0f0f0f;
`

//this is the structure for index.html (or root directory)
//template this structure for other pages
const IndexPage = () => (
	<Layout>
		<div className="mainContainer">
			<Sidebar />

			{/* only visible when < Tabket */}
			<MobileNav />

			<PageContainer name="container">
				<ContainerHeader />

				<Pagination />

				{/* below is the meat of the structure */}
				<MainSection>
					<MyWetPaint />
					<Doahu />
					<RetailApocalypse />
					<FauxRealNews />
					<Highground />
				</MainSection>

				<Pagination />

				{/* only visible < Tablet res */}
				<PageFooter />
			</PageContainer>
			{/*  <Link to="/page-2/">Go to page 2</Link> */}
		</div>
	</Layout>
)

export default IndexPage
