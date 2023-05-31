import Head from "next/head"
import { Categorias } from "<@FMaidana07>/components/pages/Listas"



const listas = () => {




  return (<>
    <Head>
      <title>Listas [Majin-Music]</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

    <Categorias />

  </>

  )
}

export default listas