import Loading from "<@FMaidana07>/components/Loading"
import { LogContext } from "<@FMaidana07>/components/context"
import Head from "next/head"
import { useState, useContext, useEffect } from 'react'
import styles from "<@FMaidana07>/styles/Container.module.css"
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })
// <h2 className={inter.className}>
// Learn <span>-&gt;</span>
// </h2>


const Home = () => {
  const { router, log } = useContext(LogContext)

  useEffect(() => {
    if (!log) router.replace('/ingresar')
  }, [log])

  return (
    <>
      <Head>
        <title>Majin-Music</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {
        log ?
            <div className={`${styles.index}`}>
              <h1>Bienvenido a nuestro sitio web {log && log}!!</h1>
              <p>
                Dentro de este sitio podras visualizar variadas listas de spotify
              </p>
            </div>
          :
          <Loading />
      }


    </>
  )

}


export default Home