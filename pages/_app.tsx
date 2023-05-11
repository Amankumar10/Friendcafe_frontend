// import '@/styles/globals.css'
// import type { AppProps } from 'next/app'

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }



import {SessionProvider} from "next-auth/react";
import { useRouter } from 'next/router'

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {store} from '@/store/store'
import { ChakraProvider } from "@chakra-ui/react";
import {Provider} from 'react-redux'
import Header from '../components/Header'
import { ReactNode } from 'react';


interface IProps {
  children : ReactNode;
  session : any;
}
function MyApp({ Component, pageProps}: AppProps) {
  const router = useRouter()
  return (
<SessionProvider session={pageProps.session} >
    <Provider store={store}>
      <ChakraProvider>


      <Header/>
     <Component {...pageProps} />
      </ChakraProvider>
     </Provider>
     </SessionProvider>
  )
}

export default MyApp





