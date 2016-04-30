import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import * as actions from '../../actions'

class Signin extends Component {
  handleFormSubmit({ email, password }) {
    console.log(email, password)
    // need to do something to log user in
    this.props.signinUser({ email, password })
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      )
    }
  }

  render() {
    const { handleSubmit, fields: {email, password}} = this.props

    return (
      <div>
        <h1 className="page-header">Please Sign In!</h1>
        <div className="well well-lg">
          <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <fieldset className="form-group">
              <label>Email</label>
              <input {...email} className="form-control" />
            </fieldset>
            <fieldset className="form-group">
              <label>Password</label>
              <input {...password} type="password" className="form-control" />
            </fieldset>
            {this.renderAlert()}
            <button action="submit" className="btn btn-primary btn-lg">Sign in</button>
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error }
}

// helper
export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
}, mapStateToProps, actions)(Signin)
