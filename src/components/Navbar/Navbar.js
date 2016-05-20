import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'
import ReactFitText from 'react-fittext'
import styles from './Navbar.scss'

class Navbar extends Component {
  renderLinks() {
    return (
      <nav className={styles.nav_wrap}>
        <div className={styles.nav_item} key={1}>
          <Link className="nav-link" to="/">Home</Link>
        </div>
        <div className={styles.nav_item} key={2}>
          <Link className="nav-link" to="work">Work</Link>
        </div>
        <div className={styles.nav_item} key={3}>
          <Link className="nav-link" to="about">About</Link>
        </div>
        <div className={styles.nav_item} key={4}>
          <Link className="nav-link" to="contact">Contact</Link>
        </div>
      </nav>
    )
  }

  render() {
    return (
      <div>
        {this.renderLinks()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps)(Navbar)
