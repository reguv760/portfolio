import React from "react"
import Helmet from "react-helmet"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

import Layout from "./../components/layout"

import Sidebar from "./../components/Sidebar"
import MobileNav from "./../components/MobileNav"
import PageContainer from "./../components/PageContainer"
import ContainerHeader from "./../components/ContainerHeader"

// page structure:::
import PageFooter from "./../components/PageFooter"

//stuff:::
import AboutMe from "./../projects/AboutMe"
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
            siteUpdateDate
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <Helmet title={data.site.siteMetadata.title + ": about me"} />

        <div className="mainContainer">
          <Sidebar siteUpdateDate={data.site.siteMetadata.siteUpdateDate} />

          {/* only visible when < Tablet */}
          <MobileNav />

          <PageContainer name="container">
            <ContainerHeader />

            <MainSection>
              <AboutMe />
            </MainSection>

            <PageFooter
              siteUpdateDate={data.site.siteMetadata.siteUpdateDate}
            />
          </PageContainer>
        </div>
      </Layout>
    )}
  />
)

export default AboutPage
