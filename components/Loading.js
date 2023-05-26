import Image from "next/image"
import styles from '<@FMaidana07>/styles/Components.module.css'

const Loading = () => {
  return (
    <div className={styles.loading_container}>
      <Image
        src={'/images/gifLoad.gif'}
        width={280}
        height={300}
        alt='Majin-Load'
        priority
        className={styles.loading_gif}
      />
    </div>
  )
}

export default Loading