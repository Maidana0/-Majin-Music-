import '<@FMaidana07>/styles/globals.css'
import ContextProvider from '<@FMaidana07>/components/context'
import { Layout } from '<@FMaidana07>/components/layout/Layout'


export default function App({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  )
}
