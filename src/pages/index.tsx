import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Teste</title>
      </Head>

      <h1>Hello World</h1>
      <p>This is a template!</p>
    </Container>
  )
}

export default Home
