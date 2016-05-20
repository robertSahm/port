import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styles from './About.scss'

class About extends Component {
  render() {
    return (
      <div className={styles.content}>
        <Helmet title="About"/>
        <div className={styles.about_wrap}>
          <h1>About</h1>
        </div>
      </div>
    );
  }
}

export default About
