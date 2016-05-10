import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'

class Navbar extends Component {
  renderLinks() {
    const styles = require('./Navbar.scss')

    if (this.props.authenticated) {
      // sign a link to sign out
      return [
        <li className={styles.nav_li}>
          <Link className="nav-link" to="/signout">Sign Out</Link>
        </li>
      ]
    }
    else {
      return [
        <div className={styles.nav_li} key={1}>
          <Link className="nav-link" to="/">Home</Link>
        </div>,
        <div className={styles.nav_li} key={2}>
          <Link className="nav-link" to="/">Work</Link>
        </div>,
        <div className={styles.nav_li} key={3}>
          <Link className="nav-link" to="/">About</Link>
        </div>,
        <div className={styles.nav_li} key={4}>
          <Link className="nav-link" to="/">Contact</Link>
        </div>
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
    const styles = require('./Navbar.scss')

    return (
      <nav className={styles.nav_wrap}>
        {this.renderLinks()}
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
