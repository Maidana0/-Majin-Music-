import Head from "next/head"
import styles from "<@FMaidana07>/styles/Components.module.css"
const artistas = () => {
  return (
    <>
      <Head>
        <title>Artistas [Majin-Music]</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.container}>
        <iframe style={{ borderRadius: "8px" }}
          src="https://open.spotify.com/embed/playlist/3dB8Q9RUhfNZxffSiuav41?utm_source=generator"
          width="100%" height="580px" allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>

    </>

  )
}

export default artistas