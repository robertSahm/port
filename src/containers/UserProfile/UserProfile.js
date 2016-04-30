import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'

class UserProfile extends Component {
  componentWillMount() {
    this.props.fetchMessage()
  }

  render() {
    return (
      <div>
        <h1 className="page-header">Please Sign In!</h1>
        <div className="well well-lg">
          <p>{this.props.message}</p>
          </div>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return { message: state.auth.message }
}

export default connect(mapStateToProps, actions)(UserProfile)
