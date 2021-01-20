import React, { Component } from 'react'

import ServerCookie from 'next-cookies'
import { COOKIES } from '../services/login'
import { AuthToken } from '../services/token'

export type AuthProps = {
  auth: AuthToken
}

export function PreAuth(WrappedComponent: any) {
  return class Auth extends Component<AuthProps> {
    static async getInitialProps(ctx: any) {
      const token = ServerCookie(ctx)[COOKIES.authToken]
      const auth = new AuthToken(token)
      const initialProps = { auth }

      if (auth.isExpired) {
        ctx.res.writeHead(302, {
          Location: '/'
        })
        ctx.res.end()
      }

      if (WrappedComponent.getInitialProps) {
        return WrappedComponent.getInitialProps(initialProps)
      }

      return initialProps
    }

    get auth() {
      return new AuthToken(this.props.auth.token)
    }

    render() {
      return <WrappedComponent auth={this.auth} {...this.props} />
    }
  }
}
