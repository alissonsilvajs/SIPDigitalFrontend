import Cookie from 'js-cookie'
import Router from 'next/router'

import { LoginInputs } from '../components/Login'
import { catchAxiosError } from './error'
import { post } from './api'

export const COOKIES = {
  authToken: 'myApp.authToken'
}

export async function login(inputs: LoginInputs): Promise<string | void> {
  const res: any = await post('/session', inputs).catch(catchAxiosError)

  if (res.error) return res.error
  else if (!res.data || !res.data.token) {
    return 'Ocorreu algum erro, por favor tente novamente!'
  } else {
    const { token } = res.data

    Cookie.set(COOKIES.authToken, token)
    await Router.push('/dashboard')
  }
}
