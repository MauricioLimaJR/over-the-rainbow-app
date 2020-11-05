import React from 'react'
import { compose, bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// Material-UI
import { Grid } from '@material-ui/core'
// Custom components
import { Form } from "./styles"
import { operations as userOperations } from '../../../ducks/user'
// Others
import Logo from '../../../static/images/otb.png'

const SignUpForm = ({
  action,
  handle,
  onSubmit,
  userActions
}) => {
  const [firstname, setFirstname] = React.useState('')
  const [lastname, setLastname] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState(null)

  const handleSubmit = async event => {
    event.preventDefault()

    if (!firstname || !lastname || !email || !password) {
      setError('Preencha todos os dados para se cadastrar!')
    } else {
      try {
        setError(null)

        const data = { firstname, lastname, email, password }
        await userActions.registerUser(data)

        onSubmit()
      } catch (err) {
        console.log(err)
      }
    }
  }

  return(
    <Form onSubmit={handleSubmit}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <img src={Logo} alt="Over The Rainbow logo" />
        </Grid>

        {error && <p>{error}</p>}
  
        <Grid item xs={12}>
          <input
            type="firstname"
            placeholder="Nome"
            onChange={e => setFirstname(e.target.value)}
          />
        </Grid>
        
        <Grid item xs={12}>
          <input
            type="lastname"
            placeholder="Sobrenome"
            onChange={e => setLastname(e.target.value)}
          />
        </Grid>
  
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
            placeholder="Senha"
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

const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators(userOperations, dispatch),
})

export default compose(
  connect(null, mapDispatchToProps)
)(SignUpForm)