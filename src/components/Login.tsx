import React, { useState } from 'react'

// Components
import {
  Button,
  ContentLeft,
  ContentRight,
  Footer,
  Form,
  Header,
  Link,
  Input,
  Logo,
  Texts,
  Wrapper
} from '../styles/pages/Login'
import Toastify from 'toastify-js'

// Auth
import { login } from '../services/login'

export type LoginInputs = {
  email: string
  password: string
}

const Login: React.FC = () => {
  const initialValues: LoginInputs = { email: '', password: '' }
  const [inputs, setInputs] = useState(initialValues)

  const handleInputChange = (e: React.ChangeEvent<any>) => {
    e.persist()
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const res = await login(inputs)

    const configToast = {
      duration: 4000,
      newWindow: false,
      gravity: 'bottom',
      close: true,
      position: 'left',
      stopOnFocus: true
    }

    if (res) {
      Toastify({
        ...configToast,
        text: res,
        backgroundColor: '#ED2E7E'
      }).showToast()
    } else {
      Toastify({
        ...configToast,
        text: 'O usuário foi autenticado com sucesso!',
        backgroundColor: '#1CC8EE'
      }).showToast()
    }
  }

  return (
    <Wrapper>
      <ContentLeft>
        <Header>
          <Logo>Sip Digital</Logo>
        </Header>
        <Footer>© Logo 2020 - Todos os direitos reservados</Footer>
      </ContentLeft>
      <ContentRight>
        <Header>
          <Logo className="right">Sip Digital</Logo>
        </Header>
        <Form onSubmit={handleSubmit}>
          <Texts>
            <h1>Acessar minha conta</h1>
            <h5>É novo e não possui uma conta?</h5>
            <Link href="/registrar.html">Clique aqui</Link>
          </Texts>
          <Input>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleInputChange}
              value={inputs.email}
              required
            />
            <span>E-mail</span>
          </Input>
          <Input>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleInputChange}
              value={inputs.password}
              required
            />
            <span>Senha</span>
          </Input>
          <Button>Entrar</Button>
        </Form>
      </ContentRight>
    </Wrapper>
  )
}

export default Login
