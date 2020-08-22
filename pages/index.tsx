import Head from 'next/head'
import React from 'react'
import { NoChild } from '../lib/NoChild'

const PageIndex: React.FC<NoChild> = () => {
  return (
    <div>
      <Head>
        <title>my-template</title>
      </Head>

      <header>
        <h1>my-template</h1>
      </header>

      <main>
        Hello, world!
      </main>

      <footer>
        &copy;
        {' '}
        <a href='https://akouryy.net'>akouryy</a>
        {' '}
        2020
      </footer>
    </div>
  )
}

export default PageIndex
