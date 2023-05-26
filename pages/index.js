import Loading from "<@FMaidana07>/components/Loading"
import { LogContext } from "<@FMaidana07>/components/context"
import Head from "next/head"
import { useState, useContext, useEffect } from 'react'
import styles from "<@FMaidana07>/styles/Index.module.css"
import Image from "next/image"
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })
// <h2 className={inter.className}>
// Learn <span>-&gt;</span>
// </h2>


const Home = () => {
  const { router, log } = useContext(LogContext)

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (!user) router.replace('/ingresar')
  }, [])

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
              Dentro de este sitio podras visualizar variadas listas de spotify!
            </p>
            <Image
              src={"/images/Spotify-Black-Logo.wine.svg"}
              width={250}
              height={80}
              alt="Spotify-Black-Logo.wine"
              priority
              style={{
                backgroundColor: '#fff',
                borderRadius: '20px',
                margin: '2rem 0  0 10%',
                cursor: 'pointer'
              }}
            />

          </div>
          :
          <Loading />
      }

    </>
  )

}


export default Home