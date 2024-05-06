import React from 'react'
import { ManagePage } from 'src/presentation/manage/pages/manage_page'

const HomeRoute = () => {
  //---------------------
  //   RENDER
  //---------------------
  return <ManagePage />
}
export async function getServerSideProps(context) {
  return {
    props: {},
  }
}
export default HomeRoute
