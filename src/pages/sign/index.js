import React from 'react'
import styled from 'styled-components'
import { useHistory } from "react-router-dom"
// Material-UI
import { Grid } from '@material-ui/core'
// Custom Components
import SignInForm from './components/SignInForm'
import SignUpForm from './components/SignUpForm'
import withNoAuth from '../components/hocs/withNoAuth'
// Others
import * as colors from '../../constants/colors'

const MainGrid = styled(Grid)`
  margin: 1rem;
  padding: 1rem 1rem;
  max-width: 450px;
  background-color: ${colors.white};
  box-shadow: 0 8px 16px 0 ${colors.kimberlyGray};
`

const Sign = () => {
  const [login, setLogin] = React.useState(true)
  const btnTexts = {
    signup: 'Criar Conta',
    signin: 'Entrar'
  }

  const history = useHistory()
  const onSubmit = () => history.push('/dashboard')

  return (
    <MainGrid container justify='center' direction='row'>
    {
      login
        ? <SignInForm
            action={btnTexts.signin}
            handle={() => setLogin(false)}
            onSubmit={onSubmit}
          />
        : <SignUpForm
            action={btnTexts.signin}
            handle={() => setLogin(true)}
            onSubmit={onSubmit}
          />
    }
    </MainGrid>
  )
}

export default withNoAuth(Sign)
