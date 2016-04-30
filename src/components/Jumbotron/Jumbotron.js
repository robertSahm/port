import React, { Component } from 'react';
import { Link } from 'react-router'

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Hello, world!</h1>
        <p className="lead">This is the JUMBOTRON</p>
        <p><Link className="btn btn-primary btn-lg" to="/" role="button">Learn more</Link></p>
      </div>
    )
  }
}

export default Jumbotron
