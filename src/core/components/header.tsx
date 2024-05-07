import React, { useEffect, useState } from 'react'
import { Observer } from 'mobx-react-lite'
import styles from './style.module.scss'
import { Nav } from './nav'
import { AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

export const Header = () => {
  const [isActive, setIsActive] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (isActive) setIsActive(false)
  }, [pathname])

  const menu = {
    open: {
      width: '480px',

      height: '650px',

      top: '-25px',

      right: '-25px',

      transition: { duration: 0.75, type: 'tween', ease: [0.76, 0, 0.24, 1] },
    },

    closed: {
      width: '0px',

      height: '0px',

      top: '0px',

      right: '0px',

      transition: { duration: 0.75, delay: 0.35, type: 'tween', ease: [0.76, 0, 0.24, 1] },
    },
  }

  return (
    <Observer>
      {() => (
        <>
          <div className={styles.main}>
            <div className={styles.header}>
              <motion.div className={styles.menu} variants={menu} animate={isActive ? 'open' : 'closed'} initial="closed">
                <AnimatePresence>{isActive && <Nav />}</AnimatePresence>
              </motion.div>
              <div
                onClick={() => {
                  setIsActive(!isActive)
                }}
                className={styles.button}
              >
                <div className={`${styles.burger} ${isActive ? styles.burgerActive : ''}`}></div>
              </div>
            </div>
          </div>
        </>
      )}
    </Observer>
  )
}
