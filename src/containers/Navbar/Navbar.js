import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'

class Navbar extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      // sign a link to sign out
      return [
        <li className="nav-item">
          <Link className="nav-link" to="/signout">Sign Out</Link>
        </li>
      ]
    }
    else {
      return [
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>,
        <li className="nav-item">
          <Link className="nav-link" to="/">Work</Link>
        </li>,
        <li className="nav-item">
          <Link className="nav-link" to="/">About</Link>
        </li>,
        <li className="nav-item">
          <Link className="nav-link" to="/">Contact</Link>
        </li>
        // <li className="nav-item" key={1}>
        //   <Link className="nav-link" to="/signin">Sign In</Link>
        // </li>,
        // <li className="nav-item" key={2}>
        //   <Link className="nav-link" to="/signup">Sign Up</Link>
        // </li>
      ]
    }
  }

  render() {
    return (
      <nav className="navbar">
        <ul className="nav navbar-nav">
          {this.renderLinks()}
        </ul>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps)(Navbar)
