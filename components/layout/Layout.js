import { useState, useContext, useEffect } from "react"
import { LogContext } from "../context"
import styles from '<@FMaidana07>/styles/Layout.module.css'
import nProgress from "nprogress"

import Navbar from "./Navbar"
import Footer from "./Footer"

export const Layout = ({ login, children }) => {
  const [subMenu, setSubMenu] = useState()
  const { log, logout, router } = useContext(LogContext)

  useEffect(() => {
    const handleRouteChange = url => {
      nProgress.start();
    }
    router.events.on('routeChangeStart', handleRouteChange)

    router.events.on('routeChangeComplete', () => nProgress.done())
    return () => router.events.off('routeChangeStart', handleRouteChange);

  }, [])




  return (
    <>
      <Navbar
        userLog={log}
        subMenu={subMenu}
        setSubMenu={setSubMenu}
        router={router}
        styles={styles}
      />

      <main onClick={() => setSubMenu(false)} >
        {
          children
        }
      </main>
      {
        log &&
        <button className={styles.logout}
          onClick={(e) => {
            e.preventDefault()
            logout()
            localStorage.removeItem('user')
            router.push('/ingresar')
          }}>
          Salir
        </button>
      }
      <Footer />
    </>
  )
}
