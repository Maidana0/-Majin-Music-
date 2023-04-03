import Image from "next/image"
import styles from '<@FMaidana07>/styles/Layout.module.css'

const Footer = () => (
  <footer className={`f_c bg-dark ${styles.footer}`}>
    <Image
      src={'/images/insta.svg'}
      width={30}
      height={30}
      alt={'Instagram'}
      priority
    />
    <a href='https://www.instagram.com/franco_maidana07/' target='blank'>©opyright 2022 </a>
  </footer>)



export default Footer