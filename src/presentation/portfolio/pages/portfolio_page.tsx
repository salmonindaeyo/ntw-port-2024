import React, { useEffect } from 'react'
import { Observer } from 'mobx-react-lite'
import Curve from 'src/core/components/Curve/index'

export const PortfolioPage = () => {
  //---------------------
  //   I18n
  //---------------------

  //---------------------
  //   CONTEXT
  //---------------------

  //---------------------
  //   EFFECT
  //---------------------
  useEffect(() => {}, [])

  //---------------------
  //   RENDER
  //---------------------
  return (
    <Observer>
      {() => (
        <div className="w-screen h-screen flex justify-center items-center">
          <Curve backgroundColor={'#'}>coming soon</Curve>
        </div>
      )}
    </Observer>
  )
}
