import React from 'react'

import { AuthProps, PreAuth } from '../components/PreAuth'
import { Container } from '../styles/pages/Home'

function Dashboard(props: AuthProps) {
  return (
    <Container>
      <h1>Dashboard</h1>
      <p>O usuário está logado? {props.auth ? 'Sim' : 'Não'}</p>
    </Container>
  )
}

export default PreAuth(Dashboard)
