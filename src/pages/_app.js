import { useEffect } from 'react'
import '../styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'
// Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/js/dist/modal'
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '../redux/store'

function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
  // }, [])
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
            crossOrigin="anonymous"
          />
        </Head>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
          crossorigin="anonymous" />
        <Component {...pageProps} />
      </PersistGate>
    </ReduxProvider>
  )
}

export default MyApp
