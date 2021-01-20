import Router from 'next/router'

import { LoginInputs } from '../components/Login'
import { catchAxiosError } from './error'
import { post } from './api'

export async function register(inputs: LoginInputs): Promise<string | void> {
  const res: any = await post('/user/store', inputs).catch(catchAxiosError)

  console.log(res)

  if (res.error) return res.error
  else if (!res.data) {
    return 'Ocorreu algum erro, por favor tente novamente!'
  } else {
    await Router.push('/')
  }
}
