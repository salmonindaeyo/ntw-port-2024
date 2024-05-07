import React, { useEffect } from 'react'
import { Observer } from 'mobx-react-lite'
import styles from '../css/styles.module.css'
import { Project } from '../components/project'
import { useRouter } from 'next/navigation'

export const PortShow = () => {
  const router = useRouter()

  useEffect(() => {}, [])
  const projects = [
    {
      title1: 'SABLE',
      title2: ' PROJECT',
      src: 'https://firebasestorage.googleapis.com/v0/b/meetme-1815f.appspot.com/o/SableLogo.png?alt=media&token=a5b57642-4d8d-4428-bd06-88912fc3c06d',
    },

    {
      title1: 'SHOWHOPPER',
      title2: ' PROJECT',
      src: 'https://firebasestorage.googleapis.com/v0/b/meetme-1815f.appspot.com/o/download.png?alt=media&token=f7b3662e-0fc4-47d8-9a49-68bdd894a7c7',
    },
    {
      title1: 'MEET',
      title2: ' ME',
      src: 'https://firebasestorage.googleapis.com/v0/b/meetme-1815f.appspot.com/o/logoM2%403x%201.png?alt=media&token=ca655ab8-bd44-4689-9d62-2e262f26a1e6',
    },
    {
      title1: 'KNOWISLAM',
      title2: ' THAILAND',
      src: 'https://firebasestorage.googleapis.com/v0/b/meetme-1815f.appspot.com/o/cropped-cropped-logo-web01.png?alt=media&token=befb7e73-5298-4497-9774-8b17a7b2669b',
    },
  ]

  const divStyle = {
    backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/meetme-1815f.appspot.com/o/Desktop_-_1.png?alt=media&token=dafd5fd0-3656-4844-a9db-f6ea924f6cf3")`,
    backgroundSize: 'cover',
  }

  return (
    <Observer>
      {() => (
        <main style={divStyle} className={styles.main + '  flex flex-col'}>
          <div className={styles.gallery}>
            <p className="text-white">Project</p>

            {projects.map((project) => {
              return <Project project={project} />
            })}
          </div>
          <div onClick={() => router.push('/portfolio')} className="text-white underline mt-4 cursor-pointer">
            {' '}
            see all project
          </div>
        </main>
      )}
    </Observer>
  )
}
