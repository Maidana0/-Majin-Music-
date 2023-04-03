import { useState, useContext, useEffect } from "react"
import { LogContext } from "../context"
import styles from '<@FMaidana07>/styles/Layout.module.css'

import Navbar from "./Navbar"
import Footer from "./Footer"

const paths = [
  '/', '/listas', '/artistas', '/contacto',
  '/categorias/rock', '/categorias/otros',
  '/categorias/rock-nacional', '/categorias/reggae'
]

export const Layout = ({ children }) => {
  const [subMenu, setSubMenu] = useState()
  const { log, logout, router } = useContext(LogContext)

  useEffect(() => {
    (!log && paths.some(a => a == router.pathname)) && router.push('/ingresar')
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
        {children}
      </main>
      {
        log &&
        <div className={styles.logout}>
          <button
            onClick={(e) => {
              e.preventDefault()
              logout()
              localStorage.removeItem('user')
              router.push('/ingresar')
            }}>
            Salir
          </button>
        </div>
      }
      <Footer />
    </>
  )
}