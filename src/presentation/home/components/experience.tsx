import React, { useEffect } from 'react'
import { Observer } from 'mobx-react-lite'
import skills from 'src/data/skill'
import exper from 'src/data/exper'

import { ExperItem } from './experItem'
export const Experience = () => {
  useEffect(() => {}, [])
  const divStyle = {
    backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/meetme-1815f.appspot.com/o/blue_gain.png?alt=media&token=fe63ec7e-88ea-448b-86de-a039bffd7f30")`,
    backgroundSize: 'cover',
  }
  return (
    <Observer>
      {() => (
        <div style={divStyle} className="w-full h-full flex flex-col">
          <div className="h-3/5 flex w-full justify-between">
            <div className=" h-full">
              <div data-aos="fade-up" data-aos-duration="1500" className="flex flex-col h-full justify-center ml-10">
                <div className="text-white text-[5rem] "> Halo! I'm Nut🥳 </div>
                <div className="text-white mb-2 mt-[-20px] text-[16px]">Nuttawat rodsomboon , 23 year old</div>

                <div className="w-[500px] font-light text-white text-[12px]">
                  I am a Full-stack developer who is passionate about continuously learning and honing new skills. I thrive on challenges encountered
                  when faced with tasks I have not yet tackled, seeing them as opportunities for personal growth. Determination and diligence have
                  been the guiding principles throughout my career. When I set a goal, I am committed to doing whatever it takes to achieve it. I
                  firmly believe that working with like-minded individuals who share the same drive and dedication yields the best results. Teamwork
                  is paramount in my belief system. When individuals with a shared sense of purpose and determination come together, we can accomplish
                  tasks with the utmost success.
                </div>
              </div>
            </div>
            <div className="h-full flex items-end pr-10 pb-10 text-white">
              <div className="flex flex-col">
                <div data-aos="fade-up" data-aos-duration="1500" className="flex space-x-4">
                  <div>
                    <div> Frontend </div>
                    <div className="w-[150px] text-gray-300 font-light">
                      {skills.frontendSkill.map((item, index) => (
                        <span className="mr-1" key={index}>
                          {item}
                          {index !== skills.frontendSkill.length - 1 ? ',' : null}
                          {(index + 1) % 2 === 0 && <br />}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div> Backend </div>
                    <div className="w-[150px] text-gray-300 font-light">
                      {skills.backendSkill.map((item, index) => (
                        <span className="mr-1" key={index}>
                          {item}
                          {index !== skills.backendSkill.length - 1 ? ',' : null}
                          {(index + 1) % 2 === 0 && <br />}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div> databases </div>
                    <div className=" text-gray-300 font-light">
                      {skills.databasesSkill.map((item, index) => (
                        <span className="mr-1" key={index}>
                          {item}
                          <br />
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-2/5 bg-white flex justify-center space-x-6 relative">
            <img src="/ntwjunior.png" className="w-[250px] absolute top-[-280px] left-1/3" />
            <div className="ml-10 h-full flex items-center justify-center text-[3rem]">Experience</div>
            <div data-aos="fade-up" data-aos-duration="3000" className="p-6 mr-10 flex space-x-10 items-center">
              {exper.exper.map((item, index) => (
                <ExperItem time={item.time} title={item.title} role={item.role} content={item.content} />
              ))}
            </div>
          </div>
        </div>
      )}
    </Observer>
  )
}
