import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
// import { Link } from 'gatsby'

import Layout from './../components/layout'
// import Image from '../components/image'

// import Header from '../components/header'
import Sidebar from './../components/Sidebar'
import MobileNav from './../components/MobileNav'
import PageContainer from './../components/PageContainer'
import ContainerHeader from './../components/ContainerHeader'

// page structure:::
import Pagination from './../components/Pagination'
import PageFooter from './../components/PageFooter'


// this defines the main section component:::
const MainSection = styled.section`
	width: 100%;
	background-color: #efefef;
`

// this is the structure for index.html (or root directory)
// template this structure for other pages
const AboutPage = () => (
  <StaticQuery
    query={graphql`
			query aboutTitleQuery {
				site {
					siteMetadata {
						title
					}
				}
			}
		`}
    render={data => (
      <Layout>
        <Helmet title={data.site.siteMetadata.title} />

        <div className="mainContainer">
          <Sidebar />

          {/* only visible when < Tablet */}
          <MobileNav />

          <PageContainer name="container">
            <ContainerHeader />

           { /* <!--  <MainSection>
              <Pagination />
            </MainSection> --> */ }

            {/* below is the meat of the structure */}
            <MainSection>
              <h1>Hello World!</h1>
            </MainSection>

           { /* <!--  <MainSection>
              <Pagination />
            </MainSection> --> */ }

            {/* only visible < Tablet res */}
            <PageFooter />
          </PageContainer>
          {/*  <Link to="/page-2/">Go to page 2</Link> */}
        </div>
      </Layout>
    )}
  />
)

export default AboutPage
