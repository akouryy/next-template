import Head from 'next/head'
import React from 'react'

interface P {
  title?: string
}

const TitleBase = 'my-template'

export const BasePage: React.FC<P> = ({ children, title }) => {
  return (
    <div className='BasePage'>
      <Head>
        <title>{title ? `${title} - ${TitleBase}` : TitleBase}</title>
      </Head>

      <header className='BasePage-Header'>
        <h1>{title ?? TitleBase}</h1>
      </header>

      <main className='BasePage-Main'>
        {children}
      </main>

      <footer className='BasePage-Footer'>
        <div className='BasePage-FooterCopyright'>
          {'(C) '}
          <a href='https://akouryy.net'>akouryy</a>
          {' 2021'}
        </div>
      </footer>
    </div>
  )
}
