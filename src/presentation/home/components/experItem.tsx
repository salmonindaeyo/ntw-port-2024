import React, { useEffect } from 'react'
import { Observer } from 'mobx-react-lite'

export const ExperItem = ({ time, title, role, content }) => {
  useEffect(() => {}, [])

  //---------------------
  //   RENDER
  //---------------------
  return (
    <Observer>
      {() => (
        <div className="flex p-4 flex-col drop-shadow-md cursor-pointer hover:scale-125 transition-all duration-500 bg-white w-full ">
          <div className="text-[10px] text-gray-500 font-light">{time}</div>
          <div className="text-[18px] font-medium">{title}</div>
          <div className="text-[14px] font-light">{role}</div>
          <div className="w-[250px] font-light line-clamp-6	 mt-4 text-[12px]">{content}</div>
        </div>
      )}
    </Observer>
  )
}
