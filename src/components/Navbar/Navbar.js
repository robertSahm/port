import React, { Component } from 'react';
import { connect } from 'react-redux'
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'
import ReactFitText from 'react-fittext'
import NavbarBS from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import styles from './Navbar.scss'
import Mailto from 'react-mailto'

class Navbar extends Component {
  constructor( props ) {
    super( props )

    this.state = {
      activeTab: 1
    }
  }

  handleSelect = (eventKey) => {
    event.preventDefault();
    const setActiveTab = eventKey

    this.setState({
      activeTab: setActiveTab
    })
  }

  render() {
    const {
      activeTab
    } = this.state

    console.log(this.state.activeTab)
    return (
      <NavbarBS className={styles.nav_wrap}>
        <Nav bsStyle="tabs" activeKey={this.state.activeTab} onSelect={this.handleSelect}>
          <IndexLinkContainer to="/">
            <NavItem eventKey={1}>Home</NavItem>
          </IndexLinkContainer>
          <NavDropdown eventKey={2} title="Work" id="nav-dropdown">
            <LinkContainer to="/lucera">
              <MenuItem eventKey="2.1">Lucera Financial Infrastructures</MenuItem>
            </LinkContainer>
            <LinkContainer to="/alpine">
              <MenuItem eventKey="2.2">Alpine Labs</MenuItem>
            </LinkContainer>
            <LinkContainer to="/carol">
              <MenuItem eventKey="2.3">Carol Beehler Graphic Design</MenuItem>
            </LinkContainer>
          </NavDropdown>
          <LinkContainer to="/about">
            <NavItem eventKey={3} title="About">About</NavItem>
          </LinkContainer>
          <li className={styles.mailto_wrap}>
            <Mailto email="r@robertsahm.com" obfuscate={true}>
              Email me
            </Mailto>
          </li>
          <li className={styles.resume_wrap}>
            <a href="/resume">Resume</a>
          </li>
        </Nav>
      </NavbarBS>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps)(Navbar)
