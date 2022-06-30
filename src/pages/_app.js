import '../styles/globals.css'
import Head from 'next/head'
// Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '../redux/store'

function MyApp({ Component, pageProps }) {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </PersistGate>
    </ReduxProvider>
  )
}

export default MyApp
