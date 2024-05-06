import React from 'react'
import { RoundPage } from 'src/presentation/round/pages/round_page'

const HomeRoute = () => {
  //---------------------
  //   RENDER
  //---------------------
  return <RoundPage />
}

export async function getServerSideProps(context) {
  return{
    props:{},
  }
  
}
export default HomeRoute
