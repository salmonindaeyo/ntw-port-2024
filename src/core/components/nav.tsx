import React, { useEffect, useState } from 'react'
import { Observer } from 'mobx-react-lite'
import styles from './style.module.scss'
import { motion } from 'framer-motion'
import { usePathname, useSearchParams } from 'next/navigation'
import { perspective } from './anim'
import { useRouter } from 'next/navigation'

export const Nav = () => {
  const router = useRouter()

  const pathname = usePathname()
  useEffect(() => {
    if (pathname === '/') {
      router.push('/main')
    }
  }, [])
  const links = [
    {
      title: 'welcome',

      href: '/',
    },
    {
      title: 'imply',

      href: '#imply',
    },
    {
      title: 'experience',

      href: '#experience',
    },

    {
      title: 'contact',

      href: '#contact',
    },
    {
      title: 'portfolio',

      href: '/portfolio',
    },
  ]

  return (
    <Observer>
      {() => (
        <div className={styles.nav}>
          <div className={styles.body}>
            {links.map((link, i) => {
              const { title, href } = link

              return (
                <div key={`b_${i}`} className={styles.linkContainer}>
                  {pathname !== '/portfolio' || title !== 'portfolio' ? (
                    <motion.div custom={i} variants={perspective} initial="initial" animate="enter" exit="exit">
                      {pathname === '/portfolio' ? <a href={'/main' + href}>{title}</a> : <a href={href}>{title}</a>}
                    </motion.div>
                  ) : (
                    <div></div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      )}
    </Observer>
  )
}
