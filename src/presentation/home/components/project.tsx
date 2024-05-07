import React, { useEffect, useState } from 'react'
import { Observer } from 'mobx-react-lite'
import styles from '../css/styles.module.css'
import { motion } from 'framer-motion'

const anim = {
  initial: { width: 0 },

  open: { width: 'auto', transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] } },

  closed: { width: 0 },
}
export const Project = ({ project }) => {
  const { title1, title2, src } = project
  const [isActive, setIsActive] = useState(false)
  return (
    <Observer>
      {() => (
        <div
          onMouseEnter={() => {
            setIsActive(true)
          }}
          onMouseLeave={() => {
            setIsActive(false)
          }}
          className={styles.project + ' text-white text-[40px]'}
        >
          <p>{title1}</p>

          <motion.div variants={anim} animate={isActive ? 'open' : 'closed'} className={styles.imgContainer}>
            <img className="w-[120px] h-[120px] object-contain" src={`${src}`}></img>
          </motion.div>

          <p>{title2}</p>
        </div>
      )}
    </Observer>
  )
}
