import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
// import { Link } from 'gatsby'

import Layout from "./../components/layout"
// import Image from '../components/image'

// import Header from '../components/header'
import Sidebar from "./../components/Sidebar"
import MobileNav from "./../components/MobileNav"
import PageContainer from "./../components/PageContainer"
import ContainerHeader from "./../components/ContainerHeader"

// page structure:::
// import Pagination from "./../components/Pagination";
import PageFooter from "./../components/PageFooter"

// projects
import MyWetPaint from "./../projects/MyWetPaint"
import Rocknbox from "./../projects/Rocknbox"
import AbrahamLim from "./../projects/AbrahamLim"
// import EvanBeigel from './../projects/EvanBeigel'
import HairExt from "./../projects/HairExt"
import Doahu from "./../projects/Doahu"
import RetailApocalypse from "./../projects/RetailApocalypse"
import FauxRealNews from "./../projects/FauxRealNews"
import Highground from "./../projects/Highground"

// this defines the main section component:::
const MainSection = styled.section`
  width: 100%;
  background-color: #efefef;
`

// this is the structure for index.html (or root directory)
// template this structure for other pages

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query indexTitleQuery {
        site {
          siteMetadata {
            title
            siteUpdateDate
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <Helmet title={data.site.siteMetadata.title}>
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
            content="Web Developer, Graphic Designer, Hybrid Designer and Developer, Los Angeles, California, ReactJS, GatsbyJS"
          />

          <meta
            name="description"
            content="I'm Reginald Galang and I'm a Web Developer + Graphic Designer. Feel free to browse through my projects."
          />
        </Helmet>

        <div className="mainContainer">
          <Sidebar siteUpdateDate={data.site.siteMetadata.siteUpdateDate} />

          {/* only visible when < Tablet */}
          <MobileNav />

          <PageContainer name="container">
            <ContainerHeader />

            {/* below is the meat of the structure */}
            <MainSection>
              <HairExt />
              <MyWetPaint />
              <AbrahamLim />
              <Doahu />
              <Rocknbox />
              <RetailApocalypse />
              <Highground />
              {/* <EvanBeigel /> */}
              <FauxRealNews />
            </MainSection>

            {/* only visible < Tablet res */}
            <PageFooter
              siteUpdateDate={data.site.siteMetadata.siteUpdateDate}
            />
          </PageContainer>
          {/*  <Link to="/page-2/">Go to page 2</Link> */}
        </div>
      </Layout>
    )}
  />
)

export default IndexPage
