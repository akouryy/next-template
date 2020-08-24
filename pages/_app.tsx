import { AppProps } from 'next/app'
import React from 'react'
import 'modern-normalize'
import '../styles/all.sass'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}
