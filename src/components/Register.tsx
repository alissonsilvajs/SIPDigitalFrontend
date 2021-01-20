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
} from '../styles/pages/Register'
import Toastify from 'toastify-js'

// Auth
import { register } from '../services/register'

export type LoginInputs = {
  name: string
  email: string
  password: string
  confirmPassword: string
}

const Registro: React.FC = () => {
  const initialValues: LoginInputs = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
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
    const res = await register(inputs)

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
        text: 'O usuário foi cadastrado com sucesso!',
        backgroundColor: '#1CC8EE'
      }).showToast()
    }
  }

  return (
    <Wrapper>
      <ContentLeft>
        <Header>
          <Logo>Sip digital</Logo>
        </Header>
        <Form onSubmit={handleSubmit}>
          <Texts>
            <h1>Criar uma nova conta</h1>
            <h5>Já possui uma conta?</h5>
            <Link href="/">Clique aqui</Link>
          </Texts>
          <Input>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleInputChange}
              value={inputs.name}
              required
            />
            <span>Nome</span>
          </Input>
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
          <Input>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              onChange={handleInputChange}
              value={inputs.confirmPassword}
              required
            />
            <span>Confirme a senha</span>
          </Input>
          <Button>Criar agora</Button>
        </Form>
        <Footer>
          <p>© Logo 2020 - Todos os direitos reservados</p>
        </Footer>
      </ContentLeft>
      <ContentRight />
    </Wrapper>
  )
}

export default Registro
