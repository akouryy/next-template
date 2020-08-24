import React from 'react'
import { BasePage } from '../components/BasePage'
import { NoChild } from '../lib/NoChild'

const PageIndex: React.FC<NoChild> = () => {
  return (
    <BasePage>
      Hello, world!
    </BasePage>
  )
}

export default PageIndex
