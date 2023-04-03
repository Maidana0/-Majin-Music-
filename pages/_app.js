import '<@FMaidana07>/styles/globals.css'
import { Layout } from '<@FMaidana07>/components/layout/Layout'
import ContextProvider from '<@FMaidana07>/components/context'


export default function App({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  )
}
