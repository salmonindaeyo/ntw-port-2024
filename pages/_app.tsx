import '../styles/global.css'

import { Modal } from 'src/presentation/components/modal'
import { StoreProvider } from 'src/data/providers/app_store_provider'
import { QueryProviderLayout } from 'src/core/components/queryProvider.layout'
import { useRouter } from 'next/router'
import AOS from 'aos'
import { useEffect } from 'react'
import { Header } from '../src/core/components/header'
import { AnimatePresence } from 'framer-motion'
import '../styles/styles.scss'

import 'aos/dist/aos.css'
function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const currentPath = router.pathname
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    })
  }, [])
  return (
    <StoreProvider {...pageProps}>
      <QueryProviderLayout>
        <div>
          <Modal />
          <Header />
          <AnimatePresence mode="wait">
            <Component {...pageProps} />
          </AnimatePresence>
        </div>
      </QueryProviderLayout>
    </StoreProvider>
  )
}

export default MyApp
