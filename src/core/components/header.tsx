import React, { useEffect, useState } from 'react'
import { Observer } from 'mobx-react-lite'
import styles from './style.module.scss'
import { Nav } from './nav'
import { AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
export const Header = () => {
  const [isActive, setIsActive] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (isActive) setIsActive(false)
  }, [pathname])

  //---------------------
  //   RENDER
  //---------------------
  return (
    <Observer>
      {() => (
        <>
          <div className={styles.main}>
            <div className={styles.header}>
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
          <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
        </>
      )}
    </Observer>
  )
}
