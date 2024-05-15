import { Observer } from 'mobx-react-lite'
import { useStore } from 'src/data/providers/app_store_provider'
import * as React from 'react'
import Box from '@mui/material/Box'
import Switch from '@mui/material/Switch'
import Paper from '@mui/material/Paper'
import Collapse from '@mui/material/Collapse'
import FormControlLabel from '@mui/material/FormControlLabel'
import { Welcome } from '../components/welcome'
import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { Imply } from '../components/imply'
import { Experience } from '../components/experience'
import Cursor from '../components/Cursor'
import Curve from 'src/core/components/Curve/index'
import { PortShow } from '../components/portshow'
import { Contact } from '../components/contact'
import { Tech } from '../components/tech'
export const HomePage = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <>
      <Curve backgroundColor={'#BCF366'}>
        <div className="w-full min-w-[1300px]  h-full select-none">
          <div className="border-x-8 border-white">
            <section className="scroll-section">
              <Welcome isActive={isActive} setIsActive={setIsActive} />
            </section>
            <section id="imply" className="scroll-section">
              <Imply />
            </section>
            <section id="tech" className="scroll-section">
              <Tech />
            </section>
            <section id="experience" className="scroll-section">
              <Experience />
            </section>
            <section className="scroll-section ">
              <PortShow />
            </section>
            <section id="contact" className="scroll-section ">
              <Contact />
            </section>
          </div>
          <Cursor isActive={isActive} />
        </div>
      </Curve>
    </>
  )
}
