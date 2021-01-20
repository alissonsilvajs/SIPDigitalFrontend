import React from 'react'

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

const Registro: React.FC = () => {
  return (
    <Wrapper>
      <ContentLeft>
        <Header>
          <Logo>Sip digital</Logo>
        </Header>
        <Form>
          <Texts>
            <h1>Criar uma nova conta</h1>
            <h5>Já possui uma conta?</h5>
            <Link href="/">Clique aqui</Link>
          </Texts>
          <Input>
            <input type="text" id="name" name="name" required />
            <span>Nome</span>
          </Input>
          <Input>
            <input type="email" id="email" name="email" required />
            <span>E-mail</span>
          </Input>
          <Input>
            <input type="password" id="password" name="password" required />
            <span>Senha</span>
          </Input>
          <Input>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
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
