import React from 'react'
import { HomePage } from 'src/presentation/home/pages/home_page'

const HomeRoute = () => {
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
export default HomeRoute
