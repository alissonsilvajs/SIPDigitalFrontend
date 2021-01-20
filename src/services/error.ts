import { AxiosError } from 'axios'

export type ErrorResponse = {
  error: string
}

export function catchAxiosError(err: AxiosError): ErrorResponse {
  let message =
    'Algo aconteceu na configuração da solicitação que acionou um erro'

  if (err.response) {
    message = err.response.data.message
  } else if (err.request) {
    message = 'A requisição foi feita ao servidor, mas sem retorno do mesmo.'
  }
  return { error: message }
}
