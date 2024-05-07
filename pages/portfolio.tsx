import React from 'react'
import { PortfolioPage } from 'src/presentation/portfolio/pages/portfolio_page'

const PortfolioRoute = () => {
  //---------------------
  //   RENDER
  //---------------------
  return <PortfolioPage />
}
export async function getServerSideProps(context) {
  return {
    props: {},
  }
}
export default PortfolioRoute
