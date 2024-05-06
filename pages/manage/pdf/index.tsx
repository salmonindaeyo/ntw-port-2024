import React from 'react'
import { PdfPage } from 'src/presentation/manage/pdf/page/pdf_page'

const HomeRoute = () => {
  //---------------------
  //   RENDER
  //---------------------
  return <PdfPage />
}
export async function getServerSideProps(context) {
  return {
    props: {},
  }
}
export default HomeRoute
