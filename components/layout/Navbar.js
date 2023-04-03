import Image from 'next/image'
import Link from 'next/link'
import { Sling as Hamburger } from 'hamburger-react'

const Navbar = ({ subMenu, setSubMenu, router, styles, userLog }) => (
  <header className='bg-dark'>
    <nav className='f_c' >
      <div className={`f_c ${styles.head}`}>
        <Image
          src={'/images/MajinFace.png'}
          alt="Majin-Music Logo"
          width={50}
          height={65}
          priority
        />
        <Link href={userLog? '/' : '/ingresar'} >
          <h2>[ Majin - Music ]</h2>
        </Link>
      </div>

{
  userLog &&
    <>
      <ul id='nav' className={`f_c ${styles.nav_items}`}>
        <li className={styles.nav_links}>
          <Link href={''} role='button' scroll={false}
            className={`${styles.link} ${subMenu ? styles.sub_active : ''}`}
            onClick={() => setSubMenu(!subMenu)}>
            Categorias
          </Link>
          <ul className={`f_c ${styles.sub_menu} ${subMenu ? styles.category_on : styles.category_off}`}>
            <li className={`f_c ${styles.menu_categorias}`}>
              <Link href={'/categoria/rock'}
                className={`${styles.sub_link} ${router.pathname == '/categoria/rock' ? styles.link_active : ''}`}>
                Rock</Link>
              <Link href={'/categoria/rock-nacional'}
                className={`${styles.sub_link} ${router.pathname == '/categoria/rock-nacional' ? styles.link_active : ''}`}>
                Rock Nacional</Link>
              <Link href={'/categoria/reggae'}
                className={`${styles.sub_link} ${router.pathname == '/categoria/reggae' ? styles.link_active : ''}`}>
                Reggae</Link>
              <Link href={'/categoria/otros'}
                className={`${styles.sub_link} ${router.pathname == '/categoria/otros' ? styles.link_active : ''}`}>
                Otros...</Link>
            </li>
          </ul>
          <Link href={'/listas'}
            className={`${styles.link} ${router.pathname == '/listas' ? styles.link_active : ''}`}>
            Listas</Link>
          <Link href={'/artistas'}
            className={`${styles.link} ${router.pathname == '/artistas' ? styles.link_active : ''}`}>
            Artistas</Link>
          <Link href={'/contacto'}
            className={`${styles.link} ${router.pathname == '/contacto' ? styles.link_active : ''}`}>
            Contacto</Link>
        </li>
      </ul>

      <div className={styles.btn_burger}>
        <Hamburger
          color="yellow"
          onToggle={toggled => {
            const nav = document.getElementById('nav')
            toggled ? nav.classList.add(styles.nav_active) : nav.classList.remove(styles.nav_active)
          }} />
      </div>
      </>
}

    </nav>
  </header>
)

export default Navbar

