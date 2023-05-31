import Head from "next/head"
import styles from "<@FMaidana07>/styles/Components.module.css"
import links from "<@FMaidana07>/components/Links"
import { LogContext } from "<@FMaidana07>/components/context"
import { useContext } from "react"



const listas = () => {
  const { router } = useContext(LogContext)

  return (<>
    <Head>
      <title>Listas [Majin-Music]</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>


    <div className={`${styles.container} `}>
      <h1 className={styles.title}> ¿ Qué deseas escuchar ?</h1>
      <div className={styles.list_container}>
        {links.listas.map(({ name, url }) =>
          <button key={name} className={styles.list_btn}
            onClick={(e) => {
              e.preventDefault()
              router.replace(`/listas/${url}`)
            }}>
            {name}
          </button>)}
      </div>
    </div>

  </>

  )
}

export default listas