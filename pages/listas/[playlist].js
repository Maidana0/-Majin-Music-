import { useContext, useState, useEffect } from "react"
import { LogContext } from "<@FMaidana07>/components/context"
import PlayList from "<@FMaidana07>/components/PlayList"
import Error from "<@FMaidana07>/components/Error"
import Loading from "<@FMaidana07>/components/Loading"
import styles from "<@FMaidana07>/styles/Components.module.css"
import Head from "next/head"


const lista = () => {
  const { router } = useContext(LogContext)
  const { playlist } = router.query

  const [play, setPlay] = useState(<Loading />)

  useEffect(() => {
    setTimeout(
      () => setPlay(<PlayList url={playlist} />), 1400
    )
  }, [playlist])

  return (
    <>
      <Head>
        <title>Lista [Majin-Music]</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <button className={styles.playList_btn}
          onClick={() => router.replace('/listas')}>
          Atras</button>
        {play ? play : <Error />}
      </div>
    </>
  )
}

export default lista