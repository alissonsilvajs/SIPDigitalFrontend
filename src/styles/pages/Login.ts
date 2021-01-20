import styled, { css } from 'styled-components'

import { Row as BaseRow, Col as BaseCol } from 'react-bootstrap'

export const Wrapper = styled(BaseRow)`
  margin: 0 !important;

  display: flex;
  align-items: center;
`

export const Col = css`
  position: relative;
  height: 100vh;
  padding: 40px 100px;

  @media (max-width: 960px) {
    padding: 10px 30px;
    p {
      margin-top: 1em;
    }
  }

  @media (max-height: 750px) {
    height: 750px;
  }
`

export const ContentLeft = styled(BaseCol)`
  ${Col};
  background: url('https://media.glassdoor.com/l/51/47/2c/87/our-amazing-dev-team.jpg')
    no-repeat;
  background-size: cover;
  background-position: center;

  &::before {
    position: absolute;
    z-index: 1;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: #000;
    opacity: 15%;
  }

  @media (max-width: 1152px) {
    display: none;
  }
`

export const ContentRight = styled(BaseCol)`
  ${Col};

  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  @media (max-width: 960px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-height: 750px) {
    margin-bottom: 15px;
  }
`

export const Logo = styled.h2`
  &.right {
    display: none;
  }

  @media (max-width: 960px) {
    &.right {
      display: block;
    }
  }
`

export const Link = styled.a`
  font-size: 1.3em;
  font-weight: 500;
  text-decoration: none;
  color: ${props => props.theme.colors.white};
  transition: 0.3s all;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }

  @media (max-width: 1440px) {
    font-size: 1em;
  }

  &:last-child {
    margin-right: 0;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;

  & span {
    position: absolute;
    left: 20px;
    top: 20px;

    color: ${props => props.theme.colors.white};

    pointer-events: none;
    transition: 0.2s ease all;
  }
`

export const Texts = styled.div`
  margin-bottom: 2em;

  h1 {
    font-weight: 700;
    margin-bottom: 0.5em;
  }

  h5 {
    font-weight: 400;
    margin-bottom: 0;
  }

  @media (max-width: 1152px) {
    h1,
    h5 {
      font-size: 1.3em;
    }
  }

  @media (min-width: 1152px) {
    h1,
    h5 {
      font-size: 1.5em;
    }
  }
`

export const Input = styled.div`
  position: relative;
  transition: 0.3s all;
  margin: 1em 0;

  & input {
    width: 100%;
    padding: 20px;

    background-color: transparent;
    color: ${props => props.theme.colors.white};

    // Reset
    outline: none;
    border: none;
    border-radius: 0px;
    box-shadow: none;

    font-size: 1em;
    border-bottom: 5px solid;
    border-color: ${props => props.theme.colors.white};

    &:focus,
    &:required:valid {
      border-color: ${props => props.theme.colors.primary};
    }
  }

  input:focus ~ span,
  input:valid ~ span {
    top: -10px;
    bottom: 0px;
    left: 10px;
    font-size: 0.9em;
    opacity: 1;
    color: ${props => props.theme.colors.primary};
  }
`

export const Button = styled.button`
  padding: 20px 10px;
  width: 200px;
  text-align: center;
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.primary} !important;
  transition: 0.3s all;

  box-shadow: none;
  border: none;
  border-radius: 0;

  &:hover {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white} !important;
  }

  @media (max-width: 960px) {
    .input-field input {
      width: 100%;
    }
  }
`

export const Footer = styled.p`
  position: absolute;
  bottom: 40px;
  font-weight: 300;
  letter-spacing: 0.5px;
  font-size: 1.15em;
`
