import React, { useEffect } from 'react'
import { Observer } from 'mobx-react-lite'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
export const Welcome = ({ setIsActive, isActive }) => {
  //---------------------
  //   I18n
  //---------------------

  //---------------------
  //   CONTEXT
  //---------------------
  useGSAP(() => {
    gsap.fromTo(
      '#blue-box',
      {
        x: 0,
        rotation: 0,
        borderRadius: 0,
      },
      {
        x: 150,
        repeat: -1,
        borderRadius: '100%',
        rotation: 360,
        duration: 1.5,
        yoyo: true,
      }
    )
  }, [])

  useGSAP(() => {
    gsap.from('#trapezium-box', {
      y: 10,
      repeat: -1,
      yoyo: true,
    })
  }, [])
  //   EFFECT
  //---------------------

  useEffect(() => {}, [])

  const divStyle = {
    backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/meetme-1815f.appspot.com/o/Desktop_-_1.png?alt=media&token=dafd5fd0-3656-4844-a9db-f6ea924f6cf3")`,
    backgroundSize: 'cover',
  }
  return (
    <Observer>
      {() => (
        <div style={divStyle} className=" flex  w-full h-full">
          <div className="border-r w-1/5  flex flex-col">
            <div className="w-full h-[10%] border-b"></div>
            <div className="border-b h-[45%]"> </div>
            <div className="h-[45%]"></div>
          </div>
          <div className="flex flex-col w-full">
            <div className="w-full h-[10%] border-b"></div>
            {/* <h1
              onMouseOver={() => {
                setIsActive(true)
              }}
              onMouseLeave={() => {
                setIsActive(false)
              }}
              className="text-[4.5vw] max-w-[90vw] text-center text-white p-20"
            >
              The quick brown fox jumps over the lazy dog
            </h1> */}
            <div className="border-b flex flex-col justify-between h-[45%]">
              <div className="text-white paytone-one-regular text-[2rem]">Ntww.work</div>
              <div className="paytone22-one-regular   stroke text-[14rem] mb-[-84px]">
                <span
                  onMouseOver={() => {
                    setIsActive(true)
                  }}
                  onMouseLeave={() => {
                    setIsActive(false)
                  }}
                  className="relative flex"
                >
                  <span className="hover:text-white transition-all duration-500">P</span>
                  <span className="hover:text-white transition-all duration-500">o</span>
                  <span className="hover:text-white transition-all duration-500">r</span>
                  <span className="hover:text-white transition-all duration-500">t</span>
                  <span className="hover:text-white transition-all duration-500">f</span>
                  <span className="hover:text-white transition-all duration-500">o</span>
                  <span className="hover:text-white transition-all duration-500">l</span>
                  <span className="hover:text-white transition-all duration-500">i</span>
                  <span className="hover:text-white transition-all duration-500 relative">
                    o <span style={{ zoom: 0.5 }} id="trapezium-box" className="absolute right-0 top-0 trapezium" />
                  </span>
                </span>
              </div>
            </div>
            <div className="h-[45%] flex justify-center">
              <div className="paytone-one-regular flex items-center text-white text-[14rem]">
                <div>Work </div> <div id="blue-box" className="w-20 h-20 mt-[130px]  bg-white rounded-full" />
              </div>
            </div>
          </div>
        </div>
      )}
    </Observer>
  )
}
