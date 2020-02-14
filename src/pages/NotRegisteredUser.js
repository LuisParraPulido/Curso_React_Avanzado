import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => {
        return (
          <>
            <RegisterMutation>
              {
                (register, { error, data, loading }) => {
                  const onSubmit = ({ email, password }) => {
                    const input = { email, password }
                    const variables = { input }
                    register({ variables }).then(activateAuth)
                  }

                  const errorMsg = error && 'El usuario ya exite o hay algún problema'

                  return <UserForm disabled={loading} error={errorMsg} title='Registrarse' onSubmit={onSubmit} />
                }
              }
            </RegisterMutation>

            <LoginMutation>
              {
                (login, { error, data, loading }) => {
                  const onSubmit = ({ email, password }) => {
                    const input = { email, password }
                    const variables = { input }
                    login({ variables }).then(activateAuth)
                  }

                  const errorMsg = error && 'La contraseña es incorrecta o el usuario no existe'

                  return <UserForm disabled={loading} error={errorMsg} title='Iniciar sesión' onSubmit={onSubmit} />
                }
              }
            </LoginMutation>
          </>
        )
      }
    }
  </Context.Consumer>
)
