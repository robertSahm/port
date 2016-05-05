import React, { Component } from 'react';
import { Link } from 'react-router'

class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <h1>Hello, world!</h1>
        <p className="lead">This is the Hero</p>
        <p><Link className="btn btn-primary btn-lg" to="/" role="button">Learn more</Link></p>
      </div>
    )
  }
}

export default Hero
