import React from 'react'
import styled from 'styled-components'
// Material-UI
import { Button, Grid, TextField } from '@material-ui/core'
// Custom
import { Form, Container } from "./styles"
// Others
// import * as colors from '../../constants/colors'
import instaceCreator from '../../../core/instanceCreator'
import Logo from '../../../static/images/otb.png'

const SignInForm = ({ action, handle }) => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState(null)

  const api = instaceCreator()

  const handleSubmit = async event => {
    event.preventDefault()

    if (!email || !password) {
      setError('Preencha todos os dados para se cadastrar!')
    } else {
      try {
        setError(null)

        await api.post("/sessions", { email, password })
        this.props.history.push("/")
      } catch (err) {
        console.log(err)
      }
    }
  }

  return(
    <Form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <img src={Logo} alt="Over The Rainbow logo" />
        </Grid>

        {error && <p>{error}</p>}
  
        <Grid item xs={12}>
          <input
            type="email"
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
          />
        </Grid>

        <Grid item xs={12}>
          <input
            type="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />
        </Grid>

        <Grid item xs={12}>
          <button type="submit">{action}</button>
        </Grid>

        <Grid item xs={12}>
          <a href='' onClick={e => e.preventDefault() || handle()}>
            Já tenho uma conta, Entrar.
          </a>
        </Grid>
      </Grid>
    </Form>
  )
}

export default SignInForm