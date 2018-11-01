import React from 'react'
//import { Link } from 'gatsby'

import Pagination from './Pagination'
import PageFooter from './PageFooter'

//projects
import MyWetPaint from './../projects/MyWetPaint'
import Doahu from './../projects/Doahu'
import RetailApocalypse from './../projects/RetailApocalypse'
import FauxRealNews from './../projects/FauxRealNews'
import Highground from './../projects/Highground'

const PageContainer = ({ name, children }) => (
  <div className={name}>
    {children}

    <Pagination />

    <section>
      <MyWetPaint />
      <Doahu />
      <RetailApocalypse />
      <FauxRealNews />
      <Highground />
    </section>

    <Pagination />

    <PageFooter />
  </div>
)

export default PageContainer
