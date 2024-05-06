import React, { useEffect } from 'react'
import { Observer } from 'mobx-react-lite'
import { motion } from 'framer-motion'
import { slide, scale } from './anim'
import styles from './style.module.scss'

export const Link = ({ data, isActive, setSelectedIndicator }) => {
  const { title, href, index } = data
  useEffect(() => {}, [])

  //---------------------
  //   RENDER
  //---------------------
  return (
    <Observer>
      {() => (
        <motion.div
          className={styles.link}
          onMouseEnter={() => {
            setSelectedIndicator(href)
          }}
          custom={index}
          variants={slide}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <motion.div variants={scale} animate={isActive ? 'open' : 'closed'} className={styles.indicator}></motion.div>

          {title}
        </motion.div>
      )}
    </Observer>
  )
}
