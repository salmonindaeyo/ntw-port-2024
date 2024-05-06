import React, { useEffect } from 'react'
import { Observer } from 'mobx-react-lite'

export const Imply = () => {
  useEffect(() => {}, [])

  return (
    <Observer>
      {() => (
        <div className="bg-white w-full flex justify-center items-center h-full">
          <div className="w-[1200px] flex items-center">
            <div data-aos-duration="1000" data-aos="zoom-in-right" className="w-full h-full flex justify-center items-center">
              <div style={{ zoom: 2 }} className="text-[14px] w-full flex flex-col space-y-1  h-full">
                <div className="flex">
                  <div> I'm a </div>
                  <div className="ml-5 relative w-[200px]">
                    full-stack developer <img src="/circle.png" className="w-[190px] top-[-90px] right-7 absolute" />
                  </div>
                </div>
                <div>who builds immersive and</div>
                <div>user-friendly web-applications</div>
                <div>that users love.💻</div>
                <div className="text-[8px] w-[150px] text-gray-400">
                  Find me on
                  <a className="mx-0.5 underline" href="https://www.facebook.com/nwat44/" target="_blank">
                    facebook,
                  </a>
                  or on
                  <a className="mx-0.5 underline" href="https://www.linkedin.com/in/nuttawat-rodsomboon/" target="_blank">
                    LinkedIn,
                  </a>
                  or just send me an email saying hi.
                </div>
              </div>
            </div>
            <div className="hover:scale-125 transition-all duration-700 w-full h-full flex justify-center items-center">
              <img
                data-aos-duration="1000"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                className="w-[400px] rounded-lg "
                src="/me.jpg"
              />
              '
            </div>
          </div>
        </div>
      )}
    </Observer>
  )
}
