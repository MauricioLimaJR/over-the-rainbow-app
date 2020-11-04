import React from 'react'
import PropTypes from "prop-types"
import { withRouter } from "react-router-dom"
import * as auth from '../../../lib/auth'

const WithAuth = (WrappedComponent) => {
  class Authenticate extends React.Component {
    static propTypes = {
      history: PropTypes.object.isRequired
    }

    componentDidMount() {
    }

    componentDidUpdate() {
    }

    render() {
      const { history } = this.props
      const token = auth.getToken()
      
      if (token) history.push('/dashboard')
      return (<WrappedComponent />)
    }
  }

  return withRouter(Authenticate)
}

export default WithAuth