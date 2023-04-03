import Head from 'next/head'
import Container from '<@FMaidana07>/components/Container'
import Image from 'next/image'
import styles from '<@FMaidana07>/styles/Form.module.css'
import { useState, useContext } from 'react'
import { LogContext } from '<@FMaidana07>/components/context'

export default function Home() {
  const { log, login, router } = useContext(LogContext)
  const [inputName, setInputName] = useState()

  const handleSubmit = (e) => {
    e.preventDefault();
    login(inputName);
    localStorage.setItem('user', inputName);
    router.push('/')
  }
  return (
    <>
      <Head>
        <title>Ingresar [Majin-Music]</title>
      </Head>

      {
        !log ?
          <Container>
            <Image
              src={'/images/waiting.webp'}
              width={300}
              height={250}
              alt={'Majin-Boo...'}
              priority
            />
            <form className={styles.form}
              onSubmit={handleSubmit}>
              <input
                className={styles.input}
                name='name'
                onChange={(e) => setInputName(e.target.value)}
                type='text'
                autoComplete='off' required
                maxLength={15}
                placeholder='Ingrese su nombre' />
              <input
                className={styles.submit}
                type='submit'
                value='OK'
              />
            </form>
          </Container>
          :
          <Container>
            <h2>Usted ya esta Logueado</h2>
            <h3  className='sub-title'>{log}, esperamos que disfrute del sitio web!!</h3>
            <Image
              src={'/images/kidboo.png'}
              width={130}
              height={349}
              alt={'Kid-Boo'}
            />

          </Container>
      }

    </>
  )
}
