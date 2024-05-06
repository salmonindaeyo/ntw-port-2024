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

export const HomePage = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <Observer>
      {() => (
        <div className="w-full min-w-[1300px] h-full select-none">
          <div>
            <section className="scroll-section">
              <Welcome isActive={isActive} setIsActive={setIsActive} />
            </section>
            <section className="scroll-section">
              <Imply />
            </section>
            <section className="scroll-section">
              <Experience />
            </section>
            <section className="scroll-section bg-blue-100">
              <h2>Section four</h2>
            </section>
            <section className="scroll-section bg-red-100">
              <h2>Section five</h2>
            </section>
          </div>
          <Cursor isActive={isActive} />
        </div>
      )}
    </Observer>
  )
}
