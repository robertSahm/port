import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styles from './Contact.scss'

class Contact extends Component {
  render() {
    return (
      <div className={styles.content}>
        <Helmet title="Contact"/>
        <div className={styles.contact_wrap}>
          <h1>Contact</h1>
        </div>
      </div>
    );
  }
}

export default Contact
