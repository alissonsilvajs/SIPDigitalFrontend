import React from 'react'

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

const Login = () => {
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
        <Form>
          <Texts>
            <h1>Acessar minha conta</h1>
            <h5>É novo e não possui uma conta?</h5>
            <Link href="/registrar.html">Clique aqui</Link>
          </Texts>
          <Input>
            <input type="email" id="email" required />
            <span>E-mail</span>
          </Input>
          <Input>
            <input type="password" id="password" required />
            <span>Senha</span>
          </Input>
          <Button>Entrar</Button>
        </Form>
      </ContentRight>
    </Wrapper>
  )
}

export default Login
