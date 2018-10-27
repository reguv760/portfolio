import React from 'react'
//import { Link } from 'gatsby'

import Layout from './../components/layout'
//import Image from '../components/image'

//import Header from '../components/header'
import Sidebar from './../components/Sidebar'
import MobileNav from './../components/MobileNav'
import PageContainer from './../components/PageContainer'
import ContainerHeader from './../components/ContainerHeader'


const IndexPage = () => (
	<Layout>
		<div className="mainContainer">
			<Sidebar />
			<MobileNav />
			<PageContainer name="container">
				<ContainerHeader />
			</PageContainer>
		{ /*  <Link to="/page-2/">Go to page 2</Link> */ }
		</div>
	 </Layout>
)

export default IndexPage
