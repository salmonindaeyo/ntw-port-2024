import React from 'react'
import { HomePage } from 'src/presentation/home/pages/home_page'

const MainRoute = () => {
  //---------------------
  //   RENDER
  //---------------------
  return <HomePage />
}
export async function getServerSideProps(context) {
  return {
    props: {},
  }
}
export default MainRoute
